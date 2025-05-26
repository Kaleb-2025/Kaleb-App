import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://sua-url.supabase.co'
const SUPABASE_ANON_KEY = 'sua-chave-anon-public'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
