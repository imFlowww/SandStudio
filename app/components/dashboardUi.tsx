"use client";

import "@fontsource/poppins";

import { useSession, signIn, signOut } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


export default function dashboardUi() {
  const { data: session } = useSession()

  if (session) {
    return (
        <> 
        <main className='min-h-screen'>
          <header className="flex justify-between items-center p-4 md:p-14">
          <h1 className="font-bold text-lg md:text-2xl">Sand Studio</h1>
          <nav className="hidden md:flex px-5 text-white">
            <ul className="flex gap-7">
              <li>
                <a href="/" className="">Home</a>
              </li>
              <li>
                <a href="products">Products</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
            </ul>
          </nav>
            <DropdownMenu>
              <DropdownMenuTrigger><img src={session.user?.image || ""} className='rounded-full h-16' alt="" /></DropdownMenuTrigger>
              <DropdownMenuContent className='bg-zinc-900  text-white border-0'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem><button onClick={ async () => await signOut({ callbackUrl: "/"})}>Sign out</button></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </header>
        <div className='pt-24 pl-24'>
            <h1 className="text-3xl">Welcome, <strong className="text-blue-600">{session.user?.name} !</strong></h1>
        </div>
        <div className='pt-24 pl-24'>
            <h1 className='text-2xl'>Suas Informações</h1>
            <p>Email: <strong>{session.user?.email}</strong></p>
        </div>
          <div className="flex justify p-5">
          </div>
        </main>
        </>
    )
  }
  return (
   <main>

   </main>
  );
}
