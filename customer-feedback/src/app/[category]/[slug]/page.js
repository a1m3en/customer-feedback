import React from "react";
import Link from "next/link";

export default function ItemPage({ params }) {
  const { category, slug } = params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main style={{ padding: 48 }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1>{title}</h1>
        <p>Category: {category}</p>
        <p>This is a placeholder page for <strong>{title}</strong>. Replace with real content.</p>
        <p><Link href="/">Back home</Link></p>
      </div>
    </main>
  );
}
