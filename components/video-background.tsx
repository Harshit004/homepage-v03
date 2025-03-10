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
    <div className="w-full max-w-[1440px] mx-auto relative">
      {/* Video Background */}
      <video ref={videoRef} className="w-full h-auto" autoPlay muted loop playsInline>
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main_Banner_Video-Xe7YNx7u0fTkfKdbBySNPxnpJdePZj.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay - Manually Adjusted to Match Logo */}
      <div
        className="absolute text-white text-left w-[90%] max-w-[478px] h-[380px] 
                   flex items-start justify-start"
        style={{
          left: "58.5%",  // ✅ Matches the logo's left position
          transform: "none",
          top: "100px",    // ✅ Adjusted manually to align with the logo
        }}
      >
        <p className="font-sans font-normal text-[40px] md:text-[64px] xl:text-[86px] 
                      leading-[110%] tracking-tight" style = {{marginRight: "8.34%"}}>
          WE ARE DISRUPTING THE STATUS QUO
        </p>
      </div>
    </div>
  )
}
