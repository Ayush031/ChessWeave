import "@/styles/globals.css";

import "@/styles/index.css";
import "@/styles/landingPage.css";
import "@/styles/loader.css";

// /playgame page
import "@/styles/Referee.css";
import "@/styles/Tile.css";
import "@/styles/Chessboard.css";

import type { AppProps } from "next/app";
import { ArweaveWalletKit } from "arweave-wallet-kit";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ArweaveWalletKit>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ArweaveWalletKit>
  );
}
