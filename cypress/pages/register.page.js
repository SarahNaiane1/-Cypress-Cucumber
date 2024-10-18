import { faker } from '@faker-js/faker';

const nomes = ['João Silva', 'Maria Oliveira', 'José Souza', 'Ana Lima', 'Carlos Pereira'];

const gerarCpfValido = () => {
    const cpfBase = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

    const calcularDigitoVerificador = (base) => {
        let peso = base.length + 1;
        const soma = base.reduce((acc, digito) => acc + digito * peso--, 0);
        return (soma % 11 < 2) ? 0 : 11 - (soma % 11);
    };

    const primeiroDV = calcularDigitoVerificador(cpfBase);
    cpfBase.push(primeiroDV);

    const segundoDV = calcularDigitoVerificador(cpfBase);
    cpfBase.push(segundoDV);

    return cpfBase.join('');
};

const gerarWhatsAppAleatorio = () => {
    const ddd = Math.floor(Math.random() * 90) + 10;
    const numero = Math.floor(10000000 + Math.random() * 90000000);
    return `(${ddd}) ${numero.toString().substring(0, 5)}-${numero.toString().substring(5)}`;
};

const cepMap = {
    '64075-505': { address: 'Rua Antônio Viana', district: 'Beira Rio', cityUf: 'Teresina/PI' },
    '43805-210': { address: 'Travessa Treze de Maio', district: 'Centro', cityUf: 'Candeias/BA' },
    '49061-091': { address: 'Rua C', district: 'Santo Antônio', cityUf: 'Aracaju/SE' },
    '89226-710': { address: 'Rua Tucana', district: 'Jardim Paraíso', cityUf: 'Joinville/SC' },
    '74370-707': { address: 'Rua João Alves Fortes', district: 'Residencial Forteville', cityUf: 'Goiânia/GO' }
};


// Função para escolher um CEP aleatório da lista
const escolherCepAleatorio = () => {
    const ceps = Object.keys(cepMap);
    const indexAleatorio = Math.floor(Math.random() * ceps.length);
    return ceps[indexAleatorio];
};

class RegisterPage {

    fieldsMandatory() {
        const nomeGerado = nomes[Math.floor(Math.random() * nomes.length)];
        const cpfValido = gerarCpfValido();
        const emailAleatorio = faker.internet.email();
        const whatsappAleatorio = gerarWhatsAppAleatorio();

        cy.get('input[name="name"]').type(nomeGerado);
        cy.get('input[name="cpf"]').type(cpfValido);
        cy.get('input[name="email"]').type(emailAleatorio);
        cy.get('input[name="whatsapp"]').type(whatsappAleatorio);
    }

    adress() {
        const cepSelecionado = escolherCepAleatorio();
        const expectedData = cepMap[cepSelecionado];

        cy.get('input[name="postalcode"]').type(cepSelecionado);
        cy.get('input[type="button"]').click();

        cy.get('input[name="address"]').should('have.value', expectedData.address);
        cy.get('input[name="district"]').should('have.value', expectedData.district);
        cy.get('input[name="city-uf"]').should('have.value', expectedData.cityUf);


        cy.get('input[name="address-number"]').type('1345')
        cy.get('input[name="address-details"]').type("Apt 204 Edificio 1")

    }
    deliveryMotocycle() {
        cy.get('div[id="page-deliver"] li').eq(0).click()
        cy.get('li.selected').find('span').should('have.text', 'Moto');
        cy.get('li.selected').find('img').should('have.attr', 'alt', 'Moto');

    }
    cnhFile() {
        cy.get('input[accept^="image"]')
            .selectFile("cypress/fixtures/cnh-digital.jpg", { force: true })
            .should(($input) => {
                expect($input[0].files[0].name).to.equal("cnh-digital.jpg");
            });
    }
    btnRegister() {
        cy.contains('button', 'Cadastre-se para fazer entregas').click()
    }
    sucessMenssage() {
        cy.get('div[aria-modal="true"] h2').should('contain', 'Aí Sim...');

    }
    deliveryBike() {
        cy.get('div[id="page-deliver"] li').eq(1).click()
        cy.get('li.selected').find('span').should('have.text', 'Bicicleta');
        cy.get('li.selected').find('img').should('have.attr', 'alt', 'Bicicleta');
    }


