import React from "react";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import store from "../store";

import Calendar from "./Calendar";
import CalendarToolbar from "./CalendarToolbar";

const CalendarWrapper = styled.section`
  padding: 10px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.neutralColor};
    font-family: ${theme.mainFont};
  }
`;

const Header = styled.header`
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textOnPrimaryColor};
  padding: 10px;
`;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Reset />
      <GlobalStyle />
      <Header>Color Calendar</Header>
      <CalendarWrapper>
        <CalendarToolbar />
        <Calendar />
      </CalendarWrapper>
    </Provider>
  </ThemeProvider>
);

export default App;
