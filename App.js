import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rsggftidydvuzvmealpg.supabase.co';

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZ2dmdGlkeWR2dXp2bWVhbHBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg3ODIxOSwiZXhwIjoyMDYxNDU0MjE5fQ.JBY4tmTXE_G9ttK-7fejA5TGsg34SadEDVeaBvDQAwI';

export const supabase = createClient("https://rsggftidydvuzvmealpg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZ2dmdGlkeWR2dXp2bWVhbHBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg3ODIxOSwiZXhwIjoyMDYxNDU0MjE5fQ.JBY4tmTXE_G9ttK-7fejA5TGsg34SadEDVeaBvDQAwI");

import React from 'react';
import TesteDeLogica4 from './src/screens/TesteDeLogica4';

export default function App() {
  return <TesteDeLogica4 />;
}