import * as path from "path";
import { fileURLToPath } from 'url';

export class ImageController {
    findOneById(req,res){
        const { id } = req.params;
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const customPath = path.join(__dirname, '..', 'images/');
        res.sendFile(customPath + id +'.png');
    }

    upload(req,res){
        console.log(req);
        res.send(req.body);
    }
}