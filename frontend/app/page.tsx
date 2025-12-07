import Footer from "@/src/components/Footer";
import Advantage from "@/src/components/home/Advantage";
import FeaturedProduct from "@/src/components/home/FeaturedProduct";
import Banner from "@/src/components/home/Banner";
import Testimonial from "@/src/components/home/Testimonial";
import Navbar from "@/src/components/Navbar";
import FlashSale from "@/src/components/home/FlashSale";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <Navbar />

        <div className="flex flex-col gap-y-9 px-2.5">
          <Banner />
          <Advantage />
          <FlashSale />
          <FeaturedProduct />
          <Testimonial />
        </div>

        <Footer />
      </div>
    </>
  );
}
