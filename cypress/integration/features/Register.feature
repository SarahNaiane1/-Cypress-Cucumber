Feature: Cadastro de Entregador
  Como um visitante do Buger Eats
  Quero me cadastrar
  Para que eu possa fazer entregas


  Scenario: Verificar os títulos na tela de cadastro
    Given que o usuário acessa a tela de cadastro
    Then o título "Cadastre-se para fazer entregas" deve estar visível
    And o título "Dados" deve estar visível
    And o título "Endereço" deve estar visível
    And o título "Método" deve estar visível

  Scenario: Realizar cadastro com sucesso
    Given que o usuário acessa a tela de cadastro
    When o usuário preenche os campos obrigatórios
    And preenche os campos de endereço
    And escolhe o método de entrega como "Moto"
    And envia uma foto da sua CNH
    When clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver a mensagem de sucesso

  Scenario: Realizar cadastro com sucesso escolhendo "Bicicleta"
    Given que o usuário acessa a tela de cadastro
    When o usuário preenche os campos obrigatórios
    And preenche os campos de endereço
    And escolhe o método de entrega como "Bicicleta"
    And envia uma foto da sua CNH
    When clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver a mensagem de sucesso

  Scenario: Realizar cadastro com sucesso escolhendo "Van"
    Given que o usuário acessa a tela de cadastro
    When o usuário preenche os campos obrigatórios
    And preenche os campos de endereço
    And escolhe o método de entrega como "Van"
    And envia uma foto da sua CNH
    When clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver a mensagem de sucesso

  Scenario: Tentar realizar cadastro sem enviar foto da CNH
    Given que o usuário acessa a tela de cadastro
    When o usuário preenche os campos obrigatórios
    And preenche os campos de endereço
    And escolhe o método de entrega como "Moto"
    And não envia uma foto da sua CNH
    When clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver uma mensagem de erro informando que a foto da CNH é obrigatória

  Scenario: Tentar realizar cadastro sem selecionar um método de entrega
    Given que o usuário acessa a tela de cadastro
    When o usuário preenche os campos obrigatórios
    And preenche os campos de endereço
    And não escolhe um método de entrega
    And envia uma foto da sua CNH
    When clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver uma mensagem de erro informando que o método de entrega é obrigatório


  Scenario: Tentar realizar cadastro com CPF inválido
    Given que o usuário acessa a tela de cadastro
    When o usuário preenche os campos obrigatórios com um CPF inválido
    And preenche os campos de endereço
    And escolhe o método de entrega como "Moto"
    And envia uma foto da sua CNH
    When clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver uma mensagem de erro informando que o CPF é inválido

  Scenario: Exibir mensagem de erro ao inserir número de WhatsApp com formato incorreto
    Given que o usuário acessa a tela de cadastro
    When o usuário preenche os campos obrigatórios com WhatsApp no formato "1191111111111"
    And clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver a mensagem "Oops! Whatsapp com formato incorreto"

  Scenario: Exibir mensagem de erro ao não preencher o número do endereço
    Given que o usuário acessa a tela de cadastro
    And não preenche o campo "número do endereço"
    When clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver a mensagem "O campo número do endereço é obrigatório"

  Scenario: Realizar cadastro sem preencher os campos
    Given que o usuário acessa a tela de cadastro
    When o usuário não preenche os campos obrigatórios
    And não preenche os campos de endereço
    And não escolhe um método de entrega
    And não envia uma foto da sua CNH
    When clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver mensagens nos campos obrigatório


  Scenario: Escolhe os métodos de entrega "Moto", "Bicicleta" e "Van/Carro"
    Given que o usuário acessa a tela de cadastro
    When o usuário preenche os campos obrigatórios
    And preenche os campos de endereço
    And envia uma foto da sua CNH
    And escolhe as tres opções de entrega
    When clica no botão de "Cadastre-se para fazer entregas"
    Then o usuário deve ver a mensagem "Oops! Selecione apenas um método de entrega"

  Scenario: Clicar no botão de voltar na tela de registro
    Given que o usuário acessa a tela de cadastro
    When o usuário clica no botão "voltar"
    Then o usuário deve ser redirecionado para a tela anterior


  Scenario: Verificar a presença e os atributos da imagem do logo
    Given que o usuário acessa a tela de cadastro
    Then o logo deve estar visível
    And o logo deve ter o atributo "src"
    And o logo deve ter o atributo "alt" igual a "Buger Eats"




  Scenario: Tentar realizar cadastro com endereço incompleto
    Given que o usuário acessa a tela de cadastro
    When o usuário preenche os campos obrigatórios
    And preenche parcialmente o CEP
    And envia uma foto da sua CNH
    And não escolhe um método de entrega
    When clica no botão de "Cadastre-se para fazer entregas"
    Then usuário deve ver uma mensagem de erro informando que o cep deve ser válido
