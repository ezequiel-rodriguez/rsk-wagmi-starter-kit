import Logo from "@/components/ui/logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar(): JSX.Element {
  return (
    <nav className="sticky top-4 flex items-center justify-between py-3 px-5 rounded-full mt-4 w-full max-w-[1200px] mx-auto bg-gray-600/20 backdrop-blur-lg z-[100]">
      <Logo className="w-[150px] h-[50px]" />
      <ConnectButton
        showBalance={false}
        chainStatus={{ smallScreen: "none", largeScreen: "icon" }}
      />
    </nav>
  );
}
