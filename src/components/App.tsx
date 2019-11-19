import React from "react";
import { Reset } from "styled-reset";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../styles/theme";

import Calendar from "./Calendar";

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
    <Reset />
    <GlobalStyle />
    <Header>Color Calendar</Header>
    <CalendarWrapper>
      <Calendar />
    </CalendarWrapper>
  </ThemeProvider>
);

export default App;
