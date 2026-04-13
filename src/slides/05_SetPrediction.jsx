import SlideLayout from '../components/SlideLayout';
import { ArrowDefs } from '../components/DiagramArrow';

export default function SetPredictionSlide() {
  const objectStyles = [
    { label: 'car', color: '#e7e0d6' },
    { label: 'person', color: '#8ea07d' },
    { label: 'dog', color: '#b8915e' },
    { label: 'bicycle', color: '#ad6e5f' },
  ];

  const matches = [
    { predIndex: 0, gtIndex: 2 },
    { predIndex: 1, gtIndex: 0 },
    { predIndex: 2, gtIndex: 3 },
    { predIndex: 3, gtIndex: 1 },
  ];

  const predictionSlots = [0, 1, 2, 3, 4, 5].map((i) => {
    const match = matches.find((item) => item.predIndex === i);

    if (!match) {
      return {
        label: 'no object',
        fill: '#221d1a',
        stroke: '#4a4138',
        textColor: '#6c635b',
        matched: false,
      };
    }

    const object = objectStyles[match.gtIndex];
    return {
      label: `query ${i + 1}`,
      fill: `${object.color}15`,
      stroke: object.color,
      textColor: object.color,
      matched: true,
    };
  });

  return (
    <SlideLayout title="DETR: Set Prediction & Hungarian Matching" subtitle="DETR Introduction" section="detr">
      <div className="flex gap-6 h-full pt-2">
        {/* Left: Hungarian matching diagram */}
        <div className="flex-1 min-w-0 h-full flex items-start justify-center">
          <svg viewBox="0 0 520 400" className="w-full max-w-[680px]">
            <ArrowDefs />

            {/* Predictions column */}
            <text x={80} y={25} textAnchor="middle" fill="#94a3b8" fontSize={13} fontWeight="600" fontFamily="Inter">
              Prediction Slots (N=6)
            </text>
            {predictionSlots.map((slot, i) => {
              return (
                <g key={`pred-${i}`}>
                  <rect x={20} y={38 + i * 50} width={120} height={38} rx={6}
                    fill={slot.fill}
                    stroke={slot.stroke}
                    strokeWidth={slot.matched ? 2 : 1} />
                  <text x={80} y={61 + i * 50} textAnchor="middle" fill={slot.textColor}
                    fontSize={11} fontWeight={slot.matched ? '600' : '400'} fontFamily="Inter">
                    {slot.label}
                  </text>
                </g>
              );
            })}

            {/* Ground truth column */}
            <text x={440} y={25} textAnchor="middle" fill="#94a3b8" fontSize={13} fontWeight="600" fontFamily="Inter">
              Ground Truth (M=4)
            </text>
            {objectStyles.map((object, i) => {
              return (
                <g key={`gt-${i}`}>
                  <rect x={380} y={38 + i * 50} width={120} height={38} rx={6}
                    fill={`${object.color}15`}
                    stroke={object.color} strokeWidth={2} />
                  <text x={440} y={61 + i * 50} textAnchor="middle" fill={object.color}
                    fontSize={11} fontWeight="600" fontFamily="Inter">
                    {object.label}
                  </text>
                </g>
              );
            })}

            {/* Matching lines - crossing to show non-trivial assignment */}
            {matches.map(({ predIndex, gtIndex }, idx) => (
              <line key={idx}
                x1={142} y1={57 + predIndex * 50}
                x2={378} y2={57 + gtIndex * 50}
                stroke={objectStyles[gtIndex].color} strokeWidth={2} strokeDasharray="6 4" opacity={0.65} />
            ))}

            {/* Center label */}
            <rect x={195} y={135} width={130} height={36} rx={8} fill="#221d1a" stroke="#4a4138" strokeWidth={1} />
            <text x={260} y={150} textAnchor="middle" fill="#94a3b8" fontSize={10} fontFamily="Inter" fontStyle="italic">
              Optimal 1-to-1
            </text>
            <text x={260} y={163} textAnchor="middle" fill="#94a3b8" fontSize={10} fontFamily="Inter" fontStyle="italic">
              via Hungarian algorithm
            </text>

            {/* Unmatched note */}
            <text x={80} y={347} textAnchor="middle" fill="#475569" fontSize={10} fontFamily="Inter">
              Unmatched slots trained
            </text>
            <text x={80} y={360} textAnchor="middle" fill="#475569" fontSize={10} fontFamily="Inter">
              to predict &quot;no object&quot;
            </text>

            {/* Loss function */}
            <rect x={185} y={332} width={190} height={42} rx={8} fill="#221d1a" stroke="#4a4138" strokeWidth={1} />
            <text x={280} y={352} textAnchor="middle" fill="#94a3b8" fontSize={11} fontFamily="JetBrains Mono, monospace">
              L = L_cls + L_box + L_giou
            </text>
            <text x={280} y={367} textAnchor="middle" fill="#475569" fontSize={9} fontFamily="Inter">
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
