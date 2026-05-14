import SlideLayout from '../components/SlideLayout';
import { ArrowDefs } from '../components/DiagramArrow';

const carPoints = [
  [90, 138],
  [112, 148],
  [146, 139],
  [168, 148],
];

const personPoints = [
  [228, 152],
  [248, 164],
  [272, 150],
  [296, 162],
];

const queryBlocks = [
  { x: 414, y: 86, label: 'CDP Query Prior', color: '#f59e0b' },
  { x: 414, y: 130, label: 'Positional Encoding', color: '#a855f7' },
  { x: 414, y: 174, label: 'Content Query', color: '#06b6d4' },
];

export default function ConsistentDistillationPointsSlide() {
  return (
    <SlideLayout title="KD-DETR: Consistent Distillation Points Sampling" subtitle="KD-DETR (CVPR 2024)" section="kddetr">
      <div className="h-full pt-1">
        <svg viewBox="0 0 980 500" className="w-full h-full">
          <ArrowDefs />
          <defs>
            <marker id="ah-small-amber" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0 0, 7 2.5, 0 5" fill="#f59e0b" />
            </marker>
          </defs>

          {/* Step 1 */}
          <rect x={20} y={18} width={332} height={204} rx={20} fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.4)" strokeWidth={1.5} />
          <rect x={38} y={34} width={88} height={28} rx={14} fill="rgba(245,158,11,0.14)" stroke="#f59e0b" strokeWidth={1} />
          <text x={82} y={52} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight="700" fontFamily="Inter, sans-serif">
            Step 1
          </text>
          <text x={144} y={47} fill="#cbd5e1" fontSize={11.5} fontWeight="600" fontFamily="Inter, sans-serif">
            Sample CDP queries
          </text>
          <text x={144} y={61} fill="#cbd5e1" fontSize={11.5} fontWeight="600" fontFamily="Inter, sans-serif">
            general + teacher-specific
          </text>

          <rect x={40} y={74} width={292} height={108} rx={14} fill="#1e293b" stroke="#334155" strokeWidth={1.2} />
          <text x={186} y={95} textAnchor="middle" fill="#94a3b8" fontSize={10} fontWeight="500" fontFamily="Inter, sans-serif">
            Teacher-guided query priors
          </text>

          <rect x={64} y={106} width={118} height={50} rx={10} fill="rgba(59,130,246,0.06)" stroke="#3b82f6" strokeWidth={1.8} strokeDasharray="6 5" />
          <text x={123} y={121} textAnchor="middle" fill="#60a5fa" fontSize={8.5} fontWeight="600" fontFamily="Inter, sans-serif">
            car region
          </text>
          {carPoints.map(([cx, cy], i) => (
            <circle key={`car-${i}`} cx={cx} cy={cy} r={6} fill="#f59e0b" stroke="#0f172a" strokeWidth={1.2} />
          ))}

          <rect x={208} y={118} width={110} height={56} rx={10} fill="rgba(16,185,129,0.06)" stroke="#10b981" strokeWidth={1.8} strokeDasharray="6 5" />
          <text x={263} y={134} textAnchor="middle" fill="#34d399" fontSize={8.5} fontWeight="600" fontFamily="Inter, sans-serif">
            person region
          </text>
          {personPoints.map(([cx, cy], i) => (
            <circle key={`person-${i}`} cx={cx} cy={cy} r={6} fill="#f59e0b" stroke="#0f172a" strokeWidth={1.2} />
          ))}

          <rect x={62} y={192} width={248} height={22} rx={11} fill="rgba(245,158,11,0.10)" />
          <text x={186} y={207} textAnchor="middle" fill="#fbbf24" fontSize={10.5} fontWeight="600" fontFamily="Inter, sans-serif">
            Sample shared distillation queries
          </text>

          {/* Step 2 */}
          <rect x={372} y={18} width={588} height={204} rx={20} fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.4)" strokeWidth={1.5} />
          <rect x={390} y={34} width={88} height={28} rx={14} fill="rgba(245,158,11,0.14)" stroke="#f59e0b" strokeWidth={1} />
          <text x={434} y={52} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight="700" fontFamily="Inter, sans-serif">
            Step 2
          </text>
          <text x={494} y={52} fill="#cbd5e1" fontSize={12} fontWeight="600" fontFamily="Inter, sans-serif">
            Build one shared object query from each reference point
          </text>

          {queryBlocks.map((block, i) => (
            <g key={block.label}>
              <rect x={block.x} y={block.y} width={214} height={34} rx={10} fill={`${block.color}18`} stroke={block.color} strokeWidth={1.8} />
              <text x={block.x + 107} y={block.y + 22} textAnchor="middle" fill={block.color} fontSize={11} fontWeight="600" fontFamily="Inter, sans-serif">
                {block.label}
              </text>
              {i < queryBlocks.length - 1 && (
                <line
                  x1={521}
                  y1={block.y + 34}
                  x2={521}
                  y2={block.y + 42}
                  stroke="#f59e0b"
                  strokeWidth={1.8}
                  markerEnd="url(#ah-small-amber)"
                />
              )}
            </g>
          ))}

          <rect x={708} y={90} width={208} height={118} rx={18} fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth={2.5} />
          <text x={812} y={126} textAnchor="middle" fill="#f59e0b" fontSize={17} fontWeight="700" fontFamily="Inter, sans-serif">
            Consistent
          </text>
          <text x={812} y={148} textAnchor="middle" fill="#f59e0b" fontSize={17} fontWeight="700" fontFamily="Inter, sans-serif">
            Object Query
          </text>
          <text x={812} y={176} textAnchor="middle" fill="#cbd5e1" fontSize={11} fontWeight="500" fontFamily="Inter, sans-serif">
            shared by teacher and student
          </text>

          <line
            x1={628}
            y1={147}
            x2={690}
            y2={147}
            stroke="#f59e0b"
            strokeWidth={2}
            markerEnd="url(#ah-small-amber)"
          />

          {/* Step 3 */}
          <rect x={20} y={246} width={940} height={232} rx={22} fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.4)" strokeWidth={1.5} />
          <rect x={38} y={262} width={88} height={28} rx={14} fill="rgba(245,158,11,0.14)" stroke="#f59e0b" strokeWidth={1} />
          <text x={82} y={280} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight="700" fontFamily="Inter, sans-serif">
            Step 3
          </text>
          <text x={142} y={280} fill="#cbd5e1" fontSize={12} fontWeight="600" fontFamily="Inter, sans-serif">
            Feed those same queries to both decoders and compare predictions
          </text>

          <rect x={54} y={304} width={360} height={96} rx={16} fill="rgba(59,130,246,0.06)" stroke="#3b82f6" strokeWidth={2.2} />
          <text x={234} y={336} textAnchor="middle" fill="#60a5fa" fontSize={15} fontWeight="700" fontFamily="Inter, sans-serif">
            Teacher CDP Predictions
          </text>
          <text x={234} y={367} textAnchor="middle" fill="#93c5fd" fontSize={12} fontWeight="500" fontFamily="Inter, sans-serif">
            class distribution + box
          </text>

          <rect x={566} y={304} width={360} height={96} rx={16} fill="rgba(16,185,129,0.06)" stroke="#10b981" strokeWidth={2.2} />
          <text x={746} y={336} textAnchor="middle" fill="#34d399" fontSize={15} fontWeight="700" fontFamily="Inter, sans-serif">
            Student CDP Predictions
          </text>
          <text x={746} y={367} textAnchor="middle" fill="#6ee7b7" fontSize={12} fontWeight="500" fontFamily="Inter, sans-serif">
            class distribution + box
          </text>

          <rect x={405} y={392} width={170} height={40} rx={12} fill="rgba(245,158,11,0.16)" stroke="#f59e0b" strokeWidth={2.4} />
          <text x={490} y={417} textAnchor="middle" fill="#fbbf24" fontSize={12} fontWeight="700" fontFamily="Inter, sans-serif">
            Consistent Queries
          </text>

          <line
            x1={405}
            y1={412}
            x2={354}
            y2={400}
            stroke="#f59e0b"
            strokeWidth={2}
            markerEnd="url(#ah-small-amber)"
          />
          <line
            x1={575}
            y1={412}
            x2={626}
            y2={400}
            stroke="#f59e0b"
            strokeWidth={2}
            markerEnd="url(#ah-small-amber)"
          />

          <rect x={112} y={440} width={126} height={28} rx={8} fill="rgba(59,130,246,0.12)" stroke="#3b82f6" strokeWidth={1.8} />
          <text x={175} y={458} textAnchor="middle" fill="#60a5fa" fontSize={10.5} fontWeight="600" fontFamily="Inter, sans-serif">
            Teacher cls + box
          </text>

          <rect x={427} y={438} width={126} height={32} rx={8} fill="rgba(239,68,68,0.14)" stroke="#ef4444" strokeWidth={2} />
          <text x={490} y={459} textAnchor="middle" fill="#f87171" fontSize={11} fontWeight="700" fontFamily="Inter, sans-serif">
            KL + L1 + GIoU
          </text>

          <rect x={742} y={440} width={126} height={28} rx={8} fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth={1.8} />
          <text x={805} y={458} textAnchor="middle" fill="#34d399" fontSize={10.5} fontWeight="600" fontFamily="Inter, sans-serif">
            Student cls + box
          </text>

          <line x1={239} y1={454} x2={425} y2={454} stroke="#ef4444" strokeWidth={2.5} strokeDasharray="8 6" />
          <line x1={555} y1={454} x2={741} y2={454} stroke="#ef4444" strokeWidth={2.5} strokeDasharray="8 6" />

          <rect x={584} y={258} width={348} height={30} rx={15} fill="rgba(16,185,129,0.09)" />
          <text x={758} y={277} textAnchor="middle" fill="#34d399" fontSize={10} fontWeight="600" fontFamily="Inter, sans-serif">
            CDP predictions align because decoder query inputs are shared
          </text>
        </svg>
      </div>
    </SlideLayout>
  );
}
