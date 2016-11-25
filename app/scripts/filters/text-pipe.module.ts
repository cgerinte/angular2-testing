import {NgModule, Pipe, PipeTransform} from "@angular/core";

const contentText = {
	ACCOUNT: {
		TAB_ACCOUNT: {
			fr : "Détails du compte",
			en : "Account Details"
		},
		TAB_PSW: {
			fr : "Changer son mot de passe",
			en : "Password Settings"
		},
		TAB_BILLING: {
			fr : "Coordonnées Bancaires",
			en : "Bank Details"
		}
	},
	FORM_FIELD: {
		LASTNAME: {
			fr : "Nom",
			en : "Last Name"
		},
		FIRSTNAME: {
			fr : "Prénom",
			en : "First Name"
		},
		EMAIL: {
			fr : "Email",
			en : "Email"
		},
		PHONE: {
			fr : "Téléphone",
			en : "Phone"
		},
		COUNTRY: {
			fr : "Pays",
			en : "Country"
		},
		COMPANY: {
			fr : "Société",
			en : "Company"
		},
		CHG_PSW: {
			fr : "Changer de mot de passe",
			en : "Change password"
		},
		OLD_PSW: {
			fr : "Ancien mot de passe",
			en : "Old password"
		},
		NEW_PSW: {
			fr : "Nouveau mot de passe",
			en : "New password"
		},
		REPT_PSW: {
			fr : "Répéter le nouveau mot de passe",
			en : "Repeat new password"
		},
		DOMICIL: {
			fr : "Domiciliation",
			en : "Domiciliation"
		},
		ADDRESS: {
			fr : "Adresse (banque)",
			en : "Address (bank)"
		},
		BTN_SAVE: {
			fr : "Enregistrer",
			en : "Save"
		},
		BTN_SAVING: {
			fr : "Enregistrement...",
			en : "Saving..."
		},
		BTN_LOADING: {
			fr : "Chargement...",
			en : "Loading..."
		}
	},
	FORM_MSG: {
		IVLD_MAIL: {
			fr : "Ce n'est pas une adresse mail valide.",
			en : "This is not a valid email."
		},
		IVLD_PHONE: {
			fr : "Ce n'est pas un numéro valide.",
			en : "This is not a valid phone number.."
		},
		PSW_SHRT : {
			fr : "Ce mot de passe est trop court.",
			en : "This password is too short."
		},
		PSW_LONG : {
			fr : "Ce mot de passe est trop long.",
			en : "This password is too long."
		}
	},
	MSG: {
		WELCOME: {
			fr : "Bienvenue dans votre espace Sirdata",
			en : "Welcome to your Sirdata Corner"
		},
		IS_STATS : {
			fr : "Vos statistiques récentes",
			en : "Your statistics for the last days"
		},
		NO_STATS: {
			fr : "Vous n'avez pas de statistiques sur les derniers jours.",
			en : "You have no statistics for the last days."
		},
		NO_DATA: {
			fr : "Il n'y a aucune donnée pour cette période.",
			en : "There is no data for this period"
		},
		NO_INCOME: {
			fr : "Vous n'avez aucun revenu.",
			en : "You have no income."
		},
		NO_TAG: {
			fr : "Vous n'avez pas encore enregistré de site.",
			en : "You have not register a website yet."
		},
		INCOME: {
			fr : "Ce tableau fait office d'AAF. Merci d'envoyer votre facture à l'adresse suivante : billing@sirdata.com et de vérifier que vos coordonnées bancaires sont correctement renseignées.",
			en : "This table shall act as AAF. Thanks to send your billing to : billing@sirdata.com and check if your banks details being properly informed."
		},
		GENERIC: {
			fr: "Ceci est notre tag générique, merci de prendre contact avec votre Account Manager pour tout complément d'information.",
			en: "This is your generic tag. Thanks to get in touch with your Account Manager for further information."
		}
	},
	MENU : {
		ACCOUNT : {
			fr : "Mon Compte",
			en : "My Account"
		},
		DASHBOARD : {
			fr : "Tableau de bord",
			en : "Dashboard"
		}
	},
};

@Pipe({ name: 'getText' })
export class GetTextPipe implements PipeTransform {
    transform(value:string): string {
	    //console.log(value);
        let [context, codeTxt] = value.split('.');
        switch (navigator.language) {
            case 'fr':
                return contentText[context][codeTxt].fr;
            default:
                return contentText[context][codeTxt].en;
        }
    }
}

@NgModule({
    imports     : [],
    exports     : [ GetTextPipe ],
    declarations: [ GetTextPipe ]
})
export class TextPipeModule {}