import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

export const supabase = createClient(
  "https://jrriuasjlehxocrsjyrx.supabase.co/rest/v1/",
  "sb_publishable_wYlVpqabkdzSem_ztP6QBA_Zlo8CxK-"
)