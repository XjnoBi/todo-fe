import React from "react";
import { ThemeProvider } from "styled-components";

import Todo from "modules/Todo";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Todo />
  </ThemeProvider>
);

export default App;
