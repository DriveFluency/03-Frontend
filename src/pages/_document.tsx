import {
  documentGetInitialProps,
  DocumentHeadTags,
  DocumentHeadTagsProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import { DocumentContext, Head, Html, Main, NextScript } from "next/document";

//Create custom theme and get font
import theme from "@/theme";
import { DocumentProps } from "postcss";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="es">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="emotion-insertion-point" content="mui-inject" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finallProps = await documentGetInitialProps(ctx);
  return finallProps;
};
