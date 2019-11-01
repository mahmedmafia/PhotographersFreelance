import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[validatorName][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: passwordMatch, multi: true }
    ]
})

export class passwordMatch implements Validator {
    validate(control: AbstractControl): import("@angular/forms").ValidationErrors {
        throw new Error("Method not implemented.");
    }    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }

    // validate(c: AbstractControl): { [key: string]: any } {
    //     if (c.get('password').value == c.get('repassowrd').value) {
    //         return {
    //             'passwordMatch': {
    //                 valid: true
    //             }
    //         }
    //     }

    //     return {
    //         'passwordMatch': {
    //             valid: false
    //         }
    //     };
    // }
}