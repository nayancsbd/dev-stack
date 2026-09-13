import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface Props {
  onSignIn: () => void
  onSignUp: () => void
  onNavigate?: (id: string) => void
}

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'Technologies', target: 'technologies' },
  { label: 'Projects', target: 'projects' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
]

export const Navbar: React.FC<Props> = ({ onSignIn, onSignUp, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  const handleScroll = (e: React.MouseEvent, target: string, label: string) => {
    e.preventDefault()
    setActiveItem(label)
    setIsOpen(false)
    if (onNavigate) {
      onNavigate(target)
    } else {
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="navbar sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="navbar-desktop hidden md:flex h-16 sm:h-20 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, 'home', 'Home')}
            className="navbar-brand flex items-center focus:outline-hidden"
            aria-label="DevStack Home"
          >
            <img
              src="/assets/logo-text.png"
              alt="Dev Stack"
              className="navbar-logo h-8 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'flex'
                }
              }}
            />
            <div className="navbar-fallback-brand hidden items-center gap-2.5">
              <div className="navbar-fallback-icon w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-bold text-sm shadow-xs">
                DS
              </div>
              <span className="navbar-fallback-text text-xl font-black text-gray-900">
                Dev<span className="navbar-brand-gradient text-brand-gradient">Stack</span>
              </span>
            </div>
          </a>

          <nav className="navbar-nav flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeItem === item.label
              return (
                <a
                  key={item.label}
                  href={`#${item.target}`}
                  onClick={(e) => handleScroll(e, item.target, item.label)}
                  className={`navbar-link text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'navbar-link-active text-pink-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-950'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="navbar-auth-actions flex items-center gap-3">
            <button
              type="button"
              onClick={onSignIn}
              className="navbar-signin-btn text-sm font-semibold text-gray-700 hover:text-gray-950 transition-colors px-3 py-2 cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={onSignUp}
              className="navbar-signup-btn text-sm font-semibold text-white bg-brand-gradient hover:opacity-95 shadow-xs hover:shadow-md px-6 py-2.5 rounded-full transition-all duration-150 cursor-pointer active:scale-95"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="navbar-mobile flex md:hidden h-16 items-center justify-between gap-2">
          <div className="navbar-mobile-toggle-wrapper flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-toggle-btn p-2 -ml-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="navbar-toggle-icon w-6 h-6" /> : <Menu className="navbar-toggle-icon w-6 h-6" />}
            </button>
          </div>

          <div className="navbar-mobile-brand flex items-center justify-center flex-1">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home', 'Home')}
              className="navbar-mobile-logo-link flex items-center focus:outline-hidden"
              aria-label="DevStack Home"
            >
              <img
                src="/assets/logo-text.png"
                alt="Dev Stack"
                className="navbar-mobile-logo h-7 w-auto object-contain"
              />
            </a>
          </div>

          <div className="navbar-mobile-auth flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={onSignIn}
              className="navbar-mobile-signin text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-950 px-2 py-1.5 cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={onSignUp}
              className="navbar-mobile-signup text-xs sm:text-sm font-semibold text-white bg-brand-gradient hover:opacity-95 px-3.5 py-1.5 rounded-full transition-transform cursor-pointer active:scale-95 shadow-xs"
            >
              Sign Up
            </button>
          </div>
        </div>

      </div>

      {isOpen && (
        <div className="navbar-drawer md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-1.5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const isActive = activeItem === item.label
            return (
              <a
                key={item.label}
                href={`#${item.target}`}
                onClick={(e) => handleScroll(e, item.target, item.label)}
                className={`navbar-drawer-link block px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'navbar-drawer-link-active text-pink-600 bg-pink-50/50 font-semibold'
                    : 'text-gray-700 hover:text-gray-950 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
