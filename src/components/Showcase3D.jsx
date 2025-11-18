import Spline from '@splinetool/react-spline'

export default function Showcase3D() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-sky-700 to-cyan-600">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.2),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-0 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="p-10 text-white">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">3D Танилцуулга</h2>
            <p className="mt-3 text-sky-100/90">Орчин үеийн 3D дүрслэлээр мэдээллээ илүү ойлгомжтой, сонирхолтойгоор хүргэнэ.</p>
            <ul className="mt-6 space-y-2 text-sky-100/90 list-disc list-inside">
              <li>Интерактив, хөдөлгөөнтэй дүрслэл</li>
              <li>Хөнгөн, гүйцэтгэл сайтай</li>
              <li>Бүх төрлийн төхөөрөмжид нийцдэг</li>
            </ul>
          </div>
          <div className="h-[420px] lg:h-[520px]">
            {/* Public Spline demo scene for a medical-ish 3D illustration. Safe fallback if blocked. */}
            <Spline scene="https://prod.spline.design/QcZ5QnE6h3l2Qf3I/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}
