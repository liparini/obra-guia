import { useState } from "react";

export default function AIAssistant({ currentPhase }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState("");

  const ask = async () => {
    if (!question.trim() || loading) return;
    setLoading(true);
    setAnswer("");
    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `Você é um engenheiro civil e arquiteto experiente, especialista em construção residencial no Brasil.
Responda de forma prática, direta e técnica. Use normas brasileiras (ABNT, NBR).
Quando relevante, mencione riscos e boas práticas. Responda sempre em português.
Fase atual da obra: ${currentPhase.name}.`,
          messages: [{ role: "user", content: question }],
        }),
      });
      const data = await resp.json();
      const text = data.content?.map((b) => b.text || "").join("") || "Sem resposta.";
      setAnswer(text);
    } catch {
      setAnswer("Erro ao consultar. Verifique sua conexão e tente novamente.");
    }
    setLoading(false);
  };

  return (
    <aside style={{
      width: 320,
      background: "#0e0c09",
      borderLeft: "1px solid #2a2a2a",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        padding: "16px 20px",
        borderBottom: "1px solid #2a2a2a",
        background: "#161310",
      }}>
        <div style={{ fontWeight: 700, color: "#D4A853", fontSize: 14 }}>
          🧱 Engenheiro Virtual
        </div>
        <div style={{ fontSize: 12, color: "#666", marginTop: 3 }}>
          Tire dúvidas técnicas sobre a obra
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {!answer && !loading && (
          <p style={{ color: "#4a4030", fontSize: 13, textAlign: "center", marginTop: 40, lineHeight: 1.8 }}>
            Pergunte sobre técnicas construtivas, materiais, normas ABNT, custos ou qualquer dúvida da sua obra.
          </p>
        )}
        {loading && (
          <p style={{ color: "#D4A853", fontSize: 13, textAlign: "center", marginTop: 40 }}>
            ⟳ Consultando engenheiro...
          </p>
        )}
        {answer && (
          <div style={{
            background: "#1a1610",
            border: "1px solid #2a2520",
            borderRadius: 8,
            padding: 14,
            fontSize: 13,
            color: "#c8b898",
            lineHeight: 1.7,
            whiteSpace: "pre-wrap",
          }}>
            {answer}
          </div>
        )}
      </div>

      <div style={{ padding: "12px 16px", borderTop: "1px solid #2a2a2a" }}>
        <div style={{ fontSize: 11, color: "#555", marginBottom: 6 }}>
          Contexto: {currentPhase.name}
        </div>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ex: Qual traço de concreto usar nas sapatas?"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); }
          }}
          style={{
            width: "100%",
            minHeight: 72,
            background: "#1a1610",
            border: "1px solid #3a3020",
            borderRadius: 6,
            padding: 10,
            color: "#e8dcc8",
            fontSize: 13,
            resize: "vertical",
            fontFamily: "Georgia, serif",
            lineHeight: 1.5,
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={ask}
          disabled={loading || !question.trim()}
          style={{
            width: "100%",
            marginTop: 8,
            padding: 10,
            background: loading || !question.trim() ? "#2a2a2a" : "#D4A853",
            border: "none",
            borderRadius: 6,
            cursor: loading || !question.trim() ? "not-allowed" : "pointer",
            color: "#111",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          {loading ? "Consultando..." : "Perguntar →"}
        </button>
      </div>
    </aside>
  );
}
