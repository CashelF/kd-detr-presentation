import SlideLayout from '../components/SlideLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const data = [
  { name: 'DETR-R50', params: 41, gflops: 86, ap: 42.0 },
  { name: 'DETR-R101', params: 60, gflops: 152, ap: 43.5 },
  { name: 'Def. DETR-R50', params: 40, gflops: 173, ap: 43.8 },
  { name: 'DINO-R50', params: 47, gflops: 279, ap: 49.0 },
  { name: 'DINO-SwinL', params: 218, gflops: 1452, ap: 56.8 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="bg-slide-surface border border-slide-border rounded-lg px-3 py-2 text-xs shadow-lg">
        <div className="font-semibold text-slide-text mb-1">{label}</div>
        {payload.map((p, i) => (
          <div key={i} style={{ color: p.color }}>{p.name}: {p.value}{p.name === 'AP' ? '' : p.name === 'GFLOPs' ? '' : 'M'}</div>
        ))}
      </div>
    );
  }
  return null;
};

export default function WhyCompressSlide() {
  return (
    <SlideLayout title="Motivation: Why Compress DETR Models?" subtitle="The KD Challenge" section="challenge">
      <div className="flex gap-6 h-full mt-1">
        {/* Chart */}
        <div className="flex-1 flex flex-col">
          <div className="text-xs text-slide-muted mb-2">Model size (params) vs. computational cost (GFLOPs)</div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4a4138" />
                <XAxis dataKey="name" tick={{ fill: '#b5aba0', fontSize: 10 }} />
                <YAxis yAxisId="left" tick={{ fill: '#b5aba0', fontSize: 10 }}
                  label={{ value: 'Params (M)', angle: -90, position: 'insideLeft', fill: '#b5aba0', fontSize: 10 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: '#b5aba0', fontSize: 10 }}
                  label={{ value: 'GFLOPs', angle: 90, position: 'insideRight', fill: '#b5aba0', fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11, color: '#b5aba0' }} />
                <Bar yAxisId="left" dataKey="params" name="Params (M)" radius={[4, 4, 0, 0]}>
                  {data.map((_, i) => (
                    <Cell key={i} fill={i === data.length - 1 ? '#ad6e5f' : '#e7e0d6'} opacity={0.82} />
                  ))}
                </Bar>
                <Bar yAxisId="right" dataKey="gflops" name="GFLOPs" radius={[4, 4, 0, 0]}>
                  {data.map((_, i) => (
                    <Cell key={i} fill={i === data.length - 1 ? '#b8915e' : '#8ea07d'} opacity={0.82} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right side info */}
        <div className="w-64 flex flex-col gap-3 pt-2">
          <div className="bg-slide-red/10 rounded-lg p-4 border border-slide-red/30">
            <div className="text-xs font-semibold text-slide-red mb-2">The Problem</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              DINO-SwinL achieves 56.8 AP but requires 218M params and 1452 GFLOPs -- impractical for edge deployment.
            </div>
          </div>

          <div className="bg-slide-surface rounded-lg p-4 border border-slide-border/50">
            <div className="text-xs font-semibold text-slide-accent mb-2">Target Scenarios</div>
            <ul className="text-xs text-slide-muted space-y-1 leading-relaxed">
              <li>Mobile / embedded devices</li>
              <li>Real-time robotics</li>
              <li>Autonomous driving</li>
              <li>Edge AI inference</li>
            </ul>
          </div>

          <div className="bg-slide-surface rounded-lg p-4 border border-slide-border/50">
            <div className="text-xs font-semibold text-slide-green mb-2">Knowledge Distillation</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              Transfer knowledge from a large, accurate teacher to a small, efficient student -- keep most of the accuracy at a fraction of the cost.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
