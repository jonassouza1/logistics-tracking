import "styles/global.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* SEO básico */}
        <title>Aurum Logistics Rastreamento Veicular</title>
        <meta
          name="description"
          content="Proteja seu veículo com tecnologia de rastreamento GPS. A Aurum Logistics oferece monitoramento em tempo real, cobertura nacional e suporte especializado."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        {/* Ícones */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
