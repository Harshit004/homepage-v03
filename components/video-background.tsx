"use client"

import { useRef, useEffect } from "react"

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div className="relative w-full max-w-[1440px] mx-auto pt-[90px] md:pt-[90px] sm:pt-[80px]">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="w-full h-auto"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main_Banner_Video-Xe7YNx7u0fTkfKdbBySNPxnpJdePZj.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay - Manually Aligned with Navbar Logo */}
      <div
        className="
          absolute
          text-white
          text-left
          w-[90%]
          max-w-[478px]
          flex
          items-start
          justify-start
        "
        style={{
          left: "58.5%",  // matches the logo's left position
          top: "6.95%",   // manually adjusted to align with the logo
          transform: "none",
        }}
      >
        <p
          className="
            font-sans
            font-normal
            leading-[100%]
            tracking-tight
            text-[40px]
            md:text-[64px]
            xl:text-[86px]
          "
          style={{
            marginRight: "8.34%",
            marginTop: "25.95%",
          }}
        >
          WE ARE DISRUPTING THE STATUS QUO
        </p>
      </div>
    </div>
  )
}
