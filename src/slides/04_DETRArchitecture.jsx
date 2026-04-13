import SlideLayout from '../components/SlideLayout';
import { ArrowDefs, Arrow, Box } from '../components/DiagramArrow';

export default function DETRArchitectureSlide() {
  return (
    <SlideLayout title="DETR: End-to-End Object Detection with Transformers" subtitle="DETR Introduction" section="detr">
      <div className="flex flex-col items-center justify-center h-full">
        <svg viewBox="0 30 960 310" className="w-full max-w-[960px]">
          <ArrowDefs />

          {/* Input Image */}
          <rect x={10} y={100} width={100} height={100} rx={8} fill="#1e293b" stroke="#334155" strokeWidth={1.5} />
          <rect x={20} y={110} width={30} height={20} rx={2} fill="none" stroke="#3b82f6" strokeWidth={1} opacity={0.5} />
          <rect x={55} y={130} width={25} height={30} rx={2} fill="none" stroke="#10b981" strokeWidth={1} opacity={0.5} />
          <rect x={35} y={165} width={40} height={20} rx={2} fill="none" stroke="#f59e0b" strokeWidth={1} opacity={0.5} />
          <text x={60} y={225} textAnchor="middle" fill="#94a3b8" fontSize={11} fontFamily="Inter">Input Image</text>

          {/* Arrow to backbone */}
          <Arrow x1={115} y1={150} x2={148} y2={150} />

          {/* CNN Backbone */}
          <rect x={150} y={90} width={120} height={120} rx={8} fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth={1.5} />
          <text x={210} y={135} textAnchor="middle" fill="#3b82f6" fontSize={13} fontWeight="600" fontFamily="Inter">CNN</text>
          <text x={210} y={153} textAnchor="middle" fill="#3b82f6" fontSize={13} fontWeight="600" fontFamily="Inter">Backbone</text>
          <text x={210} y={175} textAnchor="middle" fill="#64748b" fontSize={10} fontFamily="Inter">(ResNet-50/101)</text>
          <text x={210} y={225} textAnchor="middle" fill="#94a3b8" fontSize={11} fontFamily="Inter">Feature Extraction</text>

          {/* Arrow to flatten + pos enc */}
          <Arrow x1={275} y1={150} x2={308} y2={150} />

          {/* Feature Map + Positional Encoding */}
          <rect x={310} y={80} width={100} height={140} rx={8} fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" strokeWidth={1.5} />
          {/* Grid pattern for feature map */}
          {[0,1,2,3,4].map(r => [0,1,2,3].map(c => (
            <rect key={`${r}-${c}`} x={323 + c * 18} y={95 + r * 18} width={14} height={14} rx={2}
              fill={`rgba(139,92,246,${0.15 + Math.random() * 0.25})`} />
          )))}
          <text x={360} y={200} textAnchor="middle" fill="#8b5cf6" fontSize={10} fontWeight="500" fontFamily="Inter">+ Pos. Encoding</text>
          <text x={360} y={225} textAnchor="middle" fill="#94a3b8" fontSize={11} fontFamily="Inter">Flatten to Seq.</text>

          {/* Arrow to encoder */}
          <Arrow x1={415} y1={150} x2={448} y2={150} />

          {/* Transformer Encoder */}
          <rect x={450} y={70} width={120} height={160} rx={8} fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth={1.5} />
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x={465} y={88 + i * 48} width={90} height={38} rx={5} fill="#1e293b" stroke="#10b981" strokeWidth={1} opacity={0.7} />
              <text x={510} y={107 + i * 48} textAnchor="middle" fill="#10b981" fontSize={9} fontFamily="Inter">
                Self-Attn
              </text>
              <text x={510} y={119 + i * 48} textAnchor="middle" fill="#64748b" fontSize={8} fontFamily="Inter">
                + FFN
              </text>
            </g>
          ))}
          <text x={510} y={245} textAnchor="middle" fill="#10b981" fontSize={11} fontWeight="500" fontFamily="Inter">Encoder x6</text>

          {/* Arrow to decoder */}
          <Arrow x1={575} y1={150} x2={608} y2={150} />

          {/* Object Queries input */}
          <g>
            <text x={670} y={52} textAnchor="middle" fill="#f59e0b" fontSize={10} fontWeight="600" fontFamily="Inter">Object Queries</text>
            <text x={670} y={64} textAnchor="middle" fill="#64748b" fontSize={9} fontFamily="Inter">(N learned embeddings)</text>
            <Arrow x1={670} y1={68} x2={670} y2={78} color="amber" />
          </g>

          {/* Transformer Decoder */}
          <rect x={610} y={80} width={120} height={160} rx={8} fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth={1.5} />
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x={625} y={98 + i * 48} width={90} height={38} rx={5} fill="#1e293b" stroke="#f59e0b" strokeWidth={1} opacity={0.7} />
              <text x={670} y={113 + i * 48} textAnchor="middle" fill="#f59e0b" fontSize={9} fontFamily="Inter">
                Self + Cross Attn
              </text>
              <text x={670} y={125 + i * 48} textAnchor="middle" fill="#64748b" fontSize={8} fontFamily="Inter">
                + FFN
              </text>
            </g>
          ))}
          <text x={670} y={257} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="500" fontFamily="Inter">Decoder x6</text>

          {/* Arrow to FFN heads */}
          <Arrow x1={735} y1={150} x2={768} y2={120} />
          <Arrow x1={735} y1={150} x2={768} y2={180} />

          {/* FFN Prediction Heads */}
          <rect x={770} y={95} width={90} height={40} rx={6} fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth={1.5} />
          <text x={815} y={119} textAnchor="middle" fill="#ef4444" fontSize={11} fontWeight="500" fontFamily="Inter">Class FFN</text>

          <rect x={770} y={160} width={90} height={40} rx={6} fill="rgba(6,182,212,0.1)" stroke="#06b6d4" strokeWidth={1.5} />
          <text x={815} y={184} textAnchor="middle" fill="#06b6d4" fontSize={11} fontWeight="500" fontFamily="Inter">BBox FFN</text>

          {/* Output */}
          <Arrow x1={865} y1={115} x2={898} y2={140} color="red" />
          <Arrow x1={865} y1={180} x2={898} y2={160} />
          <rect x={900} y={125} width={55} height={50} rx={6} fill="#1e293b" stroke="#334155" strokeWidth={1.5} />
          <text x={927} y={147} textAnchor="middle" fill="#f8fafc" fontSize={10} fontWeight="600" fontFamily="Inter">N</text>
          <text x={927} y={163} textAnchor="middle" fill="#94a3b8" fontSize={9} fontFamily="Inter">preds</text>

          {/* Bottom labels */}
          <text x={480} y={290} textAnchor="middle" fill="#475569" fontSize={11} fontFamily="Inter" fontStyle="italic">
            Carion et al., "End-to-End Object Detection with Transformers" (ECCV 2020)
          </text>

          {/* Key innovation callout */}
          <rect x={200} y={300} width={560} height={36} rx={8} fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeWidth={1} strokeDasharray="4 3" />
          <text x={480} y={322} textAnchor="middle" fill="#3b82f6" fontSize={12} fontFamily="Inter" fontWeight="500">
            No anchors, no NMS, no hand-designed components -- fully end-to-end
          </text>
        </svg>
      </div>
    </SlideLayout>
  );
}
