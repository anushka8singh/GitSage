import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

import prisma from "../lib/prisma.js";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL:
        "http://localhost:5000/api/auth/github/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
         console.log("ACCESS TOKEN:", accessToken);
        try {
        let user = await prisma.user.findUnique({
          where: {
            githubId: profile.id,
          },
        });

        if (!user) {
          user = await prisma.user.create({
                data: {
                     githubId: profile.id,
                    username: profile.username,
                     email: profile.emails?.[0]?.value,
                    avatarUrl: profile.photos?.[0]?.value,
                    accessToken,
                        },
            });
        }  else {
  user = await prisma.user.update({
    where: {
      githubId: profile.id,
    },
    data: {
         username: profile.username,
         email: profile.emails?.[0]?.value,
         avatarUrl: profile.photos?.[0]?.value,
        accessToken,
             },
        });
    }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  done(null, user);
});

export default passport;