import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ArweaveWalletKit,
  ConnectButton,
  useConnection,
} from "arweave-wallet-kit";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { connect, connected } = useConnection();
  const { toast } = useToast();
  const handleConnectWallet = async () => {
    try {
      if (!window.arweaveWallet) {
        toast({
          title: "No Wallet Detected!",
          description: "Please install Arweave Wallet to connect",
          action: (
            <Button
              onClick={() => window.open("https://www.arconnect.io/download")}
            >
              Install Wallet
            </Button>
          ),
        });
        return;
      }
      await connect();
    } catch (e) {
      console.error("Error connecting wallet", e);
    }
  };
  const router = useRouter();

  useEffect(() => {
    if (!connected && router.pathname !== "/") {
      toast({
        title: "Wallet Not Connected!",
        description: "Redirecting to HomePage.",
      });
      router.push("/");
    }
  }, [connected, router, toast]);

  return (
    <>
      <ArweaveWalletKit>
        <header className="flex justify-between">
          <Link href="/">
            <h1>ChessWeave</h1>
          </Link>
          {connected ? (
            <ConnectButton />
          ) : (
            // <button className="btn btn-secondary" onClick={handleConnectWallet}>
            //   Connect Wallet
            // </button>
            <ConnectButton />
          )}
        </header>
        <div>{children}</div>
        <footer>
          <p>&copy; 2024 ChessWeave. Elevate your game.</p>
        </footer>
      </ArweaveWalletKit>
    </>
  );
};

export default Layout;
