import { db } from "./models/index.mjs";
import { CategoryRepository } from "./repositories/category.repository.mjs";
import { ProductRepository } from "./repositories/product.repository.mjs";
import {fileURLToPath} from "url";
import path from "path";
import * as fs from "fs";

// Création de jeu de données
export const initData = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const customPath = path.join(__dirname, 'images/');
    const tempDirPath = path.join(__dirname, 'temp/');

    fs.readdir(tempDirPath, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            if (file !== ".gitkeep") {
                fs.unlink(path.join(tempDirPath, file), (err) => {
                    if (err) throw err;
                });
            }
        }
    });

    const cat_repo = new CategoryRepository();
    const product_repo = new ProductRepository();



    // Caractéristiques
    const characteristicsTypeCarteGraphique = [
        {name: "VRAM", type: "number"},
        {name: "RayTracing", type: "checkbox"},
        {name: "DLSS", type: "checkbox"},
        {name: "Constructeur", type: "text"},
        {name: "Dimensions", type: "text"},
        {name: "Connectivité", type: "text"}
    ];

    const characteristicsTypeCPU = [
        {name: "Frequence (GHz)", type: "number"},
        {name: "Marque", type: "text"},
        {name: "Chipset Graphique intégré", type: "checkbox"}
    ];


    const value_RTX2070 = [
        {characteristicTypeId: 1, value: "11"},
        {characteristicTypeId: 2, value: "1"},
        {characteristicTypeId: 3, value: "1"},
        {characteristicTypeId: 4, value: "Nvidia"},
        {characteristicTypeId: 5, value: "226x128x41 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.0"}
    ];

    const value_RTX4080 = [
        {characteristicTypeId: 1, value: "16"},
        {characteristicTypeId: 2, value: "1"},
        {characteristicTypeId: 3, value: "1"},
        {characteristicTypeId: 4, value: "Nvidia"},
        {characteristicTypeId: 5, value: "304x137x61 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.1"}
    ];

    const value_GTX1070 = [
        {characteristicTypeId: 1, value: "8"},
        {characteristicTypeId: 2, value: "0"},
        {characteristicTypeId: 3, value: "0"},
        {characteristicTypeId: 4, value: "Nvidia"},
        {characteristicTypeId: 5, value: "279x140x37 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.0"}
    ];


    const value_RX6600 = [
        {characteristicTypeId: 1, value: "8"},
        {characteristicTypeId: 2, value: "0"},
        {characteristicTypeId: 3, value: "0"},
        {characteristicTypeId: 4, value: "AMD"},
        {characteristicTypeId: 5, value: "193x120x40 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.1"}
    ];

    const value_i7_12700KF = [
        {characteristicTypeId: 7, value: "3.6"},
        {characteristicTypeId: 8, value: "Intel"},
        {characteristicTypeId: 9, value: "0"}
    ];

    const value_i9_13900K = [
        {characteristicTypeId: 7, value: "3.0"},
        {characteristicTypeId: 8, value: "Intel"},
        {characteristicTypeId: 9, value: "1"}
    ];

    const value_Ryzen7_5700X = [
        {characteristicTypeId: 7, value: "3.4"},
        {characteristicTypeId: 8, value: "AMD"},
        {characteristicTypeId: 9, value: "0"}
    ];



    // Création de Catégories
    await cat_repo.create("Cartes Graphiques", characteristicsTypeCarteGraphique);
    await cat_repo.create("Processeur", characteristicsTypeCPU);

    // Création d'utilisateurs
    await db.user.create({
        login: "admin",
        password: "$2b$10$1pU1nE/1Hmv2TV8JeBln3uS0W43CaK4fjclIl2kyClNYj.mh1J6o6", // admin
        admin: true
    });
    await db.user.create({
        login: "pdelagrange",
        password: "$2b$10$SdZvZAhtZMocef0/Jq5pxOi8A8/DYfX6QSdf9qXHgByzZcmqs2pxe", // test
        admin: false
    });

    // Création de Produits


    var image1 = "data:image/png;base64,"+Buffer.from(fs.readFileSync(customPath + '1.png').toString("base64")).toString();
    var image2 = "data:image/png;base64,"+Buffer.from(fs.readFileSync(customPath + '2.png').toString("base64")).toString();
    var image3 = "data:image/png;base64,"+Buffer.from(fs.readFileSync(customPath + '3.png').toString("base64")).toString();
    var image4 = "data:image/png;base64,"+Buffer.from(fs.readFileSync(customPath + '4.png').toString("base64")).toString();
    var image5 = "data:image/png;base64,"+Buffer.from(fs.readFileSync(customPath + '5.png').toString("base64")).toString();
    var image6 = "data:image/png;base64,"+Buffer.from(fs.readFileSync(customPath + '6.png').toString("base64")).toString();
    var image7 = "data:image/png;base64,"+Buffer.from(fs.readFileSync(customPath + '7.png').toString("base64")).toString();


    await product_repo.create("RTX 2070", "Carte graphique Nvidia dôtée de RayTracing", 449, 1, value_RTX2070, image1, "https://www.amazon.fr/ASUS-Gaming-NVIDIA-GeForce-3060/dp/B0966689N3/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25O9H0ICDZX1I&keywords=rtx&qid=1673536440&sprefix=rtx%2Caps%2C174&sr=8-6");
    await product_repo.create("RTX 4080", "Carte graphique nouvelle génération Nvidia dôtée de RayTracing et DLSS 2.0", 1499, 1, value_RTX4080, image2, "https://www.amazon.fr/ASUS-Gaming-NVIDIA-GeForce-3060/dp/B0966689N3/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25O9H0ICDZX1I&keywords=rtx&qid=1673536440&sprefix=rtx%2Caps%2C174&sr=8-6");
    await product_repo.create("GTX 1070 Armor OC", "Ma carte graphique overclock de 2019", 349, 1, value_GTX1070, image3, "https://www.amazon.fr/ASUS-Gaming-NVIDIA-GeForce-3060/dp/B0966689N3/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25O9H0ICDZX1I&keywords=rtx&qid=1673536440&sprefix=rtx%2Caps%2C174&sr=8-6");
    await product_repo.create("Radeon RX 6600", "Carte graphique AMD, bon rapport qualité/prix", 449, 1, value_RX6600, image4, "https://www.amazon.fr/ASUS-Gaming-NVIDIA-GeForce-3060/dp/B0966689N3/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25O9H0ICDZX1I&keywords=rtx&qid=1673536440&sprefix=rtx%2Caps%2C174&sr=8-6");

    await product_repo.create("Intel Core i7-12700KF", "Processeur Intel Core", 449, 2, value_i7_12700KF, image5, "https://www.ldlc.com/fiche/PB00464924.html");
    //await product_repo.create("Intel Core i9-13900KF", "Processeur Intel Core", 769, 2, value_i9_13900K, imageUne, "https://www.ldlc.com/fiche/PB00519289.html");
    await product_repo.create("Intel Core i9-13900KF", "Processeur Intel Core", 769, 2, value_i9_13900K, image6, "https://www.ldlc.com/fiche/PB00519289.html");
    //await product_repo.create("AMD Ryzen 7 5700X", "Processeur AMD", 274, 2, value_Ryzen7_5700X, imageUne, "https://www.ldlc.com/fiche/PB00493651.html");
    await product_repo.create("AMD Ryzen 7 5700X", "Processeur AMD", 274, 2, value_Ryzen7_5700X, image7, "https://www.ldlc.com/fiche/PB00493651.html");


}