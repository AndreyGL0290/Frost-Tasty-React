const menu = {
    Category1:
    {   
        name: "Пельмени",
        imagePath: "/images/products/resized/Пельмени.png",
        Content1:
        {
            name: "Пельмени Свинина & Говядина",
            imagePath: "/images/products/resized/Пельмени.png",
            info: "Состав:\nСвинина,Говядина,Лук,Вода,Соль,Специи",
            price: 19
        },

        Content2:
        {
            name: "Пельмени Говядина",
            imagePath: "/images/products/resized/Пельмени.png",
            info: "Состав:\nТесто пельменное,Говядина,Лук,Вода,Соль,Специи",
            price: 24
        },
        
        Content3:
        {
            name: "Пельмени Курица",
            imagePath: "/images/products/resized/Пельмени.png",
            info: "Состав:\nМясо курицы,Лук,Вода,Соль,Специи",
            price: 18
        },

        Content4:
        {
            name: "Пельмени с перцем чили & зеленью",
            imagePath: "/images/products/resized/Пельмени.png",
            price: 24
        }
    },

    Category2:
    {
        name: "Вареники",
        imagePath: "/images/products/resized/Вареники.png",
        Content1:
        {
            name: "Вареники Картофель",
            imagePath: "/images/products/resized/Вареники.png",
            info: "Состав:\nТесто для вареников,Картофель,Масло из коровьих сливок,Яйцо,Соль",
            price: 13
        },

        Content2:
        {
            name: "Вареники Картофель & Грибы",
            imagePath: "/images/products/resized/Вареники.png",
            info: "Состав:\nТесто,Картофель,Шампиньоны,Лук,Масло подсолнечное,Соль,Специи",
            price: 15
        },

        Content3:
        {
            name: "Вареники Капуста & Шпик",
            imagePath: "/images/products/resized/Вареники.png",
            info: "Состав:\nТесто,Капуста квашеная,Шпик свинной,Лук,Соль,Специи",
            price: 18
        },

        Content4:
        {
            name: "Вареники Сыр имеретинский",
            imagePath: "/images/products/resized/Вареники.png",
            info: "Состав:\nТесто,Сыр имеретинский,Яйцо,Соль,Специи",
            price: 19
        },
        Content5:
        {
            name: "Вареники с творогом",
            imagePath: "/images/products/resized/Вареники.png",
            info: "Состав:\nТесто,Сыр имеретинский,Яйцо,Соль,Специи",
            price: 18
        }
    },

    Category3:
    {
        name: "Котлеты & Фрикадельки",
        imagePath: "/images/products/resized/Котлеты.jpg",
        Content1:
        {
            name: "Котлеты Куриные",
            imagePath: "/images/products/resized/Котлеты куриные.jpg",
            info: "Состав:\nФиле курицы,Лук,Соль,Перец,Мука,Яйцо куриное,Сухари панировочные из багета",
            price: 25
        },

        Content2:
        {
            name: "Котлеты Домашние",
            imagePath: "/images/products/resized/Котлеты домашние.jpg",
            info: "Состав:\nСвинина,Говядина,Хлеб белый,Соль специи,Мука для панировки",
            price: 25
        },

        Content3:
        {
            name: "Фрикадельки Куриные",
            imagePath: "/images/products/resized/Фрикадельки куриные.jpg",
            info: "Состав:\nМясо курицы,Лук,Зелень,Соль,Специи",
            price: 25
        },
        
        Content4:
        {
            name: "Фрикадельки Свинина & Говядины",
            imagePath: "/images/products/resized/Фрикадельки свинина говядина.jpg",
            info: "Состав:\nСвинина,Говядина,Лук,Зелень,Соль,Специи",
            price: 25
        },

        Content5:
        {
            name: "Шницель куриный панированный в багете",
            imagePath: "/images/products/resized/Шницель.jpg",
            info: "Состав:\nФиле курицы,Яйцо,Соль,Специи,Мука,Сухари панировочные из багета",
            price: 25
        }
    },
    
    Category4:
    {
        name: "Блины & Сырники",
        imagePath: "/images/products/resized/Блины фаршированные.jpg",
        Content1:
        {
            name: "Блины фаршированные мясом",
            imagePath: "/images/products/resized/Блины фаршированные.jpg",
            info: "Состав:\nБлины,Свинина,Говядина,Лук,Масло растительное,Соль,Специи",
            price: 2.2.toFixed(2),
            postfix: '₾/шт'
        },
        
        Content2:
        {
            name: "Блины фаршированные творогом",
            imagePath: "/images/products/resized/Блины с творогом.jpg",
            info: "Состав:\nБлины,Творог из коровьего молока,Сахар ванильный,Сахар,Соль",
            price: 1.8.toFixed(2),
            postfix: '₾/шт'
        },

        Content3:
        {
            name: "Сырники творожные",
            imagePath: "/images/products/resized/Сырники.jpg",
            info: "Состав:\nТворог из коровьего молока,Яйцо,Соль,Сахар,Сахар ванильный,Мука",
            price: 2,
            postfix: '₾/шт'
        }
    },

    Category5:
    {
        name: "Салаты",
        imagePath: "/images/products/resized/Салаты и закуски.jpg",
        Content1:
        {
            name: "Салат 'Оливье'",
            imagePath: "/images/products/resized/Оливье.jpg",
            info: "Состав:\nКартофель,Морковь,Яйцо,Колбаса вареная,Огурец соленый,Лук",
            price: 30
        },

        Content2:
        {
            name: "Салат 'Министерский'",
            imagePath: "/images/products/resized/Министерский.jpg",
            info: "Состав:\nГовядина,Лук,Масло растительное,Яйцо,Огурец соленый соль",
            price: 40
        },

        Content3:
        {
            name: "Салат 'Сельдь под шубой'",
            imagePath: "/images/products/resized/Сельдь под шубой.jpg",
            info: "Состав:\nСельдь соленая,Лук,Картофель,Яйцо,Морковь,Свекла,Майонез",
            price: 30
        },
        
        Content4:
        {
            name: "Салат с крабовыми палочками",
            imagePath: "/images/products/resized/Салат с крабовыми палочками.png",
            info: "Состав:\nКрабовые палочки,Яйцо,Кукуруза консервированая",
            price: 30
        }
    },

    Category6:
    {
        name: "Пробные сеты",
        imagePath: "/images/products/resized/Пробный сет undefined.jpg",
        Content1:
        {
            name: "Пробный сет №1",
            imagePath: "/images/products/resized/Сет№1.png",
            info: "Состав:\nПельмени Свинина & Говядина, 300г,Пельмени Говядина, 300г,Вареники Картофель, 300г,Вареники Мясо & Капуста, 300г,Котлеты Домашние, 4 шт.,Шницель куриный панированный в багете, 2 шт.,Блины фаршированные творогом, 4 шт.",
            price: 49,
            postfix: '₾/шт'
        },
        
        Content2:
        {
            name: "Пробный сет №2",
            imagePath: "/images/products/resized/Сет№2.png",
            info: "Состав:\nПельмени Свинина & Говядина, 300г,Пельмени Курица, 300г,Вареники Картофель & Грибы, 300г,Вареники Сыр имеретинский, 300г,Котлеты Куриные, 4 шт.,Блины фаршированны мясом, 4 шт.,Сырники, 4 шт.",
            price: 49,
            postfix: '₾/шт'
        }
    }
}

export default menu