import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Image,Linking,} from 'react-native';
import colors from '../../constants/colors';

const MateriaisCurso = () => {
  const [atividadeAbertaId, setAtividadeAbertaId] = useState(null);

  const atividades = [
    { id: 1, nome: 'Atividade 01', emoji: '📌' },
    { id: 2, nome: 'Atividade 02', emoji: '📌' },
    { id: 3, nome: 'Atividade 03', emoji: '📌' },
    { id: 4, nome: 'Atividade 04', emoji: '📌' },
    { id: 5, nome: 'Atividade 05', emoji: '📌' },
    { id: 6, nome: 'Atividade 06', emoji: '📌' },
    { id: 7, nome: 'Atividade 07', emoji: '📌' },
    { id: 8, nome: 'Atividade 08', emoji: '📌' },
    { id: 9, nome: 'Atividade 09', emoji: '📌' },
    { id: 10, nome: 'Atividade 10', emoji: '📌' },
    { id: 11, nome: 'Atividade 11', emoji: '📌' },
    { id: 12, nome: 'Atividade 12', emoji: '📌' },
    { id: 13, nome: 'Atividade 13', emoji: '📌' },
    { id: 14, nome: 'Atividade 14', emoji: '📌' },
    { id: 15, nome: 'Atividade 15', emoji: '📌' },
    { id: 16, nome: 'Atividade 16', emoji: '📌' },
  ];

  const materiaisPorAtividade = {
    1: [
      { tipo: 'link', titulo: 'Algoritmos em Python: Desvendando o Lado Lógico da Programação', url: 'https://example.com/algoritmos-python' },
      { tipo: 'link', titulo: 'Python para Iniciantes: Os Primeiros Passos na Programação', url: 'https://example.com/python-iniciantes' },
      { tipo: 'youtube', titulo: 'Python em 30 Dias: Desafios Diários para Iniciantes', url: 'https://youtube.com/example1' },
      { tipo: 'youtube', titulo: 'Código em Foco: Projetos Práticos com Python', url: 'https://youtube.com/example2' },
      { tipo: 'pdf', titulo: 'Python Descomplicado: Um Guia Visual para Iniciantes', url: 'https://example.com/python-descomplicado.pdf' },
      { tipo: 'pdf', titulo: 'Python para Ciência de Dados: Análise e Visualização', url: 'https://example.com/python-ciencia-dados.pdf' },
    ],
    2: [
      { tipo: 'link', titulo: 'Estruturas Condicionais em Python', url: 'https://example.com/condicionais-python' },
      { tipo: 'youtube', titulo: 'IF e ELSE na prática', url: 'https://youtube.com/example3' },
      { tipo: 'pdf', titulo: 'Condicionais com exemplos práticos', url: 'https://example.com/condicionais-praticos.pdf' },
    ],
    3: [
      { tipo: 'link', titulo: 'Laços de repetição: FOR e WHILE', url: 'https://example.com/lacos-repeticao' },
      { tipo: 'youtube', titulo: 'Desenhando com FOR', url: 'https://youtube.com/example4' },
      { tipo: 'pdf', titulo: 'Material de Apoio: Laços', url: 'https://example.com/lacos-material.pdf' },
    ],
    4: [
      { tipo: 'link', titulo: 'Funções em Python: Definindo e Chamando', url: 'https://example.com/funcoes-python' },
      { tipo: 'youtube', titulo: 'Funções com parâmetros e retorno', url: 'https://youtube.com/example5' },
      { tipo: 'pdf', titulo: 'Resumo sobre Funções', url: 'https://example.com/funcoes-resumo.pdf' },
    ],
    5: [
      { tipo: 'link', titulo: 'Trabalhando com Listas', url: 'https://example.com/listas-python' },
      { tipo: 'youtube', titulo: 'Python para dados: listas e tuplas', url: 'https://youtube.com/example6' },
      { tipo: 'pdf', titulo: 'Coleções em Python', url: 'https://example.com/colecoes-python.pdf' },
    ],
    6: [
      { tipo: 'link', titulo: 'Dicionários: chave e valor', url: 'https://example.com/dicionarios-python' },
      { tipo: 'youtube', titulo: 'Explorando objetos com dicionários', url: 'https://youtube.com/example7' },
      { tipo: 'pdf', titulo: 'Exercícios sobre dicionários', url: 'https://example.com/dicionarios-exercicios.pdf' },
    ],
    7: [
      { tipo: 'link', titulo: 'Manipulação de arquivos', url: 'https://example.com/manipulacao-arquivos' },
      { tipo: 'youtube', titulo: 'Leitura e escrita com open()', url: 'https://youtube.com/example8' },
      { tipo: 'pdf', titulo: 'Resumo sobre arquivos', url: 'https://example.com/arquivos-resumo.pdf' },
    ],
    8: [
      { tipo: 'link', titulo: 'Tratamento de erros com Try e Except', url: 'https://example.com/tratamento-erros' },
      { tipo: 'youtube', titulo: 'Erros comuns e como evitar', url: 'https://youtube.com/example9' },
      { tipo: 'pdf', titulo: 'Guia rápido sobre exceções', url: 'https://example.com/erros-guia.pdf' },
    ],
    9: [
      { tipo: 'link', titulo: 'Programação Orientada a Objetos - Parte 1', url: 'https://example.com/poo-parte1' },
      { tipo: 'youtube', titulo: 'Entendendo Classes e Objetos', url: 'https://youtube.com/example10' },
      { tipo: 'pdf', titulo: 'Material completo sobre POO', url: 'https://example.com/poo-material.pdf' },
    ],
    10: [
      { tipo: 'link', titulo: 'POO - Parte 2: Herança e Polimorfismo', url: 'https://example.com/poo-parte2' },
      { tipo: 'youtube', titulo: 'POO avançado na prática', url: 'https://youtube.com/example11' },
      { tipo: 'pdf', titulo: 'Resumo de Herança em Python', url: 'https://example.com/heranca-resumo.pdf' },
    ],
    11: [
      { tipo: 'link', titulo: 'Bibliotecas populares: Pandas, Matplotlib', url: 'https://example.com/bibliotecas-pandas-matplotlib' },
      { tipo: 'youtube', titulo: 'Pandas em 10 minutos', url: 'https://youtube.com/example12' },
      { tipo: 'pdf', titulo: 'Visualização de dados com Matplotlib', url: 'https://example.com/visualizacao-matplotlib.pdf' },
    ],
    12: [
      { tipo: 'link', titulo: 'Mini projeto final: Dashboard de Dados', url: 'https://example.com/projeto-dashboard' },
      { tipo: 'youtube', titulo: 'Projeto completo com Python', url: 'https://youtube.com/example13' },
      { tipo: 'pdf', titulo: 'Checklist do projeto final', url: 'https://example.com/checklist-projeto.pdf' },
    ],
    13: [
      { tipo: 'link', titulo: 'Programação Orientada a Objetos - Parte 1', url: 'https://example.com/poo-parte1' },
      { tipo: 'youtube', titulo: 'Entendendo Classes e Objetos', url: 'https://youtube.com/example10' },
      { tipo: 'pdf', titulo: 'Material completo sobre POO', url: 'https://example.com/poo-material.pdf' },
    ],
    14: [
      { tipo: 'link', titulo: 'POO - Parte 2: Herança e Polimorfismo', url: 'https://example.com/poo-parte2' },
      { tipo: 'youtube', titulo: 'POO avançado na prática', url: 'https://youtube.com/example11' },
      { tipo: 'pdf', titulo: 'Resumo de Herança em Python', url: 'https://example.com/heranca-resumo.pdf' },
    ],
    15: [
      { tipo: 'link', titulo: 'Bibliotecas populares: Pandas, Matplotlib', url: 'https://example.com/bibliotecas-pandas-matplotlib' },
      { tipo: 'youtube', titulo: 'Pandas em 10 minutos', url: 'https://youtube.com/example12' },
      { tipo: 'pdf', titulo: 'Visualização de dados com Matplotlib', url: 'https://example.com/visualizacao-matplotlib.pdf' },
    ],
    16: [
      { tipo: 'link', titulo: 'Mini projeto final: Dashboard de Dados', url: 'https://example.com/projeto-dashboard' },
      { tipo: 'youtube', titulo: 'Projeto completo com Python', url: 'https://youtube.com/example13' },
      { tipo: 'pdf', titulo: 'Checklist do projeto final', url: 'https://example.com/checklist-projeto.pdf' },
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
                <Text style={styles.secaoTitulo}>Materiais da {atividade.nome}</Text>
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
