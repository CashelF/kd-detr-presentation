import { useState, useEffect, useCallback } from 'react';
import slides from './slides';

function App() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goNext = useCallback(() => setCurrent(i => Math.min(i + 1, total - 1)), [total]);
  const goPrev = useCallback(() => setCurrent(i => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Home') {
        setCurrent(0);
      } else if (e.key === 'End') {
        setCurrent(total - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, total]);

  const SlideComponent = slides[current];

  return (
    <div className="w-screen h-screen bg-slide-bg flex flex-col overflow-hidden">
      {/* Slide area */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <div className="w-full h-full max-w-[1280px] max-h-[720px] aspect-video bg-slide-bg rounded-lg overflow-hidden relative">
          <SlideComponent />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-10 flex items-center justify-between px-6 text-slide-muted text-sm shrink-0">
        <button onClick={goPrev} disabled={current === 0}
          className="px-3 py-1 rounded hover:bg-slide-surface disabled:opacity-30 transition-colors">
          Prev
        </button>

        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <span className="mono text-xs">{current + 1} / {total}</span>
          <div className="w-48 h-1 bg-slide-surface rounded-full overflow-hidden">
            <div className="h-full bg-slide-accent rounded-full transition-all duration-300"
              style={{ width: `${((current + 1) / total) * 100}%` }} />
          </div>
        </div>

        <button onClick={goNext} disabled={current === total - 1}
          className="px-3 py-1 rounded hover:bg-slide-surface disabled:opacity-30 transition-colors">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
