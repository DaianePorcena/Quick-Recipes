-- Inserção da tabela receitas

INSERT INTO receitas (name, time, rendimento, cover) VALUES ('Omelete recheado', 15, '1 Porção', 'omelete.png'),
('Guacamole', 10, '5 Porções', 'guacamole.png'),
('Batata recheada', 30, '2 Porções', 'batatarecheada.png'),
('Arroz preguiçoso', 45, '6 Porções', 'arrozpreguicoso.png'),
('Tapioca de frigideira', 15, '1 Porção', 'tapioca.png'),
('Panqueca de banana', 15, '6 Porções', 'panqueca.png'),
('Strogonoff', 40, '6 Porções', 'strogonoff.png'),
('Strogonoff Frango', 60, '8 Porções', 'strogonoffdefrango.png'),
('Pizza calabresa', 120, '6 Porções', 'pizzacalabresa.png'),
('Massa de Pastel', 30, '12 Porções', 'pastel.png'),
('Pudim de leite condensado', 65, '6 Porções', 'pudim.png'),
('Pizza frango com catupiry', 60, '8 Porções', 'pizza.png');

-- Inserção da tabela ingredientes 

-- receita 1
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('2 ovos', 1), ('2 fatias de queijo muçarela', 1), ('6 tomates', 1), ('sal', 1),
('pimenta', 1), ('orégano', 1), ('½ colher de sopa de manteiga', 1);
-- receita 2
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('1 abacate brasileiro médio', 2), ('1 tomate grande sem sementes', 2), 
('1 cebola pequena', 2), ('2 dentes de alho bem socados', 2), ('1 maço de coentro', 2), ('1 pimenta malagueta sem sementes', 2), 
('suco de 1 limão grande', 2), ('azeite extra virgem', 2), ('sal',2);
-- receita 3 
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('2 batatas médias cozidas', 3), ('sal a gosto', 3), ('pimenta-do-reino a gosto', 3), 
('1 ovo', 3), ('bacon frito a gosto', 3), ('1/2 lata de creme de leite', 3), ('cebolinha a gosto', 3);
-- receita 4 
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('2 copos de arroz cru', 4), ('4 e 1/2 copos americanos de água quente', 4), 
('1/2 copo de americano de azeite', 4), ('1 colher de sopa de margarina', 4), ('1 tablete de caldo de galinha', 4), 
('1 lata de milho escorrido', 4), ('1 cebola picada', 4), ('50g de azeitonas sem caroço cortadas em rodelas', 4), 
('100g de presunto cortado em quadradinho', 4), ('100g de mussarela cortado em quadradinho', 4), ('1 cenoura cortada em cubos', 4), 
('2 ovos', 4), ('2 tomates firmes picados', 4), ('sal e pimenta-do-reino a gosto', 4), ('mussarela fatiada (para gratinar)', 4);
-- receita 5
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('1 xícara de polvilho doce', 5), ('5 colheres de sopa de água filtrada', 5), ('1 pitada de sal (opcional)', 5), ('Leite condensado ou nutela', 5);
-- receita 6
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('2 bananas', 6), ('2 ovos', 6), ('1 colher (sopa) de açúcar', 6), 
('5 colheres (sopa) de farinha de trigo com fermento', 6), ('5 colheres (sopa) de farinha de trigo com fermento', 6);
-- receita 7
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('400g de carne Patinho', 7), ('2 xícaras de arroz branco', 7), 
('150g de molho de tomate', 7), ('1 caixareme de leite', 7) ;
-- receita 8
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('700g de frango (patinho)', 8), ('2 xícaras de arroz branco', 8), 
('1 pacote 150g de molho de tomate', 8), ('1 caixa de creme de leite', 8), ('1 colher (chá) de ketchup', 8);
-- receita 9
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('1 massa de pizza', 9), ('1 pacote 250g de molho de tomate', 9), 
('350g de queijo', 9), ('300g de calabresa', 9), ('orégano à gosto', 9), ('cebola à gosto', 9);
-- receita 10
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('1kg de farinha de trigo', 10), ('1/2 xícara (chá) de óleo', 10), 
('1 colher sopa de sal', 10), ('1 colher (chá) de vinagre', 10), ('1 ovo', 10), ('250ml de água', 10);
-- receita 11
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('1 lata de Leite condensado', 11), ('1 (mesmo tamanho do leite condesado) de Leite', 11), ('3 Ovos', 11), ('1 xícara (chá) de açúcar', 11), ('1/2 xícara de água', 11);
-- receita 12
INSERT INTO ingredientes (name, ingredientes_id) VALUES ('400g File peito de frango', 12), ('4 colheres chá de Orégano', 12), ('250g Catupiry', 12), ('Sal à gosto', 12);


