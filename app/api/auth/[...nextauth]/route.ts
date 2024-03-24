import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "" ,
      clientSecret: process.env.DISCORD_CLIENT_SECRET || ""
    })
  ],
  callbacks: {
    async signOut({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  }
})

export { handler as GET, handler as POST }