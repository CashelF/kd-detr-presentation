import SlideLayout from '../components/SlideLayout';
import Table from '../components/Table';

export default function ComparisonSlide() {
  return (
    <SlideLayout title="Method Comparison: Evolution of KD for Detection" subtitle="Comparison" section="comparison">
      <div className="flex flex-col h-full mt-2 gap-4">
        <Table
          headers={['Aspect', 'Chen et al. 2017', 'DETRDistill (2023)', 'KD-DETR (2024)']}
          rows={[
            ['Target Architecture', 'CNN detectors (Faster R-CNN)', 'DETR family (universal)', 'DETR family (universal)'],
            ['Distillation Points', 'Anchors / RoI regions', 'Hungarian-matched predictions', 'Shared CDP decoder queries'],
            ['Feature Alignment', 'Hint feature imitation', 'Target-aware feature KD', 'Consistent prediction alignment'],
            ['Logits / Box KD', 'Class + box imitation', 'Hungarian-matched logits', 'CDP-aligned KL + L1 + GIoU'],
            ['Query Handling', 'Not applicable', 'Query-prior assignment', 'Shared specialized object queries'],
            ['Key Innovation', 'Adapt KD to detection', 'Solve T/S prediction mismatch', 'Consistent prediction distillation'],
            ['Limitation', 'Requires spatial anchors', 'Output-only alignment', 'More complex pipeline'],
            ['Best COCO Gain', '+2.9 mAP', '+2.5 AP', '+3.8 AP'],
          ]}
          caption="Side-by-side comparison of the three KD approaches for object detection"
        />

        {/* Visual evolution timeline */}
        <div className="flex-1 flex items-center">
          <svg viewBox="0 0 900 110" className="w-full">
            {/* Timeline */}
            <line x1={60} y1={40} x2={840} y2={40} stroke="#334155" strokeWidth={2} />

            {/* Chen 2017 */}
            <circle cx={150} cy={40} r={16} fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth={2} />
            <text x={150} y={44} textAnchor="middle" fill="#a855f7" fontSize={10} fontWeight="700" fontFamily="Inter">1</text>
            <text x={150} y={75} textAnchor="middle" fill="#a855f7" fontSize={11} fontWeight="600" fontFamily="Inter">Chen et al.</text>
            <text x={150} y={90} textAnchor="middle" fill="#64748b" fontSize={9} fontFamily="Inter">NeurIPS 2017</text>
            <text x={150} y={105} textAnchor="middle" fill="#94a3b8" fontSize={8} fontFamily="Inter">Spatial KD for CNNs</text>

            {/* Arrow */}
            <line x1={175} y1={40} x2={420} y2={40} stroke="#334155" strokeWidth={2} />
            <text x={300} y={28} textAnchor="middle" fill="#475569" fontSize={9} fontFamily="Inter" fontStyle="italic">
              Shift to transformers creates new challenges
            </text>

            {/* DETRDistill 2023 */}
            <circle cx={450} cy={40} r={16} fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth={2} />
            <text x={450} y={44} textAnchor="middle" fill="#10b981" fontSize={10} fontWeight="700" fontFamily="Inter">2</text>
            <text x={450} y={75} textAnchor="middle" fill="#10b981" fontSize={11} fontWeight="600" fontFamily="Inter">DETRDistill</text>
            <text x={450} y={90} textAnchor="middle" fill="#64748b" fontSize={9} fontFamily="Inter">ICCV 2023</text>
            <text x={450} y={105} textAnchor="middle" fill="#94a3b8" fontSize={8} fontFamily="Inter">Output-level matching</text>

            {/* Arrow */}
            <line x1={475} y1={40} x2={700} y2={40} stroke="#334155" strokeWidth={2} />
            <text x={590} y={28} textAnchor="middle" fill="#475569" fontSize={9} fontFamily="Inter" fontStyle="italic">
              Need consistent query-level predictions
            </text>

            {/* KD-DETR 2024 */}
            <circle cx={750} cy={40} r={16} fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth={2} />
            <text x={750} y={44} textAnchor="middle" fill="#f59e0b" fontSize={10} fontWeight="700" fontFamily="Inter">3</text>
            <text x={750} y={75} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="600" fontFamily="Inter">KD-DETR</text>
            <text x={750} y={90} textAnchor="middle" fill="#64748b" fontSize={9} fontFamily="Inter">CVPR 2024</text>
            <text x={750} y={105} textAnchor="middle" fill="#94a3b8" fontSize={8} fontFamily="Inter">Shared CDP predictions</text>
          </svg>
        </div>
      </div>
    </SlideLayout>
  );
}
