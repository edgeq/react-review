import React from "react";
import App, { Container } from "next/app";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Navbar />

        <Component {...pageProps} />
        <Header />
      </Container>
    );
  }
}

export default MyApp;
