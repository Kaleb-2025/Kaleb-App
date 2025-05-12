import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../../styles/styleteste';
import CodeExample from '../../components/TesteDeLogica4/CodeExemple.js'; 
import Header from '../../components/TesteDeLogica4/header.js';
import QuizOption from '../../components/TesteDeLogica4/QuizOption';
import NextButton from '../../components/TesteDeLogica4/NextButton'; 
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';
import { supabase } from '../../../App';

import { useProgress } from '../../components/TesteDeLogica4/ProgressContext';

const Tela4 = ({ navigation }) => {
  const { next } = useProgress(); 

  const handleNext = () => {
    next(); // ✅ Avança a contagem
    navigation.navigate('Tela4'); // ✅ Navega para a próxima tela
  };

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
        .eq('cdpergunta', 2) // Alterei para usar a chave primária cdPergunta
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
        .eq('idpergunta', 2); // filtra por pergunta

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

      // Atualiza o estado com os dados da pergunta e as respostas
      setQuestion(pergunta.enunciado);
      setOptions(respostasText); // Armazena as respostas
    };

    fetchQuestionAndAnswers();
  }, []); // Apenas uma vez no início

  const handleOptionSelect = (index) => {
    setSelectedOption(index); // Marca a opção selecionada
  };

  return (
    <ScrollView contentContainerStyle={styles.quizContainer}>
      <Header /> 
      <View style={styles.container}>
        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>

        <Text style={styles.question}>
          Observe o código abaixo. O que está acontecendo?
        </Text>

        <CodeExample question={question} />
        <View style={styles.optionsContainer}> 
          {options.length > 0 ? (
            options.map((option, index) => (
              <QuizOption
                key={index}
                content={option.texto}
                isSelected={selectedOption === index}
                onSelect={() => handleOptionSelect(index)}
              />
            ))
          ) : (
            <Text>Carregando respostas...</Text> // Mensagem de carregamento se as respostas não estiverem carregadas
          )}
        </View>
        


        <NextButton onPress={handleNext} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Ao se inscrever no Kaleb você concorda com os nossos{' '}
            <Text onPress={handleTermsPress} style={styles.link}>
              Termos de Uso
            </Text>{' '}
            e{' '}
            <Text onPress={handlePrivacyPress} style={styles.link}>
              Política de Privacidade
            </Text>.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Tela4;
