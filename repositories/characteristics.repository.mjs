import {db} from "../models/index.mjs";

export class CharacteristicsRepository {

    async getMinMaxById(id) {
        try {
            const values = await db.characteristic_value.findAll({where:{characteristicTypeId:id}});
            const max = Math.max(...values.map(value => value.value));
            const min = Math.min(...values.map(value => value.value));
            return Promise.resolve({min: min, max: max});
        } catch (err) {
            return Promise.reject(err);
        }
    }
}