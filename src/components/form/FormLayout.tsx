import { Theme } from '@emotion/react'
import { Interpolation } from '@emotion/styled'
import React from 'react'
import { LabelPosition } from '../../types'
import Flex from '../Flex'
import Text from '../Text'

export interface LayoutProps {
  layout: [number, number]
  children: React.ReactNode
  label?: string
  labelPosition?: LabelPosition
  labelStyle?: Interpolation<Theme>
  unit?: string
}

const FormLayout = ({
  layout,
  children,
  label,
  labelStyle,
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
        return ['column', 'row']
    }
  }

  return (
    <Flex
      flex={1}
      mb={4}
      flexDirection={getFlexDirectionForLabelPosition(labelPosition)}
      alignItems='center'
    >
      <Flex
        flex={layout[0]}
        justifyContent={labelPosition === 'left' ? 'flex-end' : 'flex-start'}
        mr={labelPosition === 'left' ? 3 : 0}
        ml={labelPosition === 'right' ? 3 : 0}
      >
        {!!label && <Text css={labelStyle} textAlign="end">{label}</Text>}
      </Flex>
      <Flex flex={layout[1]}>
        {children}
        {unit && <Text css={labelStyle}>{unit}</Text>}
      </Flex>
    </Flex>
  )
}

export default React.memo(FormLayout)
