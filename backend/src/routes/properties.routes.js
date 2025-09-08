import { Router } from "express";
import { supabase } from "../supabase/client.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const { data, error } = await supabase.from("properties").select("*");
    if (error) throw error;
    res.json({ ok: true, data });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = req.body;

    const { data, error } = await supabase
      .from("properties")
      .insert(payload)
      .select();

    if (error) throw error;

    res.status(201).json({ ok: true, data });
  } catch (err) {
    next(err);
  }
});

export default router;
