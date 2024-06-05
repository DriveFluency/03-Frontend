import { ThemeProvider } from "@mui/material/styles";
import React from 'react';
import theme from './theme';

const withRoot = <P extends object>(Component: React.ComponentType<P>) => {
  const WithRoot = (props: P) => {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        <Component {...props} />
      </ThemeProvider>
    );
  };

  return WithRoot;
};

export default withRoot;
