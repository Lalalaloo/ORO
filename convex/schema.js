import { defineSchema, defineTable } from "convex/server";
import { v } from 'convex/values';

export default defineSchema ({
    //This just creates the table. the users part. but context is still empty.
    users:defineTable({
        name:v.string(),
        email:v.string(),
        picture:v.string(),
        subcriptionId: v.optional (v.string()),
    })
})