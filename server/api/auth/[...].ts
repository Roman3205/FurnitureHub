import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "~/server/models/User";

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  pages: {
    signIn: "/home/account/login",
  },
  providers: [
    CredentialsProvider.default({
      name: "credentials",
      credentials: {},
      async authorize(credentials: { email: string; password: string }) {
        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (!user) {
            throw createError({
              statusCode: 401,
              statusMessage: "Unauthorized",
            });
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isValid) {
            throw createError({
              statusCode: 401,
              statusMessage: "Unauthorized",
            });
          }
          return {
            // ...user.toObject(),
            id: user._id,
            password: undefined,
          };
        } catch (error) {
          throw createError({
            statusCode: 400,
            statusMessage: "Bad request",
          });
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token = {
          ...token,
          ...user,
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...token,
        ...session.user,
      };

      return session;
    },
  },
});
