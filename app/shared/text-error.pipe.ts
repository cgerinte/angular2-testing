import { Pipe, PipeTransform } from "@angular/core";

const errorText = {
	INPUTS        : {
		fr: "Une erreur est survenue. Merci de vérifier vos données.",
		en: "An error occured. Please check your inputs."
	},
	ACCOUNT_OK    : {
		fr: "Votre compte a bien été mis à jour.",
		en: "Your account has been successfully updated."
	},
	PASSWORD_OK   : {
		fr: "Votre mot de passe a bien été mis à jour.",
		en: "Your password has been successfully updated."
	},
	PASSWORD_DIFF : {
		fr: "Vous n'avez pas entré le même mot de passe.",
		en: "You didn't write the same new password."
	},
	PASSWORD_ERROR: {
		fr: "L'ancien mot de passe est erroné.",
		en: "The former password is incorrect."
	},
	BILLING_OK    : {
		fr: "Vos informations de facturation ont bien été mises à jour.",
		en: "Your billing information has been successfully saved."
	},
	BILLING_ERROR : {
		fr: "Vous devez renseigner votre RIB.",
		en: "You must register your RIB."
	}
};

@Pipe({ name: 'getError' })
export class GetErrorPipe implements PipeTransform {
	transform(msg: string): string {
		//console.log(value);
		try {
			switch ( navigator.language ) {
				case 'fr':
					return errorText[ msg ].fr;
				default:
					return errorText[ msg ].en;
			}
		}
		catch (e) {
			return msg;
		}
	}
}
