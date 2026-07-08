import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Created lazily so the app can build and render without Supabase credentials;
// waitlist calls fail with a clear error at request time instead.
let client = null;

function getClient() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables");
  }
  if (!client) {
    client = createClient(supabaseUrl, supabaseKey);
  }
  return client;
}

export const supabase = new Proxy(
  {},
  {
    get(_target, prop) {
      return getClient()[prop];
    },
  }
);
