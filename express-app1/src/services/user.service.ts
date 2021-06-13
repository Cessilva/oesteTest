import { getRepository } from "typeorm";
import { handleAsync } from "../shared/utilities";
import { Service } from "./index.service";
import { AdaptorError } from '../shared/error';

class UsersService extends Service{

    find = async( options: any ) => {
        let [items,error] =[null, null];
        if ( options ) {
            [items,error] = await handleAsync(
                getRepository(this.entity)
                .createQueryBuilder(`user`)
                .where(`user.nombre ilike :nombre`, {nombre: `%${options}%`})
                .getMany()
            );
        } else {
            [items, error] = await handleAsync(getRepository(this.entity).find());
        }
        if (error) throw new AdaptorError(error);
        return items;
    }

    findOne = async( id: string ) => {

        let [item, error] = await handleAsync(getRepository(this.entity).findOne( id ));

        if ( error ) throw new AdaptorError(error);
        return item  
    }

    update = async( id: string, data:any ) => {

        const modData = { id: Number(id), ...data};

        let [item, error] = await handleAsync(getRepository(this.entity).save(modData));
        if ( error ) throw new AdaptorError(error);

        let [updatedItem, error2] = await handleAsync(getRepository(this.entity).findOne(id ));
        if ( error2 ) throw new AdaptorError(error);

        return updatedItem;

    }
}

export default UsersService;