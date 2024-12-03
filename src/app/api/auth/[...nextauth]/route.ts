import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	// Configure auth providers and settings
};

export const {
	handlers: { GET, POST },
	auth,
} = NextAuth(authOptions);
