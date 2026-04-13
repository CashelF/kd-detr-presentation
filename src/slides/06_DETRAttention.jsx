import SlideLayout from '../components/SlideLayout';

export default function DETRAttentionSlide() {
  return (
    <SlideLayout title="DETR: How Attention Drives Detection" subtitle="DETR Introduction" section="detr">
      <div className="flex gap-6 h-full items-center">
        {/* Encoder self-attention */}
        <div className="flex-1 flex flex-col items-center">
          <div className="text-sm font-semibold text-slide-accent mb-3">Encoder: Self-Attention</div>
          <svg viewBox="0 0 280 340" className="w-full max-w-[280px]">
            {/* Feature map grid */}
            <rect x={10} y={10} width={260} height={220} rx={8} fill="#1e293b" stroke="#334155" strokeWidth={1} />
            {/* Attention heatmap simulation - showing global context */}
            {Array.from({ length: 9 }, (_, r) =>
              Array.from({ length: 10 }, (_, c) => {
                const cx = 140; const cy = 120;
                const px = 25 + c * 25; const py = 22 + r * 23;
                const dist = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2);
                const intensity = Math.max(0, 1 - dist / 200);
                return (
                  <rect key={`${r}-${c}`} x={14 + c * 25} y={16 + r * 23} width={22} height={19} rx={2}
                    fill={`rgba(59, 130, 246, ${0.05 + intensity * 0.5})`} />
                );
              })
            )}
            {/* Highlight center */}
            <circle cx={140} cy={120} r={7} fill="none" stroke="#f8fafc" strokeWidth={2} />
            <text x={140} y={255} textAnchor="middle" fill="#64748b" fontSize={11} fontFamily="Inter">
              Each position attends to all others
            </text>
            <text x={140} y={273} textAnchor="middle" fill="#64748b" fontSize={11} fontFamily="Inter">
              Captures global context and relationships
            </text>
            <rect x={30} y={295} width={220} height={30} rx={6} fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth={1} />
            <text x={140} y={314} textAnchor="middle" fill="#3b82f6" fontSize={11} fontWeight="600" fontFamily="Inter">
              Spatial features + global reasoning
            </text>
          </svg>
        </div>

        {/* Decoder cross-attention */}
        <div className="flex-1 flex flex-col items-center">
          <div className="text-sm font-semibold text-slide-amber mb-3">Decoder: Cross-Attention</div>
          <svg viewBox="0 0 280 340" className="w-full max-w-[280px]">
            {/* Feature map */}
            <rect x={10} y={10} width={260} height={170} rx={8} fill="#1e293b" stroke="#334155" strokeWidth={1} />

            {/* Object-specific attention patterns */}
            <ellipse cx={80} cy={65} rx={40} ry={30} fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth={1.5} />
            <ellipse cx={200} cy={100} rx={35} ry={40} fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" strokeWidth={1.5} />
            <ellipse cx={110} cy={145} rx={45} ry={22} fill="rgba(239, 68, 68, 0.3)" stroke="#ef4444" strokeWidth={1.5} />

            {/* Object queries */}
            <rect x={30} y={198} width={68} height={28} rx={5} fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth={1.5} />
            <text x={64} y={216} textAnchor="middle" fill="#10b981" fontSize={10} fontWeight="600" fontFamily="Inter">Query 1</text>

            <rect x={106} y={198} width={68} height={28} rx={5} fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={140} y={216} textAnchor="middle" fill="#f59e0b" fontSize={10} fontWeight="600" fontFamily="Inter">Query 2</text>

            <rect x={182} y={198} width={68} height={28} rx={5} fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth={1.5} />
            <text x={216} y={216} textAnchor="middle" fill="#ef4444" fontSize={10} fontWeight="600" fontFamily="Inter">Query 3</text>

            {/* Arrows from queries to attention regions */}
            <line x1={64} y1={198} x2={80} y2={95} stroke="#10b981" strokeWidth={1.5} strokeDasharray="4 3" opacity={0.7} />
            <line x1={140} y1={198} x2={200} y2={140} stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="4 3" opacity={0.7} />
            <line x1={216} y1={198} x2={110} y2={167} stroke="#ef4444" strokeWidth={1.5} strokeDasharray="4 3" opacity={0.7} />

            <text x={140} y={255} textAnchor="middle" fill="#64748b" fontSize={11} fontFamily="Inter">
              Each query attends to a specific
            </text>
            <text x={140} y={273} textAnchor="middle" fill="#64748b" fontSize={11} fontFamily="Inter">
              region of the feature map
            </text>
            <rect x={18} y={295} width={244} height={30} rx={6} fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth={1} />
            <text x={140} y={314} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="600" fontFamily="Inter">
              Object queries specialize per instance
            </text>
          </svg>
        </div>

        {/* Decoder self-attention */}
        <div className="flex-1 flex flex-col items-center">
          <div className="text-sm font-semibold text-slide-purple mb-3">Decoder: Self-Attention</div>
          <svg viewBox="0 0 280 340" className="w-full max-w-[280px]">
            {/* Query interaction diagram */}
            {[
              { x: 140, y: 55, label: 'Q1', color: '#3b82f6' },
              { x: 55, y: 145, label: 'Q2', color: '#10b981' },
              { x: 225, y: 145, label: 'Q3', color: '#f59e0b' },
              { x: 80, y: 225, label: 'Q4', color: '#ef4444' },
              { x: 200, y: 225, label: 'Q5', color: '#a855f7' },
            ].map((q, i, arr) => (
              <g key={i}>
                {arr.filter((_, j) => j !== i).map((other, j) => (
                  <line key={j} x1={q.x} y1={q.y} x2={other.x} y2={other.y}
                    stroke="#334155" strokeWidth={1} opacity={0.4} />
                ))}
              </g>
            ))}
            {[
              { x: 140, y: 55, label: 'Q1', color: '#3b82f6' },
              { x: 55, y: 145, label: 'Q2', color: '#10b981' },
              { x: 225, y: 145, label: 'Q3', color: '#f59e0b' },
              { x: 80, y: 225, label: 'Q4', color: '#ef4444' },
              { x: 200, y: 225, label: 'Q5', color: '#a855f7' },
            ].map((q, i) => (
              <g key={`node-${i}`}>
                <circle cx={q.x} cy={q.y} r={22} fill={`${q.color}20`} stroke={q.color} strokeWidth={2} />
                <text x={q.x} y={q.y + 1} textAnchor="middle" dominantBaseline="middle"
                  fill={q.color} fontSize={12} fontWeight="600" fontFamily="Inter">{q.label}</text>
              </g>
            ))}

            <text x={140} y={270} textAnchor="middle" fill="#64748b" fontSize={11} fontFamily="Inter">
              Queries communicate to avoid
            </text>
            <text x={140} y={288} textAnchor="middle" fill="#64748b" fontSize={11} fontFamily="Inter">
              duplicate predictions (replaces NMS)
            </text>
            <rect x={18} y={305} width={244} height={30} rx={6} fill="rgba(168,85,247,0.1)" stroke="#a855f7" strokeWidth={1} />
            <text x={140} y={324} textAnchor="middle" fill="#a855f7" fontSize={11} fontWeight="600" fontFamily="Inter">
              Inter-query communication
            </text>
          </svg>
        </div>
      </div>
    </SlideLayout>
  );
}
