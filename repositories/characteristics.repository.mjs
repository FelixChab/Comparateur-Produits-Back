import {db} from "../models/index.mjs";

export class CharacteristicsRepository {

    async getMinMaxById(id) {
        try {
            const max = await db.characteristic_value.max('value', {where: {characteristicTypeId: id}});
            const min = await db.characteristic_value.min('value', {where: {characteristicTypeId: id}});
            return Promise.resolve({min: min, max: max});
        } catch (err) {
            return Promise.reject(err);
        }
    }
}