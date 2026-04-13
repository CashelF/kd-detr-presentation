export default function SlideLayout({ title, subtitle, section, children, noPadding }) {
  const sectionColors = {
    detr: 'text-slide-accent',
    challenge: 'text-slide-red',
    chen: 'text-slide-purple',
    detrdistill: 'text-slide-green',
    kddetr: 'text-slide-amber',
    comparison: 'text-slide-accent',
  };
  const sectionColor = sectionColors[section] || 'text-slide-muted';

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      {title && (
        <div className="px-10 pt-7 pb-2 shrink-0">
          {subtitle && (
            <div className={`text-[10px] font-semibold uppercase tracking-[0.28em] mb-1.5 ${sectionColor}`}>
              {subtitle}
            </div>
          )}
          <h1 className="text-[1.95rem] font-semibold tracking-tight text-slide-text leading-tight">{title}</h1>
        </div>
      )}
      {/* Content */}
      <div className={`flex-1 overflow-hidden ${noPadding ? '' : 'px-10 pb-6'}`}>
        {children}
      </div>
    </div>
  );
}
