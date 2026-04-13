export default function Table({ headers, rows, highlightRow, caption, compact }) {
  return (
    <div className="w-full">
      {caption && <div className="text-xs text-slide-muted mb-2 italic">{caption}</div>}
      <div className="overflow-x-auto slide-table rounded-lg border border-slide-border">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slide-surface border-b border-slide-border">
              {headers.map((h, i) => (
                <th key={i} className={`${compact ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm'} font-semibold text-slide-muted whitespace-nowrap`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={`border-b border-slide-border/50 last:border-0
                ${highlightRow === ri ? 'bg-slide-accent/8' : ri % 2 === 0 ? 'bg-slide-bg' : 'bg-slide-surface/30'}`}>
                {row.map((cell, ci) => (
                  <td key={ci} className={`${compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} whitespace-nowrap
                    ${highlightRow === ri ? 'text-slide-text font-semibold' : 'text-slide-text'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
