import { useState } from "react";

export default function PhaseStep({ step, index, phaseId, phaseColor, isDone, onToggleDone }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      background: isDone ? "#0d1a11" : "#1a1610",
      border: `1px solid ${isDone ? "#2a5a3a" : expanded ? phaseColor + "55" : "#2a2520"}`,
      borderRadius: 10,
      overflow: "hidden",
      transition: "all 0.2s",
    }}>
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          padding: "14px 18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          onClick={(e) => { e.stopPropagation(); onToggleDone(); }}
          title={isDone ? "Marcar como pendente" : "Marcar como feito"}
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            border: `2px solid ${isDone ? "#4A8A6B" : phaseColor}`,
            background: isDone ? "#4A8A6B" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            fontSize: 12,
            color: "#fff",
          }}
        >
          {isDone ? "✓" : ""}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{
            fontWeight: 600,
            fontSize: 15,
            color: isDone ? "#6aaa8a" : "#e8dcc8",
            textDecoration: isDone ? "line-through" : "none",
          }}>
            {index + 1}. {step.title}
          </div>
        </div>

        <div style={{ color: "#555", fontSize: 12 }}>{expanded ? "▲" : "▼"}</div>
      </div>

      {expanded && (
        <div style={{ padding: "0 18px 18px 52px" }}>
          <p style={{ color: "#c8b898", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>
            {step.desc}
          </p>

          {step.warning && (
            <div style={{
              background: "#2a1010",
              border: "1px solid #8a3a3a",
              borderRadius: 6,
              padding: "10px 14px",
              marginBottom: 14,
              fontSize: 13,
              color: "#e08080",
            }}>
              ⚠️ <strong>Atenção:</strong> {step.warning}
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {step.tips.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "#a89878" }}>
                <span style={{ color: phaseColor, flexShrink: 0 }}>→</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
