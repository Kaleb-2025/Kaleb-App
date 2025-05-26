import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../../styles/styleEspecial';
import Header from '../../components/TesteDeLogica4/header.js';
import CodeExample from '../../components/TesteDeLogica4/CodeExemple.js'; 
import QuizOption from '../../components/TesteDeLogica4/QuizOption';
import NextButton from '../../components/TesteDeLogica4/NextButton'; 
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';
import { supabase } from '../../../App'; // Mantém essa linha para importar corretamente o supabase

// count das telas
const Tela5 = ({ navigation }) => {
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
        .eq('cdpergunta', 7) // Alterei para usar a chave primária cdPergunta
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
        .eq('idpergunta', 7); // filtra por pergunta

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
      setOptions(respostasFormatadas);// Armazena as respostas
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
    navigation.navigate('Tela7'); // ✅ Vai para próxima tela
  };

  return (
    <ScrollView contentContainerStyle={styles.quizContainer}>
     <Header total={6} />
      <View style={styles.container}>
        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>

        <Text style={styles.question}>
          Observe as variáveis definidas abaixo e com
          base na análise das afirmações escolha a
          alternativa correta.
        </Text>

      <CodeExample question={question} />

        <Text style={styles.question}>
          I. d pode receber os valores: FALSE ou TRUE.{'\n'}
          II. a pode receber os valores: 1 ou Maria.{'\n'}
          III. c pode receber o valor 3.14 e depois 894.{'\n'}
          IV. b pode receber os valores: Antonio e 7234.{'\n'}
          V. d pode receber os valores: FALSE ou TRUE.{'\n'}
          VI. c só pode receber um valor.
        </Text>


    
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

export default Tela5;
