import { db } from "./models/index.mjs";
import { CategoryRepository } from "./repositories/category.repository.mjs";
import { ProductRepository } from "./repositories/product.repository.mjs";
import {fileURLToPath} from "url";
import path from "path";
import * as fs from "fs";

// Création de jeu de données
export const initData = () => {

    const cat_repo = new CategoryRepository();
    const product_repo = new ProductRepository();

    // Caractéristiques
    let characteristics = [
        { name: "VRAM", type: "number" },
        { name: "RayTracing", type: "checkbox" },
        { name: "DLSS", type: "checkbox" },
        { name: "Constructeur", type: "text" },
        { name: "Dimensions", type: "text" },
        { name: "Connectivité", type: "text" }
    ];

    cat_repo.create("Cartes Graphiques", characteristics);
    cat_repo.create("Frigorificateur", []);
    cat_repo.create("Enceinte Portable",[]);
    cat_repo.create("Bonnet Spiderman",[]);

    // Création de Catégories




    const value_RTX2070= [
        {characteristicTypeId: 1, value: "11"},
        {characteristicTypeId: 2, value: "1"},
        {characteristicTypeId: 3, value: "1"},
        {characteristicTypeId: 4, value: "Nvidia"},
        {characteristicTypeId: 5, value: "226x128x41 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.0"}
    ];

    const value_RTX4080= [
        {characteristicTypeId: 1, value: "16"},
        {characteristicTypeId: 2, value: "1"},
        {characteristicTypeId: 3, value: "1"},
        {characteristicTypeId: 4, value: "Nvidia"},
        {characteristicTypeId: 5, value: "304x137x61 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.1"}
    ];

    const value_GTX1070= [
        {characteristicTypeId: 1, value: "8"},
        {characteristicTypeId: 2, value: "0"},
        {characteristicTypeId: 3, value: "0"},
        {characteristicTypeId: 4, value: "Nvidia"},
        {characteristicTypeId: 5, value: "279x140x37 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.0"}
    ];


    const value_RX6600= [
        {characteristicTypeId: 1, value: "8"},
        {characteristicTypeId: 2, value: "0"},
        {characteristicTypeId: 3, value: "0"},
        {characteristicTypeId: 4, value: "AMD"},
        {characteristicTypeId: 5, value: "193x120x40 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.1"}
    ];

    // Création d'utilisateurs
    db.user.create({
        login: "admin", 
        password: "$2b$10$1pU1nE/1Hmv2TV8JeBln3uS0W43CaK4fjclIl2kyClNYj.mh1J6o6", // admin
        admin: true 
    });
    db.user.create({
        login: "pdelagrange",
        password: "$2b$10$SdZvZAhtZMocef0/Jq5pxOi8A8/DYfX6QSdf9qXHgByzZcmqs2pxe", // test
        admin: false
    });

    // Création de Produits

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const customPath = path.join(__dirname, 'images/');
    var binaryOne = fs.readFileSync(customPath+'1.png').toString("base64");
    var binaryTwo = fs.readFileSync(customPath+'2.png').toString("base64");
    var binaryThree = fs.readFileSync(customPath+'3.png').toString("base64");
    var binaryFor = fs.readFileSync(customPath+'4.png').toString("base64");
    var convertedOne = new Buffer(binaryOne).toString();
    var convertedTwo = new Buffer(binaryTwo).toString('base64');
    var convertedThree = new Buffer(binaryThree).toString('base64');
    var convertedFor = new Buffer(binaryFor).toString('base64');
    convertedOne = "data:image/png;base64,"+convertedOne;
    convertedTwo = "data:image/png;base64,"+convertedTwo;
    convertedThree = "data:image/png;base64,"+convertedThree;
    convertedFor = "data:image/png;base64,"+convertedFor;

    product_repo.create("RTX 2070", "Carte graphique Nvidia dôtée de RayTracing", 449, 1, value_RTX2070, convertedOne, "https://www.amazon.fr/ASUS-Gaming-NVIDIA-GeForce-3060/dp/B0966689N3/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25O9H0ICDZX1I&keywords=rtx&qid=1673536440&sprefix=rtx%2Caps%2C174&sr=8-6");
    product_repo.create("RTX 4080", "Carte graphique nouvelle génération Nvidia dôtée de RayTracing et DLSS 2.0", 1499,1,value_RTX4080, convertedOne,"https://www.amazon.fr/ASUS-Gaming-NVIDIA-GeForce-3060/dp/B0966689N3/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25O9H0ICDZX1I&keywords=rtx&qid=1673536440&sprefix=rtx%2Caps%2C174&sr=8-6");
    product_repo.create("GTX 1070 Armor OC", "Ma carte graphique overclock de 2019", 349,1, value_GTX1070, convertedOne,"https://www.amazon.fr/ASUS-Gaming-NVIDIA-GeForce-3060/dp/B0966689N3/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25O9H0ICDZX1I&keywords=rtx&qid=1673536440&sprefix=rtx%2Caps%2C174&sr=8-6");
    product_repo.create("Radeon RX 6600", "Carte graphique AMD, bon rapport qualité/prix", 449,1, value_RX6600, convertedOne,"https://www.amazon.fr/ASUS-Gaming-NVIDIA-GeForce-3060/dp/B0966689N3/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25O9H0ICDZX1I&keywords=rtx&qid=1673536440&sprefix=rtx%2Caps%2C174&sr=8-6");

}