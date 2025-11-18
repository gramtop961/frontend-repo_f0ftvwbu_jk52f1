import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { label: 'Бүртгэлтэй хүүхэд', value: '120K+' },
    { label: 'Эмнэлгийн байгууллага', value: '850+' },
    { label: 'Товлол биелэлт', value: '98.4%' },
    { label: 'Сануулгын илгээлт', value: '3.2M+' },
  ]

  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 p-6 text-center bg-slate-50 hover:bg-white hover:shadow-md transition"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{s.value}</div>
              <div className="mt-1 text-slate-600 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
