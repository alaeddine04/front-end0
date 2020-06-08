import {Directive} from "@angular/core";
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {BenevolService} from "../../app/benevol.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
@Directive({
  selector: '[UniqueUsername]',
  providers:[{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective , multi: true }]
})

export class UniqueUsernameValidatorDirective  implements AsyncValidator {
  constructor(private benevolservice: BenevolService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.benevolservice.getBenevolBylogin(control.value).pipe(
      map(benevols=>{
        return benevols && benevols.length > 0 ? {'UniqueUsername' : true} : null;})
    );
  }


}

