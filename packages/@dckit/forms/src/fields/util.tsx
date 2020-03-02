import React from 'react'
import { useFormControl } from '@material-ui/core'

export const FocusDiv = React.forwardRef(function FocusDiv(
  props: any,
  ref: any
) {
  const formControl = useFormControl()
  return <div {...props} tabIndex={0} onBlur={formControl.onBlur} ref={ref} />
})

export function toggle(options: any[], selected: any[], value: any) {
  const set = new Set(selected)
  set.has(value) ? set.delete(value) : set.add(value)
  return options.filter((el: any) => set.has(el))
}