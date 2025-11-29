// src/screens/Tela5.js
import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/TesteDeLogica4/header';
import CodeExample from '../../components/TesteDeLogica4/CodeExemple';
import styles from '../../styles/styleteste';
import QuizOption from '../../components/TesteDeLogica4/QuizOption';
import NextButton from '../../components/TesteDeLogica4/NextButton';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';
import { handleTermsPress, handlePrivacyPress } from '../../links/links';
import { supabase } from '../../../App';

const Tela5 = ({ navigation }) => {
  const { next, incrementCorrect } = useQuizProgress();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: pergunta, error: perguntaError } = await supabase
        .from('perguntasteste')
        .select('*')
        .eq('cdpergunta', 7)
        .single();

      if (perguntaError) {
        console.error('Erro ao buscar pergunta:', perguntaError);
        return;
      }

      const { data: respostas, error: respostasError } = await supabase
        .from('testelogica')
        .select('correta, respostateste(*)')
        .eq('idpergunta', 7);

      if (respostasError) {
        console.error('Erro ao buscar respostas:', respostasError);
        return;
      }

      const respostasFormatadas = respostas.map((resposta) => ({
        texto: resposta.respostateste.conteudoresposta,
        iscorrect: resposta.correta,
      }));

      setQuestion(pergunta.enunciado);
      setOptions(respostasFormatadas);
    };

    fetchData();
  }, []);

  const handleOptionSelect = (index) => setSelectedOption(index);

  const handleNext = () => {
    const selected = options[selectedOption];
    if (selected?.iscorrect) incrementCorrect();
    next();
    navigation.navigate('Tela7');
  };

  return (
     <SafeAreaView style={{ flexGrow: 1, backgroundColor: '#f8faf0' }}>
      <ScrollView  contentContainerStyle={{ backgroundColor: '#f8faf0', padding: 20 }}>
        <Header total={6} />

        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>

        <Text style={styles.question}>
          Observe as variáveis definidas abaixo e com base na análise das afirmações escolha a alternativa correta.
        </Text>

        <View style={{ alignItems: 'center'}}>
          <CodeExample question={question} />
        </View>


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
            <Text>Carregando respostas...</Text>
          )}
        </View>

        <NextButton onPress={handleNext} />
      </ScrollView>
      </SafeAreaView>
  );
};

export default Tela5;