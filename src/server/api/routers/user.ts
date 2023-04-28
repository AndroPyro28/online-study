import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
  } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    getById: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({
        where: {
          id: input,
        },
      });
    }),
    createUser: publicProcedure.input(z.object({
      email: z.string()
      .email()
      .nonempty(),
      name: z.string(),
      image: z.string()
      .nonempty()
    }))
    .mutation(async ({ctx, input}) => {
      const result = await ctx.prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
          image: input.image,
         Session : {
            create: {
              sessionToken: 'some tddoken',
              expires: new Date()
            }
          }
        },
      })
      console.log(result)
    })
  });