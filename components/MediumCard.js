import Image from "next/image"

function MediumCard({ img, title }) {
  return (
    <div>
      <div className="relative h-80 w-80">
        <Image 
          src={img}
          layout="fill"
          alt={title}
        />
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default MediumCard
