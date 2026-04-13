import SlideLayout from '../components/SlideLayout';
import { ArrowDefs, Arrow } from '../components/DiagramArrow';

const objectCells = (r, c) => {
  return (r >= 1 && r <= 2 && c >= 1 && c <= 2) || (r >= 3 && r <= 4 && c >= 3 && c <= 5);
};

const attnMap = [
  [0.05, 0.80, 0.90, 0.06, 0.04, 0.07],
  [0.06, 0.85, 0.70, 0.08, 0.05, 0.06],
  [0.04, 0.06, 0.07, 0.75, 0.80, 0.88],
  [0.07, 0.05, 0.08, 0.90, 0.85, 0.78],
  [0.06, 0.04, 0.05, 0.82, 0.88, 0.75],
];

export default function TargetAwareFeatureKDSlide() {
  return (
    <SlideLayout title="DETRDistill: Target-Aware Feature Distillation" subtitle="DETRDistill (ICCV 2023)" section="detrdistill">
      <div className="flex gap-6 h-full items-start mt-1">
        <div className="flex-1 h-full flex items-center justify-center">
          <svg viewBox="0 0 540 400" className="w-full max-h-full">
            <ArrowDefs />

            {/* ROW 1: TEACHER */}
            <text x={87} y={18} textAnchor="middle" fill="#3b82f6" fontSize={11} fontWeight="600" fontFamily="Inter">Teacher Encoder Features</text>
            <rect x={10} y={26} width={155} height={120} rx={8} fill="#1e293b" stroke="#3b82f6" strokeWidth={1.5} />
            {[0,1,2,3,4].map(r => [0,1,2,3,4,5].map(c => {
              const isObj = objectCells(r, c);
              return (
                <rect key={`tf-${r}-${c}`} x={18 + c * 24} y={34 + r * 21} width={20} height={17} rx={2}
                  fill={isObj ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.08)'}
                  stroke="#3b82f6" strokeWidth={0.3} />
              );
            }))}

            <text x={178} y={90} textAnchor="middle" fill="#64748b" fontSize={20} fontWeight="700" fontFamily="Inter">×</text>

            <text x={270} y={18} textAnchor="middle" fill="#a855f7" fontSize={11} fontWeight="600" fontFamily="Inter">Cross-Attention Map</text>
            <rect x={193} y={26} width={155} height={120} rx={8} fill="#1e293b" stroke="#a855f7" strokeWidth={1.5} />
            {[0,1,2,3,4].map(r => [0,1,2,3,4,5].map(c => (
              <rect key={`ta-${r}-${c}`} x={201 + c * 24} y={34 + r * 21} width={20} height={17} rx={2}
                fill={`rgba(168,85,247,${attnMap[r][c]})`} />
            )))}

            <Arrow x1={352} y1={86} x2={373} y2={86} color="amber" />

            <text x={453} y={18} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="600" fontFamily="Inter">Attention-Weighted</text>
            <rect x={376} y={26} width={155} height={120} rx={8} fill="#1e293b" stroke="#f59e0b" strokeWidth={1.5} />
            {[0,1,2,3,4].map(r => [0,1,2,3,4,5].map(c => {
              const isObj = objectCells(r, c);
              return (
                <rect key={`tw-${r}-${c}`} x={384 + c * 24} y={34 + r * 21} width={20} height={17} rx={2}
                  fill={isObj ? 'rgba(245,158,11,0.4)' : 'rgba(245,158,11,0.03)'}
                  stroke={isObj ? '#f59e0b' : 'transparent'} strokeWidth={isObj ? 1 : 0} />
              );
            }))}

            {/* Down arrows between rows */}
            <line x1={270} y1={150} x2={270} y2={213} stroke="#a855f7" strokeWidth={2} strokeDasharray="6 3" />
            <polygon points="265,211 270,221 275,211" fill="#a855f7" />
            <text x={288} y={183} fill="#a855f7" fontSize={9} fontStyle="italic" fontFamily="Inter">Same mask</text>

            <line x1={453} y1={150} x2={453} y2={168} stroke="#ef4444" strokeWidth={2.5} strokeDasharray="6 3" />
            <line x1={453} y1={192} x2={453} y2={213} stroke="#ef4444" strokeWidth={2.5} strokeDasharray="6 3" />
            <rect x={410} y={168} width={86} height={24} rx={6} fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth={1.5} />
            <text x={453} y={184} textAnchor="middle" fill="#ef4444" fontSize={10} fontWeight="600" fontFamily="Inter">MSE Loss</text>

            {/* ROW 2: STUDENT */}
            <text x={87} y={207} textAnchor="middle" fill="#10b981" fontSize={11} fontWeight="600" fontFamily="Inter">Student Encoder Features</text>
            <rect x={10} y={215} width={155} height={120} rx={8} fill="#1e293b" stroke="#10b981" strokeWidth={1.5} />
            {[0,1,2,3,4].map(r => [0,1,2,3,4,5].map(c => {
              const isObj = objectCells(r, c);
              return (
                <rect key={`sf-${r}-${c}`} x={18 + c * 24} y={223 + r * 21} width={20} height={17} rx={2}
                  fill={isObj ? 'rgba(16,185,129,0.2)' : 'rgba(16,185,129,0.06)'}
                  stroke="#10b981" strokeWidth={0.3} />
              );
            }))}

            <text x={178} y={279} textAnchor="middle" fill="#64748b" fontSize={20} fontWeight="700" fontFamily="Inter">×</text>

            <text x={270} y={207} textAnchor="middle" fill="#a855f7" fontSize={11} fontWeight="600" fontFamily="Inter">Attention Map (reused)</text>
            <rect x={193} y={215} width={155} height={120} rx={8} fill="#1e293b" stroke="#a855f7" strokeWidth={1.5} strokeDasharray="5 3" />
            {[0,1,2,3,4].map(r => [0,1,2,3,4,5].map(c => (
              <rect key={`sa-${r}-${c}`} x={201 + c * 24} y={223 + r * 21} width={20} height={17} rx={2}
                fill={`rgba(168,85,247,${attnMap[r][c] * 0.8})`} />
            )))}

            <Arrow x1={352} y1={275} x2={373} y2={275} color="amber" />

            <text x={453} y={207} textAnchor="middle" fill="#06b6d4" fontSize={11} fontWeight="600" fontFamily="Inter">Weighted Student</text>
            <rect x={376} y={215} width={155} height={120} rx={8} fill="#1e293b" stroke="#06b6d4" strokeWidth={1.5} />
            {[0,1,2,3,4].map(r => [0,1,2,3,4,5].map(c => {
              const isObj = objectCells(r, c);
              return (
                <rect key={`sw-${r}-${c}`} x={384 + c * 24} y={223 + r * 21} width={20} height={17} rx={2}
                  fill={isObj ? 'rgba(6,182,212,0.3)' : 'rgba(6,182,212,0.03)'} />
              );
            }))}

            {/* Formula */}
            <rect x={120} y={350} width={300} height={30} rx={6} fill="#1e293b" stroke="#334155" strokeWidth={1} />
            <text x={270} y={370} textAnchor="middle" fill="#f8fafc" fontSize={11} fontFamily="JetBrains Mono, monospace">
              L_tfd = MSE(A_t · F_t, A_t · F_s)
            </text>
          </svg>
        </div>

        {/* Right: explanation */}
        <div className="w-52 flex flex-col gap-3 pt-2">
          <div className="bg-slide-surface rounded-lg p-4 border border-slide-purple/30">
            <div className="text-xs font-semibold text-slide-purple mb-2">Attention as Guide</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              Use teacher's decoder cross-attention maps to identify which spatial locations are important for detection.
            </div>
          </div>

          <div className="bg-slide-surface rounded-lg p-4 border border-slide-amber/30">
            <div className="text-xs font-semibold text-slide-amber mb-2">Selective Distillation</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              Only distill features at object-relevant locations, not background. Avoids noise from irrelevant regions.
            </div>
          </div>

          <div className="bg-slide-surface rounded-lg p-4 border border-slide-border/50">
            <div className="text-xs font-semibold text-slide-accent mb-2">Why Not Distill All?</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              Background dominates feature maps. Uniform feature distillation dilutes the learning signal for objects.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}