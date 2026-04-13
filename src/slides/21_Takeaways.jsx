import SlideLayout from '../components/SlideLayout';

const takeaways = [
  {
    num: '1',
    title: 'DETR Breaks Standard KD',
    desc: 'Set prediction and Hungarian matching eliminate the spatial correspondences that CNN-based KD relies on.',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.3)',
  },
  {
    num: '2',
    title: 'Output Matching is Necessary but Insufficient',
    desc: 'DETRDistill\'s Hungarian-matching logits solve the prediction alignment problem, but intermediate features still lack consistency.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.3)',
  },
  {
    num: '3',
    title: 'Consistent Reference Points Enable Deep KD',
    desc: 'KD-DETR\'s key contribution: shared reference points create aligned queries for deep feature distillation across teacher and student.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.3)',
  },
  {
    num: '4',
    title: 'Students Can Surpass Teachers',
    desc: 'With proper KD, a smaller DINO-R50 student (51.4 AP) can exceed its larger teacher (51.3 AP), suggesting KD acts as a regularizer.',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.3)',
  },
];

export default function TakeawaysSlide() {
  return (
    <SlideLayout title="Key Takeaways">
      <div className="flex flex-col gap-4 mt-3">
        {takeaways.map((t) => (
          <div key={t.num} className="flex gap-4 items-start rounded-xl p-5 border"
            style={{ background: t.bg, borderColor: t.border }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shrink-0"
              style={{ background: `${t.color}20`, color: t.color }}>
              {t.num}
            </div>
            <div>
              <div className="text-base font-semibold mb-1" style={{ color: t.color }}>{t.title}</div>
              <div className="text-sm text-slide-muted leading-relaxed">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
