import * as React from 'react'
import GeneratedForm from './components/form/Form'
import { Item } from './types'

export { InputFormProps, ButtonFormProps } from './types'
export { LayoutProps } from './components/form/FormLayout'

interface Props {
  layout?: [number, number]
  inputs: Item[]
  fields?: Record<"id", string>[]
  onSubmit?: (value: any) => void
}

const Form = ({ layout = [3, 7], inputs, fields, onSubmit }: Props) => {
  return (
    <GeneratedForm
      layout={layout}
      inputs={inputs}
      fields={fields}
      onSubmit={onSubmit}
    />
  )
}

export default Form
