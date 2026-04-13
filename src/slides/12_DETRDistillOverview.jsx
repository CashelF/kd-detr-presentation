import SlideLayout from '../components/SlideLayout';
import { ArrowDefs, Arrow, Box } from '../components/DiagramArrow';

export default function DETRDistillOverviewSlide() {
  return (
    <SlideLayout title="DETRDistill: A Universal KD Framework" subtitle="DETRDistill (ICCV 2023)" section="detrdistill">
      <div className="flex flex-col h-full mt-1 justify-center">
        <svg viewBox="0 8 920 387" className="w-full">
          <ArrowDefs />

          {/* Teacher DETR (top) */}
          <text x={20} y={20} fill="#3b82f6" fontSize={13} fontWeight="700" fontFamily="Inter">Teacher DETR</text>
          <rect x={10} y={28} width={650} height={80} rx={10} fill="rgba(59,130,246,0.05)" stroke="#3b82f6" strokeWidth={1.5} />

          <Box x={20} y={40} w={80} h={50} label="Backbone" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={10} />
          <Arrow x1={104} y1={65} x2={114} y2={65} color="blue" />
          <Box x={118} y={40} w={100} h={50} label="Encoder" sublabel="Features" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={10} />
          <Arrow x1={222} y1={65} x2={232} y2={65} color="blue" />
          <Box x={236} y={40} w={100} h={50} label="Decoder" sublabel="Queries" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={10} />
          <Arrow x1={340} y1={65} x2={350} y2={65} color="blue" />
          <Box x={354} y={40} w={80} h={50} label="Cls Head" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={10} />
          <Arrow x1={438} y1={65} x2={448} y2={65} color="blue" />
          <Box x={452} y={40} w={80} h={50} label="Box Head" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={10} />
          <Arrow x1={536} y1={65} x2={546} y2={65} color="blue" />
          <Box x={550} y={40} w={100} h={50} label="T Predictions" color="rgba(59,130,246,0.15)" border="#3b82f6" textColor="#3b82f6" fontSize={10} />

          {/* Student DETR (bottom) */}
          <text x={20} y={185} fill="#10b981" fontSize={13} fontWeight="700" fontFamily="Inter">Student DETR</text>
          <rect x={10} y={193} width={650} height={80} rx={10} fill="rgba(16,185,129,0.05)" stroke="#10b981" strokeWidth={1.5} />

          <Box x={20} y={205} w={80} h={50} label="Backbone" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={10} />
          <Arrow x1={104} y1={230} x2={114} y2={230} color="green" />
          <Box x={118} y={205} w={100} h={50} label="Encoder" sublabel="Features" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={10} />
          <Arrow x1={222} y1={230} x2={232} y2={230} color="green" />
          <Box x={236} y={205} w={100} h={50} label="Decoder" sublabel="Queries" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={10} />
          <Arrow x1={340} y1={230} x2={350} y2={230} color="green" />
          <Box x={354} y={205} w={80} h={50} label="Cls Head" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={10} />
          <Arrow x1={438} y1={230} x2={448} y2={230} color="green" />
          <Box x={452} y={205} w={80} h={50} label="Box Head" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={10} />
          <Arrow x1={536} y1={230} x2={546} y2={230} color="green" />
          <Box x={550} y={205} w={100} h={50} label="S Predictions" color="rgba(16,185,129,0.15)" border="#10b981" textColor="#10b981" fontSize={10} />

          {/* Three distillation components */}
          {/* 1. Hungarian-Matching Logits Distillation */}
          <line x1={600} y1={93} x2={600} y2={203} stroke="#f59e0b" strokeWidth={2.5} strokeDasharray="6 3" />
          <rect x={672} y={28} width={236} height={68} rx={10} fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth={2} />
          <text x={790} y={50} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="700" fontFamily="Inter">1. Hungarian-Matching</text>
          <text x={790} y={66} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="700" fontFamily="Inter">Logits Distillation</text>
          <text x={790} y={82} textAnchor="middle" fill="#94a3b8" fontSize={9} fontFamily="Inter">Match T/S predictions, then distill</text>

          {/* 2. Target-Aware Feature Distillation */}
          <line x1={168} y1={93} x2={168} y2={203} stroke="#a855f7" strokeWidth={2.5} strokeDasharray="6 3" />
          <rect x={672} y={110} width={236} height={68} rx={10} fill="rgba(168,85,247,0.1)" stroke="#a855f7" strokeWidth={2} />
          <text x={790} y={132} textAnchor="middle" fill="#a855f7" fontSize={11} fontWeight="700" fontFamily="Inter">2. Target-Aware</text>
          <text x={790} y={148} textAnchor="middle" fill="#a855f7" fontSize={11} fontWeight="700" fontFamily="Inter">Feature Distillation</text>
          <text x={790} y={164} textAnchor="middle" fill="#94a3b8" fontSize={9} fontFamily="Inter">Attention-guided encoder features</text>

          {/* 3. Query Distillation */}
          <line x1={286} y1={93} x2={286} y2={203} stroke="#06b6d4" strokeWidth={2.5} strokeDasharray="6 3" />
          <rect x={672} y={193} width={236} height={68} rx={10} fill="rgba(6,182,212,0.1)" stroke="#06b6d4" strokeWidth={2} />
          <text x={790} y={215} textAnchor="middle" fill="#06b6d4" fontSize={11} fontWeight="700" fontFamily="Inter">3. Query</text>
          <text x={790} y={231} textAnchor="middle" fill="#06b6d4" fontSize={11} fontWeight="700" fontFamily="Inter">Distillation</text>
          <text x={790} y={247} textAnchor="middle" fill="#94a3b8" fontSize={9} fontFamily="Inter">Align matched decoder queries</text>

          {/* Bottom: Universality note */}
          <rect x={10} y={290} width={898} height={50} rx={10} fill="rgba(16,185,129,0.06)" stroke="#10b981" strokeWidth={1} strokeDasharray="5 3" />
          <text x={460} y={310} textAnchor="middle" fill="#10b981" fontSize={12} fontWeight="600" fontFamily="Inter">
            Universal: works across DETR, Deformable DETR, Conditional DETR, DAB-DETR, DN-DETR, DINO
          </text>
          <text x={460} y={328} textAnchor="middle" fill="#64748b" fontSize={10} fontFamily="Inter">
            Chang et al., &quot;DETRDistill: A Universal Knowledge Distillation Framework for DETR-families&quot; (ICCV 2023)
          </text>

          {/* Total loss */}
          <rect x={340} y={354} width={240} height={36} rx={8} fill="#1e293b" stroke="#334155" strokeWidth={1.5} />
          <text x={460} y={377} textAnchor="middle" fill="#f8fafc" fontSize={12} fontWeight="500" fontFamily="JetBrains Mono, monospace">
            L = L_det + <tspan fill="#f59e0b">L_hmd</tspan> + <tspan fill="#a855f7">L_tfd</tspan> + <tspan fill="#06b6d4">L_qd</tspan>
          </text>
        </svg>
      </div>
    </SlideLayout>
  );
}
