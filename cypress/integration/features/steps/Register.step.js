import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/home.page";
import RegisterPage from "../../../pages/register.page";

Given('que o usuário acessa a tela de cadastro', () => {
    HomePage.visitPage();
    HomePage.btnRegister();
    HomePage.RegisterPage();
});

When('o usuário preenche os campos obrigatórios', () => {
    RegisterPage.fieldsMandatory()
});


And('preenche os campos de endereço', () => {
    RegisterPage.adress()
});

And('escolhe o método de entrega como "Moto"', () => {
    RegisterPage.deliveryMotocycle()
});

And('envia uma foto da sua CNH', () => {
    RegisterPage.cnhFile()
});

When('clica no botão de "Cadastre-se para fazer entregas"', () => {
    RegisterPage.btnRegister()
});

Then('o usuário deve ver a mensagem de sucesso', () => {
    RegisterPage.sucessMenssage()

});
And('escolhe o método de entrega como "Bicicleta"', () => {
    RegisterPage.deliveryBike()
});

And('escolhe o método de entrega como "Van"', () => {
    RegisterPage.deliveryCar()
});

And('não envia uma foto da sua CNH', () => {
    RegisterPage.notSendCnh()
});
Then('o usuário deve ver uma mensagem de erro informando que a foto da CNH é obrigatória', () => {
    RegisterPage.messageNotSendCnh()
});

And('não escolhe um método de entrega', () => {
    RegisterPage.notselectedDelivery()
    
});

Then('o usuário deve ver uma mensagem de erro informando que o método de entrega é obrigatório', () => {
    RegisterPage.messageNotSelectedDelivery()
});


And('preenche parcialmente o CEP', () => {
    RegisterPage.halfZipCode()
    
    
});

Then('usuário deve ver uma mensagem de erro informando que o cep deve ser válido', () => {
    //RegisterPage.messageHalfZipCode()
});
When('o usuário preenche os campos obrigatórios com um CPF inválido', () => {
    RegisterPage.invalidSocialNumber()
});

Then('o usuário deve ver uma mensagem de erro informando que o CPF é inválido', () => {
    RegisterPage.messageInvalidSocialNumber()
});

When('o usuário preenche os campos obrigatórios com WhatsApp no formato "1191111111111"', () => {
    RegisterPage.invalidWhatsApp()
});

Then('o usuário deve ver a mensagem "Oops! Whatsapp com formato incorreto"', () => {
    RegisterPage.messageInvalidWhatsApp()
});
And('não preenche o campo "número do endereço"', () => {
    RegisterPage.fieldsMandatory()
    RegisterPage.validateEmptyAddressNumber();
    RegisterPage.deliveryCar()
    RegisterPage.cnhFile();
});
When('o usuário não preenche os campos obrigatórios', () => {
    RegisterPage.doNotFillMandatoryFields()
});
And('não preenche os campos de endereço', () => {
    RegisterPage.doNotFillAddress()
});
Then('o usuário deve ver a mensagem "O campo número do endereço é obrigatório"', () => {
    RegisterPage.messageValidateEmptyAddressNumber()
});
And('não escolhe um método de entrega', () => {
    RegisterPage.doNotSelectDeliveryMethod()

});
And('não envia uma foto da sua CNH', () => {
    RegisterPage.doNotUploadCnh()
});

Then('o usuário deve ver mensagens nos campos obrigatório', () => {
    RegisterPage.validateFieldErrors()
});
And('escolhe as tres opções de entrega',()=>{
    RegisterPage.selectMultipleDeliveryMethods()
});
Then('o usuário deve ver a mensagem "Oops! Selecione apenas um método de entrega"', () => {
    RegisterPage.verifyErrorMessageDelivery()
});
When('o usuário clica no botão "voltar"', () => {
    RegisterPage.clickBackButton()
});

When('o usuário deve ser redirecionado para a tela anterior', () => {
    RegisterPage.validateRedirectionToPreviousScreen()
});

Then('o logo deve estar visível', () => {
    RegisterPage.validateLogoVisibility()
});

And('o logo deve ter o atributo "src"', () => {
 RegisterPage.validateLogoSrcAttribute()   
});
And('o logo deve ter o atributo "alt" igual a "Buger Eats"', () => {
    RegisterPage.validateLogoAltAttribute()
});


Then('o título "Cadastre-se para fazer entregas" deve estar visível', () => {
    RegisterPage.validateTitleCadastre()
});
And('o título "Dados" deve estar visível', () => {
    RegisterPage.validateTitleDados()
});
And('o título "Endereço" deve estar visível', () => {
    RegisterPage.validateTitleEndereço()
});
And('o título "Método" deve estar visível', () => {
    RegisterPage.validateTitleMetodoEntrega()

});

