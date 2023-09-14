import Link from "next/link"

export default function Home() {
  return (
    <>
      <header className="flex items-center mb-4">
        <h1 className='text-2xl'>Aqua</h1>
      </header>
      <Link 
        className=" flex items-center justify-center border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/swap">Swap</Link>
    </>
  )
}
