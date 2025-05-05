import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProgressProvider } from './src/components/TesteDeLogica4/ProgressContext';

// Supabase
import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
  'https://rsggftidydvuzvmealpg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZ2dmdGlkeWR2dXp2bWVhbHBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg3ODIxOSwiZXhwIjoyMDYxNDU0MjE5fQ.JBY4tmTXE_G9ttK-7fejA5TGsg34SadEDVeaBvDQAwI'
);

// Telas
import Tela1 from './src/screens/TesteDeLogica4/tela1';
import Tela3 from './src/screens/TesteDeLogica4/Tela3';
import Tela4 from './src/screens/TesteDeLogica4/TesteDeLogica41';
import Tela5 from './src/screens/TesteDeLogica4/tela5';
import Tela7 from './src/screens/TesteDeLogica4/Tela7';
import Tela8 from './src/screens/TesteDeLogica4/tela8';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProgressProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela1" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tela1" component={Tela1} />
          <Stack.Screen name="Tela3" component={Tela3} />
          <Stack.Screen name="Tela4" component={Tela4} />
          <Stack.Screen name="Tela5" component={Tela5} />
          <Stack.Screen name="Tela7" component={Tela7} />
          <Stack.Screen name="Tela8" component={Tela8} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProgressProvider>
  );
}
