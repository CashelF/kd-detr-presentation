import SlideLayout from '../components/SlideLayout';

const sections = [
  {
    num: '01',
    title: 'DETR Architecture',
    desc: 'End-to-end object detection with transformers',
    slides: '3-8',
    accent: 'text-slide-accent',
    border: 'border-slide-accent/30',
    tint: 'bg-slide-accent/10',
    tag: 'Foundations',
  },
  {
    num: '02',
    title: 'The KD Challenge',
    desc: 'Why standard distillation fails for DETR',
    slides: '9',
    accent: 'text-slide-red',
    border: 'border-slide-red/30',
    tint: 'bg-slide-red/10',
    tag: 'Motivation',
  },
  {
    num: '03',
    title: 'Chen et al. 2017',
    desc: 'KD adapted for CNN-based object detection',
    slides: '10-11',
    accent: 'text-slide-purple',
    border: 'border-slide-purple/30',
    tint: 'bg-slide-purple/10',
    tag: 'Prior Work',
  },
  {
    num: '04',
    title: 'DETRDistill',
    desc: 'Hungarian-matching logits distillation (ICCV 2023)',
    slides: '12-15',
    accent: 'text-slide-green',
    border: 'border-slide-green/30',
    tint: 'bg-slide-green/10',
    tag: 'Method 1',
  },
  {
    num: '05',
    title: 'KD-DETR',
    desc: 'Consistent distillation points sampling (CVPR 2024)',
    slides: '16-19',
    accent: 'text-slide-amber',
    border: 'border-slide-amber/30',
    tint: 'bg-slide-amber/10',
    tag: 'Method 2',
  },
  {
    num: '06',
    title: 'Comparison & Takeaways',
    desc: 'Method comparison and future directions',
    slides: '20-22',
    accent: 'text-slide-accent',
    border: 'border-slide-accent/30',
    tint: 'bg-slide-accent/10',
    tag: 'Wrap-up',
  },
];

export default function OutlineSlide() {
  return (
    <SlideLayout title="Presentation Outline" subtitle="Roadmap" section="comparison">
      <div className="h-full pt-4 flex flex-col">
        <div className="flex items-start justify-between gap-6 mb-4">
          <p className="max-w-[620px] text-sm leading-relaxed text-slide-muted">
            We will move from DETR basics and the distillation mismatch problem into two recent solutions,
            then close with a direct comparison of what each method fixes.
          </p>
          <div className="flex gap-2 shrink-0">
            <div className="rounded-full border border-slide-border/60 bg-slide-surface/75 px-3 py-1 text-xs font-medium text-slide-muted">
              22 slides
            </div>
            <div className="rounded-full border border-slide-border/60 bg-slide-surface/75 px-3 py-1 text-xs font-medium text-slide-muted">
              6 sections
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 flex-1 auto-rows-fr">
          {sections.map((section) => (
            <div
              key={section.num}
              className={`rounded-3xl border ${section.border} bg-slide-surface/80 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] flex flex-col`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className={`w-10 h-10 rounded-2xl ${section.tint} ${section.accent} border ${section.border} flex items-center justify-center text-sm font-bold shrink-0`}>
                    {section.num}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[1.08rem] font-semibold leading-tight text-slide-text">
                      {section.title}
                    </h3>
                    <div className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${section.accent}`}>
                      {section.tag}
                    </div>
                  </div>
                </div>

                <div className={`rounded-full border ${section.border} ${section.tint} px-3 py-1 text-[11px] font-semibold ${section.accent} shrink-0`}>
                  Slides {section.slides}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slide-muted flex-1">
                {section.desc}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-slide-border/45" />
                <div className={`text-xs font-medium ${section.accent}`}>
                  Part {section.num}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
