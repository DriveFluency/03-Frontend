import Box from "@mui/material/Box";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import * as React from "react";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

interface ProductHeroLayoutProps {
  sxBackground: SxProps<Theme>;
}

export default function ProductHeroLayout(
  props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps
) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot sx={{ margin: "85px 0 0" }} id="inicio">
      <Box sx={{ flex: 1, width: "100%", display: "flex" }}>
        <Box sx={{ ml: "auto", width: "700px" }}>
          {children}
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "common.black",
          opacity: 0.2,
          zIndex: -1,
        }}
      />
      <Background sx={sxBackground} />
    </ProductHeroLayoutRoot>
  );
}
