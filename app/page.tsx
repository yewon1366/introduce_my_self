import Image from "next/image";

const CARD = {
  borderRadius: "4px",
  border: "1px solid rgba(80,40,10,0.3)",
  boxShadow: "0 2px 4px rgba(10,4,0,0.3), 0 10px 36px rgba(10,4,0,0.38)",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const BAR = (color: string) => ({
  position: "absolute" as const,
  top: 0, left: 0, right: 0,
  height: "5px",
  background: color,
});

const TAG = (bg: string, color = "#5c3d1e") => ({
  backgroundColor: bg,
  color,
  padding: "0.35rem 0.9rem",
  borderRadius: "3px",
  fontSize: "0.82rem",
  fontWeight: 600 as const,
  border: "1px solid rgba(92,61,30,0.15)",
  display: "inline-block",
});

export default function Home() {
  return (
    <>
      <style>{`
        .card-hover {
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .card-hover:hover {
          transform: scale(1.03) !important;
          box-shadow: 0 6px 12px rgba(10,4,0,0.38), 0 20px 56px rgba(10,4,0,0.48) !important;
        }
        .card-major  { transform: rotate(-1.4deg); }
        .card-major:hover  { transform: rotate(-1.4deg) scale(1.03) !important; }
        .card-interest { transform: rotate(1.3deg); }
        .card-interest:hover { transform: rotate(1.3deg) scale(1.03) !important; }
        .card-movie  { transform: rotate(-0.6deg); }
        .card-movie:hover  { transform: rotate(-0.6deg) scale(1.03) !important; }
        .card-insta  { transform: rotate(0.7deg); }
        .card-insta:hover  { transform: rotate(0.7deg) scale(1.03) !important; }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          fontFamily: "var(--font-noto-serif-kr), Georgia, serif",
          /* 진한 고동색 우드 — 베이스는 다크 월넛 브라운 */
          backgroundColor: "#3b1e09",
          backgroundImage: [
            /* 가는 나뭇결 */
            "repeating-linear-gradient(11deg, transparent 0px, transparent 3px, rgba(200,120,40,0.1) 3px, rgba(200,120,40,0.1) 4px, transparent 4px, transparent 10px, rgba(0,0,0,0.12) 10px, rgba(0,0,0,0.12) 11px, transparent 11px, transparent 19px, rgba(180,100,30,0.07) 19px, rgba(180,100,30,0.07) 20px, transparent 20px, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px, transparent 31px, transparent 45px)",
            /* 넓은 나이테 */
            "repeating-linear-gradient(9deg, transparent 0px, transparent 55px, rgba(160,80,20,0.11) 55px, rgba(160,80,20,0.11) 59px, transparent 59px, transparent 120px, rgba(0,0,0,0.1) 120px, rgba(0,0,0,0.1) 125px, transparent 125px, transparent 200px)",
            /* 가장자리 비네트 */
            "radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,0.45) 100%)",
            /* 상단 살짝 밝은 면 */
            "linear-gradient(180deg, rgba(120,60,15,0.25) 0%, transparent 30%)",
          ].join(","),
          padding: "2.5rem 1.25rem 5rem",
        }}
      >
        <div style={{ maxWidth: "660px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* ── 히어로 카드 ─────────────────────────── */}
          <div
            className="card-hover"
            style={{
              ...CARD,
              backgroundColor: "#fdf4e3",
              padding: "3.2rem 2.5rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.6rem",
              textAlign: "center",
            }}
          >
            <div style={BAR("linear-gradient(90deg, #4a2c12, #7a5030, #4a2c12)")} />
            <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: "260px", height: "140px", background: "radial-gradient(ellipse, rgba(255,215,100,0.28) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ width: "100px", height: "100px", borderRadius: "50%", overflow: "hidden", boxShadow: "0 6px 24px rgba(92,61,20,0.22), 0 0 0 5px rgba(255,255,255,0.55), 0 0 0 8px rgba(220,180,110,0.25)", flexShrink: 0 }}>
              <Image src="/profile.jpeg" alt="장예원 프로필" width={100} height={100} style={{ width: "100%", height: "100%", objectFit: "cover" }} priority />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.38em", color: "#a07848" }}>WELCOME TO MY ROOM</p>
              <h1 style={{ fontSize: "3.2rem", fontWeight: 700, color: "#2a1606", lineHeight: 1.05, letterSpacing: "-0.02em" }}>장예원</h1>
              <p style={{ fontSize: "0.88rem", color: "#9a7045", letterSpacing: "0.06em" }}>Jang Yewon</p>
            </div>

            <div style={{ width: "64px", height: "1.5px", background: "linear-gradient(90deg, transparent, #c9995a, transparent)" }} />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.7rem" }}>
              <p style={{ fontSize: "0.62rem", letterSpacing: "0.28em", color: "#a07848" }}>FAVORITES</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                <span style={TAG("#f0dfc4")}>☕ 카페</span>
                <span style={TAG("#e8d8b8")}>🐶 강아지</span>
                <span style={TAG("#dde5d0")}>🌿 여유로움</span>
              </div>
            </div>

            <div style={{ backgroundColor: "#fff8f0", border: "1px solid #f0d8b5", borderRadius: "4px", padding: "0.9rem 2rem", fontSize: "1.05rem", color: "#b84a1e", fontWeight: 600, letterSpacing: "0.02em" }}>
              시바코 화이팅팅팅!
            </div>
          </div>

          {/* ── 2열 그리드 ──────────────────────────── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>

            <div className="card-hover card-major" style={{ ...CARD, backgroundColor: "#f5edd8", padding: "1.7rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div style={BAR("#7a5230")} />
              <span style={{ fontSize: "2.2rem" }}>📐</span>
              <div>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", color: "#a07848", marginBottom: "0.25rem" }}>MAJOR</p>
                <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "#2a1606" }}>전공</p>
              </div>
              <div style={{ ...TAG("#ead9b8"), padding: "0.45rem 0.9rem", fontSize: "1rem", fontWeight: 700 }}>IISE</div>
              <p style={{ fontSize: "0.76rem", color: "#8a6440", lineHeight: 1.6 }}>산업 정보 시스템 공학<br />Industrial Information Systems Engineering</p>
            </div>

            <div className="card-hover card-interest" style={{ ...CARD, backgroundColor: "#fff6e8", padding: "1.7rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div style={BAR("#c0702a")} />
              <span style={{ fontSize: "2.2rem" }}>🔥</span>
              <div>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", color: "#a07848", marginBottom: "0.25rem" }}>INTEREST</p>
                <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "#2a1606" }}>요즘 관심사</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["#바쁘게 살기", "#후회 안하기", "#즐기기", "#그냥 참기...", "#맛있는거맛있는거맛있는거", "#카페인 끊기 챌린지ing"].map(tag => (
                  <span key={tag} style={{ ...TAG("#ffe8cc", "#c0532a"), padding: "0.3rem 0.7rem", fontSize: "0.8rem" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── 영화 취향 카드 ───────────────────────── */}
          <div className="card-hover card-movie" style={{ ...CARD, backgroundColor: "#f8f0db", padding: "1.9rem 2rem" }}>
            <div style={BAR("linear-gradient(90deg, #3a1e08, #6a4020, #3a1e08)")} />
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "2.6rem" }}>🎬</span>
              <div>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.28em", color: "#a07848", marginBottom: "0.25rem" }}>MOVIE TASTE</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 700, color: "#2a1606" }}>영화 취향</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.9rem" }}>
              <span style={TAG("#f0dfc4")}>🇰🇷 국내</span>
              <span style={TAG("#ffe0c8", "#c0532a")}>💥 액션</span>
              <span style={TAG("#e8d8c8")}>🔪 스릴러</span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "#7a5830", lineHeight: 1.7 }}>빠른 전개, 긴장감, 반전 있는 이야기를 좋아해요.</p>
          </div>

          {/* ── 인스타그램 카드 ─────────────────────── */}
          <div className="card-hover card-insta" style={{ ...CARD, background: "linear-gradient(135deg, #fdf4e3 0%, #f8ead4 60%, #f2dfc8 100%)", padding: "1.9rem 2rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={BAR("linear-gradient(90deg, #e0409a, #f09030, #e0409a)")} />
            <div style={{ width: "72px", height: "72px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(135deg, #f09030 0%, #e0409a 50%, #8040d0 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", boxShadow: "0 6px 20px rgba(200,60,120,0.28), 0 0 0 3px rgba(255,255,255,0.4)" }}>
              📷
            </div>
            <div>
              <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", color: "#a07848", marginBottom: "0.3rem" }}>INSTAGRAM</p>
              <p style={{ fontSize: "1.8rem", fontWeight: 700, color: "#2a1606", lineHeight: 1.1 }}>ye1.218</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
