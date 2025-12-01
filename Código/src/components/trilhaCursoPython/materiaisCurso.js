import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, } from 'react-native';
import colors from '../../constants/colors';

const MateriaisCursoPython = () => {
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
        { id: 19, nome: 'Capítulo 19', emoji: '📌' },
        { id: 20, nome: 'Capítulo 20', emoji: '📌' },
        { id: 21, nome: 'Capítulo 21', emoji: '📌' },
        { id: 22, nome: 'Capítulo 22', emoji: '📌' },
        { id: 23, nome: 'Capítulo 23', emoji: '📌' },
        { id: 24, nome: 'Capítulo 24', emoji: '📌' },
        { id: 25, nome: 'Capítulo 25', emoji: '📌' },
        { id: 26, nome: 'Capítulo 26', emoji: '📌' },
        { id: 27, nome: 'Capítulo 27', emoji: '📌' },
        { id: 28, nome: 'Capítulo 28', emoji: '📌' },
        { id: 29, nome: 'Capítulo 29', emoji: '📌' },
        { id: 30, nome: 'Capítulo 30', emoji: '📌' },
        { id: 31, nome: 'Capítulo 31', emoji: '📌' },
        { id: 32, nome: 'Capítulo 32', emoji: '📌' },
    ];

    const materiaisPorAtividade = {
        1: [
            { tipo: 'pdf', titulo: 'Como declarar variável em Python', url: 'https://memoria.ifrn.edu.br/bitstream/handle/1044/2090/EBOOK%20-%20INTRODU%C3%87%C3%83O%20A%20PYTHON%20%28EDITORA%20IFRN%29.pdf?sequence=1&isAllowed=y' },
            { tipo: 'link', titulo: 'Variáveis em Python - DevMedia', url: 'https://www.devmedia.com.br/python-trabalhando-com-variaveis/38644' },
            { tipo: 'link', titulo: 'Variáveis Python - Covil do Dev', url: 'https://www.covildodev.com.br/article/variaveis-python' },
            { tipo: 'youtube', titulo: 'Como declarar variáveis em Python', url: 'https://youtu.be/zDU7Ge7AiR8?si=eSbTPNc6gW7CdjMR' },
            { tipo: 'youtube', titulo: 'Variáveis no Python', url: 'https://youtu.be/W2vwXsuKXN4?si=LNZGepPumz-paYHB' },
        ],

        2: [
            { tipo: 'pdf', titulo: 'Tipos de variáveis em Python', url: 'https://ronepage.com.br/material/aeds1/Python/Modulo%202%20-%20Variaveis_Tipos_Operadores.pdf' },
            { tipo: 'link', titulo: 'Tipos de variáveis - Codaqui', url: 'https://www.codaqui.dev/trilhas/python/page-1/' },
            { tipo: 'link', titulo: 'Tipos de variáveis - Python Iluminado', url: 'https://pythoniluminado.netlify.app/tipos-variaveis' },
            { tipo: 'youtube', titulo: 'Tipos de variáveis - Aula 1', url: 'https://youtu.be/p1jB2xQuXFU?si=H-ss30NeC2bw50ss' },
            { tipo: 'youtube', titulo: 'Tipos de variáveis - Aula 2', url: 'https://youtu.be/45fcGsvNT7g?si=4c-h7uMWKIJAJEHW' },
        ],

        3: [
            { tipo: 'pdf', titulo: 'Função Print - Minicurso Python', url: 'http://www.migracaosites.uff.br/peteletrica/wp-content/uploads/2021/06/Minicurso-de-Python.pdf' },
            { tipo: 'pdf', titulo: 'Função Print - UFRJ', url: 'https://ic.ufrj.br/~fabiom/mab225/07func.pdf' },
            { tipo: 'link', titulo: 'Print no Python - PythonAcademy', url: 'https://pythonacademy.com.br/blog/print-no-python' },
            { tipo: 'youtube', titulo: 'Print no Python - Aula 1', url: 'https://youtu.be/31llNGKWDdo?si=Vz0Tq4Ukadg--h58' },
            { tipo: 'youtube', titulo: 'Print no Python - Aula 2', url: 'https://youtu.be/I2dk6Nf-ICE?si=mRlwnaI82qWzRnUo' },
        ],

        4: [
            { tipo: 'pdf', titulo: 'Função Input - Unicamp', url: 'https://ic.unicamp.br/~mc102/aulas/aula02.pdf' },
            { tipo: 'link', titulo: 'Aprendendo Input - Codaqui', url: 'https://www.codaqui.dev/trilhas/python/page-1/' },
            { tipo: 'youtube', titulo: 'Input no Python - Aula 1', url: 'https://youtu.be/di9mk-ddYo8?si=2605py2t4-ZHinC7' },
            { tipo: 'youtube', titulo: 'Input no Python - Aula 2', url: 'https://youtu.be/xsEXxnao1nI?si=gxsp4js5espdQEjQ' },
        ],

        5: [
            { tipo: 'pdf', titulo: 'Constantes Python - PDF', url: 'https://gerardao.com.br/emi/1%20REDE/Logica%20de%20Programacao/Python/06%20-%20Vari%C3%A1veis%20e%20constantes.pdf' },
            { tipo: 'link', titulo: 'Constantes em Python - DIO', url: 'https://www.dio.me/articles/o-conceito-de-constantes-em-python' },
            { tipo: 'link', titulo: 'Constantes Python - StackOverflow', url: 'https://pt.stackoverflow.com/questions/195351/definir-constante-em-python' },
            { tipo: 'link', titulo: 'Constantes e estruturas de dados', url: 'https://medium.com/@habbema/python-estruturas-de-dados-c0439b392f95' },
            { tipo: 'youtube', titulo: 'Constantes Python - Aula 1', url: 'https://youtu.be/wzoyul4z4kw?si=ZmQjHCG4dM4A3QC_' },
            { tipo: 'youtube', titulo: 'Constantes Python - Aula 2', url: 'https://youtu.be/WtN1wxCH__E?si=NAiISF3PchrGZjVl' },
        ],

        6: [
            { tipo: 'pdf', titulo: 'Operadores no Python', url: 'https://braganholo.github.io/material/prog-python/04-OperadoresEstruturasDecisao.pdf' },
            { tipo: 'link', titulo: 'Operadores Aritméticos e Lógicos', url: 'https://pythonacademy.com.br/blog/operadores-aritmeticos-e-logicos-em-python' },
            { tipo: 'link', titulo: 'Tipos de operadores em Python', url: 'https://www.dio.me/articles/tipos-de-operadores-em-python' },
            { tipo: 'youtube', titulo: 'Operadores no Python - Aula 1', url: 'https://youtu.be/Vw6gLypRKmY?si=medUxWksDEJ9Jt6c' },
            { tipo: 'youtube', titulo: 'Operadores no Python - Aula 2', url: 'https://youtu.be/EnUXqCaYhZI?si=ZB8Of-zazWBC10vE' },
        ],

        7: [
            { tipo: 'pdf', titulo: 'Operadores relacionais - PDF', url: 'https://www.ic.unicamp.br/~raquel.cabral/pdf/Aula04.pdf' },
            { tipo: 'link', titulo: 'Operadores relacionais - Unicamp', url: 'https://www.ic.unicamp.br/~wainer/cursos/1s2020/102/aula03.html' },
            { tipo: 'link', titulo: 'Operadores relacionais no Python', url: 'https://motim.me/blog/python/operadores-relacionais-no-python/' },
            { tipo: 'youtube', titulo: 'Operadores relacionais - Aula 1', url: 'https://youtu.be/bfuPfTT5fgI?si=HaI_FHjRjz0yhNrg' },
            { tipo: 'youtube', titulo: 'Operadores relacionais - Aula 2', url: 'https://youtu.be/MoNDLQJKmQE?si=mF-YccDdjnTa1kqv' },
        ],

        8: [
            { tipo: 'pdf', titulo: 'Operadores Lógicos - UFES', url: 'https://introcomp.ufes.br/wp-content/uploads/Working_3__Operadores_L_gicos_e_Condicionais.pdf' },
            { tipo: 'link', titulo: 'Operadores Lógicos - DataCamp', url: 'https://www.datacamp.com/pt/tutorial/python-logical-operators-introduction' },
            { tipo: 'link', titulo: 'Operadores Lógicos no Python - GranCursos', url: 'https://blog.grancursosonline.com.br/operadores-logicos-na-linguagem-python/' },
            { tipo: 'youtube', titulo: 'Operadores Lógicos - Aula 1', url: 'https://youtu.be/GdoQKHdiCFc?si=SZdZpbsB47ykusS-' },
            { tipo: 'youtube', titulo: 'Operadores Lógicos - Aula 2', url: 'https://youtu.be/q0xnilStu0I?si=NplHVH4gO-JaeLg5' },
        ],
        9: [
            { tipo: 'pdf', titulo: 'Operadores de Atribuição - UFU', url: 'https://www.portal.ufu.br/sites/default/files/media/documento/operadores_em_python_0.pdf' },
            { tipo: 'link', titulo: 'Operadores de Atribuição em Python', url: 'https://pythonacademy.com.br/blog/operadores-de-atribuicao-em-python' },
            { tipo: 'link', titulo: 'Assignment Operators - W3Schools', url: 'https://www.w3schools.com/python/python_operators.asp' },
            { tipo: 'youtube', titulo: 'Operadores de Atribuição - Aula 1', url: 'https://youtu.be/K1z2BEdXNjw?si=b6V9o4JtWpdFr1Yh' },
            { tipo: 'youtube', titulo: 'Operadores de Atribuição - Aula 2', url: 'https://youtu.be/ii1YaS8Aagc?si=tgGPQ3CK8YEvcNAH' },
        ],

        10: [
            { tipo: 'pdf', titulo: 'Operadores de Identidade e Associação', url: 'https://amandawener.github.io/site-material-de-aulas/intro_python/Aula_03_Operadores.pdf' },
            { tipo: 'link', titulo: 'Operadores de Identidade em Python', url: 'https://www.alura.com.br/artigos/conhecendo-operadores-identidade-python' },
            { tipo: 'link', titulo: 'Operadores de Associação (in / not in)', url: 'https://www.programiz.com/python-programming/operators' },
            { tipo: 'youtube', titulo: 'Operadores de Identidade - Aula 1', url: 'https://youtu.be/l2bqsDqSxF8?si=omadIneCE7msZloA' },
            { tipo: 'youtube', titulo: 'Operadores de Associação - Aula 2', url: 'https://youtu.be/SH8hJmLjx4g?si=yPfzDtS9FYmSSQ2d' },
        ],

        11: [
            { tipo: 'pdf', titulo: 'Strings em Python – IFRN', url: 'https://memoria.ifrn.edu.br/bitstream/handle/1044/2090/EBOOK%20-%20INTRODU%C3%87%C3%83O%20A%20PYTHON%20%28EDITORA%20IFRN%29.pdf?sequence=1&isAllowed=y' },
            { tipo: 'link', titulo: 'Trabalhando com Strings em Python - DevMedia', url: 'https://www.devmedia.com.br/trabalhando-com-strings-em-python/38274' },
            { tipo: 'link', titulo: 'Strings no Python - CFB Cursos', url: 'https://cfbcursos.com.br/strings-em-python-o-que-sao-e-como-usar/' },
            { tipo: 'youtube', titulo: 'Strings no Python - Aula 1', url: 'https://youtu.be/0h4ZJ3jks7s?si=AzrJZfnfFfie8pmf' },
            { tipo: 'youtube', titulo: 'Strings no Python - Aula 2', url: 'https://youtu.be/biK0VhWyxKM?si=tPyYpZeJApF8SJwZ' },
        ],

        12: [
            { tipo: 'pdf', titulo: 'Métodos de Strings - USP', url: 'https://edisciplinas.usp.br/pluginfile.php/7966210/mod_resource/content/1/python_strings.pdf' },
            { tipo: 'link', titulo: 'Métodos de Strings em Python', url: 'https://www.alura.com.br/artigos/metodos-string-python' },
            { tipo: 'link', titulo: 'Fatiamento de Strings - Programador BR', url: 'https://programadorbr.com/fatiamento-de-strings-em-python/' },
            { tipo: 'youtube', titulo: 'Métodos de String - Aula 1', url: 'https://youtu.be/rgRdb6hE01A?si=rMl3lOK2KwYiLC5g' },
            { tipo: 'youtube', titulo: 'Fatiamento de Strings - Aula 2', url: 'https://youtu.be/lrjI8Wc7OoU?si=5lDFHKx8P3OjI97l' },
        ],

        13: [
            { tipo: 'pdf', titulo: 'Tratamento de Strings - UTFPR', url: 'http://www.utfpr.edu.br/campus/cornelioprocopio/estrutura-universitaria/diretorias/grad/cursos/cc25/disciplinas/aulas/2019-1/aulas-python/aula04.pdf' },
            { tipo: 'link', titulo: 'Manipulação de Strings Avançada - Python Academy', url: 'https://pythonacademy.com.br/blog/manipulacao-de-strings' },
            { tipo: 'link', titulo: 'Strings – Curso em Vídeo (Resumo)', url: 'https://www.cursoemvideo.com/course/python-3-mundo-1/strings/' },
            { tipo: 'youtube', titulo: 'Strings Avançadas - Aula 1', url: 'https://youtu.be/h8Jm2sKHTlQ?si=PaZNDsZt-Qdhlm_r' },
            { tipo: 'youtube', titulo: 'Strings - Curso em Vídeo', url: 'https://youtu.be/TJHjJ1iLO2c?si=BIXwkgZDQ6KyHRxv' },
        ],

        14: [
            { tipo: 'pdf', titulo: 'If, Else, Elif - PDF Completo', url: 'https://www.inf.ufpr.br/andre/disciplinas/ci055/aulas/aula05.pdf' },
            { tipo: 'link', titulo: 'Estruturas Condicionais em Python', url: 'https://www.alura.com.br/artigos/condicionais-python-if-elif-else' },
            { tipo: 'link', titulo: 'If/Else - Documentação Python', url: 'https://docs.python.org/pt-br/3/tutorial/controlflow.html' },
            { tipo: 'youtube', titulo: 'If/Else - Aula 1', url: 'https://youtu.be/Ez8F0nW6S-g?si=ORiEt1lGaCkuYZ0T' },
            { tipo: 'youtube', titulo: 'Elif - Aula 2', url: 'https://youtu.be/h7rm3y3J9Ck?si=A7CJTss-trBHQm5k' },
        ],

        15: [
            { tipo: 'pdf', titulo: 'Aninhamento de Condições - PDF', url: 'https://web.icmc.usp.br/~peticmc/aulas_logica/aluno_aula8.pdf' },
            { tipo: 'link', titulo: 'Condicionais Aninhadas – Python Academy', url: 'https://pythonacademy.com.br/blog/condicionais-aninhadas' },
            { tipo: 'link', titulo: 'Nested If – Programiz', url: 'https://www.programiz.com/python-programming/if-elif-else' },
            { tipo: 'youtube', titulo: 'If Aninhado - Aula 1', url: 'https://youtu.be/sYdWQAxM1zA?si=9CC-dWv8X2xYvFoh' },
            { tipo: 'youtube', titulo: 'If Aninhado - Aula 2', url: 'https://youtu.be/cV1gk6w8xjk?si=i_0zHPsxKzo72DLK' },
        ],

        16: [
            { tipo: 'pdf', titulo: 'Exercícios de Condicionais', url: 'https://www.ime.usp.br/~macmulti/exercicios_python_condicionais.pdf' },
            { tipo: 'link', titulo: 'Exercícios If/Else', url: 'https://wiki.python.org.br/EstruturaDeDecisao' },
            { tipo: 'youtube', titulo: 'Exercícios Resolvidos - Aula 1', url: 'https://youtu.be/CXIbMiI0NDs?si=pnlo2KCxJ1Cdhjg-' },
            { tipo: 'youtube', titulo: 'Exercícios Resolvidos - Aula 2', url: 'https://youtu.be/LrdaM_7zv64?si=5nK2rLP91pU5Sp3w' },
        ],

        17: [
            { tipo: 'pdf', titulo: 'Operadores Lógicos e Condições', url: 'https://introcomp.ufes.br/wp-content/uploads/Working_3__Operadores_L_gicos_e_Condicionais.pdf' },
            { tipo: 'link', titulo: 'Guia Completo de Condicionais', url: 'https://www.devmedia.com.br/python-if-else/40212' },
            { tipo: 'youtube', titulo: 'Condicionais - Curso em Vídeo', url: 'https://youtu.be/8j0UDiN7my4?si=Z-UiaPYlY97jBR7q' },
        ],

        18: [
            { tipo: 'pdf', titulo: 'Laços de Repetição - UTFPR', url: 'http://www.utfpr.edu.br/campus/cornelioprocopio/estrutura-universitaria/diretorias/grad/cursos/cc25/disciplinas/aulas/2019-1/aulas-python/aula05.pdf' },
            { tipo: 'link', titulo: 'For e While em Python', url: 'https://www.alura.com.br/artigos/loops-for-while-python' },
            { tipo: 'link', titulo: 'Loops - Documentação Python', url: 'https://docs.python.org/pt-br/3/tutorial/controlflow.html#for-statements' },
            { tipo: 'youtube', titulo: 'Laço For - Aula 1', url: 'https://youtu.be/_n2fQkRkD1A?si=8seGlxeZzgyA32fU' },
            { tipo: 'youtube', titulo: 'Laço While - Aula 2', url: 'https://youtu.be/z1Jb3I6pCsY?si=WAtMczvc79MYiGaQ' },
        ],

        19: [
            { tipo: 'pdf', titulo: 'Loop For - USP', url: 'https://edisciplinas.usp.br/pluginfile.php/7966211/mod_resource/content/1/python_loops.pdf' },
            { tipo: 'link', titulo: 'For Python Explicado', url: 'https://www.programiz.com/python-programming/for-loop' },
            { tipo: 'youtube', titulo: 'For na Prática - Aula 1', url: 'https://youtu.be/forW7nJY8do?si=GmMZcgPuDG8N2qR_' },
            { tipo: 'youtube', titulo: 'For Avançado - Aula 2', url: 'https://youtu.be/mp6gW6lHpi8?si=ykN1YsRng2WNVvyl' },
        ],

        20: [
            { tipo: 'pdf', titulo: 'Loop While - UFRGS', url: 'https://www.inf.ufrgs.br/~cabral/teaching/aulas/python-while.pdf' },
            { tipo: 'link', titulo: 'While em Python', url: 'https://www.devmedia.com.br/como-utilizar-o-laco-while-em-python/38422' },
            { tipo: 'youtube', titulo: 'While Prático - Aula 1', url: 'https://youtu.be/7O8libxgS7I?si=2LEy4yb63FsJharo' },
            { tipo: 'youtube', titulo: 'While Completo - Aula 2', url: 'https://youtu.be/3Z9l6Rxur2A?si=0aY12bWlx7Ic9Cqo' },
        ],

        21: [
            { tipo: 'pdf', titulo: 'Break e Continue - PDF', url: 'https://amandawener.github.io/site-material-de-aulas/intro_python/Aula_04_Repeticao.pdf' },
            { tipo: 'link', titulo: 'Break, Continue e Pass', url: 'https://www.alura.com.br/artigos/usando-break-e-continue-com-python' },
            { tipo: 'youtube', titulo: 'Break e Continue - Aula 1', url: 'https://youtu.be/MUdGbD2RJfE?si=Hdy8BNQqC1rxlDyg' },
            { tipo: 'youtube', titulo: 'Pass e Continue - Aula 2', url: 'https://youtu.be/LGZZ1ZR7PM4?si=WGHk8ku2hT1L-QO9' },
        ],

        22: [
            { tipo: 'pdf', titulo: 'Listas em Python - USP', url: 'https://edisciplinas.usp.br/pluginfile.php/7966212/mod_resource/content/1/python_listas.pdf' },
            { tipo: 'link', titulo: 'Listas em Python - DevMedia', url: 'https://www.devmedia.com.br/python-listas-e-suas-funcoes/38501' },
            { tipo: 'youtube', titulo: 'Listas - Aula 1', url: 'https://youtu.be/1AIB2J_bCXM?si=NY0dr2gGQ8xFvYz2' },
            { tipo: 'youtube', titulo: 'Listas - Aula 2', url: 'https://youtu.be/QHq8aKNo4OA?si=EcHRw8VHbW0jtEuI' },
        ],

        23: [
            { tipo: 'pdf', titulo: 'Métodos de Lista - Python', url: 'https://amandawener.github.io/site-material-de-aulas/intro_python/Aula_05_Listas.pdf' },
            { tipo: 'link', titulo: 'Métodos de Lista - Alura', url: 'https://www.alura.com.br/artigos/listas-em-python' },
            { tipo: 'youtube', titulo: 'Métodos de Listas - Aula 1', url: 'https://youtu.be/Nblg2B7xvBQ?si=i9xcQzaqj6rPnp6p' },
            { tipo: 'youtube', titulo: 'Operações com Listas - Aula 2', url: 'https://youtu.be/t1OHZ6Y_5NE?si=lLiK0_QtKMT1Ejjw' },
        ],

        24: [
            { tipo: 'pdf', titulo: 'Dicionários em Python - USP', url: 'https://edisciplinas.usp.br/mod/resource/view.php?id=3885183' },
            { tipo: 'link', titulo: 'Dicionários - Python Academy', url: 'https://pythonacademy.com.br/blog/dicionarios-em-python' },
            { tipo: 'youtube', titulo: 'Dicionários - Aula 1', url: 'https://youtu.be/v1pJ3hN3kE8?si=hezQAFMdTkne2S3d' },
            { tipo: 'youtube', titulo: 'Dicionários - Aula 2', url: 'https://youtu.be/ihYTRjI6t1A?si=yjOEBRzApI0U1qDk' },
        ],

        25: [
            { tipo: 'pdf', titulo: 'Tuplas em Python - USP', url: 'https://edisciplinas.usp.br/pluginfile.php/7966213/mod_resource/content/1/python_tuplas.pdf' },
            { tipo: 'link', titulo: 'Tuplas em Python - DevMedia', url: 'https://www.devmedia.com.br/python-tuplas/39524' },
            { tipo: 'youtube', titulo: 'Tuplas - Aula 1', url: 'https://youtu.be/YnZp_PMs0qU?si=YWlqpJqF1UG2RglO' },
            { tipo: 'youtube', titulo: 'Tuplas - Aula 2', url: 'https://youtu.be/5KgJoZ-mPr0?si=Kb_Kp_fO9oVsUA1X' },
        ],

        26: [
            { tipo: 'pdf', titulo: 'Conjuntos (Sets) - PDF', url: 'https://amandawener.github.io/site-material-de-aulas/intro_python/Aula_06_Conjuntos.pdf' },
            { tipo: 'link', titulo: 'Sets em Python - W3Schools', url: 'https://www.w3schools.com/python/python_sets.asp' },
            { tipo: 'youtube', titulo: 'Sets - Aula 1', url: 'https://youtu.be/U8s7N5FwlQI?si=KtcrYOjcrFs9Wjnh' },
            { tipo: 'youtube', titulo: 'Sets Avançado - Aula 2', url: 'https://youtu.be/E2NfrT0-bkU?si=5TqGeJdFNx2fjzwy' },
        ],

        27: [
            { tipo: 'pdf', titulo: 'Manipulação de Arquivos - UFRJ', url: 'https://ic.ufrj.br/~fabiom/mab225/11files.pdf' },
            { tipo: 'link', titulo: 'Ler e Escrever Arquivos em Python', url: 'https://www.alura.com.br/artigos/lendo-e-escrevendo-arquivos-python' },
            { tipo: 'youtube', titulo: 'Manipulação de Arquivos - Aula 1', url: 'https://youtu.be/Yf0rjvWvmm8?si=C24p6mR7BncQs9fk' },
            { tipo: 'youtube', titulo: 'Arquivos - Aula 2', url: 'https://youtu.be/kA5dvJqzq3o?si=7d1E9DMBMAP7hcJB' },
        ],

        28: [
            { tipo: 'pdf', titulo: 'Funções em Python - PDF', url: 'https://www.ic.unicamp.br/~wainer/cursos/1s2020/102/aula05.html' },
            { tipo: 'link', titulo: 'Funções em Python - DevMedia', url: 'https://www.devmedia.com.br/funcoes-em-python/38340' },
            { tipo: 'youtube', titulo: 'Funções - Aula 1', url: 'https://youtu.be/KcT6JpTQmLk?si=p3cbg21hptqCCipj' },
            { tipo: 'youtube', titulo: 'Funções - Aula 2', url: 'https://youtu.be/ppDkyCvG0qU?si=TmSZFwJfNAL6jvZu' },
        ],

        29: [
            { tipo: 'pdf', titulo: 'Parâmetros e Retorno - UTFPR', url: 'http://www.utfpr.edu.br/campus/cornelioprocopio/estrutura-universitaria/diretorias/grad/cursos/cc25/disciplinas/aulas/2019-1/aulas-python/aula07.pdf' },
            { tipo: 'link', titulo: 'Parâmetros em Python - Alura', url: 'https://www.alura.com.br/artigos/funcao-com-parametros-python' },
            { tipo: 'youtube', titulo: 'Parâmetros e Retorno - Aula 1', url: 'https://youtu.be/OdYnBw96Lm8?si=mCl5FOJYzedTNi-y' },
            { tipo: 'youtube', titulo: 'Parâmetros Avançado - Aula 2', url: 'https://youtu.be/tfRk0wOvjj4?si=8yxnhLLfUZz3q4tq' },
        ],

        30: [
            { tipo: 'pdf', titulo: 'Escopo de Variáveis - PDF', url: 'https://amandawener.github.io/site-material-de-aulas/intro_python/Aula_08_Funcoes.pdf' },
            { tipo: 'link', titulo: 'Escopo Local e Global', url: 'https://www.programiz.com/python-programming/global-local-nonlocal-variables' },
            { tipo: 'youtube', titulo: 'Escopo - Aula 1', url: 'https://youtu.be/0VqLltE35o8?si=zvnC8RwOAWHQIFz0' },
            { tipo: 'youtube', titulo: 'Escopo - Aula 2', url: 'https://youtu.be/GCCV4YH792U?si=CwPeIDhFho7RwZ9e' },
        ],

        31: [
            { tipo: 'pdf', titulo: 'Tratamento de Exceções - UFRJ', url: 'https://ic.ufrj.br/~fabiom/mab225/13exceptions.pdf' },
            { tipo: 'link', titulo: 'Try/Except em Python', url: 'https://www.alura.com.br/artigos/excecoes-em-python' },
            { tipo: 'youtube', titulo: 'Try/Except - Aula 1', url: 'https://youtu.be/uwpViXgR0Lc?si=7Ioh1GtoyVtJspxB' },
            { tipo: 'youtube', titulo: 'Exceções - Aula 2', url: 'https://youtu.be/cUzfAn0EHEU?si=93Tdac2OR5BUt-Cr' },
        ],

        32: [
            { tipo: 'pdf', titulo: 'Módulos e Bibliotecas - PDF', url: 'https://www.inf.pucrs.br/~pinho/PR/Modulo1/Python-Modulos.pdf' },
            { tipo: 'link', titulo: 'Import e Módulos - Alura', url: 'https://www.alura.com.br/artigos/modulos-e-pacotes-python' },
            { tipo: 'youtube', titulo: 'Módulos - Aula 1', url: 'https://youtu.be/sRjLhEGuo7o?si=vfSsf9GLw82vrTgT' },
            { tipo: 'youtube', titulo: 'Bibliotecas Python - Aula 2', url: 'https://youtu.be/t8pPdKYpowI?si=5nnAYUEZQd-Hjh3-' },
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

export default MateriaisCursoPython;
