import { db } from "./models/index.mjs";
import { CategoryRepository } from "./repositories/category.repository.mjs";
import { ProductRepository } from "./repositories/product.repository.mjs";
import { CharacteristicRepository } from "./repositories/characteristic.repository.mjs";

// Création de jeu de données
const initData = () => {

    // Caractéristiques
    let characteristics = [
        { name: "VRAM" },
        { name: "RayTracing" },
        { name: "DLSS" },
        { name: "Constructeur" },
        { name: "Dimensions" },
        { name: "Connectivité" }
    ];

    // Initialisations valeurs caractéristiques (RTX 2070)
    CharacteristicRepository.createValue(1, 1, "11 Go DDR6"); // VRAM
    CharacteristicRepository.createValue(2, 1, "Oui"); // RayTracing
    CharacteristicRepository.createValue(3, 1, "DLSS 2.0"); // DLSS
    CharacteristicRepository.createValue(4, 1, "Gigabyte"); // Constructeur
    CharacteristicRepository.createValue(5, 1, "226x128x41 (mm)"); // Dimensions
    CharacteristicRepository.createValue(6, 1, "DisplayPort / HDMI 2.0"); // Connectivité

    // Initialisations valeurs caractéristiques (RTX 4080)
    CharacteristicRepository.createValue(1, 2, "16 Go DDR6"); // VRAM
    CharacteristicRepository.createValue(2, 2, "Oui"); // RayTracing
    CharacteristicRepository.createValue(3, 2, "DLSS 3.0"); // DLSS
    CharacteristicRepository.createValue(4, 2, "Nvidia"); // Constructeur
    CharacteristicRepository.createValue(5, 2, "304x137x61 (mm)"); // Dimensions
    CharacteristicRepository.createValue(6, 1, "DisplayPort / HDMI 2.1"); // Connectivité

    // Initialisations valeurs caractéristiques (GTX 1070 Armor OC)
    CharacteristicRepository.createValue(1, 3, "8 Go DDR5"); // VRAM
    CharacteristicRepository.createValue(2, 3, "Non"); // RayTracing
    CharacteristicRepository.createValue(3, 3, "Non"); // DLSS
    CharacteristicRepository.createValue(4, 3, "MSI"); // Constructeur
    CharacteristicRepository.createValue(5, 3, "279x140x37 (mm)"); // Dimensions
    CharacteristicRepository.createValue(6, 1, "DisplayPort / HDMI 2.0"); // Connectivité

    // Initialisations valeurs caractéristiques (Radeon RX 6600)
    CharacteristicRepository.createValue(1, 3, "8 Go DDR6"); // VRAM
    CharacteristicRepository.createValue(2, 3, "Non"); // RayTracing
    CharacteristicRepository.createValue(3, 3, "FSR (FidelityFX Super Resolution)"); // DLSS
    CharacteristicRepository.createValue(4, 3, "AMD"); // Constructeur
    CharacteristicRepository.createValue(5, 3, "193x120x40 (mm)"); // Dimensions
    CharacteristicRepository.createValue(6, 1, "DisplayPort / HDMI 2.1"); // Connectivité

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

    // Création de Catégories
    CategoryRepository.create("Cartes Graphiques", characteristics);

    // Création de Produits
    ProductRepository.create("RTX 2070", "Carte graphique Nvidia dôtée de RayTracing", 1, characteristics);
    ProductRepository.create("RTX 4080", "Carte graphique nouvelle génération Nvidia dôtée de RayTracing et DLSS 2.0", 1, characteristics);
    ProductRepository.create("GTX 1070 Armor OC", "Ma carte graphique overclock de 2019", 1, characteristics);
    ProductRepository.create("Radeon RX 6600", "Carte graphique AMD, bon rapport qualité/prix", 1, characteristics);

}