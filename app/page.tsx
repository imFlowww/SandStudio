"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import "@fontsource/poppins";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter(); 

  if (session) {
    return (
      <main className="min-h-screen text-white ">
      <header className="flex justify-between items-center p-4 md:p-14">
        <h1 className="font-bold text-lg md:text-2xl">Sand Studio</h1>
        <nav className="hidden md:flex px-5 text-zinc-300">
        <ul className="flex gap-7 text-zinc-300">
            <li>
              <a href="" className="text-blue-600">Home</a>
            </li>
            <li>
              <a href="products" className="transition duration-300 ease-in-out hover:text-white">Products</a>
            </li>
            <li>
              <a href="" className="transition duration-300 ease-in-out hover:text-white">terms</a>
            </li>
          </ul>
        </nav>
        <a href="/dashboard">
          <img src={session.user?.image || ""} className='rounded-full h-16' alt="" />
        </a>
      </header>
      <div className="flex flex-col justify-center pt-24 md:pt-48 space-y-8 p-4 md:p-20">
        <div className="max-md:flex max-md:flex-col max-md:text-center max-md:items-center">
          <h1 className="font-bold text-2xl md:text-4xl">Welcome to Sand Studio.</h1>
          <p className="text-zinc-300 text-1xl pb-2">Here we make your website or your resource for MTA!</p>
          <a href="products">
            <h2 className="flex justify-center font-bold text-1xl text-zinc-200 bg-blue-600 p-3 max-w-[150px] rounded-lg transition duration-300 ease-in-out hover:text-white">View Products</h2>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center pt-24 md:pt-64 gap-y-4 p-4 md:p-10">
      <div className='flex flex-col max-w-[146px]'>
          <h1 className="font-bold text-3xl text-blue-600">Portfolio</h1>
          <div className='mx-auto w-24 h-[3px] bg-blue-600'></div>
        </div>
          <p className="font-medium text-zinc-200">MTA - SA </p>
        <div className="flex max-md:flex-col gap-24 pt-10">
          <img src="panelLogin.png" className="h-52 rounded-xl" alt="" />
          <img src="panelLogin.png" className="h-52 rounded-xl" alt="" />
          <img src="panelLogin.png" className="h-52 rounded-xl" alt="" />
        </div>
        <p className="font-medium text-zinc-200 pt-6">Website</p>
        <div className="flex max-md:flex-col gap-24 pt-10">
          <img src="loginWebsite.png" className="h-56 rounded-xl" alt="" />
          <img src="loginWebsite.png" className="h-56 rounded-xl" alt="" />
          <img src="loginWebsite.png" className="h-56 rounded-xl" alt="" />
        </div>
      </div>
      <section className="flex flex-col items-center space-y-14">
        <div className='flex flex-col max-w-[146px]'>
          <h1 className="font-bold text-3xl text-blue-600">Feedback</h1>
          <div className='mx-auto w-24 h-[3px] bg-blue-600'></div>
        </div>
      <div className='pt-10 space-y-20'>
        <div className="md:flex gap-24 max-md:space-y-20">
          <div className="md:max-w-[478px] max-md:max-w-[308px] h-72 rounded-xl bg-zinc-900 flex items-center flex-col">
            <div className='w-full flex justify-center -mt-14'>
              <img src="killuaicon.png" className="z-10 rounded-full h-28 " alt="" />
            </div>
            <h1 className=''>Manuel</h1>
            <h2 className="text-blue-600">@Sand</h2>
            <p className='m-5'>A loja super confiável, amassaram demais na entrega <br /> Os cara e pika </p>
          </div>
          <div className="md:max-w-[478px] max-md:max-w-[308px] h-72 rounded-xl bg-zinc-900 flex items-center flex-col">
            <div className='w-full flex justify-center -mt-14'>
              <img src="killuaicon.png" className="z-10 rounded-full h-28 " alt="" />
            </div>
            <h1 className=''>Manuel</h1>
            <h2 className="text-blue-600">@Sand</h2>
            <p className='m-5'>A loja super confiável, amassaram demais na entrega <br /> Os cara e pika </p>
          </div>
        </div>
        <div className="md:flex gap-24 max-md:space-y-20">
          <div className="md:max-w-[478px] max-md:max-w-[308px] h-72 rounded-xl bg-zinc-900 flex items-center flex-col">
            <div className='w-full flex justify-center -mt-14'>
              <img src="killuaicon.png" className="z-10 rounded-full h-28 " alt="" />
            </div>
            <h1 className=''>Manuel</h1>
            <h2 className="text-blue-600">@Sand</h2>
            <p className='m-5'>A loja super confiável, amassaram demais na entrega <br /> Os cara e pika </p>
          </div>
          <div className="md:max-w-[478px] max-md:max-w-[308px] h-72 rounded-xl bg-zinc-900 flex items-center flex-col">
            <div className='w-full flex justify-center -mt-14'>
              <img src="killuaicon.png" className="z-10 rounded-full h-28 " alt="" />
            </div>
            <h1 className=''>Manuel</h1>
            <h2 className="text-blue-600">@Sand</h2>
            <p className='m-5'>A loja super confiável, amassaram demais na entrega <br /> Os cara e pika </p>
          </div>
        </div>
      </div>
      
      </section>
      <footer className='pt-64'>
        <div className='md:h-24 bg-zinc-900'>
          <div className='flex max-md:flex-col md:justify-between items-center md:gap-80 p-5'>
            <h1 className='flex font-bold'>Sand Studio</h1>
            <h1 className='font-bold'>Todos os direitos reservados - © Sand Studio (2024) </h1>
            <a href='https://discord.gg/7aCuNd4q7B'>
              <img src="discord.svg" alt="Descrição da imagem" className="h-11" />
            </a>
            
          </div>
        </div>
      </footer>
    </main>
    )
  }

  return (
    <main className="min-h-screen text-white">
      <header className="flex justify-between items-center p-4 md:p-14">
        <h1 className="font-bold text-lg md:text-2xl">Sand Studio</h1>
        <nav className="hidden md:flex px-5 ">
          <ul className="flex gap-7 text-zinc-300">
            <li>
              <a href="" className="text-blue-600">Home</a>
            </li>
            <li>
              <a href="products" className="transition duration-300 ease-in-out hover:text-white">Products</a>
            </li>
            <li>
              <a href="" className="transition duration-300 ease-in-out hover:text-white">terms</a>
            </li>
          </ul>
        </nav>
        <button onClick={() => signIn('discord')} className="p-3 px-10 text-zinc-950 rounded-[5px] bg-blue-600 ">Login</button>
      </header>
      <div className="flex flex-col justify-center pt-24 md:pt-48 space-y-8 p-4 md:p-20">
        <div className="max-md:flex max-md:flex-col max-md:text-center max-md:items-center">
          <h1 className="font-bold text-2xl md:text-4xl">Welcome to Sand Studio.</h1>
          <p className="text-zinc-300 text-1xl pb-2">Here we make your website or your resource for MTA!</p>
          <a href="flex products">
          <h2 className="flex justify-center font-bold text-1xl text-zinc-200 bg-blue-600 p-3 max-w-[150px] rounded-lg transition duration-300 ease-in-out hover:text-white">View Products</h2>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center pt-24 md:pt-64 gap-y-4 p-4 md:p-10">
      <div className='flex flex-col max-w-[146px]'>
          <h1 className="font-bold text-3xl text-blue-600">Portfolio</h1>
          <div className='mx-auto w-24 h-[3px] bg-blue-600'></div>
        </div>
          <p className="font-medium text-zinc-200">MTA - SA </p>
        <div className="flex max-md:flex-col gap-24 pt-10">
          <img src="panelLogin.png" className="h-52 rounded-xl" alt="" />
          <img src="panelLogin.png" className="h-52 rounded-xl" alt="" />
          <img src="panelLogin.png" className="h-52 rounded-xl" alt="" />
        </div>
        <p className="font-medium text-zinc-200 pt-6">Website</p>
        <div className="flex max-md:flex-col gap-24 pt-10">
          <img src="loginWebsite.png" className="h-56 rounded-xl" alt="" />
          <img src="loginWebsite.png" className="h-56 rounded-xl" alt="" />
          <img src="loginWebsite.png" className="h-56 rounded-xl" alt="" />
        </div>
      </div>
      <section className="flex flex-col items-center space-y-14">
        <div className='flex flex-col max-w-[146px]'>
          <h1 className="font-bold text-3xl text-blue-600">Feedback</h1>
          <div className='mx-auto w-24 h-[3px] bg-blue-600'></div>
        </div>
      <div className='pt-10 space-y-20'>
        <div className="md:flex gap-24 max-md:space-y-20">
          <div className="md:max-w-[478px] max-md:max-w-[308px] h-72 rounded-xl bg-zinc-900 flex items-center flex-col">
            <div className='w-full flex justify-center -mt-14'>
              <img src="killuaicon.png" className="z-10 rounded-full h-28 " alt="" />
            </div>
            <h1 className=''>Manuel</h1>
            <h2 className="text-blue-600">@Sand</h2>
            <p className='m-5'>A loja super confiável, amassaram demais na entrega <br /> Os cara e pika </p>
          </div>
          <div className="md:max-w-[478px] max-md:max-w-[308px] h-72 rounded-xl bg-zinc-900 flex items-center flex-col">
            <div className='w-full flex justify-center -mt-14'>
              <img src="killuaicon.png" className="z-10 rounded-full h-28 " alt="" />
            </div>
            <h1 className=''>Manuel</h1>
            <h2 className="text-blue-600">@Sand</h2>
            <p className='m-5'>A loja super confiável, amassaram demais na entrega <br /> Os cara e pika </p>
          </div>
        </div>
        <div className="md:flex gap-24 max-md:space-y-20">
          <div className="md:max-w-[478px] max-md:max-w-[308px] h-72 rounded-xl bg-zinc-900 flex items-center flex-col">
            <div className='w-full flex justify-center -mt-14'>
              <img src="killuaicon.png" className="z-10 rounded-full h-28 " alt="" />
            </div>
            <h1 className=''>Manuel</h1>
            <h2 className="text-blue-600">@Sand</h2>
            <p className='m-5'>A loja super confiável, amassaram demais na entrega <br /> Os cara e pika </p>
          </div>
          <div className="md:max-w-[478px] max-md:max-w-[308px] h-72 rounded-xl bg-zinc-900 flex items-center flex-col">
            <div className='w-full flex justify-center -mt-14'>
              <img src="killuaicon.png" className="z-10 rounded-full h-28 " alt="" />
            </div>
            <h1 className=''>Manuel</h1>
            <h2 className="text-blue-600">@Sand</h2>
            <p className='m-5'>A loja super confiável, amassaram demais na entrega <br /> Os cara e pika </p>
          </div>
        </div>
      </div>
      
      </section>
      <footer className='pt-64'>
        <div className='md:h-24 bg-zinc-900'>
          <div className='flex max-md:flex-col md:justify-between items-center md:gap-80 p-5'>
            <h1 className='flex font-bold'>Sand Studio</h1>
            <h1 className='font-bold'>Todos os direitos reservados - © Sand Studio (2024) </h1>
            <a href='https://discord.gg/7aCuNd4q7B'>
              <img src="discord.svg" alt="Descrição da imagem" className="h-11" />
            </a>
            
          </div>
        </div>
      </footer>
    </main>
  );
}
