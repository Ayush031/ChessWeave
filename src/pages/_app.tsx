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
import { Toaster } from "@/components/ui/toaster";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);  
    const handleComplete = () => setLoading(false); 

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);  

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  
  return (
    <ArweaveWalletKit>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </ArweaveWalletKit>
  );
}
