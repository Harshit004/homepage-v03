"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate responsive positions
  const getMenuPosition = () => {
    if (windowWidth >= 1440) {
      return { top: 41, left: 120 }
    } else if (windowWidth >= 768) {
      // Scale proportionally
      const ratio = windowWidth / 1440
      return {
        top: Math.round(41 * ratio),
        left: Math.round(120 * ratio),
      }
    } else {
      // Mobile layout
      return { top: 31, left: 20 }
    }
  }

  const getLogoPosition = () => {
    if (windowWidth >= 1440) {
      return { top: 30, left: "58.5%", width: 110, height: 43 }
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

  const menuPos = getMenuPosition()
  const logoPos = getLogoPosition()

  return (
    <nav className="bg-[#000000] w-full relative">
      <div className="max-w-[1440px] mx-auto relative h-[90px] md:h-[90px] sm:h-[80px]">
        {/* Custom double-line menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute"
          style={{
            top: `${menuPos.top}px`,
            left: `${menuPos.left}px`,
          }}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[8px]">
            <span className="w-[46px] h-[2px] bg-white"></span>
            <span className="w-[46px] h-[2px] bg-white"></span>
          </div>
        </button>

        {/* Logo */}
        <div
          id="navbar-logo" // ✅ Added ID for alignment
          className="absolute"
          style={{
            top: `${logoPos.top}px`,
            //left: typeof logoPos.left === "string" ? logoPos.left : `${logoPos.left}px`,
            left: "58.5%",
            width: `${logoPos.width}px`,
            height: `${logoPos.height}px`,
            //transform: logoPos.transform,
            transform: "none",
            marginBottom: "17px",
          }}
        >
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/22912d3d-01f9-4c9d-e5c7-6ccd2d582600/public"
            alt="WAE Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-black transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8">
          <button onClick={() => setIsOpen(false)} className="mb-8 text-white hover:text-gray-300">
            <span className="sr-only">Close menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col gap-6">
            <a href="#" className="text-white text-lg hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-300">
              Company
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-300">
              Products & Solutions
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-300">
              News & Updates
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

