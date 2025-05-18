import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full h-full bg-black-900 dark:invert">
    <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
        <div className="flex-1 flex justify-between items-center">
            <img className="sm:w-[5rem] w-[3rem]" src="/stllogol.svg" alt="STL Logo" />
        </div>
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="fill-current w-6 h-6 text-black-200 dark:invert" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
            </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
                <ul className="md:flex items-center justify-between text-base text-black-100 dark:invert pt-20 md:pt-0">
                    <li><a className="md:p-10 py-10 px-0 block text-black-200 dark:invert" id="#">Savings Thinking the Earth</a></li>
                    <li><a className="md:p-4 py-3 px-0 block text-rose-500" href="#">Filtros de Investimentos</a></li>
                </ul>
            </nav>
        </div>
    </header>
      <div className="bg-black-900 dark:text-white">
        <div className="flex flex-col items-left justify-left min-h-48">  
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-[family-name:var(--font-geist-mono)] font-semibold text-black">STL</h1>
            <p className="text-lg font-[family-name:var(--font-geist-mono)] font-semibold text-white-900 dark:invert">Savings Thinking the Earth</p>
            <p className="text-lg font-[family-name:var(--font-geist-mono)] font-semibold text-white-900 p-8 pb-20 gap-16 sm:p-20 dark:invert">Bem vindo(a) ao STL. Aqui você poderá encontrar o ranking dos investimentos mais sustentáveis para fazer uma escolha consciente na tomada de decisão!</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-32 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/stllogol.svg"
          alt="STL logo"
          width={180}
          height={38}
          priority
        />
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]"></div>
          <table className="table-auto justify-center border-transparent">
            <thead>
              <tr className="text-center font-[family-name:var(--font-geist-mono)] font-bold">
                <th className="px-4 py-2">Tipo de investimento</th>
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Código</th>
                <th className="px-4 py-2">Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-200 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                <td className="border px-4 py-2">Ação</td>
                <td className="border px-4 py-2">Petrobras</td>
                <td className="border px-4 py-2">PTR4</td>
                <td className="bg-red-600 dark:bg-red-600 px-1 py-0.5">35.5</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                <td className="border px-4 py-2">Ação</td>
                <td className="border px-4 py-2">Vale</td>
                <td className="border px-4 py-2">VAL3</td>
                <td className="bg-yellow-600 dark:bg-yellow-600 px-1 py-0.5">56.8</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="border px-4 py-2 rounded font-[family-name:var(--font-geist-mono)] font-semibold">Ação</td>
                <td className="border px-4 py-2 rounded font-[family-name:var(--font-geist-mono)] font-semibold">Oi</td>
                <td className="border px-4 py-2 rounded font-[family-name:var(--font-geist-mono)] font-semibold">OIBR3</td>
                <td className="bg-green-600 dark:bg-green-600 px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">78.9</td>
              </tr>
            </tbody>
          </table>
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]"></div>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Filtros
            </a>
            <Link
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="/ranking"
              
            >
              Entenda nosso ranking
            </Link>
          </div>
        </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  </div>
  );
}
