import RootLayout from "@/app/layout";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
