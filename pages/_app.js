import "../styles/globals.css";
import Layout from "../components/layout";
import Script from "next/script";


function MyApp({ Component, pageProps }) {   

  // Reemplaza con tu propio ID de seguimiento de Google Analytics
  const GA_MEASUREMENT_ID = "G-7KM43HLJHR";

  return (
    <> 
      <Script
        id="my-gaa"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      <Script
        id="my-gaa2"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_MEASUREMENT_ID}');
        `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;