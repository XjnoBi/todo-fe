import React from "react";

import { Button, Flexbox, Text } from "components";

import { Todo } from "hooks/use-fetch-todo";
import useMutateTodo from "hooks/use-mutate-todo";

type Props = {
  data: Todo;
  onEdit: (data: Todo) => void;
  onDelete: () => void;
};

const Item: React.FC<Props> = ({ data, onEdit, onDelete }) => {
  const { deleteTodo } = useMutateTodo();

  const handleDelete = () => {
    if (!data.id) return;

    deleteTodo(data.id);
    onDelete();
  };

  return (
    <Flexbox justifyContent="space-between" gap="1rem">
      <Text>{data.title}</Text>
      <Flexbox>
        <Button variant="ghost" onClick={() => onEdit(data)}>
          Edit
        </Button>
        <Button variant="ghost" onClick={handleDelete}>
          Delete
        </Button>
      </Flexbox>
    </Flexbox>
  );
};

export default Item;
