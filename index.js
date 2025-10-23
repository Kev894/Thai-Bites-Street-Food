// pages/index.js
export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Thai Bites</h1>
      <p>Welcome. View customer reviews pulled live from Google Sheets:</p>
      <p><a href="/reviews">Go to Reviews</a></p>
    </main>
  );
}
