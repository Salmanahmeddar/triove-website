import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // Contact form submissions
    contacts: defineTable({
      name: v.string(),
      email: v.string(),
      company: v.optional(v.string()),
      phone: v.optional(v.string()),
      subject: v.string(),
      message: v.string(),
      status: v.union(v.literal("new"), v.literal("contacted"), v.literal("closed")),
    }).index("by_status", ["status"]),

    // Blog posts for insights section
    blogPosts: defineTable({
      title: v.string(),
      slug: v.string(),
      excerpt: v.string(),
      content: v.string(),
      author: v.string(),
      publishedAt: v.optional(v.number()),
      isPublished: v.boolean(),
      tags: v.array(v.string()),
      imageUrl: v.optional(v.string()),
    }).index("by_published", ["isPublished"])
      .index("by_slug", ["slug"]),

    // Case studies and client success stories
    caseStudies: defineTable({
      title: v.string(),
      client: v.string(),
      industry: v.string(),
      challenge: v.string(),
      solution: v.string(),
      results: v.string(),
      imageUrl: v.optional(v.string()),
      isPublished: v.boolean(),
    }).index("by_published", ["isPublished"])
      .index("by_industry", ["industry"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;