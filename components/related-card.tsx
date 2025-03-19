import Image from "next/image"
import Link from "next/link"

interface RelatedCardProps {
  image: string
  title: string
  description: string
  width: number
  height: number
}

export default function RelatedCard({ image, title, description, width, height }: RelatedCardProps) {
  return (
    <Link 
      href="#" 
      className="group block transition-all duration-300 rounded-lg border border-transparent hover:border-white/20 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-xl"
    >
      <div className="mb-4 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={width}
          height={height}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Wrap text elements in a container that receives extra padding on hover */}
      <div className="transition-all duration-300 group-hover:px-4 group-hover:py-2">
        <h3 className="text-base font-medium mb-1 group-hover:underline">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  )
}
