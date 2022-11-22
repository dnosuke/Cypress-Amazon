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
let btnFiltroBusca = '#nav-search-dropdown-card > div > div'
let btnBuscarLupa = '#nav-search-submit-button'


// MAPEAMENTO CARRINHP 

let btnCarrinho = '#nav-cart'
let msgCarrinhoVazio = '#sc-active-cart > div > div > div > h1'
let campoSubtotalForaDoCarrinho = '#ewc-content > div.a-row.ewc-compact-head > div > div > div.a-row.ewc-subtotal > div.a-row.ewc-subtotal-value > span > span'
let btnQuantidadeProdutosForaDoCarrinho = '#sc-item-82e254ae-830d-43bf-b449-34aa464c5cc8 > div.a-section.a-spacing-none.ewc-wider-compact-view-only.ewc-item-actions > div.a-row.ewc-qty-and-action-items > div.a-column.a-span8.a-text-center.a-spacing-mini.a-spacing-top-base.quantity-dropdown > span > span > span.a-declarative > span > span > select'
let btnExcluirItemForaDoCarrinho = '#sc-item-82e254ae-830d-43bf-b449-34aa464c5cc8 > div.a-section.a-spacing-none.ewc-wider-compact-view-only.ewc-item-actions > div.a-row.ewc-qty-and-action-items > div.a-column.a-span4.a-text-center.a-spacing-mini.a-spacing-top-base.a-span-last > div > span > span > span > input'
let btnAdicionarProdutoAoCarrinho = '/html/body/div[1]/div[3]/div[2]/div/div/div/div[2]/div/div[2]/div/ol/li[1]/div/div[3]/form/span/span/input'
let campoMsgNenhumItemSelecionadoCarrinho = '#sc-subtotal-label-activecart'
let campoSubtotalValorProdutosCarrinho = '#sc-subtotal-amount-activecart > span'
let btnExcluirProdutoCarrinho = '#sc-active-C8ca82ced-c696-497f-aaa6-aa5ad810d7dc > div.sc-list-item-content > div > div.a-column.a-span10 > div > div > div.a-fixed-left-grid-col.sc-product-details.a-col-right > div.a-row.sc-action-links > span.a-size-small.sc-action-delete > span > input'
let btnFinalizarPedidoCarrinho = '#sc-buy-box-ptc-button > span > input'
let avisoMsgErroAdicionarItensCarrinho = '#a-popover-content-1'



export default class NavbarPage {

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

  // FUNCIONALIDADE CARRINHO

  clicarBtnCarrinho() {
    BASE_PAGE.click(btnCarrinho)
  }

  clicarBtnQuantidadeProdutosForaDoCarrinho() {
    BASE_PAGE.click(btnQuantidadeProdutosForaDoCarrinho)
  }
  
  clicarBtnExcluirItemForaDoCarrinho() {
    BASE_PAGE.click(btnExcluirItemForaDoCarrinho)
  }

  clicarBtnAdicionarProdutoAoCarrinho() {
    BASE_PAGE.click(btnAdicionarProdutoAoCarrinho)
  }

  clicarBtnExcluirProdutoCarrinho() {
    BASE_PAGE.click(btnExcluirProdutoCarrinho)
  }

  clicarBtnFinalizarPedidoCarrinho() {
    BASE_PAGE.click(btnFinalizarPedidoCarrinho)
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
}
