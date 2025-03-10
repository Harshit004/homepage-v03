"use client"

import { useEffect, useRef, useState } from "react"

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Align text with navbar logo
  const getLogoPosition = () => {
    if (windowWidth >= 1440) {
      return { top: 30, left: 842, width: 110, height: 43 }
    } else if (windowWidth >= 768) {
      // For medium screens, center the logo
      return {
        top: 30,
        left: "50%",
        transform: "translateX(-50%)",
        width: 110,
        height: 43,
      }
    } else {
      // Mobile layout
      return {
        top: 22,
        left: "50%",
        transform: "translateX(-50%)",
        width: 90,
        height: 35,
      }
    }
  }

  const logoPos = getLogoPosition()

  return (
    <div className="w-full max-w-[1440px] mx-auto relative">
      <video ref={videoRef} className="w-full h-auto" autoPlay muted loop playsInline>
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main_Banner_Video-Xe7YNx7u0fTkfKdbBySNPxnpJdePZj.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay */}
      <div
        className="absolute top-[6.5%] text-white text-left"
        style={{
          width: "478px",
          height: "380px",
          left: typeof logoPos.left === "string" ? logoPos.left : `${logoPos.left}px`,
          transform: logoPos.transform,
          fontFamily: "Helvetica Neue",
          fontWeight: 400,
          fontSize: "86px",
          lineHeight: "110%",
          letterSpacing: "-4.96%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Left align
        }}
      >
        WE ARE DISRUPTING THE STATUS QUO
      </div>
    </div>
  )
}
