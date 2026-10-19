export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.5fr_1fr] md:px-8">
        <div className="flex flex-col gap-3">
          <p className="font-serif text-2xl font-semibold">เซลล์วิทยา</p>
          <p className="max-w-md leading-relaxed opacity-85">
            สื่อการเรียนรู้ชีววิทยาเรื่องเซลล์ สำหรับนักเรียนมัธยมศึกษาตอนปลายและผู้สนใจ
            เนื้อหาอ้างอิงจากหลักสูตรชีววิทยาและตำราชีววิทยาระดับมหาวิทยาลัย
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm opacity-85">
          <p className="font-semibold">แหล่งอ้างอิงแนะนำ</p>
          <ul className="flex flex-col gap-1.5">
            <li>หนังสือเรียนรายวิชาเพิ่มเติมชีววิทยา ม.4 เล่ม 1 (สสวท.)</li>
            <li>Campbell Biology, 12th Edition</li>
            <li>Alberts — Molecular Biology of the Cell</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
