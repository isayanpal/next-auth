import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "email", type: "text", placeholder: "email" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
          name: "Sayan",
          userId: "asd12",
          email: "ramdomEmail",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
});
