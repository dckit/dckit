import React from 'react'
import {
  TextField as MuiTextField,
  InputAdornment,
  StandardTextFieldProps,
} from '@material-ui/core'
import { IFormField } from '../types'
import { useStyles } from './styles'

/*
  FormHelperTextProps={{
    classes: {
      root: classes.helperText,
      error: classes.helperTextError,
    },
  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="start" className={classes.inputSuffix}>
        {inputSuffix}
      </InputAdornment>
    ),
  }}
*/

export const TextField = (props: IFormField) => {
  const classes = useStyles()

  const handleBlur = (e: any) => {
    const { onBlur, onChange } = props
    const value = String(e.target.value || '')
    const trimValue = value.trim()

    if (value !== trimValue) {
      e.target.value = trimValue
      onChange && onChange(e)
    }
    onBlur && onBlur(e)
  }

  const { initialValue, suffix, size, ...restProps } = props

  const fieldProps: StandardTextFieldProps = {
    ...restProps,
    onBlur: handleBlur,
    FormHelperTextProps: {
      classes: {
        root: classes.helperText,
      },
    },
  }

  if (suffix) {
    fieldProps.InputProps = {
      endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
    }
  }

  return <MuiTextField {...fieldProps} />
}
