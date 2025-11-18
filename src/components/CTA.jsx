import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-10 bg-gradient-to-tr from-sky-600 via-indigo-600 to-cyan-500 text-white border border-white/10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-extrabold">Эрүүл ирээдүйг хамтдаа бүтээе</h3>
              <p className="mt-2 text-sky-100/90">Дархлаажуулалтын бүртгэлээ дижитал хэлбэрт шилжүүлж, хамрагдалтыг нэмэгдүүлье.</p>
            </div>
            <motion.a
              href="/login"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="justify-self-start md:justify-self-end inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow"
            >
              Одоо эхлэх
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
