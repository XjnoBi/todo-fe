import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Flexbox, TextInput } from 'components'
import { Todo } from 'hooks/use-fetch-todo'
import useMutateTodo from 'hooks/use-mutate-todo'

type Props = {
  data?: Todo
  onSave: () => void
  positionLimits: {
    min: number
    max: number
  }
}

const VALIDATION_SCHEMA = Yup.object({
  title: Yup.string().ensure().required('Required'),
  sequence: Yup.number().required('Required'),
})

const EMPTY_FORM: Todo = {
  title: '',
  is_completed: false,
  completed_ts: null,
  sequence: 1,
}

const Form: React.FC<Props> = ({ data, onSave, positionLimits }) => {
  const { isBusy, addTodo, updateTodo } = useMutateTodo()

  const onSubmit = async () => {
    if (isBusy) return

    if (isEditing) {
      updateTodo(values)
    } else {
      addTodo(values)
    }

    onSave()
    resetForm()
  }

  const customValidation = (values: Todo) => {
    if (
      values.sequence < positionLimits.min ||
      values.sequence > positionLimits.max
    ) {
      return {
        sequence: `Must be between ${positionLimits.min} and ${positionLimits.max}`,
      }
    }
  }

  const {
    dirty,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    submitForm,
    values,
  } = useFormik({
    initialValues: data || EMPTY_FORM,
    onSubmit,
    validate: customValidation,
    validationSchema: VALIDATION_SCHEMA,
  })

  const isEditing = !!data

  return (
    <form onSubmit={handleSubmit}>
      <Flexbox flexDirection='column' gap='0.5rem'>
        <TextInput
          error={errors.title}
          onChange={handleChange}
          label={isEditing ? 'Edit todo' : 'New todo'}
          name='title'
          value={values.title}
        />
        <TextInput
          {...positionLimits}
          disabled={!isEditing}
          error={errors.sequence}
          onChange={handleChange}
          label='Position'
          hint={`Must be between ${positionLimits.min} and ${positionLimits.max}`}
          name='sequence'
          value={values.sequence}
          type='number'
        />
        <Flexbox>
          <Button disabled={!dirty || isBusy} onClick={submitForm}>
            {isEditing ? 'Save' : 'Add'}
          </Button>
          <Button
            disabled={!dirty || isBusy}
            onClick={() => resetForm()}
            variant='ghost'
          >
            Reset
          </Button>
        </Flexbox>
      </Flexbox>
    </form>
  )
}

export default Form
