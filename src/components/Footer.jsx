export default function Footer() {
  return (
    <footer id="about" className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold">Тухай</h4>
            <p className="mt-2 text-sm text-slate-400">
              Хүүхдийн дархлаажуулалтын бүртгэлийн систем нь эрүүл мэндийн байгууллага, эцэг эхэд зориулсан найдвартай удирдлагын хэрэгсэл юм.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Холбоо барих</h4>
            <p className="mt-2 text-sm text-slate-400">support@immun.mn</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Хэрэглээ</h4>
            <p className="mt-2 text-sm text-slate-400">Вэб болон мобайл төхөөрөмжүүдэд бүрэн нийцтэй.</p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Immun Registry</div>
      </div>
    </footer>
  )
}
