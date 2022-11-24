import BasePage from "./BasePage";

const BASE_PAGE = new BasePage();

// MAPEAMENTO CEP

let btnAdicionarCep = '#nav-global-location-popover-link'
let inputCepEsquerda = '#GLUXZipUpdateInput_0'
let inputCepDireita = '#GLUXZipUpdateInput_1'
let btnConfirmarCep = '#GLUXZipUpdate > span > input'
let msgErroCepInvalido = '#GLUXZipError > div > div > div'
let campoCepCadastrado = '#glow-ingress-line2'

// MAPEAMENTO CAMPO BUSCA

let inputCampoBusca = '#twotabsearchtextbox'
let btnFiltroSamsung = '#p_89\\/SAMSUNG > .a-list-item > .a-link-normal > .a-size-base'
let btnFiltroWindows11 = '#p_n_operating_system_browse-bin\\/23724703011 > .a-list-item > .a-link-normal > .a-size-base'
let btnBuscarLupa = '#nav-search-submit-button'
let campoTextoResultadoBusca = '#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span.a-color-state.a-text-bold'
let msgErroNenhumProdutoEncontrado = '.s-no-outline > :nth-child(1) > :nth-child(1)'
let resultadosBuscaUtilizandoFiltro = '.s-main-slot'


// MAPEAMENTO CARRINHO

let btnCarrinho = '#nav-cart'
let msgCarrinhoVazio = '#sc-active-cart > div > div > div > h1'
let campoSubtotalForaDoCarrinho = '#ewc-content > div.a-row.ewc-compact-head > div > div > div.a-row.ewc-subtotal > div.a-row.ewc-subtotal-value > span > span'
let produtoASerAdicionadoAoCarrinho = '[data-index="1"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image'
let campoMsgNenhumItemSelecionadoCarrinho = '#sc-subtotal-label-activecart'
let campoSubtotalValorProdutosCarrinho = '#sc-subtotal-amount-activecart > span'
let btnExcluirProdutoCarrinho = '#sc-active-C8ca82ced-c696-497f-aaa6-aa5ad810d7dc > div.sc-list-item-content > div > div.a-column.a-span10 > div > div > div.a-fixed-left-grid-col.sc-product-details.a-col-right > div.a-row.sc-action-links > span.a-size-small.sc-action-delete > span > input'
let btnFinalizarPedidoCarrinho = '#sc-buy-box-ptc-button > span > input'
let avisoMsgErroAdicionarItensCarrinho = '#a-popover-content-1'
let msgProdutoAdicionadoAoCarrinho = '#NATC_SMART_WAGON_CONF_MSG_SUCCESS > span'
let btnDropdownQuantidadeProdutos = '[class="a-dropdown-label"]'
let btnAdicionarProdutoAoCarrinho = '#add-to-cart-button'
let campoQuantidadeDeProdutosCarrinho = '#activeCartViewForm > div.a-row.a-spacing-mini.sc-subtotal.sc-subtotal-activecart.sc-java-remote-feature'



export default class NavbarPage {

  validarUrlLogin() {
    BASE_PAGE.validarRedirecionarPagina("https://www.amazon.com.br/ap/signin?")
  }

  // FUNCIONALIDADE CEP

  clicarBtnAdicionarCep() {
    BASE_PAGE.click(btnAdicionarCep)
  }

  clicarBtnConfirmarCep() {
    BASE_PAGE.click(btnConfirmarCep)
  }

  preencherCampoEsquerdoCep(text) {
    BASE_PAGE.preencherInput(inputCepEsquerda, text)
  }

  preencherCampoDireitoCep(text) {
    BASE_PAGE.preencherInput(inputCepDireita, text)
  }

  validarCampoErroCepInvalido(text) {
    BASE_PAGE.validarText(msgErroCepInvalido, text)
  }

  validarCampoCepCadastrado(text) {
    BASE_PAGE.validarText(campoCepCadastrado, text)
  }

  // FUNCIONALIDADE CAMPO DE BUSCA

  preencherCampoDeBusca(text) {
    BASE_PAGE.preencherInput(inputCampoBusca, text)
  }

  clicarBtnBuscarLupa() {
    BASE_PAGE.click(btnBuscarLupa)
  }

  clicarBtnFiltroCampoBusca() {
    BASE_PAGE.click(btnFiltroBusca)
  }

  clicarCheckBoxSamsung() {
    BASE_PAGE.click(btnFiltroSamsung)
  }

  clicarCheckBoxWindows11() {
    BASE_PAGE.click(btnFiltroWindows11)
  }

  validarItemBuscado(text) {
    BASE_PAGE.validarText(campoTextoResultadoBusca, text)
  }

  validarMsgErroProdutoNaoEncontrado() {
    BASE_PAGE.validarText(msgErroNenhumProdutoEncontrado, "Nenhum resultado para ")
  }

  validarResultadosBuscaComFiltros(text) {
    BASE_PAGE.invalidarText(resultadosBuscaUtilizandoFiltro, text)
  }

  // FUNCIONALIDADE CARRINHO

  clicarBtnCarrinho() {
    BASE_PAGE.click(btnCarrinho)
  }

  clicarBtnAdicionarProdutoAoCarrinho() {
    BASE_PAGE.click(btnAdicionarProdutoAoCarrinho)
  }

  clicarNoProduto() {
    BASE_PAGE.click(produtoASerAdicionadoAoCarrinho)
  }

  clicarBtnExcluirProdutoCarrinho() {
    BASE_PAGE.click(btnExcluirProdutoCarrinho)
  }

  clicarBtnFinalizarPedidoCarrinho() {
    BASE_PAGE.click(btnFinalizarPedidoCarrinho)
  }

  clicarDropDownQuantidadeProdutos() {
    BASE_PAGE.click(btnDropdownQuantidadeProdutos)
  }

  selecionarQuantidadeDeProdutosDesejado(value) {
    BASE_PAGE.click(`#quantity_${value}`)
  }

  validarQuantidadeDeProdutosCarrinho(value) {
    BASE_PAGE.validarText(campoQuantidadeDeProdutosCarrinho, `${value}`)
  }

  validarMsgCarrinhoVazio(text) {
    BASE_PAGE.validarText(msgCarrinhoVazio, text)
  }

  validarMsgSubTotalForaDoCarrinho(text) {
    BASE_PAGE.validarText(campoSubtotalForaDoCarrinho, text)
  }

  validarMsgNenhumItemCarrinho(text) {
    BASE_PAGE.validarText(campoMsgNenhumItemSelecionadoCarrinho, text)
  }

  validarSubTotalValorProdutosCarrinho(text) {
    BASE_PAGE.validarText(campoSubtotalValorProdutosCarrinho, text)
  }

  validarMsgAdicionarItemAoCarrinho(text) {
    BASE_PAGE.validarText(avisoMsgErroAdicionarItensCarrinho, text)
  }

  validarProdutoAdicionadoAoCarrinho(){
    BASE_PAGE.validarText(msgProdutoAdicionadoAoCarrinho, 'Adicionado ao carrinho')
  }
}
