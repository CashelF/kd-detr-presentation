import SlideLayout from '../components/SlideLayout';
import Table from '../components/Table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const chartData = [
  { name: 'Def.DETR', baseline: 43.8, detrdistill: 45.8, kddetr: 46.7, teacher: 46.9 },
  { name: 'DAB-DETR', baseline: 42.5, detrdistill: 44.5, kddetr: 45.5, teacher: 45.7 },
  { name: 'DN-DETR', baseline: 43.4, detrdistill: 45.3, kddetr: 46.0, teacher: 46.3 },
  { name: 'DINO', baseline: 49.0, detrdistill: 50.5, kddetr: 51.4, teacher: 51.3 },
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

export default function KDDETRResultsSlide() {
  return (
    <SlideLayout title="KD-DETR: Results on COCO val2017" subtitle="KD-DETR (CVPR 2024)" section="kddetr">
      <div className="flex gap-5 h-full mt-1">
        {/* Table */}
        <div className="flex-1 flex flex-col gap-3">
          <Table
            headers={['Student', 'Teacher', 'Baseline', 'DETRDistill', 'KD-DETR', 'Gain']}
            rows={[
              ['Def. DETR-R50', 'Def. DETR-R101', '43.8', '45.8', '46.7', '+2.9'],
              ['DAB-DETR-R50', 'DAB-DETR-R101', '42.5', '44.5', '45.5', '+3.0'],
              ['DN-DETR-R50', 'DN-DETR-R101', '43.4', '45.3', '46.0', '+2.6'],
              ['DINO-R50', 'DINO-SwinL', '49.0', '50.5', '51.4', '+2.4'],
            ]}
            highlightRow={3}
            caption="COCO val2017 AP (%). KD-DETR consistently outperforms DETRDistill."
            compact
          />

          {/* Ablation */}
          <div className="text-xs text-slide-muted mt-1">Ablation study (Deformable DETR-R50):</div>
          <Table
            headers={['Feature KD', 'Logits KD', 'Attn KD', 'CDP', 'AP', 'Gain']}
            rows={[
              ['', '', '', '', '43.8', '--'],
              ['Yes', '', '', '', '44.5', '+0.7'],
              ['Yes', 'Yes', '', '', '45.4', '+1.6'],
              ['Yes', 'Yes', 'Yes', '', '45.9', '+2.1'],
              ['Yes', 'Yes', 'Yes', 'Yes', '46.7', '+2.9'],
            ]}
            highlightRow={4}
            compact
          />
        </div>

        {/* Chart */}
        <div className="w-[360px] flex flex-col">
          <div className="text-xs text-slide-muted mb-1">KD-DETR vs. DETRDistill across DETR variants</div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 5, left: -10, bottom: 5 }} barGap={1} barSize={16}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis domain={[40, 53]} tick={{ fill: '#94a3b8', fontSize: 10 }}
                  label={{ value: 'AP (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 10, offset: 15 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="baseline" name="Baseline" fill="#64748b" radius={[2, 2, 0, 0]} opacity={0.5} />
                <Bar dataKey="detrdistill" name="DETRDistill" fill="#10b981" radius={[2, 2, 0, 0]} opacity={0.7} />
                <Bar dataKey="kddetr" name="KD-DETR" fill="#f59e0b" radius={[2, 2, 0, 0]} />
                <Bar dataKey="teacher" name="Teacher" fill="#3b82f6" radius={[2, 2, 0, 0]} opacity={0.35} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="flex justify-center gap-3 text-xs mt-1 flex-wrap">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#64748b] opacity-50" /> Baseline</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#10b981] opacity-70" /> DETRDistill</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#f59e0b]" /> KD-DETR</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#3b82f6] opacity-35" /> Teacher</span>
          </div>

          {/* DINO callout */}
          <div className="mt-2 bg-slide-amber/10 rounded-lg p-3 border border-slide-amber/30">
            <div className="text-xs text-slide-amber font-semibold">Notable: DINO-R50</div>
            <div className="text-xs text-slide-muted mt-1">
              KD-DETR student (51.4 AP) exceeds its own teacher (51.3 AP) -- the student surpasses the teacher!
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
