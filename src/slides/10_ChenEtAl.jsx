import SlideLayout from '../components/SlideLayout';
import { ArrowDefs, Arrow, Box } from '../components/DiagramArrow';

export default function ChenEtAlSlide() {
  return (
    <SlideLayout title="Chen et al. 2017: KD for Object Detection" subtitle="Chen et al. (NeurIPS 2017)" section="chen">
      <div className="flex flex-col h-full mt-1 justify-center">
        <div className="flex-1 flex items-center">
          <svg viewBox="0 5 900 370" className="w-full">
            <ArrowDefs />

            {/* Teacher path (top) */}
            <text x={40} y={22} fill="#94a3b8" fontSize={13} fontWeight="700" fontFamily="Inter">Teacher</text>
            <rect x={10} y={30} width={625} height={66} rx={10} fill="rgba(59,130,246,0.04)" stroke="#3b82f6" strokeWidth={1} strokeDasharray="6 4" />

            <Box x={22} y={40} w={105} h={44} label="Backbone" sublabel="ResNet-101" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={11} />
            <Arrow x1={130} y1={62} x2={150} y2={62} color="blue" />
            <Box x={153} y={40} w={75} h={44} label="RPN" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={11} />
            <Arrow x1={231} y1={62} x2={251} y2={62} color="blue" />
            <Box x={254} y={40} w={115} h={44} label="RoI Features" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={11} />
            <Arrow x1={372} y1={62} x2={392} y2={62} color="blue" />
            <Box x={395} y={40} w={100} h={44} label="Cls Head" sublabel="Soft labels" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={11} />
            <Arrow x1={498} y1={62} x2={518} y2={62} color="blue" />
            <Box x={521} y={40} w={100} h={44} label="Reg Head" sublabel="Soft targets" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={11} />

            {/* Distillation connections */}
            <line x1={312} y1={86} x2={312} y2={264} stroke="#a855f7" strokeWidth={2} strokeDasharray="6 3" />
            <line x1={445} y1={86} x2={445} y2={264} stroke="#f59e0b" strokeWidth={2} strokeDasharray="6 3" />
            <line x1={571} y1={86} x2={571} y2={264} stroke="#06b6d4" strokeWidth={2} strokeDasharray="6 3" />

            {/* KD annotation boxes (right column) */}
            <rect x={647} y={112} width={120} height={32} rx={6} fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeWidth={1.5} />
            <text x={707} y={132} textAnchor="middle" fill="#a855f7" fontSize={10} fontWeight="600" fontFamily="Inter">Feature KD</text>

            <rect x={647} y={152} width={120} height={32} rx={6} fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={707} y={172} textAnchor="middle" fill="#f59e0b" fontSize={10} fontWeight="600" fontFamily="Inter">Classification KD</text>

            <rect x={647} y={192} width={120} height={32} rx={6} fill="rgba(6,182,212,0.15)" stroke="#06b6d4" strokeWidth={1.5} />
            <text x={707} y={212} textAnchor="middle" fill="#06b6d4" fontSize={10} fontWeight="600" fontFamily="Inter">Regression KD</text>

            {/* Loss equation */}
            <rect x={777} y={112} width={108} height={110} rx={8} fill="#1e293b" stroke="#334155" strokeWidth={1.5} />
            <text x={831} y={134} textAnchor="middle" fill="#f8fafc" fontSize={11} fontWeight="600" fontFamily="Inter">Total Loss</text>
            <line x1={792} y1={142} x2={870} y2={142} stroke="#334155" strokeWidth={1} />
            <text x={831} y={157} textAnchor="middle" fill="#94a3b8" fontSize={9} fontFamily="JetBrains Mono, monospace">L_det</text>
            <text x={831} y={173} textAnchor="middle" fill="#a855f7" fontSize={9} fontFamily="JetBrains Mono, monospace">+ L_feat</text>
            <text x={831} y={189} textAnchor="middle" fill="#f59e0b" fontSize={9} fontFamily="JetBrains Mono, monospace">+ L_cls_kd</text>
            <text x={831} y={205} textAnchor="middle" fill="#06b6d4" fontSize={9} fontFamily="JetBrains Mono, monospace">+ L_reg_kd</text>

            {/* Arrows from KD boxes to Loss */}
            <Arrow x1={769} y1={128} x2={775} y2={128} />
            <Arrow x1={769} y1={168} x2={775} y2={168} />
            <Arrow x1={769} y1={208} x2={775} y2={208} />

            {/* Student path (bottom) */}
            <text x={40} y={248} fill="#94a3b8" fontSize={13} fontWeight="700" fontFamily="Inter">Student</text>
            <rect x={10} y={256} width={625} height={66} rx={10} fill="rgba(16,185,129,0.04)" stroke="#10b981" strokeWidth={1} strokeDasharray="6 4" />

            <Box x={22} y={266} w={105} h={44} label="Backbone" sublabel="ResNet-50" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={11} />
            <Arrow x1={130} y1={288} x2={150} y2={288} color="green" />
            <Box x={153} y={266} w={75} h={44} label="RPN" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={11} />
            <Arrow x1={231} y1={288} x2={251} y2={288} color="green" />
            <Box x={254} y={266} w={115} h={44} label="RoI Features" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={11} />
            <Arrow x1={372} y1={288} x2={392} y2={288} color="green" />
            <Box x={395} y={266} w={100} h={44} label="Cls Head" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={11} />
            <Arrow x1={498} y1={288} x2={518} y2={288} color="green" />
            <Box x={521} y={266} w={100} h={44} label="Reg Head" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={11} />

            {/* Key insight box */}
            <rect x={130} y={335} width={640} height={28} rx={6} fill="rgba(168,85,247,0.08)" stroke="#a855f7" strokeWidth={1} />
            <text x={450} y={353} textAnchor="middle" fill="#a855f7" fontSize={11} fontFamily="Inter" fontWeight="500">
              Works because RoI features provide natural spatial correspondence between teacher and student
            </text>
          </svg>
        </div>
      </div>
    </SlideLayout>
  );
}
