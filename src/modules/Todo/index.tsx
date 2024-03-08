import React from "react";

import { Flexbox, Page } from "components";

import Form from "./Form";
import List from "./List";
import useFetchTodo, { Todo } from "hooks/use-fetch-todo";

const TodoPage: React.FC = () => {
  const { data, refetch } = useFetchTodo();
  const [todo, setTodo] = React.useState<Todo>();

  return (
    <Page>
      <Flexbox gap="4rem">
        <Form
          key={todo?.id}
          data={todo}
          onSave={() => {
            refetch();
            setTodo(undefined);
          }}
        />
        <List data={data} onEdit={setTodo} />
      </Flexbox>
    </Page>
  );
};

export default TodoPage;
