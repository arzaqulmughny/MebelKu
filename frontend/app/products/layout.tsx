import BottomNavigation from "@/src/components/products/[slug]/BottomNavigation";
import Navbar from "@/src/components/products/[slug]/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="pb-20">
      <Navbar />
      {children}
      <BottomNavigation />
    </div>
  );
}
