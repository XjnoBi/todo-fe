import React from "react";

import { Todo } from "hooks/use-fetch-todo";
import { Button, Flexbox, Text } from "components";

type Props = {
  data: Todo;
  onEdit: (data: Todo) => void;
};

const Item: React.FC<Props> = ({ data, onEdit }) => (
  <Flexbox justifyContent="space-between">
    <Text>{data.title}</Text>
    <Button onClick={() => onEdit(data)}>Edit</Button>
  </Flexbox>
);

export default Item;
