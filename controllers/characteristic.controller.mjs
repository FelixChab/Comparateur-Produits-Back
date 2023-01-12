import {CharacteristicsRepository} from "../repositories/characteristics.repository.mjs";

export class CharacteristicController {
    repository = new CharacteristicsRepository();

    getMinMaxById(req,res){
        this.repository.getMinMaxById(req.params.id)
            .then((data) => res.send(data))
            .catch(err =>
            {
                const message = err.message ||"Some error occurred while getting the category";
                res.status(500).send({
                    message
                });
    })
}
}