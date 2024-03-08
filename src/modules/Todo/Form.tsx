import React from "react";
import { useFormik } from "formik";

import { Button, Flexbox, TextInput } from "components";
import { Todo } from "hooks/use-fetch-todo";
import useMutateTodo from "hooks/use-mutate-todo";

type Props = {
  data?: Todo;
  onSave: () => void;
};

const EMPTY_FORM: Todo = {
  title: "",
  is_completed: false,
  completed_ts: null,
  sequence: 1,
};

const Form: React.FC<Props> = ({ data, onSave }) => {
  const { isBusy, addTodo, updateTodo } = useMutateTodo();

  const onSubmit = async () => {
    if (isBusy) return;

    if (isEditing) {
      updateTodo(values);
    } else {
      addTodo(values);
    }

    onSave();
    resetForm();
  };

  const { dirty, handleChange, handleSubmit, resetForm, submitForm, values } =
    useFormik({
      initialValues: data || EMPTY_FORM,
      onSubmit,
    });

  const isEditing = !!data;

  return (
    <form onSubmit={handleSubmit}>
      <Flexbox flexDirection="column" gap="0.5rem">
        <TextInput
          onChange={handleChange}
          label={isEditing ? "Edit todo" : "New todo"}
          name="title"
          value={values.title}
        />
        <TextInput
          disabled={!isEditing}
          onChange={handleChange}
          label="Position"
          name="sequence"
          value={values.sequence}
        />
        <Flexbox>
          <Button disabled={!dirty || isBusy} onClick={submitForm}>
            {isEditing ? "Save" : "Add"}
          </Button>
          <Button
            disabled={!dirty || isBusy}
            onClick={() => resetForm()}
            variant="ghost"
          >
            Reset
          </Button>
        </Flexbox>
      </Flexbox>
    </form>
  );
};

export default Form;
