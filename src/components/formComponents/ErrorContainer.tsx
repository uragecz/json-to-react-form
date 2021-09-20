import classNames from 'classnames'
import React from 'react'
import { ReactComponent as ErrorSVG } from '../../icons/error.svg'
import { Classes } from '../../types'

interface Props {
  error?: { message: string }
  classes?: Classes
}

const ErrorContainer = ({ classes, error }: Props) => {
  if (error == null) {
    return null
  }
  return (
    <div
      className={classNames(
        'jtrf-input-container__error-container',
        classes?.errorContainer
      )}
    >
      <ErrorSVG
        className={classNames(
          'jtrf-input-container__error-icon',
          classes?.errorIcon
        )}
      />
      <span
        className={classNames(
          'jtrf-input-container__error-message',
          classes?.errorMessage
        )}
      >
        {error.message}
      </span>
    </div>
  )
}

export default ErrorContainer
