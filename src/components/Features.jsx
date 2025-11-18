export default function Features() {
  const features = [
    {
      title: 'Товлогдол ба сануулга',
      desc: 'Дархлаажуулалтын хуваарийг насны үе шат бүрээр тооцоолж SMS/имэйл сануулга илгээх.',
    },
    {
      title: 'Эмнэлгийн бүртгэл',
      desc: 'Тариулсан вакцинууд, тун, огноо, эмчийн тэмдэглэл зэргийг аюулгүй хадгална.',
    },
    {
      title: 'Эцэг эхийн портал',
      desc: 'Хүүхдийн дархлаажуулалтын түүх, ирэх товуудыг нэг цонхноос харах боломж.',
    },
    {
      title: 'Тайлан шинжилгээ',
      desc: 'Нийт хамрагдалт, хоцрогдол, эрсдлийн бүлгийн тайлангуудыг автоматаар гаргах.',
    },
  ]
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Яагаад энэ систем?</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">
          Үр ашигтай, аюулгүй, хэрэглэгчдэд ойлгомжтой байдлаар дархлаажуулалтын мэдээллийг удирдана.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
