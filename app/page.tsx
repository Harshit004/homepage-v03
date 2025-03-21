"use client"

import ResponsiveNavbar from "@/components/responsive-navbar"
import VideoBackground from "@/components/video-background"
import OurPurpose from "@/components/our-purpose"
import ProductCard from "@/components/product-card"
import RelatedCard from "../components/related-card"
import Footer from "@/components/footer"
import CountUp from "react-countup"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("sustainability-section")
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setStartCount(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-white min-h-screen">
      <ResponsiveNavbar />
      <VideoBackground />
      <OurPurpose />

      {/* Products Section */}
      <section className="max-w-[1440px] w-full mx-auto mb-[9.72%] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/fb52ab58-4443-41c6-5768-88a74b90a800/public"
            hoverImage="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/55178315-9b4f-4204-32f5-9f86818df800/public"
            title="DRINKING WATER STATIONS"
            description="Water dispensers with inbuilt purification —pure, safe water delivered efficiently."
            enableHover={true}
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/80a500cb-eea1-4332-f93b-478cdda6e500/public"
            hoverImage="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/80a500cb-eea1-4332-f93b-478cdda6e500/public"
            title="DRINKING WATER DISPENSER"
            description="Stainless steel water dispensers give you fresh, clean water anytime."
            enableHover={false}
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/67afa77d-f854-48d9-7c15-9546a1929800/public"
            hoverImage="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/67afa77d-f854-48d9-7c15-9546a1929800/public"
            title="DRINKING WATER FAUCETS"
            description="Drinking water faucets with under the counter storage units to make access to fresh water simple."
            enableHover={false}
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4c5a7f4d-3cdb-4170-1ecc-1fd159646100/public"
            hoverImage="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4c5a7f4d-3cdb-4170-1ecc-1fd159646100/public"
            title="WATER COOLERS & FOUNTAINS"
            description="Water coolers cum bubblers provide chilled water on demand."
            enableHover={false}
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d19a437a-cf36-4df0-b472-dfc7451a6a00/public"
            hoverImage="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d19a437a-cf36-4df0-b472-dfc7451a6a00/public"
            title="PUBLIC UTILITY SYSTEMS"
            description="Designed for large public spaces, PUS systems ensure clean, accessible water."
            enableHover={false}
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3d8ab49e-7fa8-4423-edff-6c1b8cfd9000/public"
            hoverImage="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3d8ab49e-7fa8-4423-edff-6c1b8cfd9000/public"
            title="COMMERCIAL/INDUSTRIAL PLANTS"
            description="Power your facility with our large-scale hydration plants. Scalable and efficient."
            enableHover={false}
          />
        </div>
      </section>

      {/* Sustainability Section */}
      <section
        id="sustainability-section"
        className="
          w-full
          mx-auto
          bg-black
          text-white
          px-4
          md:px-[120px]
          pt-16
          pb-16
          md:pt-[180px]
          md:pb-[180px]
        "
      >
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="mb-8 md:mb-[60px]">
            <h2 className="
              font-helvetica
              text-[64px]
              leading-[100%]
              tracking-[-4%]
              font-normal
              uppercase
              mb-4
              md:mb-[20px]
            ">
              Sustainability
            </h2>
            <p className="
              font-helvetica
              text-[19px]
              leading-[110%]
              font-normal
              text-white
              max-w-none
              md:max-w-[1200px]
            ">
              WAE leads transformative projects and develops cutting-edge purification systems, 
              all aimed at ensuring a sustainable future.
            </p>
          </div>

          {/* Counters */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-[60px]">
            {/* Counter #1 */}
            <div className="flex flex-col items-center">
              <h3 className="
                font-helvetica
                text-[68px]
                leading-[140%]
                tracking-[1%]
                font-normal
                uppercase
                text-white
                text-center
                mb-4
                md:mb-[20px]
              ">
                <CountUp
                  start={0}
                  end={startCount ? 1012120.25 : 0}
                  duration={3}
                  separator=","
                  decimal="."
                  decimals={2}
                />
              </h3>
              <p className="
                font-mont
                text-[16px]
                leading-[24px]
                tracking-[1%]
                font-light
                uppercase
                text-white
                text-center
              ">
                TONNES CO2 EMISSIONS SAVED
              </p>
            </div>

            {/* Counter #2 */}
            <div className="flex flex-col items-center">
              <h3 className="
                font-helvetica
                text-[68px]
                leading-[140%]
                tracking-[1%]
                font-normal
                uppercase
                text-white
                text-center
                mb-4
                md:mb-[20px]
              ">
                <CountUp
                  start={0}
                  end={startCount ? 12185.43 : 0}
                  duration={3}
                  separator=","
                  decimal="."
                  decimals={2}
                />
              </h3>
              <p className="
                font-mont
                text-[16px]
                leading-[24px]
                tracking-[1%]
                font-light
                uppercase
                text-white
                text-center
              ">
                MILLION GALLONS WATER SAVED
              </p>
            </div>

            {/* Counter #3 */}
            <div className="flex flex-col items-center">
              <h3 className="
                font-helvetica
                text-[68px]
                leading-[140%]
                tracking-[1%]
                font-normal
                uppercase
                text-white
                text-center
                mb-4
                md:mb-[20px]
              ">
                <CountUp
                  start={0}
                  end={startCount ? 22253.65 : 0}
                  duration={3}
                  separator=","
                  decimal="."
                  decimals={2}
                />
              </h3>
              <p className="
                font-mont
                text-[16px]
                leading-[24px]
                tracking-[1%]
                font-light
                uppercase
                text-white
                text-center
              ">
                TONNES PLASTIC REMOVED
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Made In India Section */}
      <section className="max-w-[1200px] w-full mx-auto my-[180px] px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:max-w-[403px]">
            <h2 className="font-helvetica text-[64px] leading-[120%] tracking-[-4px] font-normal uppercase">
              MADE IN INDIA
            </h2>
          </div>
          <div className="md:max-w-[536px]">
            <p className="font-helvetica text-[20px] leading-[120%] tracking-[0%]">
              WAE captures the heart of Indian innovation by seamlessly blending
              the time-honoured ideals with the latest technology. We are driven
              by the mission to build a brand that not only saves the planet but
              also creates a potent impact on future generations for the
              country’s advancements, integrity & innovation. Our approach
              strengthens community resilience while showcasing India’s
              Intellectual capital on the world stage.
            </p>
          </div>
        </div>
      </section>

      {/* Life @ WAE Section */}
      <section className="max-w-[1200px] w-full mx-auto mb-[180px] px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:max-w-[403px]">
            <h2 className="font-helvetica text-[64px] leading-[120%] tracking-[-4px] font-normal uppercase">
              Life @ WAE
            </h2>
          </div>
          <div className="md:max-w-[536px]">
            <p className="font-helvetica text-[20px] leading-[120%] tracking-[0%]">
              Life at WAE is all about bringing your whole self to work. Our
              diverse and inclusive culture thrives on the unique perspectives
              of our team, making every day an opportunity to learn, connect,
              and grow together. It's a place where your ideas shine, your voice
              is heard, and you feel right at home no matter where you're from.
            </p>
            <Link
              href="/careers"
              className="group inline-flex items-center bg-black text-white w-fit gap-[20px] py-[16px] px-[32px] mt-[40px] hover:bg-white hover:text-black border border-black transition-all duration-300"
            >
              KNOW MORE
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c424b7fd-5c2d-49b5-ca8d-df4e8bc5f100/public"
                className="h-4 w ml-[20px] group-hover:hidden"
              />
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4c9c84df-2bee-4474-903d-f4abc94b1900/public"
                className="h-4 w ml-[20px] hidden group-hover:block"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Information Section */}
      <section className="max-w-[1200px] w-full mx-auto mb-[9.72%] px-4">
        <h2 className="font-helvetica text-[64px] leading-[120%] tracking-[0%] font-normal uppercase mb-[50px]">
          Related Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0c32e685-fbfe-4edb-0e63-4bbf261b3100/public"
            title="Awards and Other Information"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={270}
          />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/67063015-a309-4a59-9247-c67c4efea500/public"
            title="News And Updates"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={162}
          />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/efbc7ed9-3a44-4bea-0cab-e1f7ba555500/public"
            title="Impact We Enable For You"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={200}
          />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/afdeb7b4-18e6-4bc2-0ed8-85d97cb6dc00/public"
            title="Our Sustainable Water Solutions"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={238}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
