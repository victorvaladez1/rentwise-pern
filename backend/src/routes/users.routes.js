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

router.get("/hosts", async (_req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, full_name, is_host")
      .eq("is_host", true);
    if (error) throw error;
    res.json({ ok: true, data });
  } catch (err) {
    next(err);
  }
});

export default router;
