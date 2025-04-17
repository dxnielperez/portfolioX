"use client";
import { useEffect, useState } from "react";
import TsParticles from "./Particles";

export default function PersistentParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <TsParticles />;
}
