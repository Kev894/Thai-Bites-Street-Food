// pages/reviews.js
const TSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSwkEhorkeGH_YTlq44Vu8M8MfpeF68D_lcODQ7mZGcavPO66HdoFHEr_7t5zdSorgDKHJOow5x4GFi/pub?gid=359259388&single=true&output=tsv";

export async function getServerSideProps() {
  const resp = await fetch(TSV_URL, { headers: { "cache-control": "no-cache" } });
  if (!resp.ok) return { props: { reviews: [] } };

  const tsv = (await resp.text()).trim();
  const [headerLine, ...rows] = tsv.split(/\r?\n/).filter(Boolean);
  const headers = headerLine.split("\t");
  const idx = (name) => headers.indexOf(name);

  const reviews = rows.map((line) => {
    const c = line.split("\t");
    return {
      text: c[idx("text")] ?? "",
      author: c[idx("author")] ?? "",
      rating: c[idx("rating")] ? Number(c[idx("rating")]) : null,
      date: c[idx("date")] ?? "",
      approved: (c[idx("approved")] ?? "").toLowerCase() === "true",
    };
  })
  .filter((r) => r.approved)
  .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  return { props: { reviews } };
}

export default function ReviewsPage({ reviews }) {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Reviews</h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {reviews.map((r, i) => (
          <li key={i} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, marginBottom: 12 }}>
            <div style={{ fontWeight: 600 }}>{r.author}</div>
            <div style={{ opacity: 0.7, fontSize: 12 }}>{r.date ? new Date(r.date).toLocaleString() : ""}</div>
            <p style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>{r.text}</p>
            <div style={{ marginTop: 6, fontSize: 12 }}>Rating: {r.rating ?? "—"}/5</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
