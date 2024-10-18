
Feature: Cadastrar Usuários para se tornar entregador
    Como um usuário,
    Quero acessar a tela de Cadastro
    Para acessara a tela de  cadastro

    Background:
        Given que o usuário acessa a página inicial do Buger Eats
    Scenario: Acessar a tela  e validar botão de "Cadastra-se para fazer uma entrega"
        When clica no botão Cadastrar-se que redireciona para a tela de cadastro
        Then é direcionado para a tela de Cadastro

    Scenario: Validar textos e imagens na Home
        And valida o logo
        And valida o título
        And valida se o botão existe
        And valida a imagem
