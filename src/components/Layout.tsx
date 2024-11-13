import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ConnectButton, useConnection } from "arweave-wallet-kit";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { connect, connected } = useConnection();

  const handleConnectWallet = async () => {
    try {
      if (!window.arweaveWallet) return;
      await connect();
    } catch (e) {
      console.error("Error connecting wallet", e);
    }
  };
    const router = useRouter();
  
    useEffect(() => {
      if (!connected) router.push("/");
    }, [connected]);
  
  return (
    <>
      <header className="flex justify-between">
        <Link href="/">
          <h1>ChessWeave</h1>
        </Link>
        {connected ? (
          <ConnectButton />
        ) : (
          <button className="btn btn-secondary" onClick={handleConnectWallet}>
            Connect Wallet
          </button>
        )}
      </header>
      <div>{children}</div>
      <footer>
        <p>&copy; 2024 ChessWeave. Elevate your game.</p>
      </footer>
    </>
  );
};

export default Layout;
