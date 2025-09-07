import { Router } from "express";
import { supabase } from "../supabase/client.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const { data, error } = await supabase.from("users").select("*").limit(50);
    if (error) throw error;
    res.json({ ok: true, data });
  } catch (err) {
    next(err);
  }
});

export default router;
