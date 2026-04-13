import SlideLayout from '../components/SlideLayout';
import { ArrowDefs, Arrow } from '../components/DiagramArrow';

export default function KDChallengeSlide() {
  return (
    <SlideLayout title="The Core Challenge: Why Standard KD Fails for DETR" subtitle="The KD Challenge" section="challenge">
      <div className="flex gap-8 h-full items-start mt-1">
        {/* Left: CNN detector - spatial correspondence */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-green-500/10 rounded-lg px-3 py-1 border border-green-500/30 mb-3">
            <span className="text-xs font-semibold text-slide-green">CNN Detectors (e.g. Faster R-CNN)</span>
          </div>
          <svg viewBox="0 0 380 360" className="w-full">
            <ArrowDefs />

            {/* Teacher */}
            <text x={100} y={20} textAnchor="middle" fill="#94a3b8" fontSize={12} fontWeight="600" fontFamily="Inter">Teacher</text>
            <rect x={10} y={30} width={180} height={120} rx={8} fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeWidth={1.5} />
            {/* Feature grid */}
            {[0,1,2,3].map(r => [0,1,2,3,4].map(c => (
              <rect key={`t-${r}-${c}`} x={22 + c * 33} y={42 + r * 24} width={28} height={20} rx={3}
                fill={`rgba(59,130,246,${0.1 + ((r + c) % 3) * 0.15})`} stroke="#3b82f6" strokeWidth={0.5} />
            )))}
            <text x={100} y={165} textAnchor="middle" fill="#3b82f6" fontSize={10} fontFamily="Inter">Spatial Feature Map</text>

            {/* Student */}
            <text x={280} y={20} textAnchor="middle" fill="#94a3b8" fontSize={12} fontWeight="600" fontFamily="Inter">Student</text>
            <rect x={190} y={30} width={180} height={120} rx={8} fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth={1.5} />
            {[0,1,2,3].map(r => [0,1,2,3,4].map(c => (
              <rect key={`s-${r}-${c}`} x={202 + c * 33} y={42 + r * 24} width={28} height={20} rx={3}
                fill={`rgba(16,185,129,${0.1 + ((r + c) % 3) * 0.15})`} stroke="#10b981" strokeWidth={0.5} />
            )))}
            <text x={280} y={165} textAnchor="middle" fill="#10b981" fontSize={10} fontFamily="Inter">Spatial Feature Map</text>

            {/* Correspondence arrows - same spatial locations */}
            {[0,1,2].map(i => (
              <g key={`corr-${i}`}>
                <line x1={150 + i * 10} y1={60 + i * 25} x2={202 + i * 10} y2={60 + i * 25}
                  stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 3" />
              </g>
            ))}

            {/* Check mark */}
            <rect x={120} y={180} width={140} height={32} rx={6} fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth={1.5} />
            <text x={190} y={200} textAnchor="middle" fill="#10b981" fontSize={11} fontWeight="600" fontFamily="Inter">
              Same spatial locations
            </text>

            {/* Anchor explanation */}
            <text x={190} y={235} textAnchor="middle" fill="#64748b" fontSize={10} fontFamily="Inter">
              Anchors at (x, y) in teacher = anchors at (x, y) in student
            </text>
            <text x={190} y={250} textAnchor="middle" fill="#64748b" fontSize={10} fontFamily="Inter">
              Feature maps align spatially by construction
            </text>
            <text x={190} y={275} textAnchor="middle" fill="#10b981" fontSize={11} fontWeight="500" fontFamily="Inter">
              Natural distillation points exist
            </text>
          </svg>
        </div>

        {/* Right: DETR - no correspondence */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-red-500/10 rounded-lg px-3 py-1 border border-red-500/30 mb-3">
            <span className="text-xs font-semibold text-slide-red">DETR (Set Prediction)</span>
          </div>
          <svg viewBox="0 0 380 360" className="w-full">
            <ArrowDefs />

            {/* Teacher queries */}
            <text x={100} y={20} textAnchor="middle" fill="#94a3b8" fontSize={12} fontWeight="600" fontFamily="Inter">Teacher</text>
            <rect x={10} y={30} width={180} height={120} rx={8} fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeWidth={1.5} />
            {['Q3: car', 'Q7: person', 'Q1: dog', 'Q5: bike'].map((label, i) => (
              <g key={`tq-${i}`}>
                <rect x={22} y={42 + i * 25} width={156} height={20} rx={4}
                  fill={`rgba(59,130,246,0.15)`} stroke="#3b82f6" strokeWidth={0.5} />
                <text x={100} y={55 + i * 25} textAnchor="middle" fill="#3b82f6" fontSize={10} fontFamily="Inter">{label}</text>
              </g>
            ))}
            <text x={100} y={165} textAnchor="middle" fill="#3b82f6" fontSize={10} fontFamily="Inter">Object Queries (unordered)</text>

            {/* Student queries */}
            <text x={280} y={20} textAnchor="middle" fill="#94a3b8" fontSize={12} fontWeight="600" fontFamily="Inter">Student</text>
            <rect x={190} y={30} width={180} height={120} rx={8} fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth={1.5} />
            {['Q2: person', 'Q5: car', 'Q8: bike', 'Q1: dog'].map((label, i) => (
              <g key={`sq-${i}`}>
                <rect x={202} y={42 + i * 25} width={156} height={20} rx={4}
                  fill={`rgba(16,185,129,0.15)`} stroke="#10b981" strokeWidth={0.5} />
                <text x={280} y={55 + i * 25} textAnchor="middle" fill="#10b981" fontSize={10} fontFamily="Inter">{label}</text>
              </g>
            ))}
            <text x={280} y={165} textAnchor="middle" fill="#10b981" fontSize={10} fontFamily="Inter">Object Queries (unordered)</text>

            {/* Crossed arrows showing mismatch */}
            <line x1={168} y1={55} x2={202} y2={80} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 3" />
            <line x1={168} y1={80} x2={202} y2={55} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 3" />
            <line x1={168} y1={105} x2={202} y2={130} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 3" />
            <line x1={168} y1={130} x2={202} y2={105} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 3" />

            {/* X mark */}
            <rect x={120} y={180} width={140} height={32} rx={6} fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth={1.5} />
            <text x={190} y={200} textAnchor="middle" fill="#ef4444" fontSize={11} fontWeight="600" fontFamily="Inter">
              No spatial alignment
            </text>

            <text x={190} y={235} textAnchor="middle" fill="#64748b" fontSize={10} fontFamily="Inter">
              Teacher query #3 (car) != Student query #3
            </text>
            <text x={190} y={250} textAnchor="middle" fill="#64748b" fontSize={10} fontFamily="Inter">
              Queries are permutation-invariant sets
            </text>
            <text x={190} y={275} textAnchor="middle" fill="#ef4444" fontSize={11} fontWeight="500" fontFamily="Inter">
              No natural distillation points!
            </text>
          </svg>
        </div>
      </div>
    </SlideLayout>
  );
}
