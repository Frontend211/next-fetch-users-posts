import '../styles/app.css';

import FooterBlock from "../components/FooterBlock";
import HeaderBlock from "../components/HeaderBlock";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return <>
        <Head>
        <link rel="stylesheet" href="global.css"/>
        </Head>
        <HeaderBlock />
        <Component {...pageProps} />
        <FooterBlock />
        </>
  }