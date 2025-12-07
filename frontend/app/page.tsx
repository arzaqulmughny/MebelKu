import Footer from "@/src/components/Footer";
import Advantage from "@/src/components/home/Advantage";
import FeaturedProduct from "@/src/components/home/FeaturedProduct";
import Banner from "@/src/components/home/Banner";
import Testimonial from "@/src/components/home/Testimonial";
import Navbar from "@/src/components/Navbar";
import FlashSale from "@/src/components/home/FlashSale";
import Article from "@/src/components/home/Article";
import ExploreCategory from "@/src/components/home/ExploreCategory";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-3">
        <Navbar />

        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-12 px-2.5">
            <Banner />

            <div className="max-w-[1200px] flex flex-col gap-y-15 items-center w-full mx-auto">
              <Advantage />
              <FlashSale />
              <FeaturedProduct />
              <Testimonial />
              <ExploreCategory />
              <Article />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
