import React from "react";

import { Flexbox, Page } from "components";

import List from "./List";
import { Todo } from "hooks/use-fetch-todo";

const TodoPage: React.FC = () => {
  const [data, setData] = React.useState<Todo>();

  return (
    <Page>
      <Flexbox flexDirection="column" alignItems="center">
        <List onEdit={setData} />
      </Flexbox>
    </Page>
  );
};

export default TodoPage;
