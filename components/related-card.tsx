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
      className="group relative block transition-all duration-300 rounded-lg border border-transparent hover:border-white/20 hover:bg-white/10"
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

      <div className="transition-all duration-300">
        <h3 className="text-base font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-[48px]">{description}</p>

        {/* Arrow icon in the bottom-right corner */}
        <div className="absolute bottom-0 right-0">
            <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/451a552f-d7cc-4e4d-3388-99ec27735200/public"  // Update with your actual arrow file name/path
            alt="Arrow Icon"
            width={16}
            height={16}
            className="transition-transform duration-300 group-hover:scale-110"
            />
        </div>                        

      </div>

      
    </Link>
  )
}
