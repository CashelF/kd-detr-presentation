import SlideLayout from '../components/SlideLayout';
import { ArrowDefs } from '../components/DiagramArrow';

export default function SetPredictionSlide() {
  const matchColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <SlideLayout title="DETR: Set Prediction & Hungarian Matching" subtitle="DETR Introduction" section="detr">
      <div className="flex gap-6 h-full items-center">
        {/* Left: Hungarian matching diagram */}
        <div className="flex-1 h-full flex items-center">
          <svg viewBox="0 0 520 400" className="w-full">
            <ArrowDefs />

            {/* Predictions column */}
            <text x={80} y={25} textAnchor="middle" fill="#94a3b8" fontSize={13} fontWeight="600" fontFamily="Inter">
              Predictions (N=6)
            </text>
            {[0,1,2,3,4,5].map(i => {
              const matched = i < 4;
              const color = matched ? matchColors[i] : '#334155';
              const labels = ['pred 1', 'pred 2', 'pred 3', 'pred 4', 'no object', 'no object'];
              return (
                <g key={`pred-${i}`}>
                  <rect x={20} y={38 + i * 50} width={120} height={38} rx={6}
                    fill={matched ? `${color}15` : '#1e293b'}
                    stroke={color} strokeWidth={matched ? 2 : 1} />
                  <text x={80} y={61 + i * 50} textAnchor="middle" fill={matched ? color : '#64748b'}
                    fontSize={11} fontWeight={matched ? '600' : '400'} fontFamily="Inter">
                    {labels[i]}
                  </text>
                </g>
              );
            })}

            {/* Ground truth column */}
            <text x={440} y={25} textAnchor="middle" fill="#94a3b8" fontSize={13} fontWeight="600" fontFamily="Inter">
              Ground Truth (M=4)
            </text>
            {[0,1,2,3].map(i => {
              const labels = ['car', 'person', 'dog', 'bicycle'];
              return (
                <g key={`gt-${i}`}>
                  <rect x={380} y={38 + i * 50} width={120} height={38} rx={6}
                    fill={`${matchColors[i]}15`}
                    stroke={matchColors[i]} strokeWidth={2} />
                  <text x={440} y={61 + i * 50} textAnchor="middle" fill={matchColors[i]}
                    fontSize={11} fontWeight="600" fontFamily="Inter">
                    {labels[i]}
                  </text>
                </g>
              );
            })}

            {/* Matching lines - crossing to show non-trivial assignment */}
            {[
              { pi: 0, gi: 2, color: matchColors[0] },  // pred 1 -> dog
              { pi: 1, gi: 0, color: matchColors[1] },  // pred 2 -> car
              { pi: 2, gi: 3, color: matchColors[2] },  // pred 3 -> bicycle
              { pi: 3, gi: 1, color: matchColors[3] },  // pred 4 -> person
            ].map(({ pi, gi, color }, idx) => (
              <line key={idx}
                x1={142} y1={57 + pi * 50}
                x2={378} y2={57 + gi * 50}
                stroke={color} strokeWidth={2} strokeDasharray="6 4" opacity={0.6} />
            ))}

            {/* Center label */}
            <rect x={195} y={135} width={130} height={36} rx={8} fill="#1e293b" stroke="#475569" strokeWidth={1} />
            <text x={260} y={150} textAnchor="middle" fill="#94a3b8" fontSize={10} fontFamily="Inter" fontStyle="italic">
              Optimal 1-to-1
            </text>
            <text x={260} y={163} textAnchor="middle" fill="#94a3b8" fontSize={10} fontFamily="Inter" fontStyle="italic">
              via Hungarian algorithm
            </text>

            {/* Unmatched note */}
            <text x={80} y={355} textAnchor="middle" fill="#475569" fontSize={10} fontFamily="Inter">
              Unmatched slots trained
            </text>
            <text x={80} y={368} textAnchor="middle" fill="#475569" fontSize={10} fontFamily="Inter">
              to predict "no object"
            </text>

            {/* Loss function */}
            <rect x={185} y={340} width={190} height={42} rx={8} fill="#1e293b" stroke="#334155" strokeWidth={1} />
            <text x={280} y={360} textAnchor="middle" fill="#94a3b8" fontSize={11} fontFamily="JetBrains Mono, monospace">
              L = L_cls + L_box + L_giou
            </text>
            <text x={280} y={375} textAnchor="middle" fill="#475569" fontSize={9} fontFamily="Inter">
              Set prediction loss
            </text>
          </svg>
        </div>

        {/* Right: Key properties */}
        <div className="w-64 flex flex-col gap-3">
          <div className="bg-slide-surface rounded-lg p-4 border border-slide-accent/30">
            <div className="text-xs font-semibold text-slide-accent mb-2">Bipartite Matching</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              Each ground truth object is assigned to exactly one prediction. Uses the Hungarian algorithm to find the optimal assignment minimizing total cost.
            </div>
          </div>

          <div className="bg-slide-surface rounded-lg p-4 border border-slide-green/30">
            <div className="text-xs font-semibold text-slide-green mb-2">Fixed Set Size (N)</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              Always predicts N outputs (typically N=100). Unmatched slots predict "no object" class. Eliminates need for NMS post-processing.
            </div>
          </div>

          <div className="bg-slide-surface rounded-lg p-4 border border-slide-amber/30">
            <div className="text-xs font-semibold text-slide-amber mb-2">Permutation Invariant</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              The set loss is invariant to prediction ordering. Any permutation of predictions yields the same loss after re-matching.
            </div>
          </div>

          <div className="bg-slide-surface rounded-lg p-4 border border-slide-red/30">
            <div className="text-xs font-semibold text-slide-red mb-2">Key Implication for KD</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              Teacher query #5 and student query #5 may correspond to completely different objects -- no natural correspondence.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
