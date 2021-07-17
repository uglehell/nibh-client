import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
  username: Yup.string().max(18, 'very long username').required('cannot be empty'),
  password: Yup.string()
    .min(8, 'very short password')
    .max(32, 'very long password')
    .required('cannot be empty'),
})

export const NicknameSchema = Yup.object().shape({
  username: Yup.string().max(18, 'very long username').required('cannot be empty'),
})
