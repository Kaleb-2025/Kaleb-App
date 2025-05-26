import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import NextButton from '../../components/TesteDeLogica4/NextButton'; 
import styles from '../../styles/styleEspecial';
import Header from '../../components/TesteDeLogica4/header.js';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';
import Escolha7 from '../../components/TesteDeLogica4/Escolha7.js';
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';
import { supabase } from '../../../App'; 

const Tela7 = ({ navigation }) => {
  const { next, incrementCorrect } = useQuizProgress();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  

  useEffect(() => {
    const fetchQuestionAndAnswers = async () => {
      console.log('Buscando pergunta e respostas...');

      // Busca uma pergunta (exemplo: id = 1)
      const { data: pergunta, error: perguntaError } = await supabase
        .from('perguntasteste') // Tabela correta
        .select('*')
        .eq('cdpergunta', 6) // Alterei para usar a chave primária cdPergunta
        .single();

      if (perguntaError) {
        console.error('Erro ao buscar pergunta:', perguntaError);
        return;
      }

      console.log('Pergunta encontrada:', pergunta);

      // Busca as alternativas da pergunta (ajustando para pegar todas as respostas)
      const { data: respostas, error: respostasError } = await supabase
        .from('testelogica')
        .select('correta, respostateste(*)') // agora inclui 'correta'
        .eq('idpergunta', 6); // filtra por pergunta

      if (respostasError) {
        console.error('Erro ao buscar respostas:', respostasError);
        return;
      }

      console.log('Respostas encontradas:', respostas);

      // Mapeia as respostas para obter apenas o texto das alternativas
      const respostasFormatadas = respostas.map((resposta) => ({
        texto: resposta.respostateste.conteudoresposta,
        iscorrect: resposta.correta,
      }));
      setOptions(respostasFormatadas);
    };

    fetchQuestionAndAnswers();
  }, []); // Apenas uma vez no início


  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    const selected = options[selectedOption];

    if (selected?.iscorrect) {
      incrementCorrect(); // ✅ Soma acerto
    }

    next(); // ✅ Avança a contagem
    navigation.navigate('Tela8'); // ✅ Vai para próxima tela
  };
  return (
    <ScrollView contentContainerStyle={styles.quizContainer}>
      <Header total={6} />

      <View style={styles.container}>
        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>

    <Text style={styles.question}>{question}</Text>
<Text style={styleInterno.question}>
  1. Percorre automaticamente cada elemento de uma lista ou array, sem precisar de um contador.{'\n'}{'\n'}
  2. Usado quando se sabe exatamente quantas vezes o código deve se repetir.
</Text>



        <Escolha7 />

         <NextButton onPress={handleNext} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Ao se inscrever no Kaleb você concorda com os nossos{' '}
            <Text onPress={handleTermsPress} style={styles.link}>
              Termos de Uso
            </Text>{' '}
            e{' '}
            <Text onPress={handlePrivacyPress} style={styles.link}>
              Política de Privacidade.
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styleInterno = StyleSheet.create({

  question: {
    width: 225.6,
    alignSelf: 'center',
    fontSize: 13.6,
    color: '#000',
    textAlign: 'left',
    marginBottom: 16,
    marginTop: 10,
  },
  /*   tt: {
    width: 225.6,
    alignSelf: 'center',
    fontSize: 13.6,
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 10,
  },*/
  
  });


export default Tela7;
