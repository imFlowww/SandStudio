"use client";

import '@fontsource/poppins';

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Dashboard from "../components/dashboardUi"

export default function DashboardPage() {
  const { data: session } = useSession()
  const router = useRouter();

  if (session) {
    return ( 
        <Dashboard/>
    );
  }

  return (
   <main>

   </main>
  );
}
