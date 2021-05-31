import * as React from 'react'
import GeneratedForm from './components/form/Form'
import { CustomStyle, Item } from './types'

export { InputFormProps, ButtonFormProps } from './types'
export { LayoutProps } from './components/form/FormLayout'

interface Props {
  layout?: [number, number]
  inputs: Item[]
  customStyle?: CustomStyle
  fields?: Record<"id", string>[]
  onSubmit?: (value: any) => void
}

const Form = ({ layout = [3, 7], inputs, customStyle, fields, onSubmit }: Props) => {
  return (
    <GeneratedForm
      layout={layout}
      inputs={inputs}
      customStyle={customStyle}
      fields={fields}
      onSubmit={onSubmit}
    />
  )
}

export default Form
