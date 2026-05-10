export default function Sidebar({ phases, activePhase, completedPhases, completedSteps, onSelect }) {
  const phaseProgress = (p) => {
    const total = p.steps.length;
    const done = p.steps.filter((_, i) => !!completedSteps[`${p.id}-${i}`]).length;
    return Math.round((done / total) * 100);
  };

  return (
    <nav style={{
      width: 240,
      background: "#161310",
      borderRight: "1px solid #2a2a2a",
      overflowY: "auto",
      padding: "12px 0",
    }}>
      {phases.map((p, i) => {
        const isActive = i === activePhase;
        const isDone = completedPhases.includes(p.id);
        const prog = phaseProgress(p);

        return (
          <div
            key={p.id}
            onClick={() => onSelect(i)}
            style={{
              padding: "12px 16px",
              cursor: "pointer",
              background: isActive ? "#1e1a12" : "transparent",
              borderLeft: `3px solid ${isActive ? p.color : isDone ? "#4A8A6B" : "transparent"}`,
              marginBottom: 2,
              transition: "all 0.2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 18 }}>{p.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: isActive ? p.color : isDone ? "#4A8A6B" : "#888",
                  lineHeight: 1.3,
                }}>
                  {i + 1}. {p.name}
                </div>
                <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{p.duration}</div>
                {prog > 0 && (
                  <div style={{ marginTop: 4, height: 3, background: "#2a2a2a", borderRadius: 2 }}>
                    <div style={{
                      height: "100%",
                      width: `${prog}%`,
                      background: p.color,
                      borderRadius: 2,
                      transition: "width 0.3s",
                    }} />
                  </div>
                )}
              </div>
              {isDone && <span style={{ color: "#4A8A6B", fontSize: 14 }}>✓</span>}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
