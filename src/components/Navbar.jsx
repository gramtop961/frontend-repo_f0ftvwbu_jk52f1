import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md text-sm font-medium transition-colors ` +
        (isActive ? 'text-white bg-blue-600' : 'text-slate-200 hover:text-white hover:bg-white/10')
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 shadow ring-2 ring-white/20" />
            <span className="text-white font-semibold">Дархлаажуулалт</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('#features', 'Онцлогууд')}
            {navItem('#about', 'Тухай')}
            <Link to="/login" className="ml-2 px-4 py-2 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors">
              Нэвтрэх
            </Link>
          </nav>

          <button
            className="md:hidden text-slate-200 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 flex flex-col gap-2">
            <a href="#features" className="px-4 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10">Онцлогууд</a>
            <a href="#about" className="px-4 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10">Тухай</a>
            <Link to="/login" className="px-4 py-2 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-200">Нэвтрэх</Link>
          </div>
        </div>
      )}
    </header>
  )
}
