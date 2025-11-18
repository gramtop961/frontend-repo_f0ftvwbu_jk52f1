import { motion } from 'framer-motion'

const data = [
  {
    name: 'Эмч. Нарангэрэл',
    role: 'Дархлаажуулалтын эмч',
    quote: 'Товлол сануулга, тайлангууд маш ойлгомжтой болсон. Алдаа эрс багассан.',
  },
  {
    name: 'Эцэг эх. Бат-Эрдэнэ',
    role: 'Гурван хүүхдийн аав',
    quote: 'Ирэх товоо мартдаг байлаа, одоо цагтаа авч байна. Маш хэрэгтэй апп!',
  },
  {
    name: 'Менежер. Сувд',
    role: 'ЭМ байгууллагын менежер',
    quote: 'Хамрагдалтын үзүүлэлтээ бодит цагт хараад шийдвэр гаргах хялбар болсон.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Хэрэглэгчдийн сэтгэгдэл</h2>
          <p className="mt-2 text-slate-600">Бидний тухай бодит үнэлгээ.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
            >
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
