import SlideLayout from '../components/SlideLayout';

const refs = [
  {
    tag: 'DETR',
    authors: 'Carion, N., Massa, F., Synnaeve, G., Usunier, N., Kirillov, A., & Zagoruyko, S.',
    title: 'End-to-End Object Detection with Transformers',
    venue: 'ECCV 2020',
    color: '#e7e0d6',
  },
  {
    tag: 'Chen 2017',
    authors: 'Chen, G., Choi, W., Yu, X., Han, T., & Chandraker, M.',
    title: 'Learning Efficient Object Detection Models with Knowledge Distillation',
    venue: 'NeurIPS 2017',
    color: '#948094',
  },
  {
    tag: 'DETRDistill',
    authors: 'Chang, J., Wang, Z., Wang, J., Wang, H., & Han, J.',
    title: 'DETRDistill: A Universal Knowledge Distillation Framework for DETR-families',
    venue: 'ICCV 2023',
    color: '#8ea07d',
  },
  {
    tag: 'KD-DETR',
    authors: 'Wang, Y., Ye, M., Lin, Z., Li, H., Zheng, Z., & Wang, S.',
    title: 'Knowledge Distillation for Detection Transformer with Consistent Distillation Points Sampling',
    venue: 'CVPR 2024',
    color: '#b8915e',
  },
  {
    tag: 'Hinton 2015',
    authors: 'Hinton, G., Vinyals, O., & Dean, J.',
    title: 'Distilling the Knowledge in a Neural Network',
    venue: 'NeurIPS Workshop 2015',
    color: '#6c635b',
  },
];

export default function ReferencesSlide() {
  return (
    <SlideLayout title="References">
      <div className="flex flex-col gap-3 mt-3">
        {refs.map((ref, i) => (
          <div key={i} className="flex gap-4 items-start bg-slide-surface/50 rounded-xl p-4 border border-slide-border/30">
            <div className="shrink-0 w-24 text-center">
              <span className="text-xs font-bold px-2 py-1 rounded"
                style={{ color: ref.color, background: `${ref.color}15`, border: `1px solid ${ref.color}40` }}>
                {ref.tag}
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slide-text">{ref.title}</div>
              <div className="text-xs text-slide-muted mt-0.5">{ref.authors}</div>
              <div className="text-xs font-medium mt-0.5" style={{ color: ref.color }}>{ref.venue}</div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
