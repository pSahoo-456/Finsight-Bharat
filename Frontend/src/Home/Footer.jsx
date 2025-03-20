import React from 'react'
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="bg-gray-100 py-10 px-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
          <div>
            <h3 className="text-xl font-bold text-blue-600">FinSight <span className="text-gray-800">India</span></h3>
            <p className="mt-2 text-gray-600">AI-powered financial insights platform delivering economic indicators, market intelligence, and report generation capabilities.</p>
            <div className="flex space-x-4 mt-4">
              <FaTwitter className="text-gray-500 text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-gray-500 text-2xl cursor-pointer hover:text-blue-600" />
              <FaEnvelope className="text-gray-500 text-2xl cursor-pointer hover:text-blue-600" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Platform</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-600">Dashboard</a></li>
              <li><a href="#" className="hover:text-blue-600">Market Intelligence</a></li>
              <li><a href="#" className="hover:text-blue-600">Reports</a></li>
              <li><a href="#" className="hover:text-blue-600">Explore Data</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-600">API</a></li>
              <li><a href="#" className="hover:text-blue-600">Data Sources</a></li>
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-6">© 2025 FinSight India. All rights reserved. Powered by AI.</p>
      </footer>
    </>
  )
}
export default Footer
