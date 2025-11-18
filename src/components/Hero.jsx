export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.5),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.5),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Хүүхдийн дархлаажуулалтын бүртгэлийн систем
            </h1>
            <p className="mt-4 text-blue-100 text-lg">
              Эцэг эх, эмч нарт зориулсан дархлаажуулалтын товлогдол, сануулга, бүртгэлийг нэг дороос хялбархан хөтлөөрэй.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold shadow hover:shadow-md transition">Онцлогууд</a>
              <a href="#about" className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">Дэлгэрэнгүй</a>
            </div>
            <div className="mt-6 text-blue-100/80 text-sm">
              Үндэсний дархлаажуулалтын календарийг дагаж автоматаар сануулна.
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/20 bg-white/10 backdrop-blur shadow-2xl overflow-hidden">
              <div className="h-full w-full p-6 grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="h-3 w-24 bg-white/40 rounded" />
                  <div className="h-3 w-32 bg-white/30 rounded" />
                  <div className="h-3 w-20 bg-white/20 rounded" />
                  <div className="h-32 rounded-xl bg-gradient-to-br from-indigo-400/30 to-blue-300/30 border border-white/20" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-20 bg-white/40 rounded" />
                  <div className="h-3 w-28 bg-white/30 rounded" />
                  <div className="h-3 w-24 bg-white/20 rounded" />
                  <div className="h-32 rounded-xl bg-gradient-to-br from-sky-400/30 to-cyan-300/30 border border-white/20" />
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-cyan-400 blur-2xl opacity-30" />
            <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-indigo-500 blur-2xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
