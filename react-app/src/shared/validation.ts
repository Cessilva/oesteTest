
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

export const dataValidation = (validator: any, data: any, option = {}) => {

    return validate(plainToClass(validator, data, option))
        .then((valerrors: ValidationError[]) => {

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
