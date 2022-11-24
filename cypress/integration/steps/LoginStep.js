/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";
const LOGIN_PAGE = new LoginPage();

context("Login", () => {

  it('Validar Fazer login com dados valido', () => {
    cy.allure()
      .feature("Login")
      .story("Dados válidos");
    LOGIN_PAGE.hoverDropDownClicarEmLogin()
    LOGIN_PAGE.preencherCampoUserName("batot60946@sunetoa.com")
    LOGIN_PAGE.clicarBtnContinuarLogin()
    LOGIN_PAGE.preencherCampoPassword("TesteCypress")
    LOGIN_PAGE.clicarBtnFazerLogin()

                  // ASSERTS

    LOGIN_PAGE.validarContaLogada("TesteCypress")
  })

  it('Validar Mensagem Error ao Fazer login com Email Invalido', () => {
    cy.allure()
      .feature("Login")
      .story("Dados inválidos");
    LOGIN_PAGE.hoverDropDownClicarEmLogin()
    LOGIN_PAGE.preencherCampoUserName("batotdfasd60946@sunetoa.com")
    LOGIN_PAGE.clicarBtnContinuarLogin()

                  // ASSERTS

    LOGIN_PAGE.validarMsgErrorEmailNaoPossuiConta()
  })

  it('Validar Fazer login com senha incorreta', () => {
    cy.allure()
    .feature("Login")
    .story("Dados inválidos");
    LOGIN_PAGE.hoverDropDownClicarEmLogin()
    LOGIN_PAGE.preencherCampoUserName("batot60946@sunetoa.com")
    LOGIN_PAGE.clicarBtnContinuarLogin()
    LOGIN_PAGE.preencherCampoPassword("Senha_Incorreta")
    LOGIN_PAGE.clicarBtnFazerLogin()

                  // ASSERTS

    LOGIN_PAGE.validarMsgErrorSenhaIncorreta()
  })

  it('Validar mensagem de erro ao tentar criar conta com email ja cadastrado', () => {
    cy.allure()
    .feature("Login")
    .story("Dados inválidos");
    LOGIN_PAGE.hoverDropDownClicarEmComeceAqui()
    LOGIN_PAGE.preencherCampoNome('Teste')
    LOGIN_PAGE.preencherCampoEmail('batot60946@sunetoa.com')
    LOGIN_PAGE.preencherCampoSenhaCriacao('Cypress123')
    LOGIN_PAGE.preencherCampoConfimarSenhaCriacao('Cypress123')
    LOGIN_PAGE.clicarBtnContinuarCriacaoConta()

          // ASSERTS

    LOGIN_PAGE.validarErroEmailCadastrado('O endereço de e-mail já está sendo utilizado')
  })

  it('Validar mensagem de erro ao tentar criar conta com senha menor que 6 caracteres', () => {
    cy.allure()
    .feature("Login")
    .story("Dados inválidos");
    LOGIN_PAGE.hoverDropDownClicarEmComeceAqui()
    LOGIN_PAGE.preencherCampoNome('Teste')
    LOGIN_PAGE.preencherCampoEmail('batotadf60946@sunetoa.com')
    LOGIN_PAGE.preencherCampoSenhaCriacao('teste')
    LOGIN_PAGE.preencherCampoConfimarSenhaCriacao('teste')
    LOGIN_PAGE.clicarBtnContinuarCriacaoConta()

              // ASSERTS

   LOGIN_PAGE.validarErroSenhaFormatoIncorreto('Mínimo de 6 caracteres necessários')
  })

  it('Validar mensagem de error ao tentar criar conta confirmando senha diferente da senha inserida', () =>{
    cy.allure()
    .feature("Login")
    .story("Dados inválidos");
    LOGIN_PAGE.hoverDropDownClicarEmComeceAqui()
    LOGIN_PAGE.preencherCampoNome('Teste')
    LOGIN_PAGE.preencherCampoEmail('batotadf60946@sunetoa.com')
    LOGIN_PAGE.preencherCampoSenhaCriacao('teste')
    LOGIN_PAGE.preencherCampoConfimarSenhaCriacao('teste1')
    LOGIN_PAGE.clicarBtnContinuarCriacaoConta()

              // ASSERTS

    LOGIN_PAGE.validarErroSenhaDiferentes('As senhas não são iguais')
  })
});
