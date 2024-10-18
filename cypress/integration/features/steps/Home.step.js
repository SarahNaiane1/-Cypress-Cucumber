import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/home.page";

Given("que o usuário acessa a página inicial do Buger Eats", () => {
  HomePage.visitPage();
});

When("clica no botão Cadastrar-se que redireciona para a tela de cadastro", () => {
  HomePage.btnRegister();
});

Then('é direcionado para a tela de Cadastro', () => {
  HomePage.RegisterPage();
});

And("valida o logo", () => {
  HomePage.logo()
});

Then('valida o título', () => {
  HomePage.titleHome()
});

And("valida se o botão existe", () => {
  HomePage.text()
});
And("valida a imagem", () => {
  HomePage.image()
});

