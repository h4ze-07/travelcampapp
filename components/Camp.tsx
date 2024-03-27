import Image from "next/image"

type CampCardProps = {
  bgImage: string,
  title: string,
  subtitle: string,
  peopleJoined: string,
}

const CampCard = ({bgImage, title, subtitle, peopleJoined}: CampCardProps) => {
  return (
    <div className={`h-full w- full min-w-[1100px] ${bgImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
        <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
          <div className="flexCenter gap-4">
            <div className="rounded-full bg-green-50 p-4">
              <Image src={'/folded-map.svg'} alt="folded map" width={28} height={28} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="bold-18 text-white">{title}</h4>
              <p className="regular-14 text-white">{subtitle}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-12 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampCard 
          bgImage='bg-bg-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='50+ Joined'
        />
        <CampCard />
      </div>
    </section>
  )
}

export default Camp