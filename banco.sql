
CREATE DATABASE Kaleb;
USE Kaleb;

-- Criando as tabelas

CREATE TABLE PerguntasTeste(
    cdPergunta int auto_increment not null primary key,
    Enunciado text not null,
    Categoria varchar(30) not null
);

CREATE TABLE RespostaTeste(
    cdResposta int auto_increment not null primary key,
    ConteudoResposta text not null
);

CREATE TABLE TesteLogica(
    cdTeste int auto_increment primary key,
    idPergunta int not null,
    idResposta int not null,
    correta boolean not null,
    foreign key (idPergunta) references PerguntasTeste (cdPergunta),
    foreign key (idResposta) references RespostaTeste (cdResposta),
    unique key (idPergunta, idResposta)  -- Garante que cada combinação pergunta-resposta seja única
);

-- Inserção dos dados

INSERT INTO PerguntasTeste(Enunciado, Categoria) 
values('O que significa a expressão "variavel ++" ?','Algoritimos'),
('valor = float(input("Digite um valor: ")) IF valor > 0: print("O valor é positivo") ELSE: print("O valor é negativo")','Operadores Condicionais'),
('Pensando em dois valores, como verificar qual dos dois é maior?', 'Comparação'),
('soma = 0 ___ i in range(1, 11): soma += i print(soma)','Estrutura de repetição'),
('Relacione os operadores aos seus respectivos grupos:', 'Variáveis Constantes'),
('As frases acima, explicam respectivamente, as estruturas de repetição:Percorre automaticamente cada elemento de uma lista ou array, sem precisar de um contador., Usado quando se sabe exatamente quantas vezes o código deve se repetir.', 'Estrutura de repetição'),
('var
   a: numérica
   b: alfanumérica
   c: constante
   d: lógica','Variáveis');
   
INSERT INTO RespostaTeste(ConteudoResposta) 
values('Você está SOMANDO a variável a ela mesma'),
('Você está SUBTRAINDO a variável a ela mesma'),
('Você está SOMANDO 1 a variável'),
('Você está IGUALANDO a variável a ela mesma'),
('Se o valor digitado for maior que zero, aparecerá que o valor é positivo, se não, é negativo.'),
('Independente do valor digitado, aparecerá que o valor é positivo.'),
('Se o valor digitado for maior que zero, aparecerá que o valor é negativo, se não, é positivo.'),
('Ao digitar um valor, nada acontecerá.'),
('MOSTRE(valor1) MOSTRE(valor2)'),
('SE valor1 > valor 2: MOSTRE(valor2) SENÃO: MOSTRE(valor1)'),
('SE valor1 > valor 2: MOSTRE(valor1) SENÃO: MOSTRE(valor2)'),
('SE valor1: MOSTRE(valor1) SE valor2: MOSTRE(valor2)'),
('For'),
('Foreach'),
('While'),
('Do-While'),
('1. Operadores Aritméticos: +, -, *, /, **'),
('2. Operadores Lógicos: && (E), || (OU), ! (NÃO)'),
('3. Operadores Relacionais: >, <, ==, !=, >=, <='),
('Sequência: 3,1,2'), 
('Sequência: 1,2,3'),
('Sequência: 1,3,2'),
('Sequência: 2,1,3'),
('Sequência: 2,3,1'),
('Sequência: 1,2,3'),
('Sequência: 3,2,1'),
('For e While'),
('Foreach e For'),  
('While e Foreach'),
('Foreach e While'),
('II, IV e VI estão corretas.'),
('I, III, IV e V estão corretas.'),
('I, III e V estão corretas.'),
('II, IV, V e VI estão corretas.'),
(' I, IV e VI estão corretas.');

INSERT INTO TesteLogica(idPergunta, idResposta, correta)
values (1, 1, false), (1, 2, false), (1, 3, true), (1, 4, false),
(2, 5, true), (2, 6, false), (2, 7, false), (2, 8, false),
(3, 9, false), (3, 10, false), (3, 11, true), (3, 12, false),
(4, 13, true), (4, 14, false), (4, 15, false), (4, 16, false),
(5, 17, true),
(5, 18, false),
(5, 19, false),
(5, 20, false),  
(5, 21, false),  
(5, 22, false),  
(5, 23, false),  
(5, 24, false),   
(6, 25, false), 
(6, 26, false),
(6, 27, true),  
(6, 28, false),  
(6, 29, false),
(7, 30, false),
(7, 31, false),  
(7, 32, false),
(7,33,false),
(7, 34, true);
  
-- verificação
SELECT 
    p.Enunciado,
    r.ConteudoResposta AS 'Resposta Correta',
    p.Categoria
FROM 
    PerguntasTeste p
JOIN 
    TesteLogica t ON p.cdPergunta = t.idPergunta
JOIN 
    RespostaTeste r ON t.idResposta = r.cdResposta
WHERE 
    t.correta = TRUE;

-- Teste das tabelas
CREATE TABLE PerguntasEspeciais (
    id_especial INT AUTO_INCREMENT PRIMARY KEY,
    nome_tipo VARCHAR(20) NOT NULL,
    Categoria VARCHAR(30) NOT NULL
);

CREATE TABLE variaveisResposta (
    id_variavel INT AUTO_INCREMENT PRIMARY KEY,
    nome_variavel VARCHAR(50) NOT NULL,
    valor_variavel VARCHAR(50) NOT NULL,
    id_tipo_correto INT,
    FOREIGN KEY (id_tipo_correto) REFERENCES PerguntasEspeciais(id_especial)
);

CREATE TABLE respostasUsuario (
    id_resposta INT AUTO_INCREMENT PRIMARY KEY,
    id_variavel INT NOT NULL,
    id_tipo_escolhido INT NOT NULL,
    FOREIGN KEY (id_variavel) REFERENCES variaveisResposta(id_variavel),
    FOREIGN KEY (id_tipo_escolhido) REFERENCES PerguntasEspeciais(id_especial)
);

-- Inserir os tipos de dados com categoria "Algoritimos"
INSERT INTO PerguntasEspeciais (nome_tipo, Categoria) VALUES 
('int', 'Algoritimos'),
('string', 'Algoritimos'),
('varchar', 'Algoritimos'),
('float', 'Algoritimos'),
('double', 'Algoritimos');

-- Inserir as variáveis com respostas corretas
INSERT INTO variaveisResposta (nome_variavel, valor_variavel, id_tipo_correto) VALUES
('var1', '4', 1),          -- int
('var2', 'ABC', 2),        -- string
('var3', 'ã#@é', 3),       -- varchar
('var4', '0.15', 4),       -- float
('var5', '0.12345678912345678', 5);  -- double

-- Inserir todas as combinações possíveis de respostas (25 no total)
INSERT INTO respostasUsuario (id_variavel, id_tipo_escolhido) VALUES
-- Respostas para var1 (4)
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
-- Respostas para var2 (ABC)
(2, 1), (2, 2), (2, 3), (2, 4), (2, 5),
-- Respostas para var3 (ã#@é)
(3, 1), (3, 2), (3, 3), (3, 4), (3, 5),
-- Respostas para var4 (0.15)
(4, 1), (4, 2), (4, 3), (4, 4), (4, 5),
-- Respostas para var5 (0.12345678912345678)
(5, 1), (5, 2), (5, 3), (5, 4), (5, 5);

-- Consulta para verificar as respostas escolhidas
SELECT 
    v.nome_variavel,
    v.valor_variavel,
    t_escolhido.nome_tipo AS tipo_escolhido,
    t_correto.nome_tipo AS tipo_correto,
    IF(t_escolhido.id_especial = v.id_tipo_correto, '✅ Correto', '❌ Incorreto') AS status,
    p.Categoria
FROM 
    respostasUsuario ru
JOIN 
    variaveisResposta v ON ru.id_variavel = v.id_variavel
JOIN 
    PerguntasEspeciais t_escolhido ON ru.id_tipo_escolhido = t_escolhido.id_especial
JOIN 
    PerguntasEspeciais t_correto ON v.id_tipo_correto = t_correto.id_especial
JOIN
    PerguntasEspeciais p ON t_escolhido.id_especial = p.id_especial
ORDER BY 
    v.id_variavel, t_escolhido.id_especial;
