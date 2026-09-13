import React from 'react'
import { X } from 'lucide-react'
import type { Technology } from '../types/technology'

interface Props {
  stack: Technology[]
  onRemove: (id: string) => void
  onClear: () => void
}

export const StackSidebar: React.FC<Props> = ({ stack, onRemove, onClear }) => {
  const count = stack.length

  return (
    <aside className="stack-sidebar w-full bg-white rounded-3xl border border-gray-100 p-6 shadow-xs sticky top-24">
      <div className="stack-sidebar-header">
        <h2 className="stack-sidebar-title text-xl font-bold text-[#0f172a] tracking-tight">
          Your Stack
        </h2>
        <p className="stack-sidebar-count text-sm text-slate-400 mt-1 font-normal">
          {count > 0
            ? `${count} Technology Selected`
            : 'No technologies selected yet.'}
        </p>
      </div>

      {count === 0 ? (
        <div className="stack-sidebar-empty mt-5 border border-dashed border-slate-200 rounded-2xl py-12 px-4 text-center flex items-center justify-center">
          <p className="stack-sidebar-empty-text text-sm font-medium text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="stack-sidebar-content mt-5 space-y-3">
          <div className="stack-sidebar-list space-y-2.5 max-h-[480px] overflow-y-auto pr-0.5">
            {stack.map((item) => (
              <div
                key={item.id}
                className="stack-sidebar-item border border-slate-100 rounded-2xl p-3 flex items-center justify-between bg-white hover:bg-slate-50/60 transition-colors shadow-xs"
              >
                <div className="stack-sidebar-item-info flex items-center gap-3 min-w-0">
                  <div className="stack-sidebar-item-icon-wrapper w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="stack-sidebar-item-icon w-5 h-5 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="stack-sidebar-item-text truncate">
                    <h4 className="stack-sidebar-item-name text-sm font-bold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <span className="stack-sidebar-item-category text-xs text-slate-400 block font-normal">
                      {item.category}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="stack-sidebar-item-remove-btn p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  aria-label={`Remove ${item.name}`}
                  title={`Remove ${item.name}`}
                >
                  <X className="stack-sidebar-remove-icon w-4 h-4 stroke-[1.75]" />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onClear}
            className="stack-sidebar-clear-btn w-full mt-4 py-3 border border-red-200/80 hover:border-red-300 text-red-500 hover:bg-red-50/50 text-sm font-bold rounded-2xl transition-all duration-150 cursor-pointer active:scale-98"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  )
}
