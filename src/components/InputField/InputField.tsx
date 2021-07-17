import classNames from 'classnames'
import { Field } from 'formik'
import { ChangeEvent, FC, useState } from 'react'
import styles from './InputField.module.scss'
import PasswordHideButton from '../PasswordHideButton'
import { EInputTypes } from '../../constants/ui-elements-params'
import InputFieldError from '../InputFieldError'

interface IInputFieldProps {
  type?: EInputTypes
  name: string
  title: string
  isTouched: boolean
  error: string | null
  handleChange: (e: string | ChangeEvent<any>) => void
}

export const InputField: FC<IInputFieldProps> = ({
  type = EInputTypes.text,
  name,
  title,
  isTouched,
  error,
  handleChange,
}) => {
  const [fieldType, setFieldType] = useState<EInputTypes>(type)
  const isPassword = type === EInputTypes.password
  const isPasswordHidden = fieldType === EInputTypes.password

  const changeFieldType = () => {
    setFieldType((prevState) =>
      prevState === EInputTypes.text ? EInputTypes.password : EInputTypes.text
    )
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <InputFieldError error={error} isTouched={isTouched} />
      <Field
        name={name}
        type={fieldType}
        className={classNames(styles.field, error && isTouched && styles.field_invalid)}
        onChange={handleChange}
      />
      {isPassword && (
        <PasswordHideButton handleClick={changeFieldType} isPasswordHidden={isPasswordHidden} />
      )}
    </div>
  )
}
