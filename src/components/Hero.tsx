import React from 'react'

interface Props {
  onExplore: () => void
  onLearnMore: () => void
}

export const Hero: React.FC<Props> = ({ onExplore, onLearnMore }) => {
  return (
    <section id="home" className="hero relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20">
      <div className="hero-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          <div className="hero-content lg:col-span-7 text-center lg:text-left">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.15] tracking-tight">
              Build Your Ideal <br className="hero-break hidden sm:inline" />
              <span className="hero-title-gradient text-brand-gradient">Development Stack</span>
            </h1>

            <p className="hero-description mt-6 text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="hero-actions mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onExplore}
                className="hero-btn-primary w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-gradient text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer active:scale-95"
              >
                Explore Technologies
              </button>
              <button
                type="button"
                onClick={onLearnMore}
                className="hero-btn-secondary w-full sm:w-auto px-8 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 cursor-pointer active:scale-95 shadow-xs"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-graphic-column lg:col-span-5 flex justify-center lg:justify-end">
            <div className="hero-graphic-wrapper relative w-full max-w-sm sm:max-w-md flex justify-center items-center">
              <div 
                className="hero-glow absolute inset-0 bg-gradient-to-tr from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-full blur-2xl -z-10"
                aria-hidden="true" 
              />
              
              <img
                src="/assets/banner-stack.png"
                alt="DevStack 3D Layered Architecture Graphic"
                className="hero-image w-full max-h-[420px] object-contain drop-shadow-2xl hero-float select-none"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
