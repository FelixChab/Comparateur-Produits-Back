import { db } from "../models/index.mjs";

export class CharacteristicRepository {

    createType(name, type,categoryId) {
        const characteristic = {name, type, categoryId};
        db.characteristic_type.create(characteristic);
    }

    createValue(characteristicTypeId, productId, value){
        const characteristic = {productId, characteristicTypeId, value};
        db.characteristic_value.create(characteristic);
    }

}