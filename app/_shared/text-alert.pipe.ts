import { Pipe, PipeTransform } from "@angular/core";

const alertText = {
    ACCOUNT_OK: {
        fr: "Votre compte a bien été mis à jour.",
        en: "Your account has been successfully updated."
    },
    ADDON_UPDATED: {
        fr: "Votre configuration a été mise à jour.",
        en: "Your configuration has been updated."
    },
    BILLING_ERROR: {
        fr: "Vous devez renseigner votre RIB.",
        en: "You must register your RIB."
    },
    BILLING_OK: {
        fr: "Vos informations de facturation ont bien été mises à jour.",
        en: "Your billing information has been successfully saved."
    },
    DISCONNECT: {
        fr: "Vous avez été déconnecté",
        en: "You've been disconnected"
    },
    INPUTS: {
        fr: "Une erreur est survenue. Merci de vérifier vos données.",
        en: "An error occured. Please check your inputs."
    },
    INVALID_CREDENTIALS: {
        fr: "Informations de connexion erronées",
        en: "Invalid credentials"
    },
    PASSWORD_DIFF: {
        fr: "Vous n'avez pas entré le même mot de passe.",
        en: "You didn't write the same new password."
    },
    PASSWORD_ERROR: {
        fr: "L'ancien mot de passe est erroné.",
        en: "The former password is incorrect."
    },
    PASSWORD_OK: {
        fr: "Votre mot de passe a bien été mis à jour.",
        en: "Your password has been successfully updated."
    },
    TAG_EXIST: {
        fr: "Ce site est déjà enregistré.",
        en: "This website is already registered."
    },
    WS: {
        fr: "Notre service web est momentanément indisponible",
        en: "Our Web Service is currently unavailable."
    },
};

@Pipe({name: 'getAlert'})
export class GetAlertPipe implements PipeTransform {
    transform (msg:string):string {
        try {
            switch (navigator.language) {
                case 'fr':
                    return alertText[msg].fr;
                default:
                    return alertText[msg].en;
            }
        }
        catch (e) {
            //console.error(e);
            return msg;
        }
    }
}