-- Inserção dos dados na tabela 'instructions'
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Leve uma panela ao fogo baixo e derreta a manteiga.', 1),
  ('Junte os ovos e tempere com sal, pimenta e orégano a gosto. Mexa bem.', 1),
  ('Deixe dourar e vire o lado da omelete.', 1),
  ('Junte o recheio na metade do omelete.', 1),
  ('Dobre uma parte sobre a outra e deixe até o queijo derreter.', 1),
  ('Sirva em seguida a sua omelete recheada!', 1);

INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Amasse o abacate com um garfo.', 2),
  ('Junte os ovos e tempere com sal, pimenta e orégano a gosto. Mexa bem.Acrescente o alho socado, o suco de limão, sal e azeite a gosto e misture como um purê.', 2),
  ('Pique a cebola, o tomate e o coentro. Pique bem a pimenta.', 2),
  ('Sirva com chips, crackers, tacos, no burrito ou mesmo junto com arroz e feijão.', 2);
  
  
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Retire a polpa das duas batatas cozidas, deixando uma cavidade em cada uma, reserve.', 3),
  ('Em um recipiente, misture as polpas da batata com sal, pimenta, ovo, queijo mussarela, bacon frito e creme de leite, misture bem.', 3),
  ('Em um tabuleiro, coloque as duas batatas e distribua em cada cavidade um pouco de queijo mussarela, a mistura das polpas, bacon frito.', 3),
  ('Acrescente mais um pouco de queijo mussarela por cima, bacon e finalize com cebolinha picada a gosto.', 3),
  ('Leve ao forno (230° C), por cerca de 20 minutos.', 3),
  ('Sirva a batata recheada!', 3);
  
  
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Em uma tigela, dissolva o caldo de galinha na água quente.', 4),
  ('Acrescente o arroz e os demais ingredientes e mexa bem.', 4),
  ('Transfira a mistura para uma travessa que possa ir ao forno e cubra-a com papel alumínio.', 4),
  ('Leve ao forno médio preaquecido por 35 minutos.', 4),
  ('Retire do forno, cubra com as fatias de mussarela e volte ao forno para gratinar por mais 5 minutos.', 4),
  ('Sirva em seguida.', 4);
  
  
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Coloque o polvilho doce numa tigela e adicione a água.', 5),
  ('Misture com as mãos até obter uma farinha com pequenos flocos, que quebra facilmente.', 5),
  ('Se essa mistura de polvilho doce e água estiver derretendo muito, adicione um pouco mais de polvilho doce e mexa, misturando e apertando com as mãos, até chegar no ponto certo.', 5),
  ('Coloque 2-3 colheres de sopa dessa goma de tapioca numa peneira e, com as mãos, misture de modo a polvilhar sobre uma frigideira.', 5),
  ('Peneire bem em torno de toda a frigideira, de modo a obter uma camada homogênea de tapioca, nem muito fina nem muito grossa.', 5),
  ('Quando tiver terminado essa camada de tapioca, leve a frigideira ao fogo médio e deixe por uns 2-3 minutos.', 5),
  ('Quando a tapioca estiver durinha o suficiente, retire do fogo.', 5),
  ('Recheie a tapioca com Leite condensado ou nutela e enrole em seguida.', 5);
  
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Em uma vasilha, amasse as duas bananas com a ajuda de um garfo, junte os dois ovos, o açúcar e misture bem.', 6),
  ('Acrescente a farinha de trigo, uma colher de cada vez, misturando para não empelotar.', 6),
  ('Por último coloque o leite, mexendo até obter uma massa homogênea.', 6),
  ('Coloque uma concha da massa no centro de uma frigideira antiaderente, devagar para que a massa não se espalhe muito (se preferir pode ir moldando com a ajuda de uma colher).', 6),
  ('Deixe dourar e com a ajuda de uma espátula vire e doure o outro lado.', 6),
  ('Pronto, é só servir acompanhada de chocolate derretido em cima ou ainda bacon frito e ovos, excelente pedida para o café da manhã!', 6);
  
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Em uma panela, misture a carne, o alho, a maionese, o sal e a pimenta.', 7),
  ('Em uma frigideira grande, derreta a manteiga e doure a cebola.', 7),
  ('Junte o frango temperado até que esteja dourado.', 7),
  ('Adicione os cogumelos, o ketchup e a mostarda.', 7),
  ('Incorpore o creme de leite e retire do fogo antes de ferver.', 7),
  ('Sirva com arroz branco e batata palha.', 7);
  
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Em uma panela, misture o frango, o alho, a maionese, o sal e a pimenta.', 8),
  ('Em uma frigideira grande, derreta a manteiga e doure a cebola.', 8),
  ('Junte o frango temperado até que esteja dourado.', 8),
  ('Adicione os cogumelos, o ketchup.', 8),
  ('Incorpore o creme de leite e retire do fogo antes de ferver.', 8),
  ('Sirva com arroz branco e batata palha.', 8);

INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Passe o molho de toma em cima da massa com uma colher.', 9),
  ('Coloque o queijo sobre toda massa.', 9),
  ('Adicione a calabesa sobre o queijo.', 9),
  ('Coloque as cebolas cortadas em rodelas sobre a pizza.', 9),
  ('Adicione orégano (à gosto).', 9),
  ('Leve ao forno quente em torno de 15 a 20 minutos.', 9);
  
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Misture os ingredientes em uma tigela e amasse com as mãos.', 10),
  ('Sove bem a massa sobre uma superfície lisa enfarinhada.', 10),
  ('Utilize um rolo para esticar a massa e deixá-la na espessura desejada.', 10),
  ('Corte a massa no tamanho que quiser fazer os pastéis.', 10),
  ('Recheie de acordo com a sua preferência.', 10),
  ('Frite em óleo bem quente.', 10);
  
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Primeiro, bata bem os ovos no liquidificador.', 11),
  ('Acrescente o leite condensado e o leite, e bata novamente.', 11),
  ('Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.', 11),
  ('oloque em uma forma redonda e despeje a massa do pudim por cima.', 11),
  ('Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.', 11),
  ('Espete um garfo para ver se está bem assado.', 11),
  ('Deixe esfriar e desenforme.', 11);
  
INSERT INTO instrucoes (text, instrucoes_id)
VALUES
  ('Cozinhe o Filé de peito DaGranja Seara em uma panela com água e sal. Quando estiver pronto, retire, desfie e tempere com sal, pimenta e salsinha.', 12),
  ('Espalhe o molho de tomate na massa de pizza cobrindo todo o disco.', 12),
  ('Espalhe o frango desfiado pela pizza.', 12),
  ('Coloque o catupiry em um saco de confeiteiro ou um saco plástico com furo na ponta e espalhe o queijo pela pizza. Você pode distribuir em espiral ou em linhas horizontais e verticais.', 12),
  ('Leve a pizza de frango com catupiry ao forno preaquecido até a massa dourar levemente embaixo e o catupiry derreter.', 12);

