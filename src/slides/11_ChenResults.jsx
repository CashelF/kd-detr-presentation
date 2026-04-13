import SlideLayout from '../components/SlideLayout';
import Table from '../components/Table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

const data = [
  { name: 'Student\n(baseline)', mAP: 70.1, color: '#10b981' },
  { name: '+ Cls KD', mAP: 71.8, color: '#f59e0b' },
  { name: '+ Feat KD', mAP: 72.4, color: '#a855f7' },
  { name: '+ Reg KD', mAP: 72.0, color: '#06b6d4' },
  { name: 'Full KD', mAP: 73.2, color: '#3b82f6' },
  { name: 'Teacher', mAP: 75.6, color: '#64748b' },
];

export default function ChenResultsSlide() {
  return (
    <SlideLayout title="Chen et al. 2017: Results & Ablation" subtitle="Chen et al. (NeurIPS 2017)" section="chen">
      <div className="flex gap-6 h-full mt-1">
        {/* Table */}
        <div className="flex-1 flex flex-col gap-4">
          <Table
            headers={['Method', 'Backbone', 'mAP', 'mAP Gain']}
            rows={[
              ['Teacher (Faster R-CNN)', 'ResNet-101', '75.6', '--'],
              ['Student (baseline)', 'ResNet-50', '70.1', '--'],
              ['+ Feature imitation', 'ResNet-50', '72.4', '+2.3'],
              ['+ Classification KD', 'ResNet-50', '71.8', '+1.7'],
              ['+ Regression KD', 'ResNet-50', '72.0', '+1.9'],
              ['Full pipeline', 'ResNet-50', '73.2', '+3.1'],
            ]}
            highlightRow={5}
            caption="PASCAL VOC 2007 test results (mAP %)"
          />

          <div className="flex gap-3">
            <div className="flex-1 bg-slide-surface rounded-lg p-3 border border-slide-border/50">
              <div className="text-xs font-semibold text-slide-green mb-1">Takeaway</div>
              <div className="text-xs text-slide-muted">Feature imitation provides the largest individual gain. Combining all three distillation losses yields the best results.</div>
            </div>
            <div className="flex-1 bg-slide-surface rounded-lg p-3 border border-slide-border/50">
              <div className="text-xs font-semibold text-slide-red mb-1">Limitation</div>
              <div className="text-xs text-slide-muted">Relies on anchor-based spatial correspondence. Cannot be directly applied to anchor-free methods like DETR.</div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="w-80 flex flex-col">
          <div className="text-xs text-slide-muted mb-2">Ablation: contribution of each KD component</div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 40 }} barSize={36}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 9 }} angle={-25} textAnchor="end" interval={0} height={50} />
                <YAxis domain={[68, 76]} tick={{ fill: '#94a3b8', fontSize: 10 }}
                  label={{ value: 'mAP (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 10, offset: 15 }} />
                <Tooltip
                  contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 8, fontSize: 11 }}
                  labelStyle={{ color: '#f8fafc' }}
                />
                <ReferenceLine y={75.6} stroke="#64748b" strokeDasharray="4 4" label={{ value: 'Teacher', fill: '#64748b', fontSize: 10 }} />
                <Bar dataKey="mAP" radius={[4, 4, 0, 0]}>
                  {data.map((d, i) => (
                    <Cell key={i} fill={d.color} opacity={0.85} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
