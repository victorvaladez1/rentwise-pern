import { Router } from "express";
import { supabase } from "../supabase/client.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("properties")
      .select(
        `title, description, property_type, bedrooms, bathrooms, line_1, line_2, city, state, country, postal_code`
      );
    if (error) throw error;
    res.json({ ok: true, data });
  } catch (err) {
    next(err);
  }
});

export default router;
