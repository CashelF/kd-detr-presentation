export function ArrowDefs() {
  return (
    <defs>
      <marker id="ah" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill="#64748b" />
      </marker>
      <marker id="ah-blue" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill="#3b82f6" />
      </marker>
      <marker id="ah-green" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill="#10b981" />
      </marker>
      <marker id="ah-amber" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill="#f59e0b" />
      </marker>
      <marker id="ah-red" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill="#ef4444" />
      </marker>
    </defs>
  );
}

export function Arrow({ x1, y1, x2, y2, color = '', dashed }) {
  const markerId = color ? `ah-${color}` : 'ah';
  const strokeColor = {
    blue: '#3b82f6', green: '#10b981', amber: '#f59e0b', red: '#ef4444', '': '#64748b'
  }[color];
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={strokeColor} strokeWidth={2} markerEnd={`url(#${markerId})`}
      strokeDasharray={dashed ? '6 4' : undefined} />
  );
}

export function Box({ x, y, w, h, label, sublabel, color = '#1e293b', border = '#334155', textColor = '#f8fafc', fontSize = 13, rx = 6 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={color} stroke={border} strokeWidth={1.5} rx={rx} />
      <text x={x + w / 2} y={y + h / 2 + (sublabel ? -6 : 1)} textAnchor="middle" dominantBaseline="middle"
        fill={textColor} fontSize={fontSize} fontWeight="600" fontFamily="Inter, sans-serif">
        {label}
      </text>
      {sublabel && (
        <text x={x + w / 2} y={y + h / 2 + 9} textAnchor="middle" dominantBaseline="middle"
          fill="#94a3b8" fontSize={9} fontFamily="Inter, sans-serif">
          {sublabel}
        </text>
      )}
    </g>
  );
}
