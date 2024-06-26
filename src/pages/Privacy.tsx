import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useState } from "react";
// import Markdown from "../components/Markdown";
import Typography from "../components/Typography";
import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import withRoot from "../withRoot";

function Privacy() {
  const [markdown, setMarkdown] = useState("");

  // https://github.com/webpack/webpack/issues/6680
  // useEffect(() => {
  //   import("../views/privacy.md")
  //     .then((content) => fetch(content.default))
  //     .then((response) => response.text())
  //     .then((responseText) => setMarkdown(responseText));
  // });

  if (!markdown) {
    return <div />;
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          {/* <Markdown>{markdown}</Markdown> */}
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
