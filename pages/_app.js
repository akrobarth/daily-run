import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./app.css";

import theme from "../theme";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
