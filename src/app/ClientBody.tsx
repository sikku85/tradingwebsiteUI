"use client";

import { ReactNode, useEffect } from "react";

type ClientBodyProps = {
  children: ReactNode;
};

export function ClientBody({ children }: ClientBodyProps) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    document.body.classList.remove(
      ...[...document.body.classList].filter((c) => !c.startsWith("__antml"))
    );
  }, []);

  return (
    <div className="min-h-screen bg-tradefinder-primary text-tradefinder-gray-light antialiased" suppressHydrationWarning>
      {children}
    </div>
  );
}
