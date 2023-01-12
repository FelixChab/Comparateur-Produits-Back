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
        { name: "VRAM", type: "text" },
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
        {characteristicTypeId: 1, value: "11 Go DDR6"},
        {characteristicTypeId: 2, value: "Oui"},
        {characteristicTypeId: 3, value: "Oui"},
        {characteristicTypeId: 4, value: "Nvidia"},
        {characteristicTypeId: 5, value: "226x128x41 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.0"}
    ];

    const value_RTX4080= [
        {characteristicTypeId: 1, value: "16 Go DDR6"},
        {characteristicTypeId: 2, value: "Oui"},
        {characteristicTypeId: 3, value: "Oui"},
        {characteristicTypeId: 4, value: "Nvidia"},
        {characteristicTypeId: 5, value: "304x137x61 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.1"}
    ];

    const value_GTX1070= [
        {characteristicTypeId: 1, value: "8 Go DDR5"},
        {characteristicTypeId: 2, value: "Non"},
        {characteristicTypeId: 3, value: "Non"},
        {characteristicTypeId: 4, value: "Nvidia"},
        {characteristicTypeId: 5, value: "279x140x37 (mm)"},
        {characteristicTypeId: 6, value: "DisplayPort / HDMI 2.0"}
    ];


    const value_RX6600= [
        {characteristicTypeId: 1, value: "8 Go DDR6"},
        {characteristicTypeId: 2, value: "Non"},
        {characteristicTypeId: 3, value: "Non"},
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
    var binarydata = fs.readFileSync(customPath+'1.png').toString("base64");
    var converted = new Buffer(binarydata).toString();
    converted = "data:image/png;base64,"+converted;

    console.log('READER');
    product_repo.create("RTX 2070", "Carte graphique Nvidia dôtée de RayTracing", 10, 1, value_RTX2070, converted);
    product_repo.create("RTX 4080", "Carte graphique nouvelle génération Nvidia dôtée de RayTracing et DLSS 2.0", 10,1,value_RTX4080, converted);
    product_repo.create("GTX 1070 Armor OC", "Ma carte graphique overclock de 2019", 10,1, value_GTX1070, converted);
    product_repo.create("Radeon RX 6600", "Carte graphique AMD, bon rapport qualité/prix", 10,1, value_RX6600, converted);

}