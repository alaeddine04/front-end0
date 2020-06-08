import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
import {Directive, Input} from "@angular/core";

@Directive({
  selector:'[appConfirmationValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting : ConfirmationValidateurDirective,
    multi: true
  }]

})

export class ConfirmationValidateurDirective implements Validator{
  @Input()  appConfirmationValidator: string;
  validate(control: AbstractControl): {[key:string]:any} | null {
    const controlToCompare = control.parent.get(this.appConfirmationValidator);
    if (controlToCompare && controlToCompare.value !== control.value){
      return {'notEqual': true };
    }
    return null;
  }


}
