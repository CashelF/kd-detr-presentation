export default function TitleSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-16">
      {/* Decorative top bar */}
      <div className="flex gap-2 mb-8">
        <div className="w-12 h-1 rounded bg-slide-accent" />
        <div className="w-12 h-1 rounded bg-slide-green" />
        <div className="w-12 h-1 rounded bg-slide-amber" />
      </div>

      <h1 className="text-4xl font-extrabold text-slide-text leading-tight mb-4">
        Knowledge Distillation for<br />Detection Transformers
      </h1>

      <p className="text-lg text-slide-muted mb-8 max-w-2xl">
        Compressing DETR models via consistent distillation points and Hungarian-matching logits
      </p>

      <div className="flex items-center gap-6 text-sm text-slide-muted">
        <span className="font-medium text-slide-text">Cashel Fitzgerald</span>
        <span className="w-1 h-1 rounded-full bg-slide-border" />
        <span>ECE 5545 / CS 5775</span>
        <span className="w-1 h-1 rounded-full bg-slide-border" />
        <span>Spring 2026</span>
      </div>
    </div>
  );
}
