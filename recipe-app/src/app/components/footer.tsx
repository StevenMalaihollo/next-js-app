"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="p-4 bg-gray-100 text-center">
      <p>&copy; {year} Healthcare application</p>
    </footer>
  );
}
