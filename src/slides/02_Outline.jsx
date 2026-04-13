import SlideLayout from '../components/SlideLayout';

const sections = [
  { num: '01', title: 'DETR Architecture', desc: 'End-to-end object detection with transformers', color: 'bg-slide-accent', slides: '3-8' },
  { num: '02', title: 'The KD Challenge', desc: 'Why standard distillation fails for DETR', color: 'bg-slide-red', slides: '9-10' },
  { num: '03', title: 'Chen et al. 2017', desc: 'KD adapted for CNN-based object detection', color: 'bg-slide-purple', slides: '11-12' },
  { num: '04', title: 'DETRDistill', desc: 'Hungarian-matching logits distillation (ICCV 2023)', color: 'bg-slide-green', slides: '13-16' },
  { num: '05', title: 'KD-DETR', desc: 'Consistent distillation points sampling (CVPR 2024)', color: 'bg-slide-amber', slides: '17-20' },
  { num: '06', title: 'Comparison & Takeaways', desc: 'Method comparison and future directions', color: 'bg-slide-accent', slides: '21-22' },
];

export default function OutlineSlide() {
  return (
    <SlideLayout title="Presentation Outline">
      <div className="grid grid-cols-3 gap-4 mt-4 h-full max-h-[440px]">
        {sections.map((s) => (
          <div key={s.num} className="bg-slide-surface rounded-xl p-5 border border-slide-border/50 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-8 h-8 rounded-lg ${s.color} flex items-center justify-center text-sm font-bold text-white`}>
                {s.num}
              </div>
              <h3 className="text-base font-semibold text-slide-text">{s.title}</h3>
            </div>
            <p className="text-xs text-slide-muted leading-relaxed flex-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
