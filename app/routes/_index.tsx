import type { MetaFunction } from '@remix-run/node'
import Button from '~/components/Button'
import logoDark from '~/assets/images/logo-dark.svg'
import logoLight from '~/assets/images/logo-light.svg'
import Card from '~/components/Card'
import iconBusiness from '~/assets/images/icon-business.svg'
import iconAnimation from '~/assets/images/icon-animation.svg'
import iconPhotography from '~/assets/images/icon-photography.svg'
import iconDesign from '~/assets/images/icon-design.svg'
import iconCrypto from '~/assets/images/icon-crypto.svg'

export const meta: MetaFunction = () => {
  return [
    { title: 'Skilled e-learning landing page' },
    { name: 'description', content: 'A Challenge from Frontend Mentor!' },
  ]
}

export default function Index() {
  return (
    <main className="w-full max-w-6xl overflow-hidden">
      <div className="p-4 pb-20 md:px-10 md:pt-6 lg:px-32 lg:pb-36">
        <div className="flex items-center">
          <img src={logoDark} alt="logo" className="w-20" />
          <Button className="bg-dark hover:bg-gray z-10 ml-auto text-white">Get Started</Button>
        </div>

        <div className="my-8 flex flex-col md:mb-60 md:mt-24 md:flex-row ">
          <div className="flex flex-col items-start gap-6  md:w-1/2">
            <h1 className="text-heading-lg">Maximize skill, minimize budget</h1>
            <p className="font-medium leading-[1.625rem]">
              Our modern courses across a range of in-demand skills will give you the knowledge you need to live the
              life you want.
            </p>
            <Button className="bg-gradient-orange text-white hover:opacity-50">Get Started</Button>
          </div>

          <div className="relative flex justify-center md:w-1/2">
            <picture className="md:absolute md:-right-[21rem] md:-top-52 lg:-right-[28rem] lg:-top-80">
              {/* Desktop Images (for screens 1024px and wider) */}
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/images/image-hero-desktop.webp 1x, /assets/images/image-hero-desktop@2x.webp 2x"
                type="image/webp"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/images/image-hero-desktop.png 1x, /assets/images/image-hero-desktop@2x.png 2x"
                type="image/png"
              />

              {/* Tablet Images (for screens between 768px and 1023px) */}
              <source
                media="(min-width: 768px) and (max-width: 1023px)"
                srcSet="/assets/images/image-hero-tablet.webp 1x, /assets/images/image-hero-tablet@2x.webp 2x"
                type="image/webp"
              />
              <source
                media="(min-width: 768px) and (max-width: 1023px)"
                srcSet="/assets/images/image-hero-tablet.png 1x, /assets/images/image-hero-tablet@2x.png 2x"
                type="image/png"
              />

              {/* Mobile Images (for screens smaller than 768px) */}
              <source
                media="(max-width: 767px)"
                srcSet="/assets/images/image-hero-mobile.webp 1x, /assets/images/image-hero-mobile@2x.webp 2x"
                type="image/webp"
              />
              <source
                media="(max-width: 767px)"
                srcSet="/assets/images/image-hero-mobile.png 1x, /assets/images/image-hero-mobile@2x.png 2x"
                type="image/png"
              />

              {/* Fallback Image */}
              <img src="/assets/images/image-hero-mobile.png" alt="Hero" className="" />
            </picture>
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-stretch gap-x-4 gap-y-11 md:grid-cols-2 lg:grid-cols-3">
          <p className="bg-gradient-orange rounded-[0.625rem] p-7 text-2xl font-extrabold text-white md:px-8 md:py-14 md:leading-8 lg:text-[2rem] lg:leading-10">
            Check out our most popular courses!
          </p>
          <Card
            iconSrc={iconAnimation}
            title="Animation"
            description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
          />
          <Card
            iconSrc={iconDesign}
            title="Design"
            description="Create beautiful, usable interfaces to help shape the future of how the web looks."
          />
          <Card
            iconSrc={iconPhotography}
            title="Photography"
            description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
          />
          <Card
            iconSrc={iconCrypto}
            title="Crypto"
            description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
          />
          <Card
            iconSrc={iconBusiness}
            title="Business"
            description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
          />
        </div>
      </div>

      <div className="bg-dark mb-10 flex items-center justify-between px-4 py-9 md:px-9 lg:px-32">
        <img src={logoLight} alt="logo" className="w-20" />
        <Button className="bg-gradient-blue relative text-white ">
          <div className="absolute left-0 top-0 h-full w-full rounded-[inherit] bg-white opacity-0 hover:opacity-50"></div>
          Get Started
        </Button>
      </div>
    </main>
  )
}
