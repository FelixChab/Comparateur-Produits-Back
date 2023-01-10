import { db } from "./models/index.mjs";
import { CategoryRepository } from "./repositories/category.repository.mjs";
import { ProductRepository } from "./repositories/product.repository.mjs";
import { CharacteristicRepository } from "./repositories/characteristic.repository.mjs";

// Création de jeu de données
export const initData = () => {

    //const chara_repo = new CharacteristicRepository();
    const cat_repo = new CategoryRepository();
    const product_repo = new ProductRepository();

    // Caractéristiques
    let characteristics = [
        { name: "VRAM" },
        { name: "RayTracing" },
        { name: "DLSS" },
        { name: "Constructeur" },
        { name: "Dimensions" },
        { name: "Connectivité" }
    ];

    // Création de Catégories
    cat_repo.create("Cartes Graphiques", characteristics);



    const characteristics_value = [];
    characteristics_value.push(
        {characteristicTypeId: 1, value: "10"}
    );
    // Initialisations valeurs caractéristiques (RTX 2070)
    // chara_repo.createValue(1, 1, "11 Go DDR6"); // VRAM
    // chara_repo.createValue(2, 1, "Oui"); // RayTracing
    // chara_repo.createValue(3, 1, "DLSS 2.0"); // DLSS
    // chara_repo.createValue(4, 1, "Gigabyte"); // Constructeur
    // chara_repo.createValue(5, 1, "226x128x41 (mm)"); // Dimensions
    // chara_repo.createValue(6, 1, "DisplayPort / HDMI 2.0"); // Connectivité
    //
    // // Initialisations valeurs caractéristiques (RTX 4080)
    // chara_repo.createValue(1, 2, "16 Go DDR6"); // VRAM
    // chara_repo.createValue(2, 2, "Oui"); // RayTracing
    // chara_repo.createValue(3, 2, "DLSS 3.0"); // DLSS
    // chara_repo.createValue(4, 2, "Nvidia"); // Constructeur
    // chara_repo.createValue(5, 2, "304x137x61 (mm)"); // Dimensions
    // chara_repo.createValue(6, 1, "DisplayPort / HDMI 2.1"); // Connectivité
    //
    // // Initialisations valeurs caractéristiques (GTX 1070 Armor OC)
    // chara_repo.createValue(1, 3, "8 Go DDR5"); // VRAM
    // chara_repo.createValue(2, 3, "Non"); // RayTracing
    // chara_repo.createValue(3, 3, "Non"); // DLSS
    // chara_repo.createValue(4, 3, "MSI"); // Constructeur
    // chara_repo.createValue(5, 3, "279x140x37 (mm)"); // Dimensions
    // chara_repo.createValue(6, 1, "DisplayPort / HDMI 2.0"); // Connectivité
    //
    // // Initialisations valeurs caractéristiques (Radeon RX 6600)
    // chara_repo.createValue(1, 3, "8 Go DDR6"); // VRAM
    // chara_repo.createValue(2, 3, "Non"); // RayTracing
    // chara_repo.createValue(3, 3, "FSR (FidelityFX Super Resolution)"); // DLSS
    // chara_repo.createValue(4, 3, "AMD"); // Constructeur
    // chara_repo.createValue(5, 3, "193x120x40 (mm)"); // Dimensions
    // chara_repo.createValue(6, 1, "DisplayPort / HDMI 2.1"); // Connectivité

    // Création d'utilisateurs
    db.user.create({
        login: "admin", 
        password: "admin", 
        admin: true 
    });
    db.user.create({
        login: "fchabellard",
        password: "fefe",
        admin: false
    });
    db.user.create({
        login: "pdelagrange",
        password: "pepe",
        admin: false
    });



    // Création de Produits
    product_repo.create("RTX 2070", "Carte graphique Nvidia dôtée de RayTracing", 1, characteristics_value);
    product_repo.create("RTX 4080", "Carte graphique nouvelle génération Nvidia dôtée de RayTracing et DLSS 2.0", 1, characteristics_value);
    product_repo.create("GTX 1070 Armor OC", "Ma carte graphique overclock de 2019", 1, characteristics_value);
    product_repo.create("Radeon RX 6600", "Carte graphique AMD, bon rapport qualité/prix", 1, characteristics_value);

}