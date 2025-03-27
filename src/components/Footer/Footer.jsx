
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="py-10 bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Copyright */}
          <div>
            <div className="mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map((item) => (
                <li key={item}>
                  <Link
                    className="text-gray-700 hover:text-gray-900 transition"
                    to="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {["Account", "Help", "Contact Us", "Customer Support"].map((item) => (
                <li key={item}>
                  <Link
                    className="text-gray-700 hover:text-gray-900 transition"
                    to="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">
              Legals
            </h3>
            <ul className="space-y-2">
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map((item) => (
                <li key={item}>
                  <Link
                    className="text-gray-700 hover:text-gray-900 transition"
                    to="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
