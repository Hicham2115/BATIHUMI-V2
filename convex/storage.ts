import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity)
      throw new Error("Unauthenticated call to generate upload url");

    return await ctx.storage.generateUploadUrl();
  },
});
