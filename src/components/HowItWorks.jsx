import { motion } from 'framer-motion'

const steps = [
  { title: 'Бүртгэх', desc: 'Хүүхдийн үндсэн мэдээлэл, харьяа эмнэлэг, харилцах мэдээллийг оруулна.' },
  { title: 'Товлох', desc: 'Нас, өмнөх түүхэд тулгуурлан вакциныг автоматаар товлоно.' },
  { title: 'Сануулга', desc: 'SMS/имэйлээр эцэг эх, эмч нарт хугацаанд нь сануулга явна.' },
  { title: 'Хянах', desc: 'Түүх, тайлан, хамрагдалтыг цаг алдалгүй хянаж удирдана.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Хэрхэн ажилладаг вэ?</h2>
          <p className="mt-2 text-slate-600">4 алхмаар хурдан, аюулгүй, алдаагүй.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl border border-slate-200 bg-white overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-sky-100" />
              <div className="text-4xl font-black text-sky-500/20">{i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
