import { Option, GroupOption } from './types'

export const getSelectSelectedValue = (
  e: Option | React.ChangeEvent<HTMLSelectElement>
) => {
  // for react-select
  if ((e as Option).value) {
    return (e as Option).value
  }
  return (e as React.ChangeEvent<HTMLSelectElement>).target.value
}

export const getSelectDefaultValue = (options?: Option[] | GroupOption[], defaultValue?: number | string) => {
  let selectedValue: Option | null | undefined = null
  if (options?.length && defaultValue) {
    // if it's grouped options
    if ((options[0] as GroupOption).options) {
      ;(options as GroupOption[]).map((o) => {
        o.options.map((item) => {
          if (item.value === defaultValue) {
            selectedValue = item
          }
        })
      })
    } else {
      selectedValue = (options as Option[]).find(
        (o: Option) => o.value === defaultValue
      )
    }
  }
  return selectedValue
}

export const inputsWithController = ['SelectInput', 'DatePicker']
