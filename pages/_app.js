import "../styles/globals.css";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Header from "../components/header/header.component";
//import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "../styles/theme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
//import { withTheme } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  //console.log(theme);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Header />
      <main>
        <CacheProvider value={emotionCache}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </StyledEngineProvider>
        </CacheProvider>
      </main>

      <footer>@2022 - All rights reserved</footer>
    </>
  );
};

export default MyApp;
