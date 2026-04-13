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

      {/* Mini architecture teaser */}
      <svg viewBox="0 0 600 60" className="w-[500px] mt-10 opacity-40">
        {['Image', 'Backbone', 'Encoder', 'Decoder', 'Predictions'].map((label, i) => (
          <g key={i}>
            <rect x={i * 120 + 5} y={10} width={100} height={36} rx={6}
              fill="none" stroke="#334155" strokeWidth={1} />
            <text x={i * 120 + 55} y={32} textAnchor="middle" fill="#64748b"
              fontSize={11} fontFamily="Inter, sans-serif">{label}</text>
            {i < 4 && (
              <line x1={i * 120 + 107} y1={28} x2={i * 120 + 123} y2={28}
                stroke="#334155" strokeWidth={1.5} markerEnd="url(#ah-title)" />
            )}
          </g>
        ))}
        <defs>
          <marker id="ah-title" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#334155" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
