import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

// todo: fix using non-null assertion operator
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