    deliveryCar() {
        cy.get('div[id="page-deliver"] li').eq(2).click()
        cy.get('li.selected').find('span').should('have.text', 'Van/Carro');
        cy.get('li.selected').find('img').should('have.attr', 'alt', 'Van/Carro');

    }
    notSendCnh() {
        cy.get('input[accept^="image"]').should('have.value', '');

    }
    messageNotSendCnh() {
        cy.contains('Adicione uma foto da sua CNH').scrollIntoView()
            .should('be.visible');
    }
    notselectedDelivery() {
        cy.get('li.selected').should('not.exist');
    }
    messageNotSelectedDelivery() {
        cy.contains('Selecione o método de entrega').should('be.visible');

    }
    halfZipCode() {
        cy.get('input[name="postalcode"]').type('06132');
        cy.get('input[value="Buscar CEP"]').should('be.visible').click()

    }
    messageHalfZipCode() {
        cy.contains('Informe um CEP válido', { timeout: 30000 }).should('be.visible');
    }
    invalidSocialNumber() {
        const nomeGerado = nomes[Math.floor(Math.random() * nomes.length)];
        const emailAleatorio = faker.internet.email();
        const whatsappAleatorio = gerarWhatsAppAleatorio();

        cy.get('input[name="name"]').type(nomeGerado);
        cy.get('input[name="cpf"]').type('123456789');
        cy.get('input[name="email"]').type(emailAleatorio);
        cy.get('input[name="whatsapp"]').type(whatsappAleatorio);
        cy.get('input[name="cpf"]').type('123456789');
    }
    messageInvalidSocialNumber() {
        cy.contains('Oops! CPF inválido').should('be.visible')

    }
    invalidWhatsApp() {
        const nomeGerado = nomes[Math.floor(Math.random() * nomes.length)];
        const cpfValido = gerarCpfValido();
        const emailAleatorio = faker.internet.email();

        cy.get('input[name="name"]').type(nomeGerado);
        cy.get('input[name="cpf"]').type(cpfValido);
        cy.get('input[name="email"]').type(emailAleatorio);
        cy.get('input[name="whatsapp"]').type('1191111111111');
    }
    messageInvalidWhatsApp() {
        cy.contains('Oops! Whatsapp com formato incorreto')
    }
    validateEmptyAddressNumber() {
        const cepSelecionado = escolherCepAleatorio();
        const expectedData = cepMap[cepSelecionado];

        cy.get('input[name="postalcode"]').type(cepSelecionado);
        cy.get('input[type="button"]').click();

        cy.get('input[name="address"]').should('have.value', expectedData.address);
        cy.get('input[name="district"]').should('have.value', expectedData.district);
        cy.get('input[name="city-uf"]').should('have.value', expectedData.cityUf);


        cy.get('input[name="address-number"]').should('have.value', '');
        cy.get('input[name="address-details"]').type("Apt 204 Edificio 1")

    }

    messageValidateEmptyAddressNumber() {
        cy.contains('É necessário informar o número do endereço').should('be.visible')

    }
    doNotFillAddress() {
        cy.get('input[name="postalcode"]').should('have.value', '');
        cy.get('input[name="address"]').should('have.value', '');
        cy.get('input[name="district"]').should('have.value', '');
        cy.get('input[name="city-uf"]').should('have.value', '');
        cy.get('input[name="address-number"]').should('have.value', '');
        cy.get('input[name="address-details"]').should('have.value', '');
    }
    doNotFillMandatoryFields() {
        cy.get('input[name="name"]').should('have.value', '');
        cy.get('input[name="cpf"]').should('have.value', '');
        cy.get('input[name="email"]').should('have.value', '');
        cy.get('input[name="whatsapp"]').should('have.value', '');
    }
    doNotSelectDeliveryMethod() {
        cy.get('li.selected').should('not.exist');
    }
    doNotUploadCnh() {
        cy.get('input[accept^="image"]').should('have.value', '');
    }
    validateFieldErrors() {
        cy.contains('É necessário informar o nome').should('be.visible')
        cy.contains('É necessário informar o CPF').should('be.visible')
        cy.contains('É necessário informar o email').should('be.visible')
        cy.contains('É necessário informar o número do endereço').should('be.visible')
        cy.contains('Selecione o método de entrega').should('be.visible')
        cy.contains('Adicione uma foto da sua CNH').should('be.visible')
        cy.contains('É necessário informar o número do endereço').should('be.visible')

    }
    selectMultipleDeliveryMethods() {
        const deliveryMethods = ['Moto', 'Bicicleta', 'Van/Carro'];
        deliveryMethods.forEach((method, index) => {
            cy.get('div[id="page-deliver"] li').eq(index).click();
            cy.get('li.selected').eq(index).find('span').should('have.text', method);
        });
    }
    verifyErrorMessageDelivery() {
        cy.contains("Oops! Selecione apenas um método de entrega").should('be.visible')
    }
    clickBackButton() {
        cy.get('a[href="/"]').contains('Voltar para home').click();

    }
    validateRedirectionToPreviousScreen() {
        cy.url().should('include', '/');
    }
    validateLogoVisibility() {
        cy.get('img[alt="Buger Eats"]')
            .should('be.visible');
    }
    validateLogoSrcAttribute() {
        cy.get('img[alt="Buger Eats"]').should('have.attr', 'src', '/static/media/logo.e7289086.svg');
    }
    validateLogoAltAttribute() {
        cy.get('img[alt="Buger Eats"]').should('have.attr', 'alt', 'Buger Eats');
    }
    validateTitleCadastre() {
        cy.get('div[id="page-deliver"] h1')
            .should('be.visible')
    }
    validateTitleDados() {
        cy.contains('h2', 'Dados').should('be.visible')
    }
    validateTitleEndereço() {
        cy.contains('h2', 'Endereço')
    }
    validateTitleMetodoEntrega() {
        cy.contains('h2', 'Método de entrega')

    }
}
export default new RegisterPage();
