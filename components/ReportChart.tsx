import React from "react";

// กำหนดประเภทของ props
interface ReportChartProps {
  data: { date: string; salesAmount: number }[]; // ตัวอย่างประเภทข้อมูลที่คาดหวัง
}

const ReportChart: React.FC<ReportChartProps> = ({ data }) => {
  return (
    <div>
      <h3 className="text-xl mb-4">รายงานกราฟการขาย</h3>
      <div>
        {/* แสดงข้อมูลตามที่ได้รับจาก props */}
        {data.length === 0 ? (
          <p>ไม่มีข้อมูล</p>
        ) : (
          <div>
            {/* แสดงข้อมูลการขายที่ดึงมา */}
            {data.map((item, index) => (
              <div key={index} className="mb-2">
                <span className="font-semibold">{item.date}</span>:
                <span className="ml-2 text-blue-600">{item.salesAmount}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ตัวอย่างกราฟ - ใช้ไลบรารี Chart.js หรือ Recharts ในการแสดงกราฟ */}
      <div className="mt-6">
        <h4 className="font-bold">กราฟการขาย (ตัวอย่าง)</h4>
        {/* ใส่โค้ดกราฟที่คุณต้องการ เช่นใช้ Recharts หรือ Chart.js */}
        {/* ตัวอย่าง: */}
        {/* <LineChart ... /> */}
      </div>
    </div>
  );
};

export default ReportChart;
