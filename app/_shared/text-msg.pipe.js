"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var contentText = {
    ACCOUNT: {
        TAB_ACCOUNT: {
            fr: "Détails du compte",
            en: "Account Details"
        },
        TAB_PSW: {
            fr: "Changer son mot de passe",
            en: "Password Settings"
        },
        TAB_BILLING: {
            fr: "Coordonnées Bancaires",
            en: "Bank Details"
        }
    },
    ACTION: {
        ADD: { fr: "Ajouter", en: "Add" },
        PREVIOUS: { fr: "Précédent", en: "Previous" },
        AGREE: { fr: "OUI", en: "YES" },
        DISAGREE: { fr: "NON", en: "NO" }
    },
    ARRAY: {
        DATA: {
            fr: "Données",
            en: "Datas"
        },
        DATE: {
            fr: "Date",
            en: "Date"
        },
        MONTH: {
            fr: "Mois",
            en: "Month"
        },
        DOMAIN: {
            fr: "URL",
            en: "URL"
        },
        PERCENT: {
            fr: "Pourcentage",
            en: "Percent"
        },
        TAGS: {
            fr: "Vos tags",
            en: "Your tags"
        },
        PARAMS: {
            fr: "Paramètres",
            en: "Parameters"
        },
        DOWNLOAD: {
            fr: "Télécharger les scripts de l'extension",
            en: "Download the exension scripts"
        },
        INCOME_MD5: {
            fr: "Revenu MD5",
            en: "Incomes MD5"
        },
        INCOME_BD: {
            fr: "Revenus Data",
            en: "Datas Incomes"
        },
        INCOME_TOTAL: {
            fr: "Total",
            en: "Total"
        }
    },
    FORM_FIELD: {
        LASTNAME: {
            fr: "Nom",
            en: "Last Name"
        },
        FIRSTNAME: {
            fr: "Prénom",
            en: "First Name"
        },
        EMAIL: {
            fr: "Email",
            en: "Email"
        },
        PHONE: {
            fr: "Téléphone",
            en: "Phone"
        },
        COUNTRY: {
            fr: "Pays",
            en: "Country"
        },
        COMPANY: {
            fr: "Société",
            en: "Company"
        },
        PSW: {
            fr: "Mot de passe",
            en: "Password"
        },
        RE_PSW: {
            fr: "Confirmer le mot de passe",
            en: "Confirm password"
        },
        CHG_PSW: {
            fr: "Changer de mot de passe",
            en: "Change password"
        },
        OLD_PSW: {
            fr: "Ancien mot de passe",
            en: "Old password"
        },
        NEW_PSW: {
            fr: "Nouveau mot de passe",
            en: "New password"
        },
        REPT_PSW: {
            fr: "Répéter le nouveau mot de passe",
            en: "Repeat new password"
        },
        DOMICIL: {
            fr: "Domiciliation",
            en: "Domiciliation"
        },
        ADDRESS: {
            fr: "Adresse (banque)",
            en: "Address (bank)"
        },
        ENABLE: {
            fr: "Activer",
            en: "Enable"
        },
        DISABLE: {
            fr: "Désactiver",
            en: "Disable"
        },
        CURRENT_SITE: {
            fr: "Choisir un website",
            en: "Select a website"
        },
        BTN_SAVE: {
            fr: "Enregistrer",
            en: "Save"
        },
        BTN_SAVING: {
            fr: "Enregistrement...",
            en: "Saving..."
        },
        BTN_LOADING: {
            fr: "Chargement...",
            en: "Loading..."
        }
    },
    FORM_MSG: {
        ADD_TAG: {
            fr: "Ajoutez un site",
            en: "Add a website"
        },
        IVLD_MAIL: {
            fr: "Ce n'est pas une adresse mail valide.",
            en: "This is not a valid email."
        },
        IVLD_PHONE: {
            fr: "Ce n'est pas un numéro valide.",
            en: "This is not a valid phone number.."
        },
        PSW_SHRT: {
            fr: "Ce mot de passe est trop court.",
            en: "This password is too short."
        },
        PSW_LONG: {
            fr: "Ce mot de passe est trop long.",
            en: "This password is too long."
        }
    },
    MSG: {
        WELCOME: {
            fr: "Bienvenue dans votre espace Sirdata",
            en: "Welcome to your Sirdata Corner"
        },
        IS_STATS: {
            fr: "Vos statistiques récentes",
            en: "Your statistics for the last days"
        },
        NO_STATS: {
            fr: "Vous n'avez pas de statistiques sur les derniers jours.",
            en: "You have no statistics for the last days."
        },
        NO_DATA: {
            fr: "Il n'y a aucune donnée pour cette période.",
            en: "There is no data for this period"
        },
        NO_INCOME: {
            fr: "Vous n'avez aucun revenu.",
            en: "You have no income."
        },
        NO_TAG: {
            fr: "Vous n'avez pas encore enregistré de site.",
            en: "You have not register a website yet."
        },
        INCOME: {
            fr: "Ce tableau fait office d'AAF. Merci d'envoyer votre facture à l'adresse suivante : billing@sirdata.com et de vérifier que vos coordonnées bancaires sont correctement renseignées.",
            en: "This table shall act as AAF. Thanks to send your billing to : billing@sirdata.com and check if your banks details being properly informed."
        }
    },
    MENU: {
        ACCOUNT: {
            fr: "Mon Compte",
            en: "My Account"
        },
        DASHBOARD: {
            fr: "Tableau de bord",
            en: "Dashboard"
        },
        TAGS: {
            fr: "Gestion de tag",
            en: "Tag Manager"
        },
        ADDON: {
            fr: "Fonctionnalités",
            en: "Functionalities"
        },
    },
    LOGIN: {
        TITLE: {
            fr: "Connectez-vous à votre compte",
            en: "Login to your account"
        },
        LOGIN_BTN: {
            fr: "Connexion",
            en: "Login"
        },
        SIGNUP_TITLE: {
            fr: "Créer un compte",
            en: "Create an account"
        },
        SIGNUP_BTN: {
            fr: "Créer",
            en: "Create"
        },
        FORGOT_PSW: {
            fr: "Mot de passe oublié ?",
            en: "Forgot your password ?"
        },
        RESET_PSW: {
            fr: "Réinitialisez votre mot de passe",
            en: "Reset your password"
        },
        YOUR_EMAIL: {
            fr: "Votre email",
            en: "Your email"
        },
        RESET_BTN: {
            fr: "Envoyez-moi un lien de réinitialisation",
            en: "Send me a reset link."
        },
        NEW_PSW: {
            fr: "Entrez un nouveau mot de passe",
            en: "Enter a new password"
        },
        RE_NEW_PSW: {
            fr: "Confirmez votre nouveau mot de passe",
            en: "Re-type your new password"
        },
        BACK_LOGIN: {
            fr: "Retourner sur l'écran de connexion",
            en: "Back to Login"
        }
    },
    TAGS: {
        AGREE: {
            fr: "Acceptez-vous les ",
            en: "Do you agree with the "
        },
        AGREE_TERMS: {
            fr: "J'accepte les ",
            en: "I agree to the "
        },
        TERMS: {
            fr: "conditions d'utilisations",
            en: "terms of use"
        },
        GENERIC: {
            fr: "Ceci est notre tag générique, merci de prendre contact avec votre Account Manager pour tout complément d'information.",
            en: "This is your generic tag. Thanks to get in touch with your Account Manager for further information."
        }
    },
    ADDON: {
        HEADER: {
            fr: "Gé(né)rer les fonctionnalités de l'addon Sirdata",
            en: "Manage the functionalities of the Sirdata Addon"
        },
    }
};
var GetTextMsgPipe = (function () {
    function GetTextMsgPipe() {
    }
    GetTextMsgPipe.prototype.transform = function (value) {
        var _a = value.split('.'), context = _a[0], codeTxt = _a[1];
        try {
            switch (navigator.language) {
                case 'fr':
                    return contentText[context][codeTxt].fr;
                default:
                    return contentText[context][codeTxt].en;
            }
        }
        catch (e) {
            //console.error(e);
            return value;
        }
    };
    GetTextMsgPipe = __decorate([
        core_1.Pipe({ name: 'getText' }), 
        __metadata('design:paramtypes', [])
    ], GetTextMsgPipe);
    return GetTextMsgPipe;
}());
exports.GetTextMsgPipe = GetTextMsgPipe;
