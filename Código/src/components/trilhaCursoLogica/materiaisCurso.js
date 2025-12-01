import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, } from 'react-native';
import colors from '../../constants/colors';

const MateriaisCurso = () => {
  const [atividadeAbertaId, setAtividadeAbertaId] = useState(null);

  const atividades = [
    { id: 1, nome: 'Capítulo 01', emoji: '📌' },
    { id: 2, nome: 'Capítulo 02', emoji: '📌' },
    { id: 3, nome: 'Capítulo 03', emoji: '📌' },
    { id: 4, nome: 'Capítulo 04', emoji: '📌' },
    { id: 5, nome: 'Capítulo 05', emoji: '📌' },
    { id: 6, nome: 'Capítulo 06', emoji: '📌' },
    { id: 7, nome: 'Capítulo 07', emoji: '📌' },
    { id: 8, nome: 'Capítulo 08', emoji: '📌' },
    { id: 9, nome: 'Capítulo 09', emoji: '📌' },
    { id: 10, nome: 'Capítulo 10', emoji: '📌' },
    { id: 11, nome: 'Capítulo 11', emoji: '📌' },
    { id: 12, nome: 'Capítulo 12', emoji: '📌' },
    { id: 13, nome: 'Capítulo 13', emoji: '📌' },
    { id: 14, nome: 'Capítulo 14', emoji: '📌' },
    { id: 15, nome: 'Capítulo 15', emoji: '📌' },
    { id: 16, nome: 'Capítulo 16', emoji: '📌' },
    { id: 17, nome: 'Capítulo 17', emoji: '📌' },
    { id: 18, nome: 'Capítulo 18', emoji: '📌' },
  ];

  const materiaisPorAtividade = {
    1: [
      { tipo: 'pdf', titulo: 'Introdução à Lógica de Programação - Parte II', url: 'https://www.caetano.eng.br/aulas/2011b/lpe/lpe_ap04.pdf' },
      { tipo: 'link', titulo: 'Variáveis em Portugol', url: 'https://tutorialdev.com.br/Linguagens/Aprendizado/Portugol/Variaveis.aspx' },
      { tipo: 'link', titulo: 'O que é lógica de programação', url: 'https://esr.rnp.br/desenvolvimento-de-sistemas/o-que-e-logica-de-programacao/' },
      { tipo: 'youtube', titulo: 'Variáveis e Tipos de Dados', url: 'https://youtu.be/-1Dayitq-rk?si=y7rOzmEzsVFDUkxm' },
    ],

    2: [
      { tipo: 'pdf', titulo: 'Algoritmo e Lógica de Programação', url: 'https://www.fatecead.com.br/alp/aula08_ppt.pdf' },
      { tipo: 'link', titulo: 'Tipos de dados — string e varchar', url: 'https://www.dio.me/articles/conceitos-basicos-tipos-de-dados' },
      { tipo: 'youtube', titulo: 'Tipos de variáveis (string)', url: 'https://youtu.be/SEQ57ilIdy4?si=d96CeMLzphCq537S' },
      { tipo: 'youtube', titulo: 'Tipos de variáveis (varchar)', url: 'https://youtu.be/aRplr3NzhnI?si=vRQpI6Up3mcUdZ3J' },
    ],

    3: [
      { tipo: 'link', titulo: 'O que variáveis NÃO podem receber', url: 'https://tutostudio.lorhan.me/cursos/logica-programacao/aula-1/?utm_source=chatgpt.com#tipos-de-variáveis' },
      { tipo: 'link', titulo: 'Introdução à variáveis — Kotlin', url: 'https://ruddabeltrao.medium.com/introdu%C3%A7%C3%A3o-%C3%A0-variaveis-l%C3%B3gica-de-programa%C3%A7%C3%A3o-kotlin-64dbdd31fedc' },
      { tipo: 'link', titulo: 'Declaração de variáveis', url: 'https://autociencia.blogspot.com/2016/07/logica-de-programacao-declaracao-de-variaveis.html' },
      { tipo: 'youtube', titulo: 'O que variáveis não podem receber', url: 'https://youtu.be/466_qA9abbY?si=mL2Yx9yScRKu6sXd' },
    ],

    4: [
      { tipo: 'pdf', titulo: 'Como chamar variáveis — Arduino', url: 'https://prp.usp.br/wp-content/uploads/sites/248/2020/07/3Livro-Arduino-Introdução-a-Robótica-Educacional-HANDS-ON-VARIAVEIS.pdf' },
      { tipo: 'link', titulo: 'Como chamar uma variável', url: 'https://tutostudio.lorhan.me/cursos/logica-programacao/aula-1/?utm_source=chatgpt.com#sobre-o-curso' },
      { tipo: 'youtube', titulo: 'Como chamar uma variável', url: 'https://youtu.be/RDrfZ-7WE8c?si=j-ubC6Ikiau10SeN' },
    ],

    5: [
      { tipo: 'pdf', titulo: 'Variáveis e Tipos de Dados', url: 'https://docentes.ifrn.edu.br/alessandrosouza/disciplinas/algoritmo/downloads/aula-3-variaveis-e-tipo-de-dados' },
      { tipo: 'link', titulo: 'Exercícios de lógica — variáveis', url: 'https://www.bosontreinamentos.com.br/logica-de-programacao/exercicios-de-logica-de-programacao-variaveis-operadores-e-comandos-de-entrada-e-saida/' },
      { tipo: 'link', titulo: 'Lógica de Programação — Revisão', url: 'https://www.locaweb.com.br/blog/temas/codigo-aberto/logica-de-programacao-o-quee/' },
      { tipo: 'youtube', titulo: 'Recapitulação de variáveis', url: 'https://youtu.be/XzkZO2qjgec?si=Yhrr9FC-ESO04w7m' },
    ],

    6: [
      { tipo: 'pdf', titulo: 'O que são constantes?', url: 'https://educapes.capes.gov.br/bitstream/capes/560827/2/Apostila%20-%20Curso%20de%20Lógica%20de%20Programação.pdf' },
      { tipo: 'link', titulo: 'Variáveis e constantes na programação', url: 'https://www.treinaweb.com.br/blog/variaveis-e-constantes-na-programacao' },
      { tipo: 'link', titulo: 'Constantes em programação', url: 'https://hub.asimov.academy/blog/variaveis-constantes-programacao/' },
      { tipo: 'link', titulo: 'Constantes — IBM Docs', url: 'https://www.ibm.com/docs/pt-br/cloud-pak-system-w3500/2.3.3?topic=languageconstants-variables' },
      { tipo: 'youtube', titulo: 'O que são constantes?', url: 'https://youtu.be/FmTO2EPatZQ?si=odQGOqO19rdiOntB' },
      { tipo: 'youtube', titulo: 'Constantes — exemplos', url: 'https://youtu.be/Yaw80pKukMc?si=Xlr1FVYfpVU_PvUe' },
    ],

    7: [
      { tipo: 'pdf', titulo: 'Operadores', url: 'https://ufsj.edu.br/portal-repositorio/File/prof_shiroma/aeds1/aeds1-aula6-Operadores.pdf' },
      { tipo: 'link', titulo: 'Operadores — Aula 2', url: 'https://tutostudio.lorhan.me/cursos/logica-programacao/aula-2/' },
      { tipo: 'link', titulo: 'Operadores e expressões — IBM', url: 'https://www.ibm.com/docs/pt-br/tcamfma/6.3.0?topic=tesl-operators-expressions' },
      { tipo: 'youtube', titulo: 'Operadores em lógica', url: 'https://youtu.be/RDrfZ-7WE8c?si=lKYBm_Zgnk9iWKIz' },
      { tipo: 'youtube', titulo: 'Operadores — prática', url: 'https://youtu.be/DMiAvs2qCtY?si=H1OjLlaA5QnvTpMv' },
    ],

    8: [
      { tipo: 'link', titulo: 'Operadores Relacionais — Dicas de Programação', url: 'https://dicasdeprogramacao.com.br/operadores-relacionais/' },
      { tipo: 'link', titulo: 'Operadores Relacionais — Univap', url: 'https://www1.univap.br/silene/netaula/LP/aulas/aula9.htm' },
      { tipo: 'link', titulo: 'Relational Operators — IBM', url: 'https://www.ibm.com/docs/pt-br/spss-statistics/30.0.0?topic=expressions-relational-operators' },
      { tipo: 'youtube', titulo: 'Operadores Relacionais 1', url: 'https://youtu.be/dbnAeLjzetY?si=agjJAwqkRpl1nYR4' },
      { tipo: 'youtube', titulo: 'Operadores Relacionais 2', url: 'https://youtu.be/Ig4QZNpVZYs?si=v4MvDaQ5FIETFQeP' },
    ],

    9: [
      { tipo: 'link', titulo: 'Operadores Lógicos — Boson', url: 'https://www.bosontreinamentos.com.br/logica-de-programacao/resumo-basico-de-operadores-em-programacao/' },
      { tipo: 'link', titulo: 'Operadores Lógicos — Dicas de Programação', url: 'https://dicasdeprogramacao.com.br/operadores-logicos/' },
      { tipo: 'link', titulo: 'Operadores Lógicos — Treinaweb', url: 'https://www.treinaweb.com.br/blog/operadores-logicos' },
      { tipo: 'youtube', titulo: 'Operadores Lógicos 1', url: 'https://youtu.be/Ig4QZNpVZYs?si=flV9bTTbA7qKHQEB' },
      { tipo: 'youtube', titulo: 'Operadores Lógicos 2', url: 'https://youtu.be/2l1Hz3U_yx0?si=rr8-TI5MPh0oOmfz' },
    ],

    10: [
      { tipo: 'pdf', titulo: 'Estrutura Condicional — USP', url: 'https://sites.icmc.usp.br/andretta/ensino/aulas/sme0230-1-10/aula08.pdf' },
      { tipo: 'pdf', titulo: 'Estrutura Condicional — WordPress', url: 'https://erinaldosn.wordpress.com/wp-content/uploads/2012/10/aula-4-estrutura-condicional.pdf' },
      { tipo: 'link', titulo: 'Estrutura condicional — SE/SENAO', url: 'https://www.blogson.com.br/estrutura-condicional-se-senao/' },
      { tipo: 'youtube', titulo: 'Estruturas condicionais explicadas', url: 'https://youtu.be/_g05aHdBAEY?si=co8U1S6VLc6lSwUO' },
      { tipo: 'youtube', titulo: 'Estrutura condicional — exemplos', url: 'https://youtu.be/Yb0-xTdbFtg?si=RH8M502S21LKSTID' },
    ],

    11: [
      { tipo: 'pdf', titulo: 'Por que usar estruturas de condição?', url: 'https://homepages.dcc.ufmg.br/~viniciussantos/aeds20161/aula4.pdf' },
      { tipo: 'link', titulo: 'If e Else — DIO', url: 'https://www.dio.me/articles/entendendo-if-e-else-a-base-da-tomada-de-decisaoem-programacao' },
      { tipo: 'youtube', titulo: 'Quando usar estruturas de condição', url: 'https://youtu.be/7gGFHzqh4d8?si=33s8cSJx7IfIpflZ' },
      { tipo: 'youtube', titulo: 'Estruturas de condição — prática 1', url: 'https://youtu.be/ZAo9T78-32Q?si=e6yYwOxbDI6N23t9' },
      { tipo: 'youtube', titulo: 'Estruturas de condição — prática 2', url: 'https://youtu.be/oWuwfNMwXeY?si=nNXOLyi-l2YsyJ2h' },
    ],

    12: [
      { tipo: 'pdf', titulo: 'Estruturas Condicionais — UNICAMP', url: 'https://www.ic.unicamp.br/~wainer/cursos/2s2011/Cap05-EstruturasCondicionais-texto.pdf' },
      { tipo: 'link', titulo: 'Estrutura condicional simples e composta', url: 'https://blog.marcusoliveiradev.com.br/estrutura-condicional-simples-e-composta/' },
      { tipo: 'youtube', titulo: 'Estruturas condicionais — exemplos', url: 'https://youtu.be/juQgzKcbnuQ?si=ccv87GX0IGi-LhQ4' },
    ],

    13: [
      { tipo: 'pdf', titulo: 'Verificação do conteúdo — Estruturas', url: 'https://docente.ifsc.edu.br/rogerio.silva/MaterialDidatico/Microcontrolador/Estruturas%20de%20Decisão.pdf' },
      { tipo: 'link', titulo: 'Seleção IF — PUCRS', url: 'https://www.inf.pucrs.br/flash/cbp/selecao_if.html' },
      { tipo: 'youtube', titulo: 'Revisão de estruturas condicionais', url: 'https://youtu.be/P9iZt4nhzQM?si=IRE-iviqBwPQp8w0' },
    ],

    14: [
      { tipo: 'pdf', titulo: 'Estruturas de repetição — UNICAMP', url: 'https://www.ic.unicamp.br/~wainer/cursos/2s2011/Cap06-RepeticaoControle-texto.pdf' },
      { tipo: 'link', titulo: 'Estruturas condicionais e de repetição', url: 'https://www.treinaweb.com.br/blog/estruturas-condicionais-e-de-repeticao' },
      { tipo: 'link', titulo: 'Python — Estruturas de repetição', url: 'https://www.codaqui.dev/trilhas/python/page-3/?gad_source=1' },
      { tipo: 'youtube', titulo: 'O que é repetição? — parte 1', url: 'https://youtu.be/U5PnCt58Q68?si=OVBnp0A3Y5AGMmD_' },
      { tipo: 'youtube', titulo: 'O que é repetição? — parte 2', url: 'https://youtu.be/RlgdACEgA8c?si=F5-GYZAoRFfaxvH2' },
    ],

    15: [
      { tipo: 'pdf', titulo: 'Diferença entre estruturas', url: 'https://homepages.dcc.ufmg.br/~viniciussantos/aeds20161/aula5.pdf' },
      { tipo: 'link', titulo: 'Estruturas sequenciais, condicionais e repetição', url: 'https://edu.gcfglobal.org/pt/informatica-avancada/estruturas-sequenciais-condicionais-e-de-repeticao/1/' },
      { tipo: 'youtube', titulo: 'Diferença entre estruturas', url: 'https://youtu.be/7gGFHzqh4d8?si=4Z65AovD4TYAeVlS' },
      { tipo: 'youtube', titulo: 'Comparação entre estruturas', url: 'https://youtu.be/WJQz20i7CyI?si=jTpiSo46bmBXhpF8' },
    ],

    16: [
      { tipo: 'pdf', titulo: 'Estrutura de repetição — PARA / contador', url: 'https://sites.icmc.usp.br/andre/AULAS/POO/Aulas/aula03.pdf' },
      { tipo: 'link', titulo: 'Estruturas de repetição — Trybe', url: 'https://blog.betrybe.com/desenvolvimento-web/estruturas-de-repeticao/' },
      { tipo: 'youtube', titulo: 'Estrutura PARA — exemplo', url: 'https://youtu.be/gUGQ4FYleQo?si=G7PZnMAixar4dLTU' },
    ],

    17: [
      { tipo: 'pdf', titulo: 'Estrutura ENQUANTO — PDF', url: 'https://docentes.ifrn.edu.br/albalopes/semestres-anteriores/2012.1/disciplinas/algoritmos-dependencia-eja/Conteudo03ComandosdeRepeticao.pdf' },
      { tipo: 'link', titulo: 'Estrutura ENQUANTO — explicação', url: 'https://dicasdeprogramacao.com.br/estrutura-de-repeticao-enquanto/' },
      { tipo: 'youtube', titulo: 'Estrutura ENQUANTO — prática', url: 'https://youtu.be/tfAh284O04w?si=IEFhtPJgkEHMY5u8' },
      { tipo: 'youtube', titulo: 'Estrutura ENQUANTO — exemplos', url: 'https://youtu.be/lWPrQhzGmbI?si=WhdjODNVBQLJhiZs' },
    ],

    18: [
      { tipo: 'link', titulo: 'Estrutura REPITA — conceito', url: 'https://dicasdeprogramacao.com.br/estrutura-de-repeticao-repita-ate/' },
      { tipo: 'youtube', titulo: 'Estrutura REPITA — exemplo 1', url: 'https://youtu.be/iPaIK9d8X-A?si=WK93BQtjkZk8W9ze' },
      { tipo: 'youtube', titulo: 'Estrutura REPITA — exemplo 2', url: 'https://youtu.be/uJnjcZMd4dQ?si=Js4nLxKIL7hFSdBs' },
      { tipo: 'link', titulo: 'Estrutura PARA — explicação', url: 'https://dicasdeprogramacao.com.br/estrutura-de-repeticao-para/' },
      { tipo: 'youtube', titulo: 'Estrutura PARA — exemplo', url: 'https://youtu.be/rRWDVXFj0gk?si=_AFrYOqI4LYgb8hP' },
      { tipo: 'youtube', titulo: 'Estrutura PARA — prática', url: 'https://youtu.be/6Q33sIIdEXI?si=Kopjq3OfzoKbpE3J' },
    ],
  };


  const handlePressAtividade = (id) => {
    setAtividadeAbertaId((prev) => (prev === id ? null : id));
  };

  const renderIcon = (tipo) => {
    switch (tipo) {
      case 'link':
        return require('../../assets/link.png');
      case 'youtube':
        return require('../../assets/youtube.png');
      case 'pdf':
        return require('../../assets/pdf.png');
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        {atividades.map((atividade) => (
          <View key={atividade.id}>
            <TouchableOpacity
              style={styles.atividadeButton}
              onPress={() => handlePressAtividade(atividade.id)}
              activeOpacity={0.7}
            >
              <View style={styles.atividadeContainer}>
                <Text style={styles.emoji}>{atividade.emoji}</Text>
                <Text style={styles.atividadeText}>{atividade.nome}</Text>
              </View>
            </TouchableOpacity>

            {atividadeAbertaId === atividade.id && (
              <View style={styles.secao}>
                <Text style={styles.secaoTitulo}>Materiais do {atividade.nome}</Text>
                {materiaisPorAtividade[atividade.id].map((material, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.materialItem}
                    onPress={() => Linking.openURL(material.url)}
                    activeOpacity={0.7}
                  >
                    <Image source={renderIcon(material.tipo)} style={styles.icon} />
                    <Text style={[styles.materialText, { textDecorationLine: 'underline', color: 'blue' }]}>
                      {material.titulo}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingVertical: 24,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  atividadeButton: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: colors.background,
    padding: 12,
  },
  atividadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 24,
    marginRight: 15,
  },
  atividadeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  secao: {
    backgroundColor: '#F5F7FF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  secaoTitulo: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    color: '#1E2A5A',
  },
  materialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  materialText: {
    fontSize: 14,
    color: '#1E2A5A',
    flexShrink: 1,
  },
});

export default MateriaisCurso;
