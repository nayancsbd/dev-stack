import React, { useState } from 'react'
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react'
import { toast } from 'react-toastify'

interface Props {
  isOpen: boolean
  mode: 'signin' | 'signup'
  onClose: () => void
  onToggleMode: (mode: 'signin' | 'signup') => void
}

export const AuthModal: React.FC<Props> = ({
  isOpen,
  mode,
  onClose,
  onToggleMode,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (mode === 'signup') {
      toast.success(`Account created for ${name || 'User'}!`)
    } else {
      toast.success('Signed in successfully!')
    }
    onClose()
  }

  return (
    <div className="auth-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="auth-modal-dialog relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="auth-modal-close-btn absolute top-5 right-5 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <X className="auth-modal-close-icon w-5 h-5" />
        </button>

        <div className="auth-modal-header text-center mb-6">
          <div className="auth-modal-logo-badge w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-bold text-base mx-auto mb-3 shadow-md">
            DS
          </div>
          <h3 className="auth-modal-title text-xl font-bold text-gray-900">
            {mode === 'signup' ? 'Create your account' : 'Welcome back'}
          </h3>
          <p className="auth-modal-subtitle text-xs text-gray-500 mt-1">
            {mode === 'signup'
              ? 'Join developers building better software stacks.'
              : 'Sign in to access your saved technology stacks.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-modal-form space-y-4">
          {mode === 'signup' && (
            <div className="auth-modal-field">
              <label className="auth-modal-label block text-xs font-semibold text-gray-700 mb-1.5">
                Full Name
              </label>
              <div className="auth-modal-input-wrapper relative">
                <User className="auth-modal-input-icon w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="auth-modal-input w-full pl-9 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-pink-500"
                />
              </div>
            </div>
          )}

          <div className="auth-modal-field">
            <label className="auth-modal-label block text-xs font-semibold text-gray-700 mb-1.5">
              Email Address
            </label>
            <div className="auth-modal-input-wrapper relative">
              <Mail className="auth-modal-input-icon w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-modal-input w-full pl-9 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

          <div className="auth-modal-field">
            <label className="auth-modal-label block text-xs font-semibold text-gray-700 mb-1.5">
              Password
            </label>
            <div className="auth-modal-input-wrapper relative">
              <Lock className="auth-modal-input-icon w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-modal-input w-full pl-9 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="auth-modal-submit-btn w-full mt-2 py-3 rounded-xl bg-brand-gradient text-white font-semibold text-xs shadow-md hover:opacity-95 transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
          >
            {mode === 'signup' ? 'Create Account' : 'Sign In'}
            <ArrowRight className="auth-modal-submit-icon w-3.5 h-3.5" />
          </button>
        </form>

        <div className="auth-modal-footer mt-6 text-center text-xs text-gray-500 border-t border-gray-100 pt-4">
          {mode === 'signup' ? (
            <p className="auth-modal-switch-text">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => onToggleMode('signin')}
                className="auth-modal-switch-btn font-semibold text-pink-600 hover:text-pink-700 underline cursor-pointer"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p className="auth-modal-switch-text">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => onToggleMode('signup')}
                className="auth-modal-switch-btn font-semibold text-pink-600 hover:text-pink-700 underline cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
