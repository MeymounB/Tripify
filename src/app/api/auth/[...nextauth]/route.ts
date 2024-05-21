import NextAuth from "next-auth";
import { compare, hash } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Please enter your credentials.");

        const user = await prisma.user.findFirst({
          where: { email: credentials?.email },
        });

        if (!user) throw new Error("Wrong credentials. Try again.");

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) throw new Error("Wrong credentials. Try again.");

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
