import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>Dwiki Krisna Saputra</title>
        <link rel="icon" sizes="32x32" href="/favicon.ico" />

        <meta
          property="og:title"
          content="Website pribadi milik Dwiki Krisna Saputra."
          key="title"
        />
      </Head>
      <Component {...pageProps} />{" "}
    </ChakraProvider>
  );
}

export default MyApp;
