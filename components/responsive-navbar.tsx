"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  // Handle window resize with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth)
      }, 100)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Calculate responsive positions
  const getMenuPosition = useCallback(() => {
    if (windowWidth >= 1440) {
      return { top: 41, left: 120 }
    } else if (windowWidth >= 768) {
      const ratio = windowWidth / 1440
      return {
        top: Math.round(41 * ratio),
        left: Math.round(120 * ratio),
      }
    } else {
      return { top: 31, left: 20 }
    }
  }, [windowWidth])

  const getLogoPosition = useCallback(() => {
    if (windowWidth >= 1440) {
      return { top: 30, left: "58.5%", width: 110, height: 43 }
    } else if (windowWidth >= 768) {
      return {
        top: 30,
        left: "58.5%%",
        transform: "none",
        width: 110,
        height: 43,
      }
    } else {
      return {
        top: 22,
        left: "58.5%",
        transform: "none",
        width: 90,
        height: 35,
      }
    }
  }, [windowWidth])

  // Toggle menu state with stopPropagation
  const toggleMenu = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      console.log("Menu button clicked, current state:", isOpen)
      setIsOpen((prevState) => !prevState)
    },
    [isOpen],
  )

  // Close menu - separate function for clarity
  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const menuPos = getMenuPosition()
  const logoPos = getLogoPosition()

  return (
    // Navbar background transition set to 700ms
    <nav className={`w-full relative transition-colors duration-700 ${isOpen ? "bg-black" : "bg-[#ffffff]"}`}>
      <div className="max-w-[1440px] mx-auto relative h-[90px] md:h-[90px] sm:h-[80px]">
        {/* Menu button */}
        <div
          className="absolute z-[100]"
          style={{
            top: `${menuPos.top - 15}px`,
            left: `${menuPos.left - 15}px`,
          }}
        >
          <button
            onClick={toggleMenu}
            className="p-4 cursor-pointer"
            aria-label="Toggle menu"
            type="button"
            tabIndex={0}
          >
            <div className="relative w-[46px] h-[12px]">
              {/* First line */}
              <span
                className={`absolute w-[46px] h-[2px] transition-all duration-700 ${
                  isOpen
                    ? "top-[5px] rotate-[35deg] bg-white"
                    : "top-0 rotate-0 bg-black"
                }`}
              ></span>
              {/* Second line */}
              <span
                className={`absolute w-[46px] h-[2px] transition-all duration-700 ${
                  isOpen
                    ? "top-[5px] -rotate-[35deg] bg-white"
                    : "top-[10px] rotate-0 bg-black"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Logo container with crossfade effect */}
        <div
          className="absolute transition-all duration-700"
          style={{
            top: `${logoPos.top}px`,
            left: typeof logoPos.left === "string" ? logoPos.left : `${logoPos.left}px`,
            width: `${logoPos.width}px`,
            height: `${logoPos.height}px`,
            transform: logoPos.transform,
            marginBottom: "17px",
          }}
        >
          <div className="relative w-full h-full">
            {/* Closed state logo */}
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/df470715-8b49-4d9d-b83b-7249a328b100/public"
              alt="Company Logo Closed"
              fill
              className={`object-contain transition-opacity duration-700 ${isOpen ? "opacity-0" : "opacity-100"}`}
              priority
            />
            {/* Open state logo */}
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/22912d3d-01f9-4c9d-e5c7-6ccd2d582600/public"
              alt="Company Logo Open"
              fill
              className={`object-contain transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`}
              priority
            />
          </div>
        </div>
      </div>

      {/* Full-width overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 mt-[90px] md:mt-[90px] sm:mt-[80px]"
          onClick={closeMenu}
          role="presentation"
        />
      )}

      {/* Menubar container with slide-in/out animation */}
      <div
        className={`fixed top-0 left-0 h-full md:w-[500px] w-full transform transition-all duration-700 ease-in-out z-50 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="p-8 pt-[120px] md:p-12 md:pt-[140px] md:pl-[157px]">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="menu-item text-white hover:text-gray-300 transition-colors"
              style={{ "--index": 0 } as React.CSSProperties}
            >
              <span className="whitespace-nowrap helvetica-neue font-normal text-[48px] leading-[110%] tracking-[-4.96%] align-middle">
                Company
              </span>
            </a>
            <a
              href="#"
              className="menu-item text-white hover:text-gray-300 transition-colors"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              <span className="whitespace-nowrap helvetica-neue font-normal text-[48px] leading-[110%] tracking-[-4.96%] align-middle">
                Products &amp; Solutions
              </span>
            </a>
            <a
              href="#"
              className="menu-item text-white hover:text-gray-300 transition-colors"
              style={{ "--index": 2 } as React.CSSProperties}
            >
              <span className="whitespace-nowrap helvetica-neue font-normal text-[48px] leading-[110%] tracking-[-4.96%] align-middle">
                News &amp; Updates
              </span>
            </a>
            <a
              href="#"
              className="menu-item text-white hover:text-gray-300 transition-colors"
              style={{ "--index": 3 } as React.CSSProperties}
            >
              <span className="whitespace-nowrap helvetica-neue font-normal text-[48px] leading-[110%] tracking-[-4.96%] align-middle">
                Contact
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
