import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CadastroProvider } from './src/screens/Login/CadastroContext';


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rsggftidydvuzvmealpg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZ2dmdGlkeWR2dXp2bWVhbHBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg3ODIxOSwiZXhwIjoyMDYxNDU0MjE5fQ.JBY4tmTXE_G9ttK-7fejA5TGsg34SadEDVeaBvDQAwI'
export const supabase = createClient('https://rsggftidydvuzvmealpg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZ2dmdGlkeWR2dXp2bWVhbHBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg3ODIxOSwiZXhwIjoyMDYxNDU0MjE5fQ.JBY4tmTXE_G9ttK-7fejA5TGsg34SadEDVeaBvDQAwI')

import Splash from './src/screens/splash';
import Login from './src/screens/Login/Login'; 
import EmailPag from './src/screens/Login/EmailPag';
import CadastroInicial from './src/screens/Login/CadastroInicial';
import Senha from './src/screens/Login/Senha';
import Programa from './src/screens/Login/Programa'; 
import Nome from './src/screens/Login/Nome';
import EmailConfirmado from './src/screens/Login/emailConfirmado';
import Tela1 from './src/screens/TesteDeLogica4/tela1';
import Tela3 from './src/screens/TesteDeLogica4/Tela3';
import Tela4 from  './src/screens/TesteDeLogica4/TesteDeLogica41';
import Tela5 from './src/screens/TesteDeLogica4/tela5';
import Tela7 from './src/screens/TesteDeLogica4/Tela7';
import Tela8 from './src/screens/TesteDeLogica4/tela8';
import Home from './src/screens/homePage';
import TelaCurso from './src/screens/cursoLogica/trilhaCursoLogica';
import TelaCursoPython from './src/screens/cursoPython/trilhaCursoPython';
import TelaDinamica from './src/screens/cursoLogica/telaDinamica';
import TelaPerfil from './src/screens/perfil/perfil';
import Configuracoes from './src/screens/perfil/configuracoes';
import Conta from './src/screens/perfil/conta';
import Privacidade from './src/screens/perfil/privacidade';
import ConfigPerfil from './src/screens/perfil/configuracao_perfil';
import CursoLogica from './src/screens/cursoLogica/CursoLogica';
import CursoPython from './src/screens/cursoPython/CursoPython';
import TelaSkin from './src/screens/perfil/skin';
import Redefinir from './src/screens/Login/Redefinir';
import Opcao from './src/screens/Login/Opcao';
import TelaFinal from './src/screens/TesteDeLogica4/TelaFInal';
import TelaConclusaoLogica from './src/screens/cursoLogica/conclusaoLogica';
import TelaMeusCursos from './src/screens/meusCursos';

import { ProgressProvider as LoginProgressProvider } from './src/components/Login/ProgressLogin';
import { ProgressProvider as QuizProgressProvider } from './src/components/TesteDeLogica4/ProgressContext'
import { AcertosProvider } from "./src/components/TesteDeLogica4/acertosContext";
import { ProgressProvider as LogicaProgressProvider } from './src/components/cursoLogica/progressHeader';

const Stack = createNativeStackNavigator();

export default function App() {
 const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
     async function loginTestUser() {
       const { data, error } = await supabase.auth.signInWithPassword({
         email: "beatriz.oliveira260607@gmail.com",
         password: "123456",
       });

       if (error) {
        console.error("Erro ao logar usuário de teste:", error.message);
       } else {
         console.log("Usuário de teste logado:", data.user);
       }
       setIsReady(true);
     }

     loginTestUser();
   }, []);

   if (!isReady) {
     return null; 
   }
  
 
  return (
    <CadastroProvider>
      <LoginProgressProvider>
        <AcertosProvider>
          <QuizProgressProvider>
            <LogicaProgressProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="TelaPerfil" screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="Splash" component={Splash} />
                  <Stack.Screen name="Opcao" component={Opcao} />
                  <Stack.Screen name="Redefinir" component={Redefinir} />
                  <Stack.Screen name="EmailPag" component={EmailPag} />
                  <Stack.Screen name="Programa" component={Programa} />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Senha" component={Senha} />
                  <Stack.Screen name="Nome" component={Nome} />
                  <Stack.Screen name="EmailConfirmado" component={EmailConfirmado} />
                  <Stack.Screen name="CadastroInicial" component={CadastroInicial} />
                  <Stack.Screen name="Tela1" component={Tela1} />
                  <Stack.Screen name="Tela3" component={Tela3} />
                  <Stack.Screen name="Tela4" component={Tela4} />
                  <Stack.Screen name="Tela5" component={Tela5} />
                  <Stack.Screen name="Tela7" component={Tela7} />
                  <Stack.Screen name="Tela8" component={Tela8} />
                  <Stack.Screen name="TelaFinal" component={TelaFinal} />
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="TelaCurso" component={TelaCurso} />
                  <Stack.Screen name="TelaCursoPython" component={TelaCursoPython} />
                  <Stack.Screen name="TelaDinamica" component={TelaDinamica} initialParams={{ idTela: 7 }} />
                  <Stack.Screen name="TelaPerfil" component={TelaPerfil}/>
                  <Stack.Screen name="Configuracoes" component={Configuracoes}/>
                  <Stack.Screen name="Conta" component={Conta}/>
                  <Stack.Screen name="Privacidade" component={Privacidade}/>
                  <Stack.Screen name="ConfigPerfil" component={ConfigPerfil}/>
                  <Stack.Screen name="CursoLogica" component={CursoLogica}/>
                  <Stack.Screen name="TelaSkin" component={TelaSkin}/>
                  <Stack.Screen name="CursoPython" component={CursoPython}/>
                  <Stack.Screen name="MeusCursos" component={TelaMeusCursos}/>
                  <Stack.Screen name="TelaConclusaoLogica" component={TelaConclusaoLogica}/>
                </Stack.Navigator>
              </NavigationContainer>
            </LogicaProgressProvider>
          </QuizProgressProvider>
        </AcertosProvider>
      </LoginProgressProvider>
    </CadastroProvider>
  );
}
