import React from "react";

import { Flexbox, Page } from "components";

import Form from "./Form";
import List from "./List";
import useFetchTodo, { Todo } from "hooks/use-fetch-todo";

const TodoPage: React.FC = () => {
  const { data, refetch } = useFetchTodo();
  const [todo, setTodo] = React.useState<Todo>();

  const refresh = () => {
    refetch();
    setTodo(undefined);
  };

  const positionLimits = React.useMemo(() => {
    if (!data) {
      return { min: 0, max: 0 };
    }

    return {
      min: data[0].sequence,
      max: data[data.length - 1].sequence,
    };
  }, [data]);

  return (
    <Page>
      <Flexbox gap="4rem">
        <Form
          key={todo?.id}
          data={todo}
          positionLimits={positionLimits}
          onSave={refresh}
        />
        <List data={data} onEdit={setTodo} onDelete={refresh} />
      </Flexbox>
    </Page>
  );
};

export default TodoPage;
