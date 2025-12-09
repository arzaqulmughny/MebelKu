import Navbar from "@/src/components/products/[slug]/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white pb-15">
      <Navbar />
      {children}
    </div>
  );
}
