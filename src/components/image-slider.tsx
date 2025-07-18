"use client";

import Image from "next/image";

export default function StaticImage() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 0" }}>
      <Image
        src="/attached_assets/4_1750152529582.jpg"
        alt="Glame CRM"
        width={400}
        height={400}
        style={{ borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,0,0,0.12)", objectFit: "cover" }}
        priority
      />
    </div>
  );
}