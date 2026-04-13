import SlideLayout from '../components/SlideLayout';
import { ArrowDefs, Arrow, Box } from '../components/DiagramArrow';

const naivePairs = [
  { teacher: 'Q1: background', student: 'Q1: person' },
  { teacher: 'Q2: car', student: 'Q2: background' },
  { teacher: 'Q3: person', student: 'Q3: car' },
];

const outputPairs = [
  { teacher: 'Q2: car', student: 'Q3: car' },
  { teacher: 'Q3: person', student: 'Q1: person' },
];

const solutionSteps = [
  { x: 148, label: 'Sample points', sublabel: 'from teacher detections' },
  { x: 390, label: 'Build shared queries', sublabel: 'same reference for T and S' },
  { x: 632, label: 'Compare features', sublabel: 'aligned semantic locations' },
];

export default function KDDETRMotivationSlide() {
  return (
    <SlideLayout title="KD-DETR: The Inconsistent Distillation Points Problem" subtitle="KD-DETR (CVPR 2024)" section="kddetr">
      <div className="h-full pt-1">
        <svg viewBox="0 0 980 500" className="w-full h-full">
          <ArrowDefs />

          <rect x={82} y={14} width={816} height={48} rx={14} fill="rgba(239,68,68,0.09)" stroke="#ef4444" strokeWidth={2} />
          <text x={490} y={43} textAnchor="middle" fill="#ef4444" fontSize={18} fontWeight="700" fontFamily="Inter, sans-serif">
            Problem: teacher and student query slots do not keep the same semantics
          </text>

          <rect x={40} y={95} width={410} height={250} rx={18} fill="rgba(239,68,68,0.03)" stroke="rgba(239,68,68,0.55)" strokeWidth={1.5} />
          <rect x={60} y={112} width={180} height={28} rx={14} fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth={1} />
          <text x={150} y={130} textAnchor="middle" fill="#ef4444" fontSize={12} fontWeight="700" fontFamily="Inter, sans-serif">
            Naive index matching
          </text>
          <text x={245} y={130} fill="#94a3b8" fontSize={11} fontFamily="Inter, sans-serif">
            Same slot, different meaning
          </text>

          {naivePairs.map((pair, i) => {
            const y = 154 + i * 56;
            const cy = y + 22;

            return (
              <g key={pair.teacher}>
                <Box
                  x={72}
                  y={y}
                  w={150}
                  h={44}
                  label={pair.teacher}
                  sublabel="Teacher"
                  color="rgba(59,130,246,0.10)"
                  border="#3b82f6"
                  textColor="#60a5fa"
                  fontSize={11}
                  rx={8}
                />
                <line x1={224} y1={cy} x2={264} y2={cy} stroke="#ef4444" strokeWidth={2} strokeDasharray="6 5" />
                <circle cx={247} cy={cy} r={13} fill="#0f172a" stroke="#ef4444" strokeWidth={2} />
                <line x1={241} y1={cy - 6} x2={253} y2={cy + 6} stroke="#ef4444" strokeWidth={2.5} strokeLinecap="round" />
                <line x1={253} y1={cy - 6} x2={241} y2={cy + 6} stroke="#ef4444" strokeWidth={2.5} strokeLinecap="round" />
                <Box
                  x={272}
                  y={y}
                  w={150}
                  h={44}
                  label={pair.student}
                  sublabel="Student"
                  color="rgba(16,185,129,0.09)"
                  border="#10b981"
                  textColor="#34d399"
                  fontSize={11}
                  rx={8}
                />
              </g>
            );
          })}

          <rect x={72} y={320} width={350} height={26} rx={13} fill="rgba(239,68,68,0.10)" />
          <text x={247} y={337} textAnchor="middle" fill="#f87171" fontSize={11} fontWeight="600" fontFamily="Inter, sans-serif">
            Query slots drift, so feature distillation sends the wrong signal
          </text>

          <rect x={500} y={95} width={440} height={250} rx={18} fill="rgba(16,185,129,0.03)" stroke="rgba(16,185,129,0.55)" strokeWidth={1.5} />
          <rect x={520} y={112} width={188} height={28} rx={14} fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth={1} />
          <text x={614} y={130} textAnchor="middle" fill="#10b981" fontSize={12} fontWeight="700" fontFamily="Inter, sans-serif">
            Output matching helps
          </text>
          <rect x={720} y={112} width={178} height={28} rx={14} fill="rgba(245,158,11,0.10)" stroke="#f59e0b" strokeWidth={1} />
          <text x={809} y={130} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="600" fontFamily="Inter, sans-serif">
            Hungarian matching
          </text>

          {outputPairs.map((pair, i) => {
            const y = 160 + i * 64;
            const cy = y + 22;

            return (
              <g key={pair.teacher}>
                <Box
                  x={538}
                  y={y}
                  w={152}
                  h={44}
                  label={pair.teacher}
                  sublabel="Teacher"
                  color="rgba(59,130,246,0.10)"
                  border="#3b82f6"
                  textColor="#60a5fa"
                  fontSize={11}
                  rx={8}
                />
                <Arrow x1={694} y1={cy} x2={756} y2={cy} color="green" />
                <Box
                  x={760}
                  y={y}
                  w={152}
                  h={44}
                  label={pair.student}
                  sublabel="Student"
                  color="rgba(16,185,129,0.09)"
                  border="#10b981"
                  textColor="#34d399"
                  fontSize={11}
                  rx={8}
                />
              </g>
            );
          })}

          <text x={720} y={296} textAnchor="middle" fill="#34d399" fontSize={12} fontWeight="700" fontFamily="Inter, sans-serif">
            Predictions can be paired correctly
          </text>
          <rect x={606} y={306} width={228} height={38} rx={14} fill="rgba(245,158,11,0.10)" stroke="#f59e0b" strokeWidth={1} />
          <text x={720} y={322} textAnchor="middle" fill="#fbbf24" fontSize={10.5} fontWeight="600" fontFamily="Inter, sans-serif">
            Intermediate features still come from
          </text>
          <text x={720} y={335} textAnchor="middle" fill="#fbbf24" fontSize={10.5} fontWeight="600" fontFamily="Inter, sans-serif">
            different query paths
          </text>

          <rect x={110} y={376} width={760} height={106} rx={20} fill="rgba(245,158,11,0.10)" stroke="#f59e0b" strokeWidth={2.5} />
          <text x={490} y={407} textAnchor="middle" fill="#f59e0b" fontSize={20} fontWeight="700" fontFamily="Inter, sans-serif">
            KD-DETR: create consistent distillation points first
          </text>
          <text x={490} y={428} textAnchor="middle" fill="#cbd5e1" fontSize={12} fontFamily="Inter, sans-serif">
            The fix is to compare features only after teacher and student are anchored to the same semantic reference points.
          </text>

          {solutionSteps.map((step) => (
            <Box
              key={step.label}
              x={step.x}
              y={440}
              w={200}
              h={32}
              label={step.label}
              sublabel={step.sublabel}
              color="rgba(245,158,11,0.14)"
              border="#f59e0b"
              textColor="#fbbf24"
              fontSize={10}
              rx={10}
            />
          ))}

          <Arrow x1={350} y1={456} x2={388} y2={456} color="amber" />
          <Arrow x1={592} y1={456} x2={630} y2={456} color="amber" />
        </svg>
      </div>
    </SlideLayout>
  );
}
