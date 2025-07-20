  import React, { useEffect, useState } from 'react';
  import { useFonts } from 'expo-font';
  import { View, Text, Image, ActivityIndicator, ScrollView, Modal } from 'react-native';
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
  import RightAnswer from '../../components/cursoLogica/rightAnswer';
  import WrongAnswer from '../../components/cursoLogica/wrongAnswer';


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
    const [respostaCorreta, setRespostaCorreta] = useState(false);
    const [respostaErrada, setRespostaErrada] = useState(false);
    const [quantidadeXp, setQuantidadeXp] = useState(null);

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
  async function adicionarXP(pontos) {
  
  const { data: userInfo, error: userError } = await supabase.auth.getUser();
  if (userError || !userInfo?.user?.id) {
    console.error('Erro ao obter usuário:', userError?.message);
    return;
  }

  const uid = userInfo.user.id;


  const { data: perfilData, error: perfilError } = await supabase
    .from('info_user')
    .select('xp')
    .eq('idusuario', uid)
    .single();

    if (perfilError) {
      console.error('Erro ao buscar XP atual:', perfilError.message);
      return;
    }

    
    const novoXP = (perfilData.xp || 0) + pontos;

    const { data, error } = await supabase
      .from('info_user')
      .update({ xp: novoXP })
      .eq('idusuario', uid);

    if (error) {
      console.error('Erro ao atualizar XP:', error.message);
    } else {
      console.log('XP atualizado para:', novoXP);
    }
  }

    const tipoBotao = tela ? Number(tela.tipobotao) : 0;
    const tipoFundo = tela ? Number(tela.tipofundo) : 0;
    const ultimaTela = tela ? Number(tela.ultimatela) : 0;
    const tipoQuestao = questoes.length > 0 ? Number(questoes[0]?.tipoquestao) : null;
    const respostaCerta = questoes.length > 0 ? questoes[0]?.respostacorreta : null;

    useEffect(() => {
      if (tipoQuestao !== null) {
        if(tipoQuestao === 0){
          setQuantidadeXp(5);
        } else if(tipoQuestao === 1){
          setQuantidadeXp(10);
        } else {
          setQuantidadeXp(15);
        }
      }
    }, [tipoQuestao]);

    if (loading || !tela) {
      return <ActivityIndicator size="large" color="blue" />;
    }
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
                      alert("Parabéns! Você finalizou o capítulo " + tela.idcapitulo + " 🎉");
                      navigation.navigate('TelaCurso');
                    } else {
                      next();
                      navigation.push('TelaDinamica', { idTela: idTela + 1 });
                    }
                  } else {
                    // Questão fechada
                    if (tipoQuestao === 0) {
                      const alternativaCerta = alternativas.find(a => a.correta === true);
                      const respostaUsuario = alternativas[selectedOption];
                      if (respostaUsuario && respostaUsuario.idalternativa === alternativaCerta.idalternativa) {
                        if (ultimaTela === 1) {
                          adicionarXP(5);
                          alert("Parabéns! Você finalizou o capítulo " + tela.idcapitulo + " 🎉");
                          navigation.navigate('TelaCurso');
                        } else {
                          adicionarXP(5);
                          setRespostaCorreta(true);
                          return;
                        }
                      } else {
                        setRespostaErrada(true);
                        return;
                      }
                    }

                    // Questão aberta
                    else if (tipoQuestao === 1) {
                      const respostaUsuario = respostas[0]?.toLowerCase().trim();
                      const respostaEsperada = respostaCerta?.toLowerCase().trim();
                      if (respostaUsuario === respostaEsperada) {
                        if (ultimaTela === 1) {
                          adicionarXP(10);
                          alert("Parabéns! Você finalizou o capítulo " + tela.idcapitulo + " 🎉");
                          navigation.navigate('TelaCurso');
                        } else {
                          adicionarXP(10);
                            setRespostaCorreta(true);
                            return;
                        }
                      } else {
                        //alert("Resposta incorreta! Tente novamente. Resposta esperada: " + respostaEsperada);
                        
                        setRespostaErrada(true);
                        return;
                      }
                    }

                    // Questão com blocos preenchíveis
                    else if (tipoQuestao === 2) {
                      const todasCorretas = preencherBlocos.every((bloco, index) =>
                        respostas[index]?.trim().toLowerCase() === bloco.respostacorreta.toLowerCase()
                      );

                      if (todasCorretas) {
                        if (ultimaTela === 1) {
                          adicionarXP(15);
                          alert("Parabéns! Você finalizou o capítulo " + tela.idcapitulo + " 🎉");
                          navigation.navigate('TelaCurso');
                        } else {
                          adicionarXP(15);
                          setRespostaCorreta(true);
                          return;
                        }
                      } else {
                        setRespostaErrada(true);
                        return;
                      }
                    }
                  }
                }}
              />
            </View>
          {respostaCorreta && <RightAnswer 
          valorXp ={quantidadeXp}/>}
        {respostaErrada &&
         <WrongAnswer fechar={() => setRespostaErrada(false)} 
          rightAnswer={respostaCerta} />}
        </ScrollView>
        {tela.componente === 1 && <Kaleb falas={falas} />}
      </View>
    );
  }