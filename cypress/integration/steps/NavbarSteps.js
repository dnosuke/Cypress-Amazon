/// <reference types="cypress" />

import NavBar from "../pages/NavbarPage";

const NAVBAR_PAGE = new NavBar();

context("NavBar", () => {

  //     ********FUNCIONALIDADE CEP**********

  it('Validar cadastrar cep valido', () => {
    cy.allure()
    .feature("Localizacao")
    .story("Dados válidos");
      NAVBAR_PAGE.clicarBtnAdicionarCep();
      NAVBAR_PAGE.preencherCampoEsquerdoCep("30710");
      NAVBAR_PAGE.preencherCampoDireitoCep("230");
      NAVBAR_PAGE.clicarBtnConfirmarCep();

      // ASSERTS
      NAVBAR_PAGE.validarCampoCepCadastrado("30710230")
  })

  it('Validar Erro ao cadastrar cep invalido', () => {
    cy.allure()
    .feature("Localizacao")
    .story("Dados inválidos");
    NAVBAR_PAGE.clicarBtnAdicionarCep();
    NAVBAR_PAGE.preencherCampoEsquerdoCep("AAAAA");
    NAVBAR_PAGE.preencherCampoDireitoCep("ZZZ");
    NAVBAR_PAGE.clicarBtnConfirmarCep();

          // ASSERTS

    NAVBAR_PAGE.validarCampoErroCepInvalido("Insira um CEP válido");
  });

  it('Validar erro ao confimar cep com campos vazios', () => {
    cy.allure()
    .feature("Localizacao")
    .story("Dados inválidos");
    NAVBAR_PAGE.clicarBtnAdicionarCep();
    NAVBAR_PAGE.clicarBtnConfirmarCep();

              // ASSERTS

    NAVBAR_PAGE.validarCampoErroCepInvalido("Insira um CEP válido");
  })

  it('Validar Erro ao cadastrar apenas o campo esquedo do cep', () => {
    cy.allure()
    .feature("Localizacao")
    .story("Dados inválidos");
    NAVBAR_PAGE.clicarBtnAdicionarCep();
    NAVBAR_PAGE.preencherCampoEsquerdoCep("AAAAA");
    NAVBAR_PAGE.clicarBtnConfirmarCep();

          // ASSERTS

    NAVBAR_PAGE.validarCampoErroCepInvalido("Insira um CEP válido");
  });

  it('Validar Erro ao cadastrar apenas o campo direito do cep', () => {
    cy.allure()
    .feature("Localizacao")
    .story("Dados inválidos");
    NAVBAR_PAGE.clicarBtnAdicionarCep();
    NAVBAR_PAGE.preencherCampoDireitoCep("ZZZ");
    NAVBAR_PAGE.clicarBtnConfirmarCep();

          // ASSERTS

    NAVBAR_PAGE.validarCampoErroCepInvalido("Insira um CEP válido");
  });
  


    //    ********FUNCIONALIDADE BUSCA**********

    it('Validar Buscar item Existente', () => {
      cy.allure()
    .feature("Busca")
    .story("Dados válidos");
      NAVBAR_PAGE.preencherCampoDeBusca('bombom raffaello')
      NAVBAR_PAGE.clicarBtnBuscarLupa()

          // ASSERTS

      NAVBAR_PAGE.validarItemBuscado('bombom raffaello')
    })
 
    it('Validar Mensagem erro quando busco produto invalido', () => {
      cy.allure()
    .feature("Busca")
    .story("Dados inválidos");
      NAVBAR_PAGE.preencherCampoDeBusca('🤣🤣🤣🤣')
      NAVBAR_PAGE.clicarBtnBuscarLupa()

          // ASSERTS

      NAVBAR_PAGE.validarMsgErroProdutoNaoEncontrado()
    })

    it('Validar Busca usando filtros', () => {
      cy.allure()
      .feature("Busca")
      .story("Dados válidos");
        NAVBAR_PAGE.preencherCampoDeBusca('notebook')
        NAVBAR_PAGE.clicarBtnBuscarLupa()
        NAVBAR_PAGE.clicarCheckBoxSamsung()
        NAVBAR_PAGE.clicarCheckBoxWindows11()

            // ASSERTS

        NAVBAR_PAGE.validarResultadosBuscaComFiltros('Windows 10')
    })


    
        // ********FUNCIONALIDADE CARRINHO*********

    it('Validar adicionar produtos ao carrinho', () => {
      cy.allure()
    .feature("Carrinho")
    .story("Dados válidos");
      NAVBAR_PAGE.preencherCampoDeBusca('suco laranja integral')
      NAVBAR_PAGE.clicarBtnBuscarLupa()
      NAVBAR_PAGE.clicarNoProduto()
      NAVBAR_PAGE.clicarBtnAdicionarProdutoAoCarrinho()

          
            // ASSERTS

      NAVBAR_PAGE.validarProdutoAdicionadoAoCarrinho()
    })


    it('Validar aumentar a quantidade desejada do produto adicionado ao carrinho', () => {
      cy.allure()
    .feature("Carrinho")
    .story("Dados válidos");
      NAVBAR_PAGE.preencherCampoDeBusca('suco laranja integral')
      NAVBAR_PAGE.clicarBtnBuscarLupa()
      NAVBAR_PAGE.clicarNoProduto()
      NAVBAR_PAGE.clicarBtnAdicionarProdutoAoCarrinho()
      NAVBAR_PAGE.clicarBtnCarrinho()
      NAVBAR_PAGE.clicarDropDownQuantidadeProdutos()
      NAVBAR_PAGE.selecionarQuantidadeDeProdutosDesejado("4")

      //   ASSERTS

      NAVBAR_PAGE.validarQuantidadeDeProdutosCarrinho("4")
    })

    it('Validar redirecionamento para pagina de login ao finalizar pedido sem estar logado', () => {
      cy.allure()
      .feature("Carrinho")
      .story("Dados válidos");
        NAVBAR_PAGE.preencherCampoDeBusca('suco laranja integral')
        NAVBAR_PAGE.clicarBtnBuscarLupa()
        NAVBAR_PAGE.clicarNoProduto()
        NAVBAR_PAGE.clicarBtnAdicionarProdutoAoCarrinho()
        NAVBAR_PAGE.clicarBtnFinalizarPedidoCarrinho()

        //  ASSERTS

        NAVBAR_PAGE.validarUrlLogin()
    })
});
