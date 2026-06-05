export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 bg-[#0a1118]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MS A&M Detailing. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#services"
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
