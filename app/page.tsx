"use client"

import ResponsiveNavbar from "@/components/responsive-navbar"
import VideoBackground from "@/components/video-background"
import OurPurpose from "@/components/our-purpose"
import ProductCard from "@/components/product-card"
import RelatedCard from "../components/related-card"
import {Footer2} from "@/components/footer2"
import Footer from "@/components/footer"
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import Link from "next/link"

export default function Home() {

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("sustainability-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setStartCount(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <ResponsiveNavbar />
      <VideoBackground />
      <OurPurpose />
      {/* Products Section */}
      <section className="w-[1200px] mx-auto mb-[9.72%]">
        {/* <h2 className="font-helvetica text-[86px] leading-[110%] tracking-[-4.26px] align-middle font-normal mb-[120px]">Products</h2> */}
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[80px]">
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3be892cf-2037-4046-8d68-aff3c7328a00/public"
            title="DRINKING WATER STATIONS"
            description="Water dispensers with inbuilt purification —pure, safe water delivered efficiently."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c2a345b2-d818-48a0-69db-98b041c9ea00/public"
            title="DRINKING WATER DISPENSER"
            description="Stainless steel water dispensers give you fresh, clean water anytime."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/eddf866f-bdd3-4563-e7d1-a2f5c7dd8900/public"
            title="DRINKING WATER FAUCETS"
            description="Drinking water faucets with under the counter storage units to make access to fresh water simple."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1d17bc90-292c-4cd5-cd1a-6d32159a2e00/public"
            title="WATER COOLERS & FOUNTAINS"
            description="Water coolers cum bubblers provide chilled water on demand."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/71f8a54e-d8e0-454e-951a-dcf52863aa00/public"
            title="PUBLIC UTILITY SYSTEMS"
            description="Designed for large public spaces, PUS systems ensure clean, accessible water."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b435dee3-0609-4f07-9c04-060c1e41fc00/public"
            title="COMMERCIAL/INDUSTRIAL PLANTS"
            description="Power your facility with our large-scale hydration plants. Scalable and efficient."
          />
        </div>
      </section>

      {/* Sustainability Section */}
      <section 
        id="sustainability-section"
        className="max-w-[1440px] mx-auto bg-black text-white pt-[180px] pb-[180px] px-[120px]"
      >
        <div className="w-[1200px] mx-auto">
          <div className="mb-[60px]">
            <h2 className="font-helvetica text-[64px] leading-[100%] tracking-[-4%] align-middle font-normal uppercase md:whitespace-nowrap mb-[20px]">Sustainability</h2>
            <p className="font-helvetica text-[20px] leading-[110%] tracking-[0%] align-middle font-normal w-[1200px] text-white">
              WAE leads transformative projects and develops cutting-edge purification systems, all aimed at ensuring a sustainable future.
            </p>
          </div>
          <div className="max-w-[1200px] flex justify-between gap-[60px] mx-auto">
            <div className="flex flex-col items-center">
              <h3 className="font-helvetica text-[72px] leading-[140%] tracking-[1%] align-middle font-normal uppercase w-fit text-white text-center mb-[20px]">
                <CountUp start={0} end={startCount ? 1012120.25 : 0} duration={3} separator="," decimal="." decimals={2}/>
              </h3>
              <p className="font-mont text-[16px] leading-[24px] tracking-[1%] align-middle font-light uppercase w-fit self-start text-gray-400 text-left">TONNES CO2 EMISSIONS SAVED</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-helvetica text-[72px] leading-[140%] tracking-[1%] align-middle font-normal uppercase w-fit text-white text-center mb-[20px]">
                <CountUp start={0} end={startCount ? 12185.43 : 0} duration={3} separator="," decimal="." decimals={2}/>
              </h3>
              <p className="font-mont text-[16px] leading-[24px] tracking-[1%] align-middle font-light uppercase w-fit self-start text-gray-400 text-left">MILLION GALLONS WATER SAVED</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-helvetica text-[72px] leading-[140%] tracking-[1%] align-middle font-normal uppercase w-fit text-white text-center mb-[20px]">
               <CountUp start={0} end={startCount ? 22253.65 : 0} duration={3} separator="," decimal="." decimals={2}/>
              </h3>
              <p className="font-mont text-[16px] leading-[24px] tracking-[1%] align-middle font-light uppercase w-fit self-start text-gray-400 text-left">TONNES PLASTIC REMOVED</p>
            </div>
          </div>
        </div>
      </section>


      {/* Made In India Section */}
      <section className="max-w-[1200px] mx-auto my-[180px]">
        <div className="flex justify-between items-start">
          <div className="w-[403px] h-[95px]">
            <h2 className="font-helvetica text-[64px] leading-[120%] tracking-[-4px] align-middle font-normal uppercase md:whitespace-nowrap">MADE IN INDIA</h2>
          </div>
          <div className="w-[536px] h-[192px]">
            <p className="font-helvetica text-[20px] leading-[120%] tracking-[0%] align-middle">
            WAE captures the heart of Indian innovation by seamlessly blending the time-honoured ideals with the latest technology. We are driven by the mission to build a brand that not only saves the planet but also creates a potent impact on future generations for the country’s advancements, integrity & innovation. Our approach strengthens community resilience while showcasing India’s Intellectual capital on the world stage.
            </p>
          </div>
        </div>
      </section>
      {/* Life @ WAE Section */}
      <section className="max-w-[1200px] mx-auto mb-[180px]">
        <div className="flex justify-between items-start">
          <div className="w-[403px] h-[95px]">
            <h2 className="font-helvetica text-[64px] leading-[120%] tracking-[-4px] align-middle font-normal uppercase md:whitespace-nowrap">Life @ WAE</h2>
          </div>
          <div className="w-[536px] h-[192px]">
            <p className="font-helvetica text-[20px] leading-[120%] tracking-[0%] align-middle">
              Life at WAE is all about bringing your whole self to work. Our diverse and inclusive culture thrives on the unique perspectives of our team, making every day an opportunity to learn, connect, and grow together. It's a place where your ideas shine, your voice is heard, and you feel right at home no matter where you're from.
            </p>
            <Link
              href="/careers"
              className="group inline-flex items-center bg-black text-white w-fit h-fit gap-[20px] py-[16px] px-[32px] mt-[40px] hover:bg-white hover:text-black border border-black transition-all duration-300"
            >
              KNOW MORE
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cb01eed2-61d9-45f4-ceb4-4af758b19400/public"
                className="h-4 w ml-[20px] group-hover:hidden"
              />
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9bbddd0d-6a5d-4c5c-8f33-3d5716dda400/public"
                className="h-4 w ml-[20px] hidden group-hover:block"
              />
            </Link>

          </div>
        </div>
      </section>

      {/* Related Information Section */}
      <section className="max-w-[1200px] mx-auto mb-[9.72%]">
        <h2 className="font-helvetica text-[64px] leading-[120%] tracking-[0%] align-middle font-normal uppercase md:whitespace-nowrap mb-[50px]">
          Related Information
        </h2>
        <div className="grid grid-cols-4 gap-8 items-start">
          <RelatedCard 
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0c32e685-fbfe-4edb-0e63-4bbf261b3100/public" 
            title="Awards and Other Information" 
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={270} // example height
          />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/67063015-a309-4a59-9247-c67c4efea500/public"
            title="News And Updates"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={162} // example height
          />
          <RelatedCard 
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/efbc7ed9-3a44-4bea-0cab-e1f7ba555500/public" 
            title="Impact We Enable For You" 
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={200} // example height
          />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/afdeb7b4-18e6-4bc2-0ed8-85d97cb6dc00/public"
            title="Our Sustainable Water Solutions"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={238} // example height
          />
        </div>
      </section>


      <Footer />

    </main>
  )
}

