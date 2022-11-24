import BasePage from "./BasePage";

const BASE_PAGE = new BasePage();


// MAPEAMENTO LOGIN

let campoUserName = '#ap_email'
let btnContinuarLogin = '#continue'
let campoPassword = '#ap_password'
let btnFazerLogin = '#signInSubmit'
let msgErroEmailNaoExisteBaseDados = '#auth-error-message-box > div > div > ul > li > span'
let msgErroSenhaIncorreta = '#auth-error-message-box > div > div > ul > li > span'

// MAPEAMENTO HOME LOGIN

let hoverLogin = '#nav-link-accountList'
let dropdrownLogin = '#nav-flyout-ya-signin > a > span'
let campoExibicaoContaLogada = '#nav-link-accountList-nav-line-1'


// MAPEAMENTO CRIAR CONTA 

let campoNome = '#ap_customer_name'
let campoEmail = '#ap_email'
let campoSenha = '#ap_password'
let campoConfirmarSenha = '#ap_password_check'
let btnContinuarCriacaoConta = '#continue'
let campoMsgErrorEmailCadastrado = '#authportal-main-section > div:nth-child(2) > div > div.a-section.a-spacing-large > div > div > h4'
let campoErroSenhasDiferentes = '#auth-password-mismatch-alert > div > div'
let campoErroSenhaFormatoIncorreto = '#auth-password-invalid-password-alert > div > div'
let btnComeceAqui = '#nav-flyout-ya-newCust > a'


export default class LoginPage {

    hoverDropDownClicarEmLogin() {
        BASE_PAGE.hoverElement(hoverLogin, dropdrownLogin)
        BASE_PAGE.click(dropdrownLogin)
    }

    hoverDropDownClicarEmComeceAqui() {
        BASE_PAGE.hoverElement(hoverLogin, dropdrownLogin)
        BASE_PAGE.click(btnComeceAqui)
    }

    // FUNCIONALIDADE LOGIN

    preencherCampoUserName(text) {
        BASE_PAGE.preencherInput(campoUserName, text)
    }

    preencherCampoPassword(text) {
        BASE_PAGE.preencherInput(campoPassword, text)
    }

    clicarBtnContinuarLogin() {
        BASE_PAGE.click(btnContinuarLogin)
    }

    clicarBtnFazerLogin() {
        BASE_PAGE.click(btnFazerLogin)
    }

    validarContaLogada(text) {
        BASE_PAGE.validarText(campoExibicaoContaLogada, "Olá, "+text)
    }

    validarMsgErrorEmailNaoPossuiConta() {
        BASE_PAGE.validarText(msgErroEmailNaoExisteBaseDados, 'Não encontramos uma conta associada a este endereço de e-mail')
    }

    validarMsgErrorSenhaIncorreta() {
        BASE_PAGE.validarText(msgErroSenhaIncorreta, 'Sua senha está incorreta')
    }


    // FUNCIONALIDADE CRIAR CONTA 

    preencherCampoNome(text) {
        BASE_PAGE.preencherInput(campoNome, text)
    }

    preencherCampoEmail(text) {
        BASE_PAGE.preencherInput(campoEmail, text)
    }

    preencherCampoSenhaCriacao(text) {
        BASE_PAGE.preencherInput(campoSenha, text)
    }

    preencherCampoConfimarSenhaCriacao(text) {
        BASE_PAGE.preencherInput(campoConfirmarSenha, text)
    }

    clicarBtnContinuarCriacaoConta() {
        BASE_PAGE.click(btnContinuarCriacaoConta)
    }

    validarErroEmailCadastrado(text) {
        BASE_PAGE.validarText(campoMsgErrorEmailCadastrado, text)
    }

    validarErroSenhaDiferentes(text) {
        BASE_PAGE.validarText(campoErroSenhasDiferentes, text)
    }

    validarErroSenhaFormatoIncorreto(text) {
        BASE_PAGE.validarText(campoErroSenhaFormatoIncorreto, text)
    }

    clicarBtnComeceAqui() {
        BASE_PAGE.click(btnComeceAqui)
    }
}