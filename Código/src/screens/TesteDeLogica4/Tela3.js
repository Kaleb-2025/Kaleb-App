import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../../styles/styleteste';
import CodeExample from '../../components/TesteDeLogica4/CodeExemple.js'; 
import Header from '../../components/TesteDeLogica4/header.js';
import QuizOption from '../../components/TesteDeLogica4/QuizOption';
import NextButton from '../../components/TesteDeLogica4/NextButton'; 
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';
import { supabase } from '../../../App';

import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';


const Tela3 = ({ navigation }) => {
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

    next(); 
    navigation.navigate('Tela4'); 
  };

  return (
<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
  <View style={{ flex: 1, justifyContent: options.length > 2 ? 'flex-start' : 'center' }}>
    <View style={styles.container}>
      <Header total={6} />
      <Text style={styles.title}>
        Teste de <Text style={styles.highlight}>lógica</Text>
      </Text>
      <Text style={styles.question}>
        Observe o código abaixo. O que está acontecendo?
      </Text>

        <View style={{ alignItems: 'center'}}>
          <CodeExample question={question} />
        </View>

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
          <Text>Carregando respostas...</Text>
        )}
      </View>

      <NextButton onPress={handleNext} />
    </View>
  </View>
</ScrollView>

  );
};

export default Tela3;
