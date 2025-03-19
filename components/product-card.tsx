"use client"

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  hoverImage: string
  title: string
  description: string
}

export default function ProductCard({
  image,
  hoverImage,
  title,
  description,
}: ProductCardProps) {
  return (
    <div className="group">
      <Link
        href={`/products/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="block"
      >
        <div className="relative w-[670px] h-[500px] mb-[19px] overflow-hidden">
          {/* Default image (visible by default) */}
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
              group-hover:hidden
              transition-opacity
              duration-1000
              ease-in-out
              opacity-100
              group-hover:opacity-0
            "
          />
          {/* Hover image (hidden by default) */}
          <Image
            src={hoverImage || "/placeholder.svg"}
            alt={`${title} - Hover`}
            fill
            className="
              object-cover
              transition-opacity
              duration-300
              ease-in-out
              opacity-0
              group-hover:opacity-100
            "
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
