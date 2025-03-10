"use client"

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  title: string
  description: string
}

export default function ProductCard({ image, title, description }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/products/${title.toLowerCase().replace(/\s+/g, "-")}`} className="block">
        <div className="relative w-[580px] h-[360px] mb-4 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="font-helvetica text-[16px] leading-[15.63px] tracking-[-0.43px] align-middle font-normal uppercase mb-1 group-hover:underline">{title}</h3>
      </Link>
      <div className="w-[450px] h-[32px]">
        <p className="font-helvetica text-[16px] leading-[15.63px] tracking-[-0.43px] align-middle font-normal text-[#6A6A6A]">{description}</p>
      </div>
    </div>
  )
}
