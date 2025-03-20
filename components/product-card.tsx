"use client"

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  hoverImage: string
  title: string
  description: string
  enableHover?: boolean  // defaults to true
}

export default function ProductCard({
  image,
  hoverImage,
  title,
  description,
  enableHover = true,
}: ProductCardProps) {
  const defaultImageClasses = enableHover
    ? "object-cover transition-transform duration-500 ease-in-out transition-opacity duration-1500 ease-in-out delay-1000 group-hover:opacity-100"
    : "object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"

  const hoverImageClasses = enableHover
    ? "object-cover transition-opacity duration-1500 ease-in-out opacity-0 group-hover:opacity-100"
    : "object-cover hidden"

  return (
    <div className="group">
      <Link
        href={`/products/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="block"
      >
        <div className="relative w-[670px] h-[500px] mb-[19px] overflow-hidden">
          {/* Default Image */}
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={defaultImageClasses}
          />
          {/* Hover Image */}
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
        <p className="text-[16px] text-[#6A6A6A]">{description}</p>
      </div>
    </div>
  )
}
