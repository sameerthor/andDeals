import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/globals.css";
import Head from "next/head";
import { useEffect } from "react"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
   window.bootstrap= require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main>
          <Head><style>{dom.css()}</style></Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>)
}
