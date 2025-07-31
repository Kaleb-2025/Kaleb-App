import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styleteste';
import Header from '../../components/TesteDeLogica4/header.js';
import QuizOption from '../../components/TesteDeLogica4/QuizOption';
import NextButton from '../../components/TesteDeLogica4/NextButton'; 
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';
import { supabase } from '../../../App';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';


const Tela4 = ({ navigation }) => {
  const { next, incrementCorrect } = useQuizProgress();

  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestionAndAnswers = async () => {
      console.log('Buscando pergunta e respostas...');

      const { data: pergunta, error: perguntaError } = await supabase
        .from('perguntasteste')
        .select('*')
        .eq('cdpergunta', 3)
        .single();

      if (perguntaError) {
        console.error('Erro ao buscar pergunta:', perguntaError);
        return;
      }

      const { data: respostas, error: respostasError } = await supabase
        .from('testelogica')
        .select('correta, respostateste(*)')
        .eq('idpergunta', 3);

      if (respostasError) {
        console.error('Erro ao buscar respostas:', respostasError);
        return;
      }

      const respostasFormatadas = respostas.map((resposta) => ({
        texto: resposta.respostateste?.conteudoresposta || 'Sem texto',
        iscorrect: resposta.correta,
      }));

      setQuestion(pergunta.enunciado);
      setOptions(respostasFormatadas);
      setLoading(false);
    };

    fetchQuestionAndAnswers();
  }, []);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    const selected = options[selectedOption];

    if (selected?.iscorrect) {
      incrementCorrect(); // ✅ Soma acerto
    }

    next(); // ✅ Avança a contagem
    navigation.navigate('Tela5'); // ✅ Vai para próxima tela
  };

  return (
 <ScrollView contentContainerStyle={styles.quizContainer}>
     <Header total={6} />
      <View style={styles.container}>
        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>

        <Text style={styles.question}>{question}</Text>

        <View style={styles.optionsContainer}>
          {loading ? (
            <Text>Carregando respostas...</Text>
          ) : (
            options.map((option, index) => (
              <QuizOption
                key={index}
                content={option.texto}
                isSelected={selectedOption === index}
                onSelect={() => handleOptionSelect(index)}
              />
            ))
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
