
DROP DATABASE IF EXISTS Quickrecipes;
CREATE DATABASE QuickRecipes;

USE QuickRecipes;


-- Criação da tabela 'receitas'
CREATE TABLE receitas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  time INT NOT NULL,
  rendimento VARCHAR(255) NOT NULL,
  cover VARCHAR(255)
);

-- Criação da tabela 'ingredientes'
CREATE TABLE ingredientes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  ingredientes_id INT NOT NULL,
  FOREIGN KEY (ingredientes_id) REFERENCES receitas(id)
);

-- Criação da tabela 'instrucoes'
CREATE TABLE instrucoes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(1000) NOT NULL,
  instrucoes_id INT NOT NULL,
  FOREIGN KEY (instrucoes_id) REFERENCES receitas(id)
);

