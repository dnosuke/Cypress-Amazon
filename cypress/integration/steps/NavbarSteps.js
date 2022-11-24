/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import NavBar from "../pages/NavbarPage";


const BASE_PAGE = new BasePage();
const NAVBAR_PAGE = new NavBar();

context("NavBar", () => {

  it('Validar cadastrar cep valido', () => {

      NAVBAR_PAGE.clicarBtnAdicionarCep();
      NAVBAR_PAGE.preencherCampoEsquerdoCep("30710");
      NAVBAR_PAGE.preencherCampoDireitoCep("230");
      NAVBAR_PAGE.clicarBtnConfirmarCep();

      // ASSERTS
      NAVBAR_PAGE.validarCampoCepCadastrado("30710230")
  })

  it('Validar Erro ao cadastrar cep invalido', () => {

    NAVBAR_PAGE.clicarBtnAdicionarCep();
    NAVBAR_PAGE.preencherCampoEsquerdoCep("AAAAA");
    NAVBAR_PAGE.preencherCampoDireitoCep("ZZZ");
    NAVBAR_PAGE.clicarBtnConfirmarCep();

          // ASSERTS

    NAVBAR_PAGE.validarCampoErroCepInvalido("Insira um CEP válido");
  });

});
