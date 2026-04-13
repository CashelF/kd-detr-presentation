import SlideLayout from '../components/SlideLayout';
import { ArrowDefs } from '../components/DiagramArrow';

export default function HungarianMatchingLogitsSlide() {
  return (
    <SlideLayout title="DETRDistill: Hungarian-Matching Logits Distillation" subtitle="DETRDistill (ICCV 2023)" section="detrdistill">
      <div className="flex gap-5 h-full items-start mt-1">
        {/* Diagram */}
        <div className="flex-1 h-full flex items-center justify-center">
          <svg viewBox="0 0 540 395" className="w-full max-h-full">
            <g transform="translate(0, 10)">
            <ArrowDefs />

            {/* Step 1: Teacher predictions */}
            <text x={10} y={16} fill="#f59e0b" fontSize={11} fontWeight="700" fontFamily="Inter">Step 1: Get Teacher & Student Predictions</text>

            {/* Teacher preds */}
            <text x={70} y={38} textAnchor="middle" fill="#3b82f6" fontSize={10} fontWeight="600" fontFamily="Inter">Teacher</text>
            {['car 0.95', 'dog 0.91', 'person 0.88', 'empty', 'empty'].map((label, i) => (
              <g key={`tp-${i}`}>
                <rect x={10} y={44 + i * 24} width={120} height={20} rx={4}
                  fill={i < 3 ? 'rgba(59,130,246,0.12)' : '#1e293b'}
                  stroke={i < 3 ? '#3b82f6' : '#334155'} strokeWidth={1} />
                <text x={70} y={57 + i * 24} textAnchor="middle"
                  fill={i < 3 ? '#3b82f6' : '#475569'} fontSize={9} fontFamily="Inter">{label}</text>
              </g>
            ))}

            {/* Student preds */}
            <text x={460} y={38} textAnchor="middle" fill="#10b981" fontSize={10} fontWeight="600" fontFamily="Inter">Student</text>
            {['person 0.72', 'empty', 'car 0.68', 'dog 0.65', 'empty'].map((label, i) => (
              <g key={`sp-${i}`}>
                <rect x={400} y={44 + i * 24} width={120} height={20} rx={4}
                  fill={[0,2,3].includes(i) ? 'rgba(16,185,129,0.12)' : '#1e293b'}
                  stroke={[0,2,3].includes(i) ? '#10b981' : '#334155'} strokeWidth={1} />
                <text x={460} y={57 + i * 24} textAnchor="middle"
                  fill={[0,2,3].includes(i) ? '#10b981' : '#475569'} fontSize={9} fontFamily="Inter">{label}</text>
              </g>
            ))}

            {/* Step 2: Hungarian matching */}
            <text x={10} y={185} fill="#f59e0b" fontSize={11} fontWeight="700" fontFamily="Inter">Step 2: Hungarian Matching on Predictions</text>

            {/* Cost matrix */}
            <rect x={150} y={195} width={240} height={120} rx={8} fill="#1e293b" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={270} y={212} textAnchor="middle" fill="#f59e0b" fontSize={10} fontWeight="600" fontFamily="Inter">Cost Matrix C(i,j)</text>

            {/* Headers */}
            {['S1', 'S2', 'S3', 'S4', 'S5'].map((h, i) => (
              <text key={h} x={195 + i * 40} y={228} textAnchor="middle" fill="#10b981" fontSize={8} fontWeight="600" fontFamily="Inter">{h}</text>
            ))}
            {['T1', 'T2', 'T3', 'T4', 'T5'].map((h, i) => (
              <text key={h} x={168} y={244 + i * 16} textAnchor="middle" fill="#3b82f6" fontSize={8} fontWeight="600" fontFamily="Inter">{h}</text>
            ))}

            {/* Matrix values */}
            {[
              [0.8, 0.9, 0.2, 0.9, 0.9],
              [0.9, 0.9, 0.9, 0.3, 0.9],
              [0.1, 0.9, 0.8, 0.9, 0.9],
              [0.9, 0.5, 0.9, 0.9, 0.4],
              [0.9, 0.4, 0.9, 0.9, 0.5],
            ].map((row, ri) =>
              row.map((val, ci) => {
                const isMatch = (ri === 0 && ci === 2) || (ri === 1 && ci === 3) || (ri === 2 && ci === 0) || (ri === 3 && ci === 4) || (ri === 4 && ci === 1);
                return (
                  <g key={`m-${ri}-${ci}`}>
                    {isMatch && <rect x={179 + ci * 40} y={234 + ri * 16} width={32} height={14} rx={3} fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth={1} />}
                    <text x={195 + ci * 40} y={245 + ri * 16} textAnchor="middle"
                      fill={isMatch ? '#f59e0b' : '#64748b'} fontSize={8}
                      fontWeight={isMatch ? '700' : '400'} fontFamily="JetBrains Mono, monospace">
                      {val.toFixed(1)}
                    </text>
                  </g>
                );
              })
            )}

            {/* Step 3: Distill matched pairs */}
            <text x={10} y={340} fill="#f59e0b" fontSize={11} fontWeight="700" fontFamily="Inter">Step 3: Distill Logits of Matched Pairs</text>

            {/* Matched pairs visualization */}
            {[
              { t: 'T1(car)', s: 'S3(car)', x: 80 },
              { t: 'T2(dog)', s: 'S4(dog)', x: 230 },
              { t: 'T3(person)', s: 'S1(person)', x: 390 },
            ].map((pair, i) => (
              <g key={`pair-${i}`}>
                <rect x={pair.x - 60} y={348} width={55} height={18} rx={3} fill="rgba(59,130,246,0.12)" stroke="#3b82f6" strokeWidth={1} />
                <text x={pair.x - 33} y={360} textAnchor="middle" fill="#3b82f6" fontSize={8} fontFamily="Inter">{pair.t}</text>

                <text x={pair.x + 3} y={361} textAnchor="middle" fill="#f59e0b" fontSize={12} fontFamily="Inter">→</text>

                <rect x={pair.x + 12} y={348} width={55} height={18} rx={3} fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth={1} />
                <text x={pair.x + 39} y={360} textAnchor="middle" fill="#10b981" fontSize={8} fontFamily="Inter">{pair.s}</text>
              </g>
            ))}
            </g>
          </svg>
        </div>

        {/* Right: explanation */}
        <div className="w-56 flex flex-col gap-3 pt-2">
          <div className="bg-slide-surface rounded-lg p-3 border border-slide-amber/30">
            <div className="text-xs font-semibold text-slide-amber mb-1">Key Insight</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              Don't match queries by index. Use Hungarian algorithm on prediction outputs to find optimal teacher-student assignment.
            </div>
          </div>

          <div className="bg-slide-surface rounded-lg p-3 border border-slide-border/50">
            <div className="text-xs font-semibold text-slide-green mb-1">Cost Function</div>
            <div className="text-xs text-slide-muted leading-relaxed mono">
              C(i,j) = L_cls(t_i, s_j) + L_box(t_i, s_j)
            </div>
          </div>

          <div className="bg-slide-surface rounded-lg p-3 border border-slide-border/50">
            <div className="text-xs font-semibold text-slide-accent mb-1">Distillation Loss</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              After matching, apply KL divergence on classification logits and L1 loss on box regressions for each matched pair.
            </div>
          </div>

          <div className="bg-slide-surface rounded-lg p-3 border border-slide-border/50">
            <div className="text-xs font-semibold text-slide-purple mb-1">Why It Works</div>
            <div className="text-xs text-slide-muted leading-relaxed">
              Ensures the student's "car" prediction is distilled from the teacher's "car" prediction, regardless of query index.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
