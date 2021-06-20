import * as React from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import GeneratedForm from './components/form/Form'
import { Components, Item } from './types'

export { InputFormProps, ButtonFormProps, Components } from './types'
export { LayoutProps } from './components/form/FormLayout'

interface Props {
  layout?: [number, number]
  inputs: Item[]
  fields?: Record<'id', string>[]
  onSubmit?: (value: any) => void
  components?: Components
  onButtonClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => void
  form?: UseFormReturn<FieldValues>
  layoutComponent?: React.FunctionComponent<any>
  formName?: string
  onInputChange?: (checked: boolean | number | string, name: string) => void
  validationMode?: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all'
}

const Form = ({
  layout = [3, 7],
  inputs,
  fields,
  onSubmit,
  components,
  onButtonClick,
  validationMode,
  onInputChange,
  layoutComponent,
  form,
  formName
}: Props) => {
  return (
    <GeneratedForm
      layout={layout}
      inputs={inputs}
      fields={fields}
      onSubmit={onSubmit}
      components={components}
      onButtonClick={onButtonClick}
      onInputChange={onInputChange}
      validationMode={validationMode}
      layoutComponent={layoutComponent}
      form={form}
      formName={formName}
    />
  )
}

export default Form
