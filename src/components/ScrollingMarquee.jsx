import { useRef, useEffect } from 'react'

export default function ScrollingMarquee() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let start = null
    let raf
    const speed = 40 // px/sec

    const step = (ts) => {
      if (!start) start = ts
      const delta = (ts - start) / 1000
      el.scrollLeft = (delta * speed) % (el.scrollWidth / 2)
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const items = ['ЭМЯ', 'НЭМГ', 'Дархлаажуулалт', 'E-Mongolia', 'Эмнэлэг', 'Эцэг эх', 'Хүүхэд', 'Вакцин']

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className="overflow-x-hidden whitespace-nowrap rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <div className="inline-flex gap-6 px-2">
            {[...items, ...items].map((it, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-slate-600">
                <span className="size-2 rounded-full bg-sky-500" />
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
