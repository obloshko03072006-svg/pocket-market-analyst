import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Pocket Market Analyst</h1>
      <Link href="/signals">Go to Signals</Link>
    </div>
  );
}