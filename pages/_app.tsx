import Layout from "~/components/layout";
import "../styles/globals.css";

export default function EchidnaApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
