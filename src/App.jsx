import { useState, useEffect, useCallback, useRef } from 'react';
import slides from './slides';

const BASE_WIDTH = 1280;
const BASE_HEIGHT = 720;
const MAX_PRESENTATION_SCALE = 1.35;

function App() {
  const [current, setCurrent] = useState(0);
  const [stageSize, setStageSize] = useState({ width: BASE_WIDTH, height: BASE_HEIGHT });
  const total = slides.length;
  const stageRef = useRef(null);
  const touchStartRef = useRef(null);

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

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return undefined;

    const updateStageSize = () => {
      const availableWidth = node.clientWidth;
      const availableHeight = node.clientHeight;

      if (!availableWidth || !availableHeight) return;

      const scale = Math.min(
        availableWidth / BASE_WIDTH,
        availableHeight / BASE_HEIGHT,
        MAX_PRESENTATION_SCALE,
      );

      setStageSize({
        width: BASE_WIDTH * scale,
        height: BASE_HEIGHT * scale,
      });
    };

    updateStageSize();

    const observer = new ResizeObserver(updateStageSize);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const SlideComponent = slides[current];
  const scale = stageSize.width / BASE_WIDTH;

  const handleTouchStart = useCallback((event) => {
    if (event.touches.length !== 1) {
      touchStartRef.current = null;
      return;
    }

    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback((event) => {
    if (!touchStartRef.current || event.changedTouches.length !== 1) {
      touchStartRef.current = null;
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }

    if (deltaX < 0) {
      goNext();
      return;
    }

    goPrev();
  }, [goNext, goPrev]);

  const handleTouchCancel = useCallback(() => {
    touchStartRef.current = null;
  }, []);

  return (
    <div
      className="w-screen text-slide-text flex flex-col overflow-hidden"
      style={{ height: '100dvh', minHeight: '100dvh' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      {/* Slide area */}
      <div
        ref={stageRef}
        className="flex-1 min-h-0 flex items-center justify-center px-1.5 pt-2 pb-1 sm:px-2 sm:pt-3 sm:pb-2 overflow-hidden"
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        <div
          className="bg-slide-bg rounded-[22px] sm:rounded-[28px] border border-slide-border/60 shadow-[0_30px_120px_rgba(0,0,0,0.42)] overflow-hidden relative shrink-0"
          style={{ width: stageSize.width, height: stageSize.height }}
        >
          <div
            style={{
              width: BASE_WIDTH,
              height: BASE_HEIGHT,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <SlideComponent />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="shrink-0 pt-1 px-3 sm:px-7 text-slide-muted text-xs sm:text-[13px]"
        style={{
          paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom, 0px))',
          paddingLeft: 'max(0.75rem, env(safe-area-inset-left, 0px))',
          paddingRight: 'max(0.75rem, env(safe-area-inset-right, 0px))',
        }}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="shrink-0 px-3 py-1.5 sm:px-3.5 rounded-full border border-slide-border/50 bg-slide-surface/40 hover:bg-slide-surface disabled:opacity-30 transition-colors"
          >
            Prev
          </button>

          {/* Progress bar */}
          <div className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-3">
            <span className="shrink-0 mono text-[10px] sm:text-[11px] tracking-[0.08em]">
              {current + 1} / {total}
            </span>
            <div className="w-full max-w-24 sm:max-w-48 h-[3px] bg-slide-border/35 rounded-full overflow-hidden">
              <div
                className="h-full bg-slide-accent rounded-full transition-all duration-300"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>
          </div>

          <button
            onClick={goNext}
            disabled={current === total - 1}
            className="shrink-0 px-3 py-1.5 sm:px-3.5 rounded-full border border-slide-border/50 bg-slide-surface/40 hover:bg-slide-surface disabled:opacity-30 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
