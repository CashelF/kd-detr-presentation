import SlideLayout from '../components/SlideLayout';
import Table from '../components/Table';

export default function DETRVariantsSlide() {
  const headers = ['Model', 'Year', 'Key Innovation', 'Epochs', 'AP', 'Params'];
  const rows = [
    ['DETR', '2020', 'Original transformer detector', '500', '42.0', '41M'],
    ['Deformable DETR', '2021', 'Deformable attention (sparse)', '50', '43.8', '40M'],
    ['Conditional DETR', '2021', 'Conditional cross-attention', '50', '40.9', '44M'],
    ['DAB-DETR', '2022', 'Dynamic anchor boxes as queries', '50', '42.5', '44M'],
    ['DN-DETR', '2022', 'Denoising training strategy', '50', '43.4', '44M'],
    ['DINO', '2022', 'Contrastive denoising + mixed queries', '12', '49.0', '47M'],
    ['RT-DETR', '2023', 'Real-time DETR with hybrid encoder', '72', '53.1', '32M'],
  ];

  return (
    <SlideLayout title="The DETR Family: Evolution of Detection Transformers" subtitle="DETR Introduction" section="detr">
      <div className="flex flex-col h-full mt-2 gap-4">
        <Table headers={headers} rows={rows} highlightRow={0}
          caption="COCO val2017 results with ResNet-50 backbone (unless noted). AP = Average Precision." />

        {/* Timeline visualization */}
        <div className="flex-1 flex items-center">
          <svg viewBox="0 0 900 100" className="w-full">
            {/* Timeline line */}
            <line x1={40} y1={50} x2={860} y2={50} stroke="#334155" strokeWidth={2} />

            {[
              { x: 80, label: 'DETR', year: '2020', color: '#3b82f6' },
              { x: 230, label: 'Deformable', year: '2021', color: '#8b5cf6' },
              { x: 330, label: 'Conditional', year: '2021', color: '#8b5cf6' },
              { x: 480, label: 'DAB-DETR', year: '2022', color: '#10b981' },
              { x: 580, label: 'DN-DETR', year: '2022', color: '#10b981' },
              { x: 680, label: 'DINO', year: '2022', color: '#10b981' },
              { x: 820, label: 'RT-DETR', year: '2023', color: '#f59e0b' },
            ].map((item, i) => (
              <g key={i}>
                <circle cx={item.x} cy={50} r={6} fill={item.color} />
                <text x={item.x} y={30} textAnchor="middle" fill={item.color}
                  fontSize={10} fontWeight="600" fontFamily="Inter">{item.label}</text>
                <text x={item.x} y={75} textAnchor="middle" fill="#64748b"
                  fontSize={9} fontFamily="Inter">{item.year}</text>
              </g>
            ))}

            {/* Trend annotation */}
            <text x={450} y={95} textAnchor="middle" fill="#475569" fontSize={10} fontFamily="Inter" fontStyle="italic">
              Faster convergence, better accuracy, but models keep growing in complexity
            </text>
          </svg>
        </div>
      </div>
    </SlideLayout>
  );
}
