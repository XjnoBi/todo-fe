import React from "react";

import useFetchTodo, { Todo } from "hooks/use-fetch-todo";
import { Box } from "components";
import Item from "./Item";

type Props = {
  onEdit: (data: Todo) => void;
};

const List: React.FC<Props> = ({ onEdit }) => {
  const { data } = useFetchTodo();

  return (
    <Box>{data?.map((i) => <Item key={i.id} data={i} onEdit={onEdit} />)}</Box>
  );
};

export default List;
