import * as V from 'yup'
import { FormContext } from '@dckit/forms'

export const fields = ['login', 'password', 'nested.notes', 'nested.check']

export const fieldsConfig = {
  login: {
    label: 'Login',
    required: true,
    size: 6,
    variant: 'outlined',
    endAdornment: 'abc',
    helperText: 'Login helper text',
  },
  password: {
    label: 'Password',
    required: (form: FormContext) => Boolean(form.values.login),
    size: 6,
    variant: 'filled',
    helperText: 'use at least 6 symbols',
  },
  'nested.notes': {
    label: 'Notes',
    size: 8,
  },
  'nested.check': {
    label: 'Check',
    type: 'check',
    size: 4,
  },
}

export const validationSchema = V.object({
  login: V.string()
    .label(fieldsConfig.login.label)
    .required(),
  password: V.string()
    .label(fieldsConfig.password.label)
    .when('login', (value: string, schema: any) =>
      value ? schema.required() : schema
    ),
})
