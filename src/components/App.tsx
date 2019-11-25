import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
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
      <BrowserRouter>
        <Header>Color Calendar</Header>
        <Route path="/c/:folkId?">
          <CalendarWrapper>
            <CalendarToolbar />
            <Calendar />
          </CalendarWrapper>
        </Route>
        <Route path="/" exact>
          <Redirect
            to={{
              pathname: "/c/"
            }}
          />
        </Route>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
