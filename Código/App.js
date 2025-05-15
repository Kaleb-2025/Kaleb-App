import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProgressProvider } from './src/components/TesteDeLogica4/ProgressContext';

// Supabase
import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
  // linha de código retirada para privacidade do banco de dados. 
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
