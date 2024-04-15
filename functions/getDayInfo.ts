import { D1Database, PagesFunction } from "@cloudflare/workers-types";
import type { Response } from "@cloudflare/workers-types"

interface Env {
    CALENDAR_DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const ps = context.env.CALENDAR_DB.prepare('SELECT * from users')
    const data = await ps.first();
    return Response.json(data)
}