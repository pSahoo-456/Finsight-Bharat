import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Newsletter Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h2>
          <div className="flex items-center bg-gray-800 rounded-lg p-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none p-2"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              ➤
            </button>
          </div>
          <h3 className="mt-6 text-lg font-semibold">Download App</h3>
          <div className="flex space-x-4 mt-2">
            <img src="./appstore.png" alt="App Store" className="h-10" />
            <img src="./googleplay.png" alt="Google Play" className="h-10" />
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Blogs Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our blogs</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Blog list</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog grid</a></li>
          </ul>
        </div>

        {/* Support and Social Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-4">Social</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedinIn size={24} /></a>
            <a href="#" className="hover:text-blue-500"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p>Copyright 2023 by <a href="#" className="text-blue-500 hover:underline">DexignLab</a>. All rights reserved.</p>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-5 right-5">
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex justify-center items-center transition-transform transform hover:scale-110"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <IoIosArrowUp size={28} />
        </button>
      </div>
    </footer>
    </>
  )
}
export default Footer
