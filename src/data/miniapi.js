function Api() {
    this._data = {
        categories: [
            {
                key: 1,
                name_en: 'Salads',
                name_es: 'Ensaladas',
                description_en: 'Fresh and Healthy',
                description_es: 'Fresco y Saludable',
                imageUrl: 'https://unareceta.com/wp-content/uploads/2016/10/ensaladas.jpg'
            },
            {
                key: 2,
                name_en: 'Pizza',
                name_es: 'Pizza',
                description_en: 'The Italian Way',
                description_es: 'The Italian Way',
                imageUrl: 'http://pizzaamericana.co/img/0147/343.jpg'
            },
            {
                key: 3,
                name_en: 'Spanish Food',
                name_es: 'Comida Espa',
                description_en: 'The Italian Way',
                description_es: 'The Italian Way',
                imageUrl: 'http://www.open.edu/openlearn/ocw/pluginfile.php/775611/mod_resource/content/0/l194_2_cover_image_1%20%281%29.jpg'
            },
            {
                key: 4,
                name_en: 'Pizza',
                name_es: 'Pizza',
                description_en: 'The Italian Way',
                description_es: 'The Italian Way',
                imageUrl: 'http://pizzaamericana.co/img/0147/343.jpg'
            }
        ],
        products: [
            {
                key: 1,
                name_en: 'Greek Salad',
                name_es: 'Ensalada Griega',
                description_en: 'Cucumber, Onions, Tomatoes, Chees',
                description_es: 'Pepino, Cebolla, Tomate, Queso',
                imageUrl: 'https://prettyprovidence.com/wp-content/uploads/2016/01/greeksalad1-1.jpg',
                category: 1,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },
            {
                key: 2,
                name_en: 'Cezar Salad',
                name_es: 'Ensalada Cesar',
                description_en: 'Qubeti, Cucumbers',
                description_es: 'Qubeti, Cucumbers',
                imageUrl: 'http://ensaladacesar.info/img/ensalada-cesar-clasica-573.jpg',
                category: 1,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },
            {
                key: 3,
                name_en: 'Mexican Salad',
                name_es: 'Ensalada Mexicana',
                description_en: 'Cucumber, spicy tortilla chips, Strawberries, chicken',
                description_es: 'Cucumber, spicy tortilla chips, Strawberries, chicken',
                imageUrl: 'https://shewearsmanyhats.com/wp-content/uploads/2015/01/southwestern-salad-1new.jpg',
                category: 1,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },
            {
                key: 4,
                name_en: 'Fresh Tuna Salad',
                name_es: 'Ensalada de Atun Fresco',
                description_en: 'Nan McEvoy uses albacore tuna here, but any fresh tuna',
                description_es: 'Nan McEvoy uses albacore tuna here, but any fresh tuna',
                imageUrl: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/6/1/VF0302_Tart-and-Crunchy-Fresh-Tuna-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371599745282.jpeg',
                category: 1,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            }, {
                key: 5,
                name_en: 'Greek Salad',
                name_es: 'Ensalada Griega',
                description_en: 'Cucumber, Onions, Tomatoes, Chees',
                description_es: 'Pepino, Cebolla, Tomate, Queso',
                imageUrl: 'https://prettyprovidence.com/wp-content/uploads/2016/01/greeksalad1-1.jpg',
                category: 2,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },
            {
                key: 6,
                name_en: 'Cezar Salad',
                name_es: 'Ensalada Cesar',
                description_en: 'Qubeti, Cucumbers',
                description_es: 'Qubeti, Cucumbers',
                imageUrl: 'http://ensaladacesar.info/img/ensalada-cesar-clasica-573.jpg',
                category: 2,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },
            {
                key: 7,
                name_en: 'Mexican Salad',
                name_es: 'Ensalada Mexicana',
                description_en: 'Cucumber, spicy tortilla chips, Strawberries, chicken',
                description_es: 'Cucumber, spicy tortilla chips, Strawberries, chicken',
                imageUrl: 'https://shewearsmanyhats.com/wp-content/uploads/2015/01/southwestern-salad-1new.jpg',
                category: 2,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },
            {
                key: 8,
                name_en: 'Fresh Tuna Salad',
                name_es: 'Ensalada de Atun Fresco',
                description_en: 'Nan McEvoy uses albacore tuna here, but any fresh tuna',
                description_es: 'Nan McEvoy uses albacore tuna here, but any fresh tuna',
                imageUrl: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/6/1/VF0302_Tart-and-Crunchy-Fresh-Tuna-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371599745282.jpeg',
                category: 2,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },{
                key: 9,
                name_en: 'Greek Salad',
                name_es: 'Ensalada Griega',
                description_en: 'Cucumber, Onions, Tomatoes, Chees',
                description_es: 'Pepino, Cebolla, Tomate, Queso',
                imageUrl: 'https://prettyprovidence.com/wp-content/uploads/2016/01/greeksalad1-1.jpg',
                category: 3,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },
            {
                key: 10,
                name_en: 'Cezar Salad',
                name_es: 'Ensalada Cesar',
                description_en: 'Qubeti, Cucumbers',
                description_es: 'Qubeti, Cucumbers',
                imageUrl: 'http://ensaladacesar.info/img/ensalada-cesar-clasica-573.jpg',
                category: 3,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },
            {
                key: 11,
                name_en: 'Mexican Salad',
                name_es: 'Ensalada Mexicana',
                description_en: 'Cucumber, spicy tortilla chips, Strawberries, chicken',
                description_es: 'Cucumber, spicy tortilla chips, Strawberries, chicken',
                imageUrl: 'https://shewearsmanyhats.com/wp-content/uploads/2015/01/southwestern-salad-1new.jpg',
                category: 3,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            },
            {
                key: 12,
                name_en: 'Fresh Tuna Salad',
                name_es: 'Ensalada de Atun Fresco',
                description_en: 'Nan McEvoy uses albacore tuna here, but any fresh tuna',
                description_es: 'Nan McEvoy uses albacore tuna here, but any fresh tuna',
                imageUrl: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/6/1/VF0302_Tart-and-Crunchy-Fresh-Tuna-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371599745282.jpeg',
                category: 3,
                small: 10.00,
                medium: 14.00,
                big: 18.00
            }
        ]
    }

    this.getProducts = function() {
        return this._data.products;
    }

    this.getCategories = function() {
        return this._data.categories;
    }

    this.getProductsByCat =(category) => this._data.products.filter((p) => p.category == category);
}

module.exports = new Api();
