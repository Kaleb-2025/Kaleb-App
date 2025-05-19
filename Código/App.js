import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rsggftidydvuzvmealpg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZ2dmdGlkeWR2dXp2bWVhbHBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg3ODIxOSwiZXhwIjoyMDYxNDU0MjE5fQ.JBY4tmTXE_G9ttK-7fejA5TGsg34SadEDVeaBvDQAwI'
export const supabase = createClient('https://rsggftidydvuzvmealpg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZ2dmdGlkeWR2dXp2bWVhbHBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg3ODIxOSwiZXhwIjoyMDYxNDU0MjE5fQ.JBY4tmTXE_G9ttK-7fejA5TGsg34SadEDVeaBvDQAwI')

import Login from './src/screens/Login/Login'; 
import EmailPag from './src/screens/Login/EmailPag';
import CadastroInicial from './src/screens/Login/CadastroInicial';
import Senha from './src/screens/Login/Senha';
import Programa from './src/screens/Login/Programa'; 
import Nome from './src/screens/Login/Nome';
import Tela1 from './src/screens/TesteDeLogica4/tela1';
import Tela3 from './src/screens/TesteDeLogica4/Tela3';
import Tela4 from  './src/screens/TesteDeLogica4/TesteDeLogica41';
import Tela5 from './src/screens/TesteDeLogica4/tela5';
import Tela7 from './src/screens/TesteDeLogica4/Tela7';
import Tela8 from './src/screens/TesteDeLogica4/tela8';
import Opcao from './src/screens/Login/Opcao';
import TelaAnalise from './src/screens/TesteDeLogica4/analise';


import { ProgressProvider as LoginProgressProvider } from './src/components/Login/ProgressLogin';
import { ProgressProvider as QuizProgressProvider } from './src/components/TesteDeLogica4/ProgressContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LoginProgressProvider>
      <QuizProgressProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="CadastroInicial" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Opcao" component={Opcao} />
            <Stack.Screen name="EmailPag" component={EmailPag} />
            <Stack.Screen name="Programa" component={Programa} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Senha" component={Senha} />
            <Stack.Screen name="Nome" component={Nome} />
            <Stack.Screen name="CadastroInicial" component={CadastroInicial} />
            <Stack.Screen name="Tela1" component={Tela1} />
            <Stack.Screen name="Tela3" component={Tela3} />
            <Stack.Screen name="Tela4" component={Tela4} />
            <Stack.Screen name="Tela5" component={Tela5} />
            <Stack.Screen name="Tela7" component={Tela7} />
            <Stack.Screen name="Tela8" component={Tela8} />
            <Stack.Screen name="TelaAnalise" component={TelaAnalise} />
          </Stack.Navigator>
        </NavigationContainer>
      </QuizProgressProvider>
    </LoginProgressProvider>
  );
}
