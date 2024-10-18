
Feature: Cadastrar Usuários para se tornar entregador
    Como um visitante do Buger Eats
    Quero me cadastrar
    Para que eu possa fazer pedidos

    Scenario: Acessar a tela  e validar botão de "Cadastra-se para fazer uma entrega"
        Given que o usuário acessa a página inicial do Buger Eats
        When clica no botão Cadastrar-se que redireciona para a tela de cadastro
        Then é direcionado para a tela de Cadastro


    Scenario: Validar textos e imagens na Home
        Given que o usuário acessa a página inicial do Buger Eats
        And valida o logo
        And valida o título
        And valida se o botão existe
        And valida a imagem 
