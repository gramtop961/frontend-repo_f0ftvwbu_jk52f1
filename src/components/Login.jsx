import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Placeholder auth flow (no backend call yet)
      await new Promise(r => setTimeout(r, 800))
      if (!email || !password) throw new Error('И-мэйл болон нууц үг оруулна уу')
      alert('Амжилттай нэвтэрлээ! (жишээ)')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur">
          <h2 className="text-2xl font-bold text-white text-center">Нэвтрэх</h2>
          <p className="mt-2 text-slate-300 text-center text-sm">Систем ашиглахын тулд бүртгэлтэй имэйлээрээ нэвтэрнэ үү.</p>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-slate-300 mb-1">И-мэйл</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Нууц үг</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="text-red-400 text-sm">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 disabled:opacity-70"
            >
              {loading ? 'Түр хүлээнэ үү…' : 'Нэвтрэх'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-300 hover:text-blue-200">Нууц үгээ мартсан уу?</a>
          </div>
        </div>
      </div>
    </div>
  )
}
