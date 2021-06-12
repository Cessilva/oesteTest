
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

export const dataValidation = (validator: any, data: any) => {
    console.log("validando erroresd",data)
    console.log(plainToClass(validator, data))

    return validate(plainToClass(validator, data))
        .then((valerrors: ValidationError[]) => {
            console.log("validando erroresd",data,valerrors)
            if (valerrors.length) {
                // // Handle errors have
                const errormessages = valerrors.map((valerror: ValidationError) => {
                const constraints: any = valerror.constraints ? valerror.constraints : null;
                return Object.values(constraints);
                }).join(`,`)
                return Promise.resolve(errormessages) ;
            } else {
                return Promise.resolve(null);
            }
        })
}
