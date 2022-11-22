import BasePage from "./BasePage";

const BASE_PAGE = new BasePage();


// MAPEAMENTO LOGIN

let campoUserName = '#ap_email'
let btnContinuarLogin = '#continue'
let campoPassword = '#ap_password'
let btnFazerLogin = '#signInSubmit'


// MAPEAMENTO CRIAR CONTA 

let campoNome = '#ap_customer_name'
let campoEmail = '#ap_email'
let campoSenha = '#ap_password'
let campoConfirmarSenha = '#ap_password_check'
let btnContinuarCriacaoConta = '#continue'
let campoMsgErrorEmailCadastrado = '#authportal-main-section > div:nth-child(2) > div > div.a-section.a-spacing-large > div > div > h4'
let campoErroSenhasDiferentes = '#auth-password-mismatch-alert > div > div'
let campoErroSenhaFormatoIncorreto = '#auth-password-invalid-password-alert > div > div'


export default class LoginPage {

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


    // FUNCIONALIDADE CRIAR CONTA 

    preencherCampoNome(text) {
        BASE_PAGE.preencherInput(campoNome, text)
    }

    preencherCampoEmail(text) {
        BASE_PAGE.preencherInput(campoEmail, text)
    }

    preencherCampoSenha(text) {
        BASE_PAGE.preencherInput(campoSenha, text)
    }

    preencherCampoConfimarSenha(text) {
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
}