import SlideLayout from '../components/SlideLayout';
import Table from '../components/Table';

const chartData = [
  { name: 'AdaMixer', baseline: 42.3, distilled: 44.7, teacher: 43.6 },
  { name: 'Def.DETR', baseline: 44.1, distilled: 46.6, teacher: 45.5 },
  { name: 'Cond.DETR', baseline: 40.7, distilled: 42.9, teacher: 42.4 },
];

export default function DETRDistillResultsSlide() {
  const minAP = 40;
  const maxAP = 47;
  const chartTop = 22;
  const chartLeft = 44;
  const chartWidth = 278;
  const chartHeight = 305;
  const groupWidth = chartWidth / chartData.length;
  const barWidth = 18;
  const barGap = 5;
  const series = [
    { key: 'baseline', label: 'Baseline', color: '#6c635b' },
    { key: 'distilled', label: 'DETRDistill', color: '#8ea07d' },
    { key: 'teacher', label: 'Teacher', color: '#e7e0d6', opacity: 0.7 },
  ];
  const gridTicks = [40, 42, 44, 46, 47];
  const yFor = (value) => chartTop + ((maxAP - value) / (maxAP - minAP)) * chartHeight;

  return (
    <SlideLayout title="DETRDistill: Results on COCO val2017" subtitle="DETRDistill (ICCV 2023)" section="detrdistill">
      <div className="flex gap-5 h-full mt-1">
        {/* Table */}
        <div className="flex-1 flex flex-col gap-3">
          <Table
            headers={['Detector', 'Epochs', 'Teacher AP', 'Student AP', 'DETRDistill AP', 'Gain']}
            rows={[
              ['AdaMixer (100 queries)', '12', '43.6', '42.3', '44.7', '+2.4'],
              ['Deformable DETR (300 queries)', '50', '45.5', '44.1', '46.6', '+2.5'],
              ['Conditional DETR (300 queries)', '50', '42.4', '40.7', '42.9', '+2.2'],
            ]}
            caption="Official Table 3, COCO val2017 AP (%). Teachers use ResNet-101; students use ResNet-50."
            compact
          />

          {/* Ablation */}
          <div className="text-xs text-slide-muted mt-1">Ablation (AdaMixer-R50, Table 7):</div>
          <Table
            headers={['Distillation', 'AP', 'AP_S', 'AP_M', 'AP_L']}
            rows={[
              ['None', '42.3', '25.3', '44.8', '58.2'],
              ['LD', '43.7 (+1.4)', '25.3', '46.5', '60.7'],
              ['FD', '43.5 (+1.2)', '25.4', '46.7', '60.0'],
              ['AD', '42.9 (+0.6)', '24.5', '45.9', '59.3'],
              ['LD + FD', '44.3 (+2.0)', '25.8', '47.0', '61.0'],
              ['LD + FD + AD', '44.7 (+2.4)', '26.7', '47.6', '61.0'],
            ]}
            highlightRow={5}
            compact
          />
        </div>

        {/* Chart */}
        <div className="w-[360px] flex flex-col">
          <div className="text-xs text-slide-muted mb-1">Official main results across three DETR variants</div>
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
          <div className="flex justify-center gap-4 text-xs mt-1 text-slide-muted">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#6c635b] opacity-70" /> Baseline</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#8ea07d]" /> DETRDistill</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#e7e0d6] opacity-70" /> Teacher</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
