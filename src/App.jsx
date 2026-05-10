import { useState } from "react";
import { phases } from "./data/phases";
import Sidebar from "./components/Sidebar";
import PhaseStep from "./components/PhaseStep";
import AIAssistant from "./components/AIAssistant";

export default function App() {
  const [activePhase, setActivePhase] = useState(0);
  const [completedPhases, setCompletedPhases] = useState([]);
  const [completedSteps, setCompletedSteps] = useState({});

  const phase = phases[activePhase];

  const toggleStep = (phaseId, stepIdx) => {
    const key = `${phaseId}-${stepIdx}`;
    setCompletedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePhaseDone = (phaseId) => {
    setCompletedPhases((prev) =>
      prev.includes(phaseId) ? prev.filter((x) => x !== phaseId) : [...prev, phaseId]
    );
  };

  const phaseProgress = (p) => {
    const total = p.steps.length;
    const done = p.steps.filter((_, i) => !!completedSteps[`${p.id}-${i}`]).length;
    return Math.round((done / total) * 100);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#111",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg, #1a1208 0%, #2a1f0a 100%)",
        borderBottom: "2px solid #D4A853",
        padding: "20px 28px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
      }}>
        <span style={{ fontSize: 34 }}>🏗️</span>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#D4A853", letterSpacing: 1 }}>
            Guia de Obra Residencial
          </h1>
          <p style={{ margin: 0, fontSize: 12, color: "#9a8a6a", marginTop: 2 }}>
            Do muro de arrimo à entrega das chaves — passo a passo técnico
          </p>
        </div>

        {/* Phase dots */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 6, flexWrap: "wrap" }}>
          {phases.map((p, i) => (
            <button
              key={p.id}
              title={p.name}
              onClick={() => setActivePhase(i)}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: completedPhases.includes(p.id)
                  ? "#4A8A6B"
                  : i === activePhase
                  ? p.color
                  : "#2a2a2a",
                border: `2px solid ${i === activePhase ? p.color : "#444"}`,
                cursor: "pointer",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
            >
              {completedPhases.includes(p.id) ? "✓" : i + 1}
            </button>
          ))}
        </div>
      </header>

      {/* Body */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", height: "calc(100vh - 77px)" }}>
        <Sidebar
          phases={phases}
          activePhase={activePhase}
          completedPhases={completedPhases}
          completedSteps={completedSteps}
          onSelect={setActivePhase}
        />

        {/* Main content */}
        <main style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
          {/* Phase header */}
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 20,
            flexWrap: "wrap",
            gap: 12,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 36 }}>{phase.icon}</span>
              <div>
                <h2 style={{ margin: 0, color: phase.color, fontSize: 22 }}>
                  Fase {activePhase + 1}: {phase.name}
                </h2>
                <p style={{ margin: "4px 0 0", color: "#7a6a5a", fontSize: 13 }}>
                  ⏱ Duração estimada:{" "}
                  <strong style={{ color: "#aaa" }}>{phase.duration}</strong>
                  {" · "}
                  {phaseProgress(phase)}% concluído
                </p>
              </div>
            </div>

            <button
              onClick={() => togglePhaseDone(phase.id)}
              style={{
                padding: "8px 16px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                background: completedPhases.includes(phase.id) ? "#4A8A6B" : "#2a2a2a",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {completedPhases.includes(phase.id) ? "✓ Fase concluída" : "Marcar fase como feita"}
            </button>
          </div>

          {/* Progress bar */}
          <div style={{ height: 6, background: "#222", borderRadius: 3, marginBottom: 28 }}>
            <div style={{
              height: "100%",
              width: `${phaseProgress(phase)}%`,
              background: phase.color,
              borderRadius: 3,
              transition: "width 0.4s",
            }} />
          </div>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {phase.steps.map((step, idx) => (
              <PhaseStep
                key={idx}
                step={step}
                index={idx}
                phaseId={phase.id}
                phaseColor={phase.color}
                isDone={!!completedSteps[`${phase.id}-${idx}`]}
                onToggleDone={() => toggleStep(phase.id, idx)}
              />
            ))}
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}>
            <button
              onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
              disabled={activePhase === 0}
              style={{
                padding: "10px 20px",
                borderRadius: 6,
                border: "1px solid #333",
                background: "transparent",
                color: activePhase === 0 ? "#444" : "#aaa",
                cursor: activePhase === 0 ? "not-allowed" : "pointer",
                fontSize: 14,
              }}
            >
              ← Fase anterior
            </button>
            <button
              onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
              disabled={activePhase === phases.length - 1}
              style={{
                padding: "10px 20px",
                borderRadius: 6,
                border: "none",
                background: activePhase === phases.length - 1 ? "#333" : phase.color,
                color: "#111",
                cursor: activePhase === phases.length - 1 ? "not-allowed" : "pointer",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Próxima fase →
            </button>
          </div>
        </main>

        <AIAssistant currentPhase={phase} />
      </div>
    </div>
  );
}
