import SlideLayout from '../components/SlideLayout';
import Table from '../components/Table';

const data = [
  { name: 'Baseline', mAP: 54.7, color: '#8ea07d' },
  { name: 'L2-B', mAP: 55.9, color: '#78958f' },
  { name: 'CLS-W', mAP: 57.7, color: '#b8915e' },
  { name: 'Hints-A', mAP: 58.0, color: '#948094' },
  { name: 'L2-B +\nCLS-W', mAP: 58.4, color: '#c0a276' },
  { name: 'Full', mAP: 59.4, color: '#e7e0d6' },
];

export default function ChenResultsSlide() {
  const minAP = 54;
  const maxAP = 60;
  const chartTop = 20;
  const chartLeft = 48;
  const chartWidth = 252;
  const chartHeight = 285;
  const barWidth = 28;
  const xStep = chartWidth / data.length;
  const yFor = (value) => chartTop + ((maxAP - value) / (maxAP - minAP)) * chartHeight;
  const gridTicks = [54, 56, 58, 60];

  return (
    <SlideLayout title="Chen et al. 2017: Results & Ablation" subtitle="Chen et al. (NeurIPS 2017)" section="chen">
      <div className="flex gap-6 h-full mt-1">
        {/* Table */}
        <div className="flex-1 flex flex-col gap-4">
          <Table
            headers={['Dataset', 'Baseline', 'L2', 'L2-B', 'CLS', 'CLS-W', 'Hints', 'Hints-A', 'Distill', 'Full']}
            rows={[
              ['PASCAL', '54.7', '54.6', '55.9', '57.4', '57.7', '56.9', '58.0', '58.4', '59.4'],
              ['KITTI', '49.3', '48.5', '50.1', '50.8', '51.3', '50.3', '52.1', '51.7', '53.7'],
            ]}
            highlightRow={0}
            compact
            caption="Chen et al. Table 4: VGG16 teacher, Tucker-compressed student, mAP (%). Distill = L2-B + CLS-W; Full = L2-B + CLS-W + Hints-A."
          />

          <div className="flex gap-3">
            <div className="flex-1 bg-slide-surface rounded-lg p-3 border border-slide-border/50">
              <div className="text-xs font-semibold text-slide-green mb-1">Takeaway</div>
              <div className="text-xs text-slide-muted">Bounded box regression, weighted classification distillation, and adapted hints combine for the best mAP: +4.7 on PASCAL and +4.4 on KITTI.</div>
            </div>
            <div className="flex-1 bg-slide-surface rounded-lg p-3 border border-slide-border/50">
              <div className="text-xs font-semibold text-slide-red mb-1">Limitation</div>
              <div className="text-xs text-slide-muted">Built around Faster R-CNN-style proposal classification and box regression, so it does not directly solve DETR's set-prediction alignment problem.</div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="w-80 flex flex-col">
          <div className="text-xs text-slide-muted mb-2">PASCAL ablation from Chen et al. Table 4</div>
          <div className="flex-1 min-h-0">
            <svg viewBox="0 0 320 380" className="w-full h-full overflow-visible">
              {gridTicks.map((tick) => {
                const y = yFor(tick);
                return (
                  <g key={tick}>
                    <line x1={chartLeft} y1={y} x2={chartLeft + chartWidth} y2={y} stroke="#4a4138" strokeDasharray="3 3" />
                    <text x={chartLeft - 10} y={y + 4} textAnchor="end" fill="#b5aba0" fontSize={10} fontFamily="Inter">
                      {tick}
                    </text>
                  </g>
                );
              })}

              <line x1={chartLeft} y1={chartTop} x2={chartLeft} y2={chartTop + chartHeight} stroke="#6c635b" />
              <line x1={chartLeft} y1={chartTop + chartHeight} x2={chartLeft + chartWidth} y2={chartTop + chartHeight} stroke="#6c635b" />
              <line
                x1={chartLeft}
                y1={yFor(54.7)}
                x2={chartLeft + chartWidth}
                y2={yFor(54.7)}
                stroke="#6c635b"
                strokeDasharray="4 4"
              />
              <text x={chartLeft + chartWidth - 2} y={yFor(54.7) - 5} textAnchor="end" fill="#8f857a" fontSize={9} fontFamily="Inter">
                Baseline
              </text>

              <text
                x={16}
                y={chartTop + chartHeight / 2}
                textAnchor="middle"
                fill="#b5aba0"
                fontSize={10}
                fontFamily="Inter"
                transform={`rotate(-90 16 ${chartTop + chartHeight / 2})`}
              >
                mAP (%)
              </text>

              {data.map((d, i) => {
                const x = chartLeft + i * xStep + (xStep - barWidth) / 2;
                const y = yFor(d.mAP);
                const height = chartTop + chartHeight - y;
                return (
                  <g key={d.name}>
                    <rect x={x} y={y} width={barWidth} height={height} rx={4} fill={d.color} opacity={0.9} />
                    <text x={x + barWidth / 2} y={y - 6} textAnchor="middle" fill="#f6f0e8" fontSize={10} fontWeight="600" fontFamily="Inter">
                      {d.mAP.toFixed(1)}
                    </text>
                    <text
                      x={x + barWidth / 2}
                      y={chartTop + chartHeight + 22}
                      textAnchor="end"
                      fill="#b5aba0"
                      fontSize={9}
                      fontFamily="Inter"
                      transform={`rotate(-28 ${x + barWidth / 2} ${chartTop + chartHeight + 22})`}
                    >
                      {d.name.split('\n').map((line, lineIndex) => (
                        <tspan key={line} x={x + barWidth / 2} dy={lineIndex === 0 ? 0 : 10}>
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
