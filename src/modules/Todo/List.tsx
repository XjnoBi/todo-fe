import React from "react";

import { Todo } from "hooks/use-fetch-todo";
import { Box } from "components";
import Item from "./Item";

type Props = {
  data?: Todo[];
  onEdit: (data: Todo) => void;
};

const List: React.FC<Props> = ({ data, onEdit }) => (
  <Box>{data?.map((i) => <Item key={i.id} data={i} onEdit={onEdit} />)}</Box>
);

export default List;
