export function ArrowDefs() {
  const colors = {
    neutral: '#7f756b',
    blue: '#e7e0d6',
    green: '#8ea07d',
    amber: '#b8915e',
    red: '#ad6e5f',
  };
  return (
    <defs>
      <marker id="ah" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill={colors.neutral} />
      </marker>
      <marker id="ah-blue" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill={colors.blue} />
      </marker>
      <marker id="ah-green" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill={colors.green} />
      </marker>
      <marker id="ah-amber" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill={colors.amber} />
      </marker>
      <marker id="ah-red" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill={colors.red} />
      </marker>
    </defs>
  );
}

export function Arrow({ x1, y1, x2, y2, color = '', dashed }) {
  const markerId = color ? `ah-${color}` : 'ah';
  const strokeColor = {
    blue: '#e7e0d6',
    green: '#8ea07d',
    amber: '#b8915e',
    red: '#ad6e5f',
    '': '#7f756b',
  }[color];
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={strokeColor} strokeWidth={2} markerEnd={`url(#${markerId})`}
      strokeDasharray={dashed ? '6 4' : undefined} />
  );
}

export function Box({ x, y, w, h, label, sublabel, color = '#221d1a', border = '#4a4138', textColor = '#f6f0e8', fontSize = 13, rx = 6 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={color} stroke={border} strokeWidth={1.5} rx={rx} />
      <text x={x + w / 2} y={y + h / 2 + (sublabel ? -6 : 1)} textAnchor="middle" dominantBaseline="middle"
        fill={textColor} fontSize={fontSize} fontWeight="600" fontFamily="Inter, sans-serif">
        {label}
      </text>
      {sublabel && (
        <text x={x + w / 2} y={y + h / 2 + 9} textAnchor="middle" dominantBaseline="middle"
          fill="#b5aba0" fontSize={9} fontFamily="Inter, sans-serif">
          {sublabel}
        </text>
      )}
    </g>
  );
}
