"use client";

import "@fontsource/poppins";
import { useSession, signIn, signOut } from "next-auth/react";


export default function Products() {
  const { data: session } = useSession()

  if (session) {
    return (
        <> 
        <main className='min-h-screen'>
          <header className="flex justify-between items-center p-4 md:p-14">
          <h1 className="font-bold text-lg md:text-2xl">Sand Studio</h1>
          <nav className="hidden md:flex px-5 text-zinc-300">
            <ul className="flex gap-7">
              <li>
                <a href="/" className="transition duration-300 ease-in-out hover:text-white">Home</a>
              </li>
              <li>
                <a className='text-blue-600' href="products">Products</a>
              </li>
              <li>
                <a href="" className="transition duration-300 ease-in-out hover:text-white">Terms</a>
              </li>
            </ul>
          </nav>
          <a href="/dashboard">
            <img src={session.user?.image || ""} className='rounded-full h-16' alt="" />
          </a>
        </header>
        <section className="flex flex-col items-center pt-40 space-y-20">
          <div className='flex flex-col max-w-[146px]'>
            <h1 className="font-bold text-3xl text-blue-600">Produtos</h1>
            <div className='mx-auto w-24 h-[3px] bg-blue-600'></div>
          </div>
          <div className="flex gap-14">
            <div className="flex flex-col w-80 h-[489px] rounded-lg bg-zinc-900 shadow-2xl">  
                  <img src="panelLogin.png" className="flex items-center rounded-lg h-60" alt="" />
                  <div className="flex flex-col justify-end p-5 pt-14 space-y-3">    
                    <h1 className="font-bold text-[20px]">CarShop</h1>
                      <div>
                        <p className="text-[15px]">Por apenas</p>
                        <p className="text-blue-600 font-bold text-[20px] ">R$ 580,00 </p>
                      </div>
                      <div className="flex justify-center">
                        <button className="flex justify-center items-center w-64 bg-blue-600 text-zinc-300 shadow-2xl p-3 rounded-lg transition duration-300 ease-in-out hover:text-white">Comprar</button>
                      </div>
                  </div>
            </div>
            <div className="flex flex-col w-80 h-[489px] rounded-lg bg-zinc-900 shadow-2xl">  
                  <img src="panelLogin.png" className="flex items-center rounded-lg h-60" alt="" />
                  <div className="flex flex-col justify-end p-5 pt-14 space-y-3">    
                    <h1 className="font-bold text-[20px]">CarShop</h1>
                      <div>
                        <p className="text-[15px]">Por apenas</p>
                        <p className="text-blue-600 font-bold text-[20px] ">R$ 580,00 </p>
                      </div>
                      <div className="flex justify-center">
                        <button className="flex justify-center items-center w-64 bg-blue-600 text-zinc-300 shadow-2xl p-3 rounded-lg transition duration-300 ease-in-out hover:text-white">Comprar</button>
                      </div>
                  </div>
            </div>
            <div className="flex flex-col w-80 h-[489px] rounded-lg bg-zinc-900 shadow-2xl">  
                  <img src="panelLogin.png" className="flex items-center rounded-lg h-60" alt="" />
                  <div className="flex flex-col justify-end p-5 pt-14 space-y-3">    
                    <h1 className="font-bold text-[20px]">CarShop</h1>
                      <div>
                        <p className="text-[15px]">Por apenas</p>
                        <p className="text-blue-600 font-bold text-[20px] ">R$ 580,00 </p>
                      </div>
                      <div className="flex justify-center">
                        <button className="flex justify-center items-center w-64 bg-blue-600 text-zinc-300 shadow-2xl p-3 rounded-lg transition duration-300 ease-in-out hover:text-white">Comprar</button>
                      </div>
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

        </>
    )
  }
  return (
    <main className='min-h-screen'>
    <header className="flex justify-between items-center p-4 md:p-14">
    <h1 className="font-bold text-lg md:text-2xl">Sand Studio</h1>
    <nav className="hidden md:flex px-5 text-zinc-300">
      <ul className="flex gap-7">
        <li>
          <a href="/" className="transition duration-300 ease-in-out hover:text-white">Home</a>
        </li>
        <li>
          <a className='text-blue-600' href="products">Products</a>
        </li>
        <li>
          <a href="" className="transition duration-300 ease-in-out hover:text-white">Terms</a>
        </li>
      </ul>
    </nav>
    <a href="/dashboard">
    <button onClick={() => signIn('discord')} className="p-3 px-10 text-zinc-950 rounded-[5px] bg-blue-600 ">Login</button>
    </a>
  </header>
  <section className="flex flex-col items-center pt-40 space-y-20">
    <div className='flex flex-col max-w-[146px]'>
      <h1 className="font-bold text-3xl text-blue-600">Produtos</h1>
      <div className='mx-auto w-24 h-[3px] bg-blue-600'></div>
    </div>
    <div className="flex gap-14">
      <div className="flex flex-col w-80 h-[489px] rounded-lg bg-zinc-900 shadow-2xl">  
            <img src="panelLogin.png" className="flex items-center rounded-lg h-60" alt="" />
            <div className="flex flex-col justify-end p-5 pt-14 space-y-3">    
              <h1 className="font-bold text-[20px]">CarShop</h1>
                <div>
                  <p className="text-[15px]">Por apenas</p>
                  <p className="text-blue-600 font-bold text-[20px] ">R$ 580,00 </p>
                </div>
                <div className="flex justify-center">
                  <button className="flex justify-center items-center w-64 bg-blue-600 text-zinc-300 shadow-2xl p-3 rounded-lg transition duration-300 ease-in-out hover:text-white">Comprar</button>
                </div>
            </div>
      </div>
      <div className="flex flex-col w-80 h-[489px] rounded-lg bg-zinc-900 shadow-2xl">  
            <img src="panelLogin.png" className="flex items-center rounded-lg h-60" alt="" />
            <div className="flex flex-col justify-end p-5 pt-14 space-y-3">    
              <h1 className="font-bold text-[20px]">CarShop</h1>
                <div>
                  <p className="text-[15px]">Por apenas</p>
                  <p className="text-blue-600 font-bold text-[20px] ">R$ 580,00 </p>
                </div>
                <div className="flex justify-center">
                  <button className="flex justify-center items-center w-64 bg-blue-600 text-zinc-300 shadow-2xl p-3 rounded-lg transition duration-300 ease-in-out hover:text-white">Comprar</button>
                </div>
            </div>
      </div>
      <div className="flex flex-col w-80 h-[489px] rounded-lg bg-zinc-900 shadow-2xl">  
            <img src="panelLogin.png" className="flex items-center rounded-lg h-60" alt="" />
            <div className="flex flex-col justify-end p-5 pt-14 space-y-3">    
              <h1 className="font-bold text-[20px]">CarShop</h1>
                <div>
                  <p className="text-[15px]">Por apenas</p>
                  <p className="text-blue-600 font-bold text-[20px] ">R$ 580,00 </p>
                </div>
                <div className="flex justify-center">
                  <button className="flex justify-center items-center w-64 bg-blue-600 text-zinc-300 shadow-2xl p-3 rounded-lg transition duration-300 ease-in-out hover:text-white">Comprar</button>
                </div>
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