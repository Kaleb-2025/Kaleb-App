import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../components/cursoLogica/header';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';
import { supabase } from '../../../App';
import styles from '../../styles/styleteste';
import stylesP from '../../styles/styleCursoLogica'
import Kaleb from '../../components/cursoLogica/kaleb'; 
import CustomButton from '../../components/cursoLogica/customButton';
import InputBar from  '../../components/cursoLogica/inputQuestion';
import PreencherCodigo from '../../components/cursoLogica/completeCode';
import MultipleChoiceOptions from '../../components/cursoLogica/multipleOptions';


export default function TelaDinamica() {
  const navigation = useNavigation();

  const route = useRoute();
  const { idTela = 1 } = route.params || {}; 

  // Importação da fonte externa
  const [loaded, error] = useFonts({
    'galindo-font': require('../../fonts/Galindo-Regular.ttf'),
  });

  const { next } = useQuizProgress();
  const [tela, setTela] = useState(null);
  const [falas, setFalas] = useState([]);
  const [questoes, setQuestoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState('');
  const [respostas, setRespostas] = useState({});
  const [preencherBlocos, setPreencherBlocos] = useState([]);
  const [alternativas, setAlternativas] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [qtdTelasCapitulo, setQtdTelasCapitulo] = useState(null);


  useEffect(() => {
    buscarDados();
  }, [idTela]);

  async function buscarDados() {
    setLoading(true);
    
    const { data: telaData } = await supabase
      .from('telas_curso1')
      .select('*')
      .eq('idtela', idTela)
      .single();

      

      if (telaData?.idcapitulo) {
      const { data: capituloData } = await supabase
        .from('capitulos_curso1')
        .select('qtdtelas')
        .eq('idcapitulo', telaData.idcapitulo)
        .single();

      if (capituloData?.qtdtelas) {
        setQtdTelasCapitulo(capituloData.qtdtelas);
      }
    }


    const { data: falasData } = await supabase
      .from('falaskaleb_curso1')
      .select('*')
      .eq('idtela', idTela);

      const { data: questoesData } = await supabase
      .from('perguntas_curso1')
      .select('*')
      .eq('idtela', idTela);
      
    setTela(telaData);
    setFalas(falasData);
    setQuestoes(questoesData);

    if (questoesData.length && questoesData[0].tipoquestao === 0) {
      const { data: alternativasData } = await supabase
      .from('alternativas_curso1')
      .select('*')
      .eq('idquestao', questoesData[0].idquestao);

      if (alternativasData) {
        setAlternativas(alternativasData);
      } else {
        console.log('Nenhuma alternativa encontrada.');
        setAlternativas([]); 
      }
    }
    else if (questoesData.length && questoesData[0].tipoquestao === 2) {
      const { data: blocosData } = await supabase
        .from('preenchercodigo_curso1')
        .select('*')
        .eq('idquestao', questoesData[0].idquestao)
        .order('ordem');
        setPreencherBlocos(blocosData);
    }
    setLoading(false);
  }

  if (loading || !tela) {
    return <ActivityIndicator size="large" color="blue" />;
  }
  const tipoBotao = Number(tela.tipobotao);
  const tipoFundo = Number(tela.tipofundo);
  const ultimaTela = Number(tela.ultimatela);
  const tipoQuestao = Number(questoes[0]?.tipoquestao); // esse '[0]?' é porque os dados estão dentro de uma array.
  const respostaCerta = (questoes[0]?.respostacorreta);
  
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.quizContainer}>
      <Header total={qtdTelasCapitulo || 0} />
<View style={[ // containerBase
  stylesP.containerBase, 
  tipoFundo === 1 && stylesP.containerAzul,
  tipoFundo === 0 && stylesP.containerNormal,
]}>
  <View style={{ flex: 1, justifyContent: 'flex-start' }}>
    {tela.titulo && (
      <Text style={[
        styles.title,
        tipoFundo === 1 && stylesP.tituloBranco,
        tipoFundo === 0 && stylesP.tituloPreto,
      ]}>
        {tela.titulo}
      </Text>
    )}

    {tela.texto && (
      <Text style={[
        styles.texto,
        tipoFundo === 1 && stylesP.textoBranco,
        tipoFundo === 0 && stylesP.textoPreto,
      ]}>
        {tela.texto}
      </Text>
    )}

    {tela.imagemurl !== '' && (
      <View style={stylesP.imageContainer}>
        <Image source={{ uri: tela.imagemurl }} style={stylesP.imagem} />
      </View>
    )}

    {questoes.map((questao, index) => (
      <View key={index}>
        {questao.enunciado !== '' && (
          <Text style={stylesP.enunciado}>{questao.enunciado}</Text>
        )}

        {tipoQuestao === 0 && (
          <MultipleChoiceOptions
            alternativas={alternativas}
            selected={selectedOption}
            setSelected={setSelectedOption}
          />
        )}

        {tipoQuestao === 1 && (
          <InputBar
            value={respostas[index] || ''}
            onChangeText={(text) =>
              setRespostas((prev) => ({ ...prev, [index]: text }))
            }
          />
        )}

        {tipoQuestao === 2 && (
          <PreencherCodigo
            blocos={preencherBlocos}
            respostas={respostas}
            setRespostas={setRespostas}
          />
        )}
      </View>
    ))}
  </View>
            <CustomButton
              tipoBotao={tipoBotao}
              align={tela.componente === 1 ? 'right' : 'center'}
              onPress={() => {
              if (tipoBotao === 0) {
                 if (ultimaTela === 1) {
                  alert("Parabéns! Você finalizou o capítulo " + tela.idcapitulo +"🎉");
                    navigation.navigate('TelaCurso');
                  } else {
                    next(); 
                    navigation.push('TelaDinamica', { idTela: idTela + 1 });
                  }
                  } else {
                  // aqui é p verificar resposta fechada certa (tipoQuestao === 0)
                  if (tipoQuestao === 0) {
                    const alternativaCerta = alternativas.find(a => a.correta === true);
                    const respostaUsuario = alternativas[selectedOption];
                    if (ultimaTela === 1) {
                  alert("Parabéns! Você finalizou o capítulo " + tela.idcapitulo +"🎉");
                    navigation.navigate('TelaCurso');
                  }else if (respostaUsuario && respostaUsuario.idalternativa === alternativaCerta.idalternativa) {
                      next();
                      navigation.push('TelaDinamica', { idTela: idTela + 1 });
                    } else {
                      alert('Alternativa incorreta. Tente novamente!');
                    }
                  }
                  // aqui é p verificar a resposta aberta certa (tipoQuestao === 1)
                if (tipoQuestao === 1) {
                  const respostaUsuario = respostas[0]?.toLowerCase().trim(); // resposta que foi digitada
                  const respostaEsperada = respostaCerta?.toLowerCase().trim(); // resposta do supa
                  if (respostaUsuario === respostaEsperada) {
                    if (ultimaTela === 1) {
                  alert("Parabéns! Você finalizou o capítulo " + tela.idcapitulo +"🎉");
                      navigation.navigate('TelaCurso');// adicionar aqui a tela quando tiver
                    } else{
                      next(); 
                      navigation.push('TelaDinamica', { idTela: idTela + 1 });
                    }
                  } else {
                    alert("Resposta incorreta! Tente novamente. resposta esperada: " + respostaEsperada);
                  }
                }
            // aqui você pode colocar outras verificações se tiver mais tipos de questão
          }if (tipoQuestao === 2) {
              const todasCorretas = preencherBlocos.every((bloco, index) => 
                respostas[index]?.trim().toLowerCase() === bloco.respostacorreta.toLowerCase()
              );
               if (ultimaTela === 1) {
                  alert("Parabéns! Você finalizou o capítulo " + tela.idcapitulo +"🎉");
                  navigation.navigate('TelaCurso');
              }else if (todasCorretas) {
                next();
                navigation.push('TelaDinamica', { idTela: idTela + 1 });
              } else {
                alert('Algumas respostas estão incorretas!');
              }
            }
}}

            />
          </View>
      </ScrollView>
       {tela.componente === 1 && <Kaleb falas={falas} />}
    </View>

  );
}