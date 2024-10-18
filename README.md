
# Testando o Cadastro de Entregador com Cypress e Cucumber

Este repositório contém testes automatizados de interface para o sistema de cadastro de entregadores no site Buger Eats, utilizando **Cypress** e **Cucumber**. O objetivo é garantir que todas as funcionalidades de cadastro estejam funcionando corretamente e que os usuários recebam as mensagens apropriadas em diferentes cenários.

## Funcionalidades

A aplicação permite que os usuários realizem o cadastro de entregadores com as seguintes funcionalidades:

- **Cadastro de Entregador**: Os visitantes podem se cadastrar informando dados pessoais e de entrega.
- **Validação de Campos**: Todos os campos obrigatórios são validados, garantindo que os dados inseridos sejam corretos e completos.

## Cenários de Teste

Os testes abrangem os seguintes cenários:

### Feature: Cadastro de Entregador

**Como** um visitante do Buger Eats  
**Quero** me cadastrar  
**Para que** eu possa fazer entregas  

#### Cenários

- **Verificar os títulos na tela de cadastro**
- **Realizar cadastro com sucesso**
- **Realizar cadastro com sucesso escolhendo "Bicicleta"**
- **Realizar cadastro com sucesso escolhendo "Van"**
- **Tentar realizar cadastro sem enviar foto da CNH**
- **Tentar realizar cadastro sem selecionar um método de entrega**
- **Tentar realizar cadastro com CPF inválido**
- **Exibir mensagem de erro ao inserir número de WhatsApp com formato incorreto**
- **Exibir mensagem de erro ao não preencher o número do endereço**
- **Realizar cadastro sem preencher os campos**
- **Clicar no botão de voltar na tela de registro**
- **Verificar a presença e os atributos da imagem do logo**
- **Tentar realizar cadastro com endereço incompleto**

## Tecnologias Utilizadas

- **Cypress**: Para automação de testes de interface.
- **Cucumber**: Para estruturação dos testes de forma legível e compreensível.
- **JavaScript**: Para a implementação dos testes.

## Passo a Passo para Iniciar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

### Pré-requisitos

Certifique-se de que você tenha o Node.js e o npm (Node Package Manager) instalados em seu sistema. Você pode baixar e instalar o Node.js através do [site oficial](https://nodejs.org/).

### 1. Clonar o Repositório

Clone o repositório para sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Entre no diretório do projeto:
```bash 
cd nome-do-repositorio
```
### 3. Instalar Dependências
```bash
npm install
```

### 3.  Executar o Cypress
```bash
npx cypress open
```
