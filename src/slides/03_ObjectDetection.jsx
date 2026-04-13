import SlideLayout from '../components/SlideLayout';
import carPhoto from '../assets/object-detection-car.jpg';
import personPhoto from '../assets/object-detection-person.jpg';
import dogPhoto from '../assets/object-detection-dog.jpg';
import bicyclePhoto from '../assets/object-detection-bicycle.jpg';

export default function ObjectDetectionSlide() {
  return (
    <SlideLayout title="Object Detection: The Task" subtitle="DETR Introduction" section="detr">
      <div className="flex gap-6 mt-1 h-full items-start pb-4">
        {/* Left: visual of detection */}
        <div className="flex-1 min-w-0 pt-1">
          <svg viewBox="0 0 480 340" className="w-full h-auto max-h-[500px]">
            <defs>
              <clipPath id="car-region">
                <rect x={30} y={50} width={140} height={100} rx={4} />
              </clipPath>
              <clipPath id="person-region">
                <rect x={200} y={80} width={100} height={140} rx={4} />
              </clipPath>
              <clipPath id="dog-region">
                <rect x={330} y={60} width={120} height={90} rx={4} />
              </clipPath>
              <clipPath id="bicycle-region">
                <rect x={340} y={180} width={110} height={80} rx={4} />
              </clipPath>
            </defs>

            {/* Image placeholder */}
            <rect x={0} y={0} width={480} height={340} rx={12} fill="#1e293b" stroke="#334155" strokeWidth={1} />
            <text x={240} y={30} textAnchor="middle" fill="#475569" fontSize={12} fontFamily="Inter">Input Image</text>

            {/* Example objects */}
            <rect x={30} y={50} width={140} height={100} rx={4} fill="#0f172a" stroke="#334155" />
            <image
              href={carPhoto}
              x={30}
              y={50}
              width={140}
              height={100}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#car-region)"
            />

            <rect x={200} y={80} width={100} height={140} rx={4} fill="#0f172a" stroke="#334155" />
            <image
              href={personPhoto}
              x={200}
              y={80}
              width={100}
              height={140}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#person-region)"
            />

            <rect x={330} y={60} width={120} height={90} rx={4} fill="#0f172a" stroke="#334155" />
            <image
              href={dogPhoto}
              x={330}
              y={60}
              width={120}
              height={90}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#dog-region)"
            />

            <rect x={340} y={180} width={110} height={80} rx={4} fill="#0f172a" stroke="#334155" />
            <image
              href={bicyclePhoto}
              x={340}
              y={180}
              width={110}
              height={80}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#bicycle-region)"
            />

            {/* Bounding boxes */}
            <rect x={25} y={45} width={150} height={110} rx={3} fill="none" stroke="#3b82f6" strokeWidth={2.5} />
            <rect x={16} y={38} width={50} height={18} rx={3} fill="#3b82f6" />
            <text x={41} y={50} textAnchor="middle" fill="white" fontSize={10} fontWeight="600" fontFamily="Inter">car</text>

            <rect x={195} y={75} width={110} height={150} rx={3} fill="none" stroke="#10b981" strokeWidth={2.5} />
            <rect x={186} y={68} width={65} height={18} rx={3} fill="#10b981" />
            <text x={218} y={80} textAnchor="middle" fill="white" fontSize={10} fontWeight="600" fontFamily="Inter">person</text>

            <rect x={325} y={55} width={130} height={100} rx={3} fill="none" stroke="#f59e0b" strokeWidth={2.5} />
            <rect x={316} y={48} width={48} height={18} rx={3} fill="#f59e0b" />
            <text x={340} y={60} textAnchor="middle" fill="white" fontSize={10} fontWeight="600" fontFamily="Inter">dog</text>

            <rect x={335} y={175} width={120} height={90} rx={3} fill="none" stroke="#a855f7" strokeWidth={2.5} />
            <rect x={326} y={168} width={60} height={18} rx={3} fill="#a855f7" />
            <text x={356} y={180} textAnchor="middle" fill="white" fontSize={10} fontWeight="600" fontFamily="Inter">bicycle</text>

            {/* Detection output format */}
            <g transform="translate(30, 280)">
              <text fill="#64748b" fontSize={11} fontFamily="JetBrains Mono, monospace">
                <tspan fill="#3b82f6">car: 0.97</tspan>
                <tspan dx={20} fill="#10b981">person: 0.94</tspan>
                <tspan dx={20} fill="#f59e0b">dog: 0.91</tspan>
                <tspan dx={20} fill="#a855f7">bicycle: 0.88</tspan>
              </text>
            </g>

            <text x={240} y={320} textAnchor="middle" fill="#475569" fontSize={11} fontFamily="Inter">
              Output: set of (class, bounding box, confidence) per object
            </text>
          </svg>
        </div>

        {/* Right: key points */}
        <div className="w-52 shrink-0 flex flex-col gap-3">
          <div className="bg-slide-surface rounded-lg p-3.5 border border-slide-border/50">
            <div className="text-xs font-semibold text-slide-accent mb-1">Goal</div>
            <div className="text-sm text-slide-text">Locate and classify every object instance in an image</div>
          </div>
          <div className="bg-slide-surface rounded-lg p-3.5 border border-slide-border/50">
            <div className="text-xs font-semibold text-slide-green mb-1">Output Format</div>
            <div className="text-sm text-slide-text">Set of (class label, bounding box coordinates, confidence score)</div>
          </div>
          <div className="bg-slide-surface rounded-lg p-3.5 border border-slide-border/50">
            <div className="text-xs font-semibold text-slide-amber mb-1">Benchmark</div>
            <div className="text-sm text-slide-text">MS COCO: 80 classes, evaluated by mAP metric</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
