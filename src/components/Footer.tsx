import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="footer w-full bg-white border-t border-gray-100 pt-16 pb-12 mt-20">
      <div className="footer-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-top grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          
          <div className="footer-brand md:col-span-6 lg:col-span-5 space-y-4">
            <a href="#home" className="footer-logo-link inline-block focus:outline-hidden" aria-label="DevStack Home">
              <img
                src="/assets/logo-text.png"
                alt="Dev Stack"
                className="footer-logo h-8 w-auto object-contain"
              />
            </a>

            <p className="footer-description text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="footer-social-links flex items-center gap-4 pt-1 text-gray-500 text-xs font-medium">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link flex items-center gap-1.5 hover:text-gray-900 transition-colors"
                aria-label="DevStack GitHub"
              >
                <svg className="footer-social-icon w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <span className="footer-divider text-gray-300">•</span>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link flex items-center gap-1.5 hover:text-sky-500 transition-colors"
                aria-label="DevStack Twitter"
              >
                <svg className="footer-social-icon w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
              <span className="footer-divider text-gray-300">•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                aria-label="DevStack LinkedIn"
              >
                <svg className="footer-social-icon w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-nav-grid md:col-span-6 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="footer-nav-col">
              <h4 className="footer-nav-heading text-xs font-bold text-gray-900 tracking-wider uppercase mb-3">
                Product
              </h4>
              <ul className="footer-nav-list space-y-2 text-xs text-gray-500">
                <li className="footer-nav-item">
                  <a href="#home" className="footer-nav-link hover:text-gray-900 transition-colors">
                    Home
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#technologies" className="footer-nav-link hover:text-gray-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#projects" className="footer-nav-link hover:text-gray-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-nav-heading text-xs font-bold text-gray-900 tracking-wider uppercase mb-3">
                Company
              </h4>
              <ul className="footer-nav-list space-y-2 text-xs text-gray-500">
                <li className="footer-nav-item">
                  <a href="#about" className="footer-nav-link hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#contact" className="footer-nav-link hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#careers" className="footer-nav-link hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-nav-heading text-xs font-bold text-gray-900 tracking-wider uppercase mb-3">
                Legal
              </h4>
              <ul className="footer-nav-list space-y-2 text-xs text-gray-500">
                <li className="footer-nav-item">
                  <a href="#privacy" className="footer-nav-link hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#terms" className="footer-nav-link hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="footer-copyright">© 2026 DevStack. All rights reserved.</p>
          <div className="footer-legal-links flex items-center gap-6">
            <a href="#privacy" className="footer-legal-link hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="footer-legal-link hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
