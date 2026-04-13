import SlideLayout from '../components/SlideLayout';
import { ArrowDefs, Arrow, Box } from '../components/DiagramArrow';
import catImage from '../assets/image.png';

export default function KDDETRFrameworkSlide() {
  return (
    <SlideLayout title="KD-DETR: Framework Overview" subtitle="KD-DETR (CVPR 2024)" section="kddetr">
      <div className="flex flex-col h-full mt-1 justify-center">
        <svg viewBox="0 20 940 380" className="w-full">
          <ArrowDefs />
          <defs>
            <clipPath id="input-image-clip">
              <rect x="10" y="140" width="60" height="60" rx="6" />
            </clipPath>
          </defs>

          {/* Input image */}
          <image
            href={catImage}
            x={10}
            y={140}
            width={60}
            height={60}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#input-image-clip)"
          />
          <rect x={10} y={140} width={60} height={60} rx={6} fill="rgba(15,23,42,0.12)" stroke="#334155" strokeWidth={1} />
          <text x={40} y={215} textAnchor="middle" fill="#64748b" fontSize={9} fontFamily="Inter">Image</text>

          {/* Teacher path (top) */}
          <text x={100} y={30} fill="#3b82f6" fontSize={11} fontWeight="700" fontFamily="Inter">Teacher (frozen)</text>
          <rect x={85} y={38} width={440} height={70} rx={8} fill="rgba(59,130,246,0.04)" stroke="#3b82f6" strokeWidth={1} strokeDasharray="6 4" />

          <Box x={95} y={48} w={85} h={48} label="Backbone" sublabel="R-101" color="rgba(59,130,246,0.1)" border="#3b82f6" textColor="#3b82f6" fontSize={9} />
          <Arrow x1={184} y1={72} x2={194} y2={72} color="blue" />
          <Box x={198} y={48} w={85} h={48} label="Encoder" color="rgba(59,130,246,0.1)" border="#3b82f6" textColor="#3b82f6" fontSize={9} />
          <Arrow x1={287} y1={72} x2={297} y2={72} color="blue" />
          <Box x={301} y={48} w={85} h={48} label="Decoder" color="rgba(59,130,246,0.1)" border="#3b82f6" textColor="#3b82f6" fontSize={9} />
          <Arrow x1={390} y1={72} x2={400} y2={72} color="blue" />
          <Box x={404} y={48} w={110} h={48} label="T Predictions" color="rgba(59,130,246,0.12)" border="#3b82f6" textColor="#3b82f6" fontSize={9} />

          {/* Student path (bottom) */}
          <text x={100} y={265} fill="#10b981" fontSize={11} fontWeight="700" fontFamily="Inter">Student (trainable)</text>
          <rect x={85} y={273} width={440} height={70} rx={8} fill="rgba(16,185,129,0.04)" stroke="#10b981" strokeWidth={1} strokeDasharray="6 4" />

          <Box x={95} y={283} w={85} h={48} label="Backbone" sublabel="R-50" color="rgba(16,185,129,0.1)" border="#10b981" textColor="#10b981" fontSize={9} />
          <Arrow x1={184} y1={307} x2={194} y2={307} color="green" />
          <Box x={198} y={283} w={85} h={48} label="Encoder" color="rgba(16,185,129,0.1)" border="#10b981" textColor="#10b981" fontSize={9} />
          <Arrow x1={287} y1={307} x2={297} y2={307} color="green" />
          <Box x={301} y={283} w={85} h={48} label="Decoder" color="rgba(16,185,129,0.1)" border="#10b981" textColor="#10b981" fontSize={9} />
          <Arrow x1={390} y1={307} x2={400} y2={307} color="green" />
          <Box x={404} y={283} w={110} h={48} label="S Predictions" color="rgba(16,185,129,0.12)" border="#10b981" textColor="#10b981" fontSize={9} />

          {/* Image to both */}
          <Arrow x1={72} y1={155} x2={93} y2={72} />
          <Arrow x1={72} y1={185} x2={93} y2={307} />

          {/* Center: Consistent Distillation Points Module */}
          <rect x={540} y={110} width={200} height={160} rx={12} fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth={2} />
          <text x={640} y={135} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="700" fontFamily="Inter">Consistent Distillation</text>
          <text x={640} y={150} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="700" fontFamily="Inter">Points (CDP)</text>

          {/* CDP sub-modules */}
          <rect x={555} y={162} width={170} height={30} rx={5} fill="#1e293b" stroke="#f59e0b" strokeWidth={1} />
          <text x={640} y={181} textAnchor="middle" fill="#f59e0b" fontSize={9} fontWeight="500" fontFamily="Inter">1. Sample Reference Points</text>

          <rect x={555} y={198} width={170} height={30} rx={5} fill="#1e293b" stroke="#f59e0b" strokeWidth={1} />
          <text x={640} y={217} textAnchor="middle" fill="#f59e0b" fontSize={9} fontWeight="500" fontFamily="Inter">2. Construct Object Queries</text>

          <rect x={555} y={234} width={170} height={30} rx={5} fill="#1e293b" stroke="#f59e0b" strokeWidth={1} />
          <text x={640} y={253} textAnchor="middle" fill="#f59e0b" fontSize={9} fontWeight="500" fontFamily="Inter">3. Extract Aligned Features</text>

          {/* Arrows from teacher and student to CDP */}
          <Arrow x1={516} y1={72} x2={538} y2={170} color="blue" />
          <Arrow x1={516} y1={307} x2={538} y2={230} color="green" />

          {/* Right: Distillation losses */}
          <rect x={760} y={100} width={170} height={180} rx={10} fill="#1e293b" stroke="#334155" strokeWidth={1.5} />
          <text x={845} y={125} textAnchor="middle" fill="#f8fafc" fontSize={11} fontWeight="700" fontFamily="Inter">Distillation Losses</text>
          <line x1={775} y1={133} x2={915} y2={133} stroke="#334155" strokeWidth={1} />

          <rect x={775} y={142} width={140} height={28} rx={5} fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth={1} />
          <text x={845} y={160} textAnchor="middle" fill="#f59e0b" fontSize={9} fontWeight="500" fontFamily="Inter">Feature KD Loss</text>

          <rect x={775} y={178} width={140} height={28} rx={5} fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth={1} />
          <text x={845} y={196} textAnchor="middle" fill="#a855f7" fontSize={9} fontWeight="500" fontFamily="Inter">Logits KD Loss</text>

          <rect x={775} y={214} width={140} height={28} rx={5} fill="rgba(6,182,212,0.12)" stroke="#06b6d4" strokeWidth={1} />
          <text x={845} y={232} textAnchor="middle" fill="#06b6d4" fontSize={9} fontWeight="500" fontFamily="Inter">Attention KD Loss</text>

          <rect x={775} y={250} width={140} height={24} rx={5} fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth={1} />
          <text x={845} y={266} textAnchor="middle" fill="#ef4444" fontSize={9} fontWeight="500" fontFamily="Inter">Detection Loss</text>

          {/* Arrow from CDP to losses */}
          <Arrow x1={742} y1={190} x2={758} y2={190} color="amber" />

          {/* Bottom: key difference from DETRDistill */}
          <rect x={170} y={360} width={600} height={34} rx={8} fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth={1} strokeDasharray="5 3" />
          <text x={470} y={381} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight="500" fontFamily="Inter">
            Key difference: CDP creates shared reference points that extract consistent features from BOTH models
          </text>
        </svg>
      </div>
    </SlideLayout>
  );
}
