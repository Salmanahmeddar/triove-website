import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    author: v.string(),
    tags: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    isPublished: v.boolean(),
  },
  handler: async (ctx, args) => {
    const publishedAt = args.isPublished ? Date.now() : undefined;
    
    const postId = await ctx.db.insert("blogPosts", {
      ...args,
      publishedAt,
    });
    return postId;
  },
});

export const getPublished = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("blogPosts")
      .withIndex("by_published", (q) => q.eq("isPublished", true))
      .order("desc")
      .collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
  },
});
