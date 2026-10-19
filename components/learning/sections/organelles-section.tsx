import { OrganelleExplorer } from '../organelle-explorer'
import { DeepDive, Section, SubHeading } from '../section-shell'

const compare = [
  { item: 'ผนังเซลล์', animal: false, plant: true },
  { item: 'คลอโรพลาสต์', animal: false, plant: true },
  { item: 'แวคิวโอลกลางขนาดใหญ่', animal: false, plant: true },
  { item: 'พลาสโมเดสมาตา', animal: false, plant: true },
  { item: 'เซนทริโอล', animal: true, plant: false },
  { item: 'ไลโซโซม (ชัดเจน)', animal: true, plant: false },
  { item: 'คอเลสเตอรอลในเยื่อหุ้ม', animal: true, plant: false },
  { item: 'นิวเคลียส ไมโทคอนเดรีย ER กอลจิ', animal: true, plant: true },
]

export function OrganellesSection() {
  return (
    <Section
      id="organelles"
      number="04"
      eyebrow="สำรวจแบบโต้ตอบ"
      title="โครงสร้างและหน้าที่ของออร์แกเนลล์"
      intro="ออร์แกเนลล์ (organelle) คือ “อวัยวะเล็ก ๆ” ภายในเซลล์ยูคาริโอต การแบ่งพื้นที่ด้วยเยื่อหุ้ม (compartmentalization) ทำให้ปฏิกิริยาเคมีที่ต้องการสภาวะต่างกันเกิดขึ้นพร้อมกันได้ เลือกชนิดเซลล์และออร์แกเนลล์เพื่อเรียนรู้รายละเอียด"
    >
      <OrganelleExplorer />

      <div className="flex flex-col gap-5">
        <SubHeading>เปรียบเทียบเซลล์สัตว์กับเซลล์พืช</SubHeading>
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[480px] text-left text-sm">
            <caption className="sr-only">ตารางเปรียบเทียบโครงสร้างที่พบในเซลล์สัตว์และเซลล์พืช</caption>
            <thead>
              <tr className="border-b border-border bg-muted">
                <th scope="col" className="px-4 py-3 font-semibold">โครงสร้าง</th>
                <th scope="col" className="px-4 py-3 text-center font-semibold">เซลล์สัตว์</th>
                <th scope="col" className="px-4 py-3 text-center font-semibold">เซลล์พืช</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((c) => (
                <tr key={c.item} className="border-b border-border last:border-0">
                  <th scope="row" className="px-4 py-3 font-medium">{c.item}</th>
                  {[c.animal, c.plant].map((has, i) => (
                    <td key={i} className="px-4 py-3 text-center">
                      <span
                        className={
                          has
                            ? 'inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary'
                            : 'inline-flex rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground'
                        }
                      >
                        {has ? 'มี' : 'ไม่มี / พบน้อย'}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DeepDive title="ระบบเยื่อหุ้มภายใน (Endomembrane System) — สายพานการผลิตโปรตีน">
        <p>
          ออร์แกเนลล์หลายชนิดทำงานเชื่อมโยงกันเป็นระบบเดียว ลองติดตามเส้นทางของ “อินซูลิน” ที่เซลล์ตับอ่อนสร้างขึ้น:
        </p>
        <ol className="ml-5 list-decimal space-y-1.5">
          <li>นิวเคลียสถอดรหัสยีนอินซูลินเป็น mRNA และส่งออกทางรูนิวเคลียส</li>
          <li>ไรโบโซมบน RER แปลรหัสเป็นสายพอลิเพปไทด์ ซึ่งถูกส่งเข้าไปพับตัวภายใน ER</li>
          <li>ทรานสพอร์ตเวสิเคิลนำโปรตีนจาก ER ไปยังด้าน cis ของกอลจิ</li>
          <li>กอลจิดัดแปลง คัดแยก และบรรจุโปรตีนลงเวสิเคิลหลั่ง (secretory vesicle) ที่ด้าน trans</li>
          <li>เวสิเคิลรวมกับเยื่อหุ้มเซลล์และปล่อยอินซูลินสู่กระแสเลือดด้วยเอกโซไซโทซิส</li>
        </ol>
        <p>
          George Palade ใช้กรดอะมิโนติดฉลากกัมมันตรังสีติดตามเส้นทางนี้ในเซลล์ตับอ่อน
          และได้รับรางวัลโนเบลสาขาการแพทย์ปี 1974
        </p>
      </DeepDive>
    </Section>
  )
}
