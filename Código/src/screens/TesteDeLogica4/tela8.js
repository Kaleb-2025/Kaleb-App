import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, } from 'react-native'; 
import styles from '../../styles/styleEspecial';  
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/TesteDeLogica4/header.js'; 
import CodeExample from '../../components/TesteDeLogica4/CodeExemple.js'; 
import QuizOption from '../../components/TesteDeLogica4/QuizOption';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';
import MultipleChoiceOptions from '../../components/TesteDeLogica4/MultipleChoiceOptions.js'; 
import NextButton from '../../components/TesteDeLogica4/NextButton'; 
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';
import { supabase } from '../../../App'; // Mantém essa linha para importar corretamente o supabase

const Tela8 = ({ navigation }) => {
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
        .eq('cdpergunta', 4) // Alterei para usar a chave primária cdPergunta
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
        .eq('idpergunta', 4); // filtra por pergunta

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
    setSelectedOption(index);
  };

  const handleNext = () => {
    const selected = options[selectedOption];

    if (selected?.iscorrect) {
      incrementCorrect(); // ✅ Soma acerto
    }

    next(); // ✅ Avança a contagem
    navigation.navigate('TelaAnalise'); // ✅ Vai para próxima tela
  };


  return (
    <ScrollView contentContainerStyle={styles.quizContainer}>
      <Header total={6} />
      <View style={styles.container}>
        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>


        <Text style={styles.question}>
            Kaleb estava realizando mais uma de suas tarefas diárias de programação e, ao finalizar, percebeu que havia esquecido de usar a estrutura de repetição adequada. Ajude Kaleb!
        </Text>
        <Text style={styles.dica}>
         *DICA: o exercício de Kaleb pedia para somar todos os números de 1 a 10.
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
              Política de Privacidade.
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Tela8;