"use client"

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  hoverImage: string
  title: string
  description: string
  enableHover?: boolean  // ← optional, defaults to true
}

export default function ProductCard({
  image,
  hoverImage,
  title,
  description,
  enableHover = true,
}: ProductCardProps) {
  // Conditionally apply classes depending on `enableHover`
  const defaultImageClasses = enableHover
    ? `object-cover
       transition-transform
       duration-0
       group-hover:scale-105
       group-hover:hidden
       transition-opacity
       duration-1000
       ease-in-out
       opacity-100
       group-hover:opacity-100`
    : "object-cover"

  const hoverImageClasses = enableHover
    ? `object-cover
       transition-opacity
       duration-0
       ease-in-out
       opacity-0
       group-hover:opacity-100`
    : // If hover is disabled, hide this image by default
      "object-cover hidden"

  return (
    // Only apply `group` class if hover is enabled
    <div className={enableHover ? "group" : ""}>
      <Link
        href={`/products/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="block"
      >
        <div className="relative w-[670px] h-[500px] mb-[19px] overflow-hidden">
          {/* Default image */}
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={defaultImageClasses}
          />
          {/* Hover image */}
          <Image
            src={hoverImage || "/placeholder.svg"}
            alt={`${title} - Hover`}
            fill
            className={hoverImageClasses}
          />
        </div>
        <h3 className="text-[16px] font-normal uppercase mb-[8px]">
          {title}
        </h3>
      </Link>
      <div className="w-[450px] h-[32px]">
        <p className="text-[16px] text-[#6A6A6A]">
          {description}
        </p>
      </div>
    </div>
  )
}
