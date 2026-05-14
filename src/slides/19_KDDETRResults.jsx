import SlideLayout from '../components/SlideLayout';
import Table from '../components/Table';

const chartData = [
  { name: 'DAB-DETR', baseline: 42.1, kddetr: 45.7, teacher: 43.5 },
  { name: 'Def.DETR', baseline: 44.5, kddetr: 48.3, teacher: 48.0 },
  { name: 'DINO', baseline: 49.0, kddetr: 51.6, teacher: 51.3 },
];

export default function KDDETRResultsSlide() {
  const minAP = 40;
  const maxAP = 52;
  const chartTop = 22;
  const chartLeft = 44;
  const chartWidth = 278;
  const chartHeight = 305;
  const groupWidth = chartWidth / chartData.length;
  const barWidth = 18;
  const barGap = 5;
  const series = [
    { key: 'baseline', label: 'Student', color: '#6c635b', opacity: 0.75 },
    { key: 'kddetr', label: 'KD-DETR', color: '#b8915e' },
    { key: 'teacher', label: 'Teacher', color: '#e7e0d6', opacity: 0.7 },
  ];
  const gridTicks = [40, 44, 48, 52];
  const yFor = (value) => chartTop + ((maxAP - value) / (maxAP - minAP)) * chartHeight;

  return (
    <SlideLayout title="KD-DETR: Results on COCO val2017" subtitle="KD-DETR (CVPR 2024)" section="kddetr">
      <div className="flex gap-5 h-full mt-1">
        {/* Table */}
        <div className="flex-1 flex flex-col gap-3">
          <Table
            headers={['Student', 'Teacher', 'Epochs', 'Student AP', 'KD-DETR AP', 'Gain']}
            rows={[
              ['DAB-DETR-R50', 'DAB-DETR-R101', '50', '42.1', '45.7', '+3.6'],
              ['Deformable DETR-R50', 'Deformable DETR-R101', '50', '44.5', '48.3', '+3.8'],
              ['DINO-R50', 'DINO-R101', '12', '49.0', '51.6', '+2.6'],
            ]}
            highlightRow={2}
            caption="Official Table 2, COCO val2017 AP (%). Students use ResNet-50; teachers use ResNet-101."
            compact
          />

          {/* Ablation */}
          <div className="text-xs text-slide-muted mt-1">Sampling ablation (DAB-DETR, R18 student, Table 6):</div>
          <Table
            headers={['General', 'Specific', 'FRW', 'AP', 'AP50', 'AP75']}
            rows={[
              ['', '', '', '36.2', '56.1', '37.9'],
              ['Yes', '', '', '38.7', '59.1', '40.7'],
              ['Yes', '', 'Yes', '39.9', '60.2', '42.5'],
              ['', 'Yes', '', '40.0', '60.5', '42.4'],
              ['', 'Yes', 'Yes', '40.2', '60.7', '42.8'],
              ['Yes', 'Yes', 'Yes', '41.4', '61.4', '44.2'],
            ]}
            highlightRow={5}
            compact
          />
        </div>

        {/* Chart */}
        <div className="w-[360px] flex flex-col">
          <div className="text-xs text-slide-muted mb-1">Official KD-DETR Table 2 AP gains</div>
          <div className="flex-1 min-h-0">
            <svg viewBox="0 0 360 385" className="w-full h-full overflow-visible">
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
              <text
                x={14}
                y={chartTop + chartHeight / 2}
                textAnchor="middle"
                fill="#b5aba0"
                fontSize={10}
                fontFamily="Inter"
                transform={`rotate(-90 14 ${chartTop + chartHeight / 2})`}
              >
                AP (%)
              </text>

              {chartData.map((item, groupIndex) => {
                const groupStart = chartLeft + groupIndex * groupWidth + 10;
                const totalBarsWidth = series.length * barWidth + (series.length - 1) * barGap;
                const firstBarX = groupStart + (groupWidth - totalBarsWidth) / 2;
                return (
                  <g key={item.name}>
                    {series.map((s, seriesIndex) => {
                      const value = item[s.key];
                      const x = firstBarX + seriesIndex * (barWidth + barGap);
                      const y = yFor(value);
                      const height = chartTop + chartHeight - y;
                      return (
                        <g key={s.key}>
                          <rect x={x} y={y} width={barWidth} height={height} rx={3} fill={s.color} opacity={s.opacity ?? 0.95} />
                          <text x={x + barWidth / 2} y={y - 5} textAnchor="middle" fill="#f6f0e8" fontSize={9} fontWeight="600" fontFamily="Inter">
                            {value.toFixed(1)}
                          </text>
                        </g>
                      );
                    })}
                    <text x={groupStart + groupWidth / 2} y={chartTop + chartHeight + 26} textAnchor="middle" fill="#b5aba0" fontSize={9} fontFamily="Inter">
                      {item.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          {/* Legend */}
          <div className="flex justify-center gap-4 text-xs mt-1 flex-wrap text-slide-muted">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#6c635b] opacity-75" /> Student</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#b8915e]" /> KD-DETR</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#e7e0d6] opacity-70" /> Teacher</span>
          </div>

          {/* DINO callout */}
          <div className="mt-2 bg-slide-amber/10 rounded-lg p-3 border border-slide-amber/30">
            <div className="text-xs text-slide-amber font-semibold">Notable: DINO-R50</div>
            <div className="text-xs text-slide-muted mt-1">
              KD-DETR improves the 12-epoch R50 student from 49.0 to 51.6 AP, slightly above the 36-epoch R101 teacher at 51.3 AP.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
