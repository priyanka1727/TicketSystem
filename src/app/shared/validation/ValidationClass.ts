import { Validators, AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";
import { error } from "protractor";

export class ValidationClass {
    controls = {
        "userName": [Validators.required],
        "email": [Validators.email]
    }

    static emailDomainValidator(control: AbstractControl) : ValidationErrors | null {
        let email = control.value as string; 
        if (email && email.indexOf("@") != -1) { 
            let [_, domain] = email.split("@"); 
            if (domain !== "gssltd.co.in") { 
                return {
                    domain: true
                }
            }
        }
        return null;
    }

    /**
     * 
     * @param form 
     * @returns string | null
     */
    static validateForm(form: FormGroup): string [] | null {
        let errorMessage = [];
        let hasError = 0;
        let i=0;
        Object.keys(form.controls).forEach(key => {
            if(form.get(key).invalid ) {
                errorMessage[i] = ValidationClass.getErrorMessage(key,Object.keys(form.get(key).errors)[0]);
                i++;
                if(errorMessage !== null) {
                    hasError = 1;
                }
            }
        });
        return errorMessage;
    }

    /**
     * Returns error message for specific error type
     * @param controlName 
     * @param errorType 
     * @returns string | null
     */
    static getErrorMessage(controlName: string, errorType: string): string | null {
        let ucFirstControlName = controlName.charAt(0).toUpperCase() + controlName.substr(1);
        switch(errorType) {
            case "required":
                return ucFirstControlName + " is required";
            case "email":
                return "Email format is invalid";
            case "domain":
                return "Domain should be of type gss.co.in";
        }
        return null;
    }
}