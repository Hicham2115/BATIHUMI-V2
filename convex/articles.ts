import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const articles = await ctx.db.query("articles").order("desc").collect();

    return Promise.all(
      articles.map(async (article) => {
        let imageUrl = article.imageUrl || null;
        if (!imageUrl && article.imageId) {
          imageUrl = await ctx.storage.getUrl(article.imageId);
        }
        return {
          ...article,
          imageUrl,
        };
      }),
    );
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const article = await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();

    if (!article) return null;

    let imageUrl = article.imageUrl || null;
    if (!imageUrl && article.imageId) {
      imageUrl = await ctx.storage.getUrl(article.imageId);
    }

    return {
      ...article,
      imageUrl,
    };
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    content: v.string(),
    imageId: v.optional(v.id("_storage")),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated call to create article");

    return await ctx.db.insert("articles", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("articles"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    description: v.optional(v.string()),
    content: v.optional(v.string()),
    imageId: v.optional(v.id("_storage")),
    published: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated call to update article");

    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

export const remove = mutation({
  args: { id: v.id("articles") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated call to delete article");

    // Optional: Delete the image from storage as well
    const article = await ctx.db.get(args.id);
    if (article?.imageId) {
      await ctx.storage.delete(article.imageId);
    }

    await ctx.db.delete(args.id);
  },
});
