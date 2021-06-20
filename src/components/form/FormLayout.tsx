import classNames from 'classnames'
import React from 'react'
import { LabelPosition } from '../../types'

import './layout.css'

export interface LayoutProps {
  layout: [number, number]
  children: React.ReactNode
  label?: string
  labelPosition?: LabelPosition
  unit?: string
}

const FormLayout = ({
  layout,
  children,
  label,
  unit,
  labelPosition = 'left'
}: LayoutProps) => {
  const getFlexDirectionForLabelPosition = (position?: LabelPosition): any => {
    switch (position) {
      case 'top':
        return 'column'
      case 'bottom':
        return 'column-reverse'
      case 'right':
        return 'row-reverse'
      default:
        return ''
    }
  }

  return (
    <div
      className={classNames('jtrf-input-layout')}
      style={{
        flexDirection: getFlexDirectionForLabelPosition(labelPosition)
      }}
    >
      <div
        className={classNames(`jtrf-input-layout__label-container`)}
        style={{
          // @ts-ignore
          '--label-flex': layout[0],
          '--label-align': labelPosition === 'left' ? 'flex-end' : 'flex-start',
          '--label-margin':
            labelPosition === 'left' ? '0 16px 0 0' : '0 0 0 16px'
        }}
      >
        {!!label && (
          <span className={classNames('jtrf-input-layout__label')}>
            {label}
          </span>
        )}
      </div>
      <div
        className={classNames(`jtrf-input-layout__input-container`)}
        style={{
          // @ts-ignore
          '--input-flex': layout[1]
        }}
      >
        {children}
        {unit && (
          <span className={classNames('jtrf-input-layout__unit')}>{unit}</span>
        )}
      </div>
    </div>
  )
}

export default React.memo(FormLayout)
