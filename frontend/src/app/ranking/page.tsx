import Image from "next/image";
import Link from "next/link";

export default function Ranking() {
  return (
    <div className="w-full h-full bg-black-900 dark:invert">
    <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
        <div className="flex-1 flex justify-between items-center">
            <Link href="/">
                <img className="sm:w-[5rem] w-[3rem]" src="/stllogol.svg" alt="STL Logo" />
            </Link>
            
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
                    <li><a className="md:p-10 py-10 px-0 block text-black-200 dark:invert" href="/" id="#">Savings Thinking the Earth</a></li>
                    <li><a className="md:p-4 py-3 px-0 block text-rose-500" href="#">Filtros de Investimentos</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div className="bg-black-900 dark:text-white"> 
            <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 flex flex-col items-center justify-center text-lg whitespace-normal text-justify font-[family-name:var(--font-geist-mono)] text-white-900 dark:invert">
            <h1 className="max-w-3xl mx-auto px-4 py-8 text-6xl font-[family-name:var(--font-geist-mono)] font-semibold text-black">Ranking</h1>
            <p>O ranqueamento dos investimentos apresentados no portal será estruturado com base nos princípios fundamentais da sustentabilidade, 
                priorizando iniciativas que promovem o equilíbrio entre o desenvolvimento econômico, a equidade social e a responsabilidade ambiental. 
                A proposta parte do entendimento de que investimentos sustentáveis não apenas minimizam danos ao meio ambiente, 
                mas também geram valor para a sociedade e retornos consistentes aos investidores, consolidando-se como um caminho viável e desejável 
                frente aos desafios das mudanças climáticas e da desigualdade global.</p>
            <p></p>
            <p>Os critérios adotados no ranqueamento consideram os pilares ESG — Ambiental (Environmental), Social e Governança — e serão avaliados a partir de indicadores qualitativos e 
                quantitativos. Serão priorizadas empresas e projetos que:</p>
            <p></p>
            <ul className="list-disc pl-5 space-y-2 border border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <li>Evitam o uso de combustíveis fósseis, priorizando fontes renováveis de energia;</li>
            <li>Possuem práticas de responsabilidade social, como justiça trabalhista, promoção da equidade, desenvolvimento comunitário e respeito aos direitos humanos;</li>
            <li>Adotam modelos de governança transparentes e participativos, com atenção à prestação de contas e à integridade institucional;</li>
            <li>Contribuem para os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, com foco na erradicação da pobreza, redução das desigualdades e promoção de sociedades resilientes;</li>
            <li>Apresentam viabilidade econômica, assegurando que o investimento seja financeiramente atraente e sustentável a longo prazo.</li>
            </ul>
    <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="/"
              
            >
              Página Inicial
            </Link>
            </div>
        </div>
    </div>
  );
}