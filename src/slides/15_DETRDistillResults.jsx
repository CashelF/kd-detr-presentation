import SlideLayout from '../components/SlideLayout';
import Table from '../components/Table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

const chartData = [
  { name: 'DETR-R50', baseline: 42.0, distilled: 43.7, teacher: 44.9 },
  { name: 'Def.DETR-R50', baseline: 43.8, distilled: 45.8, teacher: 46.9 },
  { name: 'Cond.DETR-R50', baseline: 40.9, distilled: 43.2, teacher: 45.0 },
  { name: 'DAB-DETR-R50', baseline: 42.5, distilled: 44.5, teacher: 45.7 },
  { name: 'DN-DETR-R50', baseline: 43.4, distilled: 45.3, teacher: 46.3 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-xs">
        <div className="font-semibold text-white mb-1">{label}</div>
        {payload.map((p, i) => (
          <div key={i} style={{ color: p.color }}>{p.name}: {p.value} AP</div>
        ))}
      </div>
    );
  }
  return null;
};

export default function DETRDistillResultsSlide() {
  return (
    <SlideLayout title="DETRDistill: Results on COCO val2017" subtitle="DETRDistill (ICCV 2023)" section="detrdistill">
      <div className="flex gap-5 h-full mt-1">
        {/* Table */}
        <div className="flex-1 flex flex-col gap-3">
          <Table
            headers={['Student', 'Teacher', 'Baseline AP', 'DETRDistill AP', 'Gain']}
            rows={[
              ['DETR-R50', 'DETR-R101', '42.0', '43.7', '+1.7'],
              ['Def. DETR-R50', 'Def. DETR-R101', '43.8', '45.8', '+2.0'],
              ['Cond. DETR-R50', 'Cond. DETR-R101', '40.9', '43.2', '+2.3'],
              ['DAB-DETR-R50', 'DAB-DETR-R101', '42.5', '44.5', '+2.0'],
              ['DN-DETR-R50', 'DN-DETR-R101', '43.4', '45.3', '+1.9'],
            ]}
            caption="COCO val2017 AP (%). All students use ResNet-50, teachers use ResNet-101."
            compact
          />

          {/* Ablation */}
          <div className="text-xs text-slide-muted mt-1">Ablation (Deformable DETR-R50):</div>
          <Table
            headers={['HMD', 'TFD', 'QD', 'AP', 'Gain']}
            rows={[
              ['', '', '', '43.8', '--'],
              ['Yes', '', '', '44.7', '+0.9'],
              ['Yes', 'Yes', '', '45.3', '+1.5'],
              ['Yes', 'Yes', 'Yes', '45.8', '+2.0'],
            ]}
            highlightRow={3}
            compact
          />
        </div>

        {/* Chart */}
        <div className="w-[360px] flex flex-col">
          <div className="text-xs text-slide-muted mb-1">AP improvement across DETR variants</div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 5, left: -10, bottom: 40 }} barGap={2} barSize={18}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 8 }} angle={-20} textAnchor="end" interval={0} height={50} />
                <YAxis domain={[38, 48]} tick={{ fill: '#94a3b8', fontSize: 10 }}
                  label={{ value: 'AP (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 10, offset: 15 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="baseline" name="Baseline" fill="#64748b" radius={[3, 3, 0, 0]} opacity={0.6} />
                <Bar dataKey="distilled" name="DETRDistill" fill="#10b981" radius={[3, 3, 0, 0]} />
                <Bar dataKey="teacher" name="Teacher" fill="#3b82f6" radius={[3, 3, 0, 0]} opacity={0.4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="flex justify-center gap-4 text-xs mt-1">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#64748b] opacity-60" /> Baseline</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#10b981]" /> DETRDistill</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#3b82f6] opacity-40" /> Teacher</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
