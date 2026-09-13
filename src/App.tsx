import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Loader2 } from 'lucide-react'

import type { Technology } from './types/technology'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TechCard } from './components/TechCard'
import { StackSidebar } from './components/StackSidebar'
import { Footer } from './components/Footer'
import { AuthModal } from './components/AuthModal'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedStack, setSelectedStack] = useState<Technology[]>([])

  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup')

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true)
        const res = await fetch('/technologies.json')
        if (!res.ok) throw new Error('Failed to fetch technologies data')
        const data = await res.json()
        await new Promise((resolve) => setTimeout(resolve, 350))
        setTechnologies(data)
      } catch (err) {
        console.error(err)
        setError('Failed to load technologies. Please try again.')
        toast.error('Could not load technologies data')
      } finally {
        setLoading(false)
      }
    }

    loadTechnologies()
  }, [])

  const isInStack = (id: string) => {
    return selectedStack.some((item) => item.id === id)
  }

  const addToStack = (tech: Technology) => {
    if (isInStack(tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`, {
        autoClose: 2000,
      })
      return
    }

    setSelectedStack((prev) => [...prev, tech])
    toast.success(`Added ${tech.name} to your stack!`, {
      autoClose: 2000,
    })
  }

  const removeFromStack = (id: string) => {
    const item = selectedStack.find((t) => t.id === id)
    setSelectedStack((prev) => prev.filter((t) => t.id !== id))
    if (item) {
      toast.info(`Removed ${item.name} from your stack`, {
        autoClose: 2000,
      })
    }
  }

  const clearStack = () => {
    if (selectedStack.length === 0) return
    setSelectedStack([])
    toast.error('Cleared all technologies from your stack', {
      autoClose: 2000,
    })
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-root min-h-screen bg-white text-gray-900 flex flex-col antialiased selection:bg-pink-500 selection:text-white">
      <Navbar
        onSignIn={() => {
          setAuthMode('signin')
          setAuthOpen(true)
        }}
        onSignUp={() => {
          setAuthMode('signup')
          setAuthOpen(true)
        }}
        onNavigate={scrollTo}
      />

      <main className="app-main flex-1">
        <Hero
          onExplore={() => scrollTo('technologies')}
          onLearnMore={() => {
            toast.info(
              'DevStack helps you compare and assemble the best tools for your next project.'
            )
          }}
        />

        <section id="technologies" className="technologies-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
          <div className="technologies-header mb-10 text-center lg:text-left">
            <h2 className="technologies-title text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Explore the <span className="technologies-title-gradient text-brand-gradient">Technologies</span>
            </h2>
            <p className="technologies-subtitle mt-2 text-sm sm:text-base text-gray-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <div className="technologies-loading py-24 flex flex-col items-center justify-center gap-3">
              <Loader2 className="technologies-loading-spinner w-9 h-9 text-pink-500 animate-spin" />
              <p className="technologies-loading-text text-sm font-medium text-gray-500">Loading technologies...</p>
            </div>
          ) : error ? (
            <div className="technologies-error py-16 text-center text-red-500 text-sm font-medium">
              {error}
            </div>
          ) : (
            <div className="technologies-layout-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="technologies-cards-grid lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={isInStack(tech.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>

              <div className="technologies-sidebar-col lg:col-span-4 xl:col-span-3">
                <StackSidebar
                  stack={selectedStack}
                  onRemove={removeFromStack}
                  onClear={clearStack}
                />
              </div>
            </div>
          )}
        </section>

        <div id="projects" className="sr-only" />
        <div id="about" className="sr-only" />
        <div id="contact" className="sr-only" />
      </main>

      <Footer />

      <AuthModal
        isOpen={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onToggleMode={(mode) => setAuthMode(mode)}
      />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
