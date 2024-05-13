"use client"

import Link from "next/link";

window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*')

export default function Home() {
  const getContext = () => {
    if (typeof(window) !== 'undefined'){
      console.log(window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*'))
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <button onClick={getContext} className="px-10 py-5 bg-white text-black">Enviar contexto</button >
    </main>
  );
}
