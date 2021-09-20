import React, { FunctionComponent } from 'react'
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form'
import {
  ButtonFormProps,
  Classes,
  Components,
  Input,
  InputFormProps,
  Item
} from '../../types'
import FormInput from './FormInput'
import FormLayout, { LayoutProps } from './FormLayout'
import SelectInput from '../formComponents/SelectInput'
import TextInput from '../formComponents/TextInput'
import Checkbox from '../formComponents/Checkbox'
import Button from '../formComponents/Button'
import TextArea from '../formComponents/TextArea'
import RadioButton from '../formComponents/RadioButton'
import Title from '../formComponents/Title'
import DatePicker from '../formComponents/DatePicker'
import classNames from 'classnames'

const mapFormInput = {
  TextInput,
  SelectInput,
  Checkbox,
  Button,
  TextArea,
  RadioButton,
  Title,
  DatePicker
}

interface Props {
  onSubmit?: (values: any) => void
  inputs: Item[] | null
  layout?: [number, number]
  form?: UseFormReturn<FieldValues>
  onButtonClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => void
  onInputChange?: (checked: boolean | number | string, name: string) => void
  validationMode?: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all'
  layoutComponent?: FunctionComponent<any>
  components?: Components
  classes?: Classes
  // neccessary repetable form
  fields?: Record<'id', string>[]
  formName?: string
}

const Form = ({
  inputs,
  onSubmit,
  layout = [3, 7],
  form,
  onInputChange,
  onButtonClick,
  layoutComponent,
  components = {},
  formName,
  fields,
  classes
}: Props) => {
  const _form = form || useForm({ mode: 'onBlur' })
  const { watch, handleSubmit } = _form

  const getInputPropsForRepeatableForm = (
    name: string,
    formIndex: number,
    formField?: Record<'id', string>
  ) => {
    // if it's not repeatableForm
    if (!formField) {
      return {}
    }
    return {
      name: `${formName}.${formIndex}.${name}`,
      defaultValue: (formField as any).value
    }
  }

  if (inputs == null) {
    return null
  }

  const watchers: { [key: string]: any } = {}

  const Layout = (props: LayoutProps) =>
    layoutComponent ? (
      React.createElement(layoutComponent, { ...props })
    ) : (
      <FormLayout {...props} />
    )

  // IT SETS WATCHERS FOR CONDITINAL RENDER
  inputs.map((input) => {
    if (input.conditionalChildrenRender && input.name) {
      watchers[input.name] = watch(input.name)
    }
  })

  const renderInput = (
    input: Item,
    formIndex: number,
    formField?: Record<'id', string>
  ) => {
    const component = input.component
      ? components[input.component] || mapFormInput[input.component]
      : null;

    return (
      <Layout layout={layout} label={input.label} unit={input.unit} key={`${input.name}_layout`}>
        <FormInput
          onInputChange={onInputChange}
          onButtonClick={onButtonClick}
          classes={classes}
          input={{
            ...(input as Input),
            ...getInputPropsForRepeatableForm(
              input.name as string,
              formIndex,
              formField
            )
          }}
          form={_form}
        >
          {component
            ? React.createElement(
                component as React.FunctionComponent<
                  InputFormProps | ButtonFormProps
                >
              )
            : ''}
        </FormInput>
      </Layout>
    )
  }

  const renderChildren = (
    inputs: Item[],
    formIndex: number,
    formField?: Record<'id', string>
  ) => {
    const sortedInputs = inputs.sort(
      (i1, i2) => (i1.order || 0) - (i2.order || 0)
    )
    return sortedInputs.map((item, index) => {
      // FOR CONDITIONAL RENDER
      if (item.children && item.conditionalChildrenRender) {
        return (
          <React.Fragment key={`${item.name}${item.label}_${index}`}>
            {renderInput(item as Input, formIndex, formField)}
            {watchers[(item as Input).name as string]
              ? renderChildren(item.children, formIndex, formField)
              : null}
          </React.Fragment>
        )
      }

      // FOR DIV WRAPPERS WITH INNER CHILDRENS
      if (item.children) {
        const sortedInputs = item.children.sort(
          (i1, i2) => (i1.order || 0) - (i2.order || 0)
        )
        return (
          <div
            className={classNames(
              'jtrf-children-wrapper',
              classes?.childrenWrapper
            )}
            key={`form-${index}`}
            style={{ justifyContent: item.align || 'space-between' }}
          >
            {sortedInputs.map((i) => (
              <div
                className='jtrf-children-wrapper__child'
                key={`form-child-${i.name}${i.label}`}
              >
                {renderChildren([i], formIndex, formField)}
              </div>
            ))}
          </div>
        )
      }

      // RENDER CASUAL INPUT WITHOUT CHILDRENS
      return renderInput(item as Input, formIndex, formField)
    })
  }

  return (
    <div className='jtrf-form-container'>
      <form onSubmit={onSubmit && handleSubmit(onSubmit)}>
        {fields
          ? fields.map((formField, index) => (
              <div key={formField.id}>
                {renderChildren(inputs, index, formField)}
              </div>
            ))
          : renderChildren(inputs, 0)}
      </form>
    </div>
  )
}

export default React.memo(Form)
