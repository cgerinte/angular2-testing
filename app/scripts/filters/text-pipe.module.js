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
    'GENERIC': {
        fr: "Ceci est notre tag générique, merci de prendre contact avec votre Account Manager pour tout complément d'information.",
        en: "This is your generic tag. Thanks to get in touch with your Account Manager for further information."
    },
    'DASHBOARD': {
        'TITLE': {
            fr: "Bienvenue dans votre espace Sirdata",
            en: "Welcome to your Sirdata Corner"
        },
        'NO_DATA': {
            fr: "Vous n'avez pas de statistiques sur les 30 derniers jours.",
            en: "You have no statistics for the last 30 days."
        },
        'IS_DATA': {
            fr: "Vos statistiques sur les 30 derniers jours",
            en: "Your statistics for the last 30 days"
        },
        'VIEWS': {
            fr: "Visiteurs Uniques",
            en: "Uniques Visitors"
        },
        'CATS': {
            fr: "Catégories",
            en: "Categories"
        },
        'HASHMAIL': {
            fr: "Hash Mail",
            en: "Hash Mail"
        },
        'INCOMES': {
            fr: "Revenus Total",
            en: "Total Incomes"
        }
    },
    'ACCOUNT': {
        'TITLE': {
            fr: "Mon Compte",
            en: "My Account"
        },
        'TAB_ACCOUNT': {
            fr: "Détails du compte",
            en: "Account Details"
        },
        'TAB_PSW': {
            fr: "Changer son mot de passe",
            en: "Password Settings"
        },
        'TAB_BILLING': {
            fr: "Coordonnées Bancaires",
            en: "Bank Details"
        },
        'FIELD_LASTNAME': {
            fr: "Nom",
            en: "Last Name"
        },
        'FIELD_FIRSTNAME': {
            fr: "Prénom",
            en: "First Name"
        },
        'FIELD_EMAIL': {
            fr: "Email",
            en: "Email"
        },
        'MSG_IVLD_MAIL': {
            fr: "Ce n'est pas une adresse mail valide.",
            en: "This is not a valid email."
        },
        'FIELD_PHONE': {
            fr: "Téléphone",
            en: "Phone"
        },
        'MSG_IVLD_PHONE': {
            fr: "Ce n'est pas un numéro valide.",
            en: "This is not a valid phone number.."
        },
        'FIELD_COUNTRY': {
            fr: "Pays",
            en: "Country"
        },
        'FIELD_COMPANY': {
            fr: "Société",
            en: "Company"
        },
        'BTN_SAVE': {
            fr: "Enregistrer",
            en: "Save"
        },
        'BTN_SAVING': {
            fr: "Enregistrement...",
            en: "Saving..."
        },
        'BTN_LOADING': {
            fr: "Chargement...",
            en: "Loading..."
        },
        'FIELD_CHG_PSW': {
            fr: "Changer de mot de passe",
            en: "Change password"
        },
        'FIELD_OLD_PSW': {
            fr: "Ancien mot de passe",
            en: "Old password"
        },
        'MSG_NO_CHGE': {
            fr: "Laisser vide si aucun changement.",
            en: "Leave empty for no change"
        },
        'FIELD_NEW_PSW': {
            fr: "Nouveau mot de passe",
            en: "New password"
        },
        'FIELD_REPT_PSW': {
            fr: "Répéter le nouveau mot de passe",
            en: "Repeat new password"
        },
        'MSG_PSW_SHRT': {
            fr: "Ce mot de passe est trop court.",
            en: "This password is too short."
        },
        'MSG_CGU_NONE': {
            fr: "Vous devez accepter les conditions générales de vente.",
            en: "You should accept the general terms of sale."
        },
        'CONSULT_CGU': {
            fr: "Consulter les conditions générales de vente.",
            en: "Consult the general terms of sale."
        },
        'MSG_PSW_LONG': {
            fr: "Ce mot de passe est trop long.",
            en: "This password is too long."
        },
        'FIELD_DOMICIL': {
            fr: "Domiciliation",
            en: "Domiciliation"
        },
        'FIELD_ADDRESS': {
            fr: "Adresse (banque)",
            en: "Address (bank)"
        }
    },
    'STATS': {
        'VIEWS_TITLE': {
            fr: "Statistiques sur le nombre de vues & MD5",
            en: "Statistics on the number of views & MD5"
        },
        'VIEWS_MONTHLY': {
            fr: "Statistiques mensuelles sur le nombre de vues & MD5",
            en: "Monthly statistics on the number of views & MD5"
        },
        'CATS_TITLE': {
            fr: "Statistiques sur les catégories",
            en: "Statistics on categories"
        },
        'INCOMES_TITLE': {
            fr: "Revenus des 6 derniers mois",
            en: "Incomes for the last 6 months"
        },
        'FILTER_TITLE': {
            fr: "Sélectionnez une période",
            en: "Select a period"
        },
        'FILTER_NONE': {
            fr: "Par période prédéfinie",
            en: "By predefined period"
        },
        'FILTER_WEEK': {
            fr: "Cette semaine",
            en: "This week"
        },
        'FILTER_MONTH': {
            fr: "Ces 30 derniers jours",
            en: "The last 30 days"
        },
        'FILTER_TRIM': {
            fr: "Ces 3 derniers mois",
            en: "The last 3 months"
        },
        'FILTER_YEAR': {
            fr: "Ces 12 derniers mois",
            en: "The last 12 months"
        },
        'FILTER_FROM': {
            fr: "Du",
            en: "From"
        },
        'FILTER_TO': {
            fr: "au",
            en: "to"
        },
        'FILTER_SITE': {
            fr: "Sites par id",
            en: "Sites by id"
        },
        'ARRAY_TITLE': {
            fr: "Données",
            en: "Datas"
        },
        'ARRAY_DATE': {
            fr: "Date",
            en: "Date"
        },
        'ARRAY_UNIQ_VISIT': {
            fr: "Visiteurs Uniques",
            en: "Unique Visitors"
        },
        'ARRAY_CATS': {
            fr: "Catégorie",
            en: "Category"
        },
        'ARRAY_HASH_MAIL': {
            fr: "Hash Mail",
            en: "Hash Mail"
        },
        'NO_HASH_MAIL': {
            fr: "Il n'y a aucune donnée pour cette période.",
            en: "There is no data for this period"
        },
        'ALL_SITES': {
            fr: "Tous les sites web",
            en: "All web site"
        },
        'DOMAIN': {
            fr: "URL",
            en: "URL"
        },
        'PERCENT': {
            fr: "Pourcentage",
            en: "Percent"
        },
        'UNIQ_VISITORS': {
            fr: "Visiteurs Uniques",
            en: "Uniques visitors"
        },
        'NEWS_UNIQ_VISITORS': {
            fr: "Nouveaux Visiteurs Uniques",
            en: "New Uniques visitors"
        },
        'PAGE_VIEWS': {
            fr: "Pages Vues",
            en: "Pages Viewed"
        },
        'DATA': {
            fr: "Données",
            en: "Data"
        },
        'PREVIOUS': {
            fr: "Précédent",
            en: "Previous"
        },
        'SOCIETY': {
            fr: "Société",
            en: "firm"
        }
    },
    'TAGS': {
        'TITLE': {
            fr: "Gestion de tag",
            en: "Tag Manager"
        },
        'ADD': {
            fr: "Ajouter",
            en: "Add"
        },
        'PLACEHOLDER': {
            fr: "Ajoutez votre site",
            en: "Add your website"
        },
        'AGREE': {
            fr: "J'accepte les",
            en: "I agree to the"
        },
        'TERMS': {
            fr: "conditions d'utilisations",
            en: "terms of use"
        },
        'SUBTITLE': {
            fr: "Vos tags",
            en: "Your tags"
        },
        'NO_DATA': {
            fr: "Vous n'avez pas encore enregistré de site.",
            en: "You have not register a website yet."
        },
        'GENERIC': {
            fr: "Ceci est notre tag générique, merci de prendre contact avec votre Account Manager pour tout complément d'information.",
            en: "This is your generic tag. Thanks to get in touch with your Account Manager for further information."
        }
    },
    'ADDON': {
        'TITLE': {
            fr: "Gé(né)rer les fonctionnalités de l'addon Sirdata",
            en: "Manage the functionalities of the Sirdata Addon"
        },
        'CURRENT_SITE': {
            fr: "Choisir un website",
            en: "Select a website"
        },
        'DATA': {
            fr: "Collecte de données",
            en: "Collecting datas"
        },
        'ENABLE': {
            fr: "Activer",
            en: "Enable"
        },
        'DISABLE': {
            fr: "Désactiver",
            en: "Disable"
        },
        'DOWNLOAD': {
            fr: "Télécharger les scripts de l'extension",
            en: "Download the exension scripts"
        },
        'PARAMS_UPDATE': {
            fr: "Collecte de données",
            en: "Collecting datas"
        },
        'PARAMS': {
            fr: "Paramètres",
            en: "Parameters"
        },
        'UPDATE': {
            fr: "Mettre à jour",
            en: "Update"
        }
    },
    'INCOMES': {
        'INFO': {
            fr: "Ce tableau fait office d'AAF. Merci d'envoyer votre facture à l'adresse suivante : billing@sirdata.com et de vérifier que vos coordonnées bancaires sont correctement renseignées.",
            en: "This table shall act as AAF. Thanks to send your billing to : billing@sirdata.com and check if your banks details being properly informed."
        },
        'YEAR': {
            fr: "Année",
            en: "Year"
        },
        'TITLE_BD': {
            fr: "Revenus",
            en: "Baha"
        },
        'NO_DATA': {
            fr: "Vous n'avez aucun revenu.",
            en: "You have no income."
        },
        'ARRAY_MONTH': {
            fr: "Mois",
            en: "Month"
        },
        'ARRAY_INCOME': {
            fr: "Revenu Data",
            en: "Data Incomes"
        },
        'INCOME_MD5': {
            fr: "Revenu MD5",
            en: "Incomes MD5"
        },
        'INCOME_BD': {
            fr: "Revenus Data",
            en: "Datas Incomes"
        },
        'INCOME_TOTAL': {
            fr: "Total",
            en: "Total"
        },
        'DISPLAY-YEAR': {
            fr: "Période : ",
            en: "Period : "
        }
    },
    'CONTACT': {
        'TITLE': {
            fr: "Formulaire de Contact",
            en: "Contact Form"
        },
        'FORM_SUBJECT': {
            fr: "Sujet",
            en: "Subject"
        },
        'FORM_CAT': {
            fr: "Catégorie",
            en: "Category"
        },
        'FORM_MSG': {
            fr: "Message",
            en: "Message"
        },
        'SELECT_NONE': {
            fr: "Choisissez la catégorie qui décrit le mieux votre requête.",
            en: "Choose the category that best describes your request"
        },
        'SELECT_DEV': {
            fr: "Fonctionnement du site",
            en: "Site Functionality"
        },
        'SELECT_STATS': {
            fr: "Problème de statistiques",
            en: "Statistics Issues"
        },
        'SELECT_INCOMES': {
            fr: "Problème de revenus",
            en: "Incomes Issues"
        },
        'SELECT_BILLING': {
            fr: "Problème de facturation",
            en: "Billing Issues"
        },
        'SELECT_OTHER': {
            fr: "Autre",
            en: "Other"
        },
        'FORM_BTN': {
            fr: "Envoyer",
            en: "Send"
        }
    },
    'LOGIN': {
        'TITLE': {
            fr: "Connectez-vous à votre compte",
            en: "Login to your account"
        },
        'FIELD_PSW': {
            fr: "Mot de passe",
            en: "Password"
        },
        'FIELD_RE_PSW': {
            fr: "Confirmer le mot de passe",
            en: "Confirm password"
        },
        'LOGIN_BTN': {
            fr: "Connexion",
            en: "Login"
        },
        'SIGNUP_TITLE': {
            fr: "Créer un compte",
            en: "Create an account"
        },
        'SIGNUP_BTN': {
            fr: "Créer",
            en: "Create"
        },
        'FORGOT_PSW': {
            fr: "Mot de passe oublié ?",
            en: "Forgot your password ?"
        },
        'RESET_PSW': {
            fr: "Réinitialisez votre mot de passe",
            en: "Reset your password"
        },
        'YOUR_EMAIL': {
            fr: "Votre email",
            en: "Your email"
        },
        'RESET_BTN': {
            fr: "Envoyez-moi un lien de réinitialisation",
            en: "Send me a reset link."
        },
        'NEW_PSW': {
            fr: "Entrez un nouveau mot de passe",
            en: "Enter a new password"
        },
        'RE_NEW_PSW': {
            fr: "Confirmez votre nouveau mot de passe",
            en: "Re-type your new password"
        },
        'BACK_LOGIN': {
            fr: "Retourner sur l'écran de connexion",
            en: "Back to Login"
        }
    },
    'MENU': {
        'TITLE': {
            fr: "Menu",
            en: "Menu"
        },
        'DASHBOARD': {
            fr: "Tableau de bord",
            en: "Dashboard"
        },
        'ACCOUNT': {
            fr: "Mon Compte",
            en: "My Account"
        },
        'STATS': {
            fr: "Statistiques",
            en: "Statistics"
        },
        'STATS_VIEWS': {
            fr: "Statistiques quotidiennes",
            en: "Daily Statistics"
        },
        'STATS_CATS': {
            fr: "Catégories",
            en: "Categories"
        },
        'STATS_MONTH': {
            fr: "Statistiques mensuelles",
            en: "Monthly Statistics"
        },
        'STATS_INCOMES': {
            fr: "Revenus",
            en: "Incomes"
        },
        'TAG': {
            fr: "Gestion des tags",
            en: "Tag Manager"
        },
        'FUNCT': {
            fr: "Fonctionnalités",
            en: "Functionalities"
        },
        'INCOMES': {
            fr: "Revenus",
            en: "Incomes"
        },
        'INCOMES_BD': {
            fr: "Data comportementale",
            en: "Behavioral Data"
        },
        'INCOMES_MK': {
            fr: "Matching Keys",
            en: "Matching Keys"
        },
        'LOG_OUT': {
            fr: "Se déconnecter",
            en: "Log Out"
        }
    }
};
var GetTextPipe = (function () {
    function GetTextPipe() {
    }
    GetTextPipe.prototype.transform = function (value) {
        var _a = value.split('.'), context = _a[0], codeTxt = _a[1];
        switch (navigator.language) {
            case 'fr':
                return contentText[context][codeTxt].fr;
            default:
                return contentText[context][codeTxt].en;
        }
    };
    GetTextPipe = __decorate([
        core_1.Pipe({ name: 'getText' }), 
        __metadata('design:paramtypes', [])
    ], GetTextPipe);
    return GetTextPipe;
}());
exports.GetTextPipe = GetTextPipe;
var TextPipeModule = (function () {
    function TextPipeModule() {
    }
    TextPipeModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [GetTextPipe],
            declarations: [GetTextPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], TextPipeModule);
    return TextPipeModule;
}());
exports.TextPipeModule = TextPipeModule;
