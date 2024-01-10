import Button from './Button'

export default function Card({ iconSrc, title, description }: { iconSrc: string; title: string; description: string }) {
  return (
    <div className="relative">
      <img src={iconSrc} alt={`icon for ${title}`} className="relative -top-7 left-7 z-10 h-14 w-14" />
      <div className="relative -mt-14 flex h-full flex-col items-start gap-4 rounded-[0.625rem] bg-white px-7 pb-8 pt-16 shadow-[0_25px_50px_0_rgba(6,22,141,0.04)] md:px-8">
        <h2 className="text-dark text-xl font-extrabold leading-normal lg:text-2xl">{title}</h2>
        <p className="font-medium leading-[1.625rem] lg:text-lg">{description}</p>
        <Button className="text-secondary mt-auto !pl-0 text-lg font-bold leading-7">Get Started</Button>
      </div>
    </div>
  )
}
