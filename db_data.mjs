import { db } from "./models/index.mjs";
import { CategoryRepository } from "./repositories/category.repository.mjs";

// Création de jeu de données
const initData = () => {

    // Chara
    let characteristics = [
        { name: "VRAM" },
        { name: "RayTracing" },
        { name: "DLSS" },
        { name: "Constructeur" },
        { name: "Dimensions" }
    ];

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
    db.products.create({
        name: "RTX 2070",
        description: "Carte graphique Nvidia dôtée de RayTracing"
    });
    db.products.create({
        name: "RTX 4080",
        description: "Carte graphique nouvelle génération Nvidia dôtée de RayTracing et DLSS 2.0"
    });
    db.products.create({
        name: "GTX 1070 Armor OC",
        description: "Ma carte graphique overclock de 2019"
    });

    // Création de Catégories
    CategoryRepository.create("Cartes Graphiques", characteristics);

}