import React from 'react'
import { Star } from 'lucide-react'
import type { Technology } from '../types/technology'

interface Props {
  tech: Technology
  isAdded: boolean
  onAdd: (tech: Technology) => void
}

const badgeColors: Record<string, string> = {
  popular: 'bg-sky-50 text-sky-600 border-sky-200/80',
  essential: 'bg-sky-50 text-sky-600 border-sky-200/80',
  versatile: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  standard: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  fast: 'bg-orange-50 text-orange-600 border-orange-200/80',
  'top sql': 'bg-blue-50 text-blue-600 border-blue-200/80',
  containers: 'bg-sky-50 text-sky-600 border-sky-200/80',
  cache: 'bg-rose-50 text-rose-600 border-rose-200/80',
  ubiquitous: 'bg-amber-50 text-amber-700 border-amber-200/80',
  modern: 'bg-cyan-50 text-cyan-600 border-cyan-200/80',
  robust: 'bg-sky-50 text-sky-600 border-sky-200/80',
}

export const TechCard: React.FC<Props> = ({ tech, isAdded, onAdd }) => {
  const badgeStyle = tech.badge
    ? badgeColors[tech.badge.toLowerCase()] ||
      'bg-gray-50 text-gray-600 border-gray-200/80'
    : ''

  const handleDuplicateClick = () => {
    if (isAdded) {
      onAdd(tech)
    }
  }

  return (
    <div
      onClick={handleDuplicateClick}
      className={`tech-card rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 bg-white ${
        isAdded
          ? 'tech-card-selected border-2 border-pink-500 shadow-sm ring-2 ring-pink-500/10'
          : 'border border-gray-200/90 shadow-xs hover:shadow-md'
      }`}
    >
      <div className="tech-card-body">
        <div className="tech-card-header flex items-start justify-between gap-2">
          <div className="tech-card-icon-wrapper w-10 h-10 rounded-xl bg-gray-50/80 border border-gray-100 p-2 flex items-center justify-center shrink-0">
            <img
              src={tech.icon}
              alt={tech.name}
              className="tech-card-icon w-6 h-6 object-contain"
              loading="lazy"
            />
          </div>

          {tech.badge && (
            <span
              className={`tech-card-badge text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badgeStyle}`}
            >
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="tech-card-title text-lg font-bold text-gray-900 mt-4 mb-1 tracking-tight">
          {tech.name}
        </h3>
        <p className="tech-card-description text-xs text-gray-500 leading-relaxed min-h-[36px] line-clamp-2">
          {tech.description}
        </p>

        <div className="tech-card-meta mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
          <span className="tech-card-category px-2 py-0.5 rounded-md font-medium bg-gray-50 text-gray-600 border border-gray-200/80">
            {tech.category}
          </span>
          <span className="tech-card-difficulty font-medium text-gray-500">
            {tech.difficulty}
          </span>
          <div className="tech-card-rating flex items-center gap-1 font-semibold text-gray-700">
            <Star className="tech-card-star w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="tech-card-score">{tech.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="tech-card-action mt-5" onClick={handleDuplicateClick}>
        <button
          type="button"
          disabled={isAdded}
          onClick={(e) => {
            e.stopPropagation()
            onAdd(tech)
          }}
          className={`tech-card-btn w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center justify-center gap-1.5 ${
            isAdded
              ? 'tech-card-btn-disabled bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed pointer-events-none select-none'
              : 'tech-card-btn-active bg-[#0f172a] hover:bg-[#1e293b] text-white active:scale-95 shadow-xs cursor-pointer'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  )
}
