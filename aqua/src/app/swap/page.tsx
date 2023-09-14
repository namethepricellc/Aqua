"use client"
import Link from "next/link"
import { LiFiWidget, WidgetConfig } from '@lifi/widget'

const widgetConfig: WidgetConfig = {
  integrator: 'AquaticLife',
  // Fees
  // fee: 0.01,
  variant: 'expandable',
  subvariant: 'split',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className='text-2xl'>Aquatic Life</h1>
        <LiFiWidget integrator="Aqua" config={widgetConfig} />
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/connect">Connect Wallet</Link>
      </header>
      <Link 
        className="flex items-center justify-center border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/">
          Home
      </Link>
    </>
  )
}