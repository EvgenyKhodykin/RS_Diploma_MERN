const booksApi = [
    {
        _id: 'dev01',
        category: 'Программирование',
        name: 'JavaScript для начинающих',
        cover: 'http://localhost:4000/covers/javaScript.webp',
        rate: 3,
        price: 912
    },
    {
        _id: 'dev02',
        category: 'Программирование',
        name: 'React и Redux: функциональная веб-разработка',
        cover: 'http://localhost:4000/covers/react-redux.webp',
        rate: 4,
        price: 1540
    },
    {
        _id: 'dev03',
        category: 'Программирование',
        name: 'Angular 4. Быстрая разработка сверхдинамических Web-сайтов на TypeScript и PHP',
        cover: 'http://localhost:4000/covers/angular4.webp',
        rate: 5,
        price: 1149
    },
    {
        _id: 'dev04',
        category: 'Программирование',
        name: 'Программирование на Python для начинающих',
        cover: 'http://localhost:4000/covers/python.webp',
        rate: 4.5,
        price: 660
    },
    {
        _id: 'dev05',
        category: 'Программирование',
        name: 'Объектно-ориентированное программирование на Visual Basic в среде Visual Studio .Net',
        cover: 'http://localhost:4000/covers/oop.webp',
        rate: 3.5,
        price: 3687
    },
    {
        _id: 'psy01',
        category: 'Психология',
        name: 'Семь навыков высокоэффективных людей: Мощные инструменты развития личности',
        cover: 'http://localhost:4000/covers/skills.webp',
        rate: 4,
        price: 1199
    },
    {
        _id: 'psy02',
        category: 'Психология',
        name: 'Позитивная иррациональность. Как извлекать выгоду из своих нелогичных поступков',
        cover: 'http://localhost:4000/covers/positive.webp',
        rate: 4,
        price: 529
    },
    {
        _id: 'psy03',
        category: 'Психология',
        name: 'Догнать зайца. Как лидеры рынка выигрывают в конкурентной борьбе и как великие компании могут их настичь',
        cover: 'http://localhost:4000/covers/hare.webp',
        rate: 5,
        price: 5666
    },
    {
        _id: 'psy04',
        category: 'Психология',
        name: 'Кто сказал что ты не можешь Ты можешь (Чидиак)',
        cover: 'http://localhost:4000/covers/chidiak.webp',
        rate: 3,
        price: 4399
    },
    {
        _id: 'psy05',
        category: 'Психология',
        name: '100 дней до цели. Достигаем любые цели...',
        cover: 'http://localhost:4000/covers/goal.webp',
        rate: 3.5,
        price: 5666
    },
    {
        _id: 'art01',
        category: 'Художественная литература',
        name: 'Гай Юлий Цезарь. Истины и максимы великого диктатора.',
        cover: 'http://localhost:4000/covers/caesar.webp',
        rate: 4,
        price: 17772
    },
    {
        _id: 'art02',
        category: 'Художественная литература',
        name: 'В окопах Сталинграда. Повесть.',
        cover: 'http://localhost:4000/covers/stalingrad.webp',
        rate: 5,
        price: 8514
    },
    {
        _id: 'art03',
        category: 'Художественная литература',
        name: 'Веном и Карнаж. Абсолютная резня. Омнибус.',
        cover: 'http://localhost:4000/covers/venom.webp',
        rate: 4,
        price: 6702
    },
    {
        _id: 'art04',
        category: 'Художественная литература',
        name: 'Собаки и олигархи. Адвокатские истории.',
        cover: 'http://localhost:4000/covers/dogs.webp',
        rate: 4,
        price: 77
    },
    {
        _id: 'art05',
        category: 'Художественная литература',
        name: 'Иосиф Бродский. Собрание сочинений в формате pocket book (комплект из 11-ти книг).',
        cover: 'http://localhost:4000/covers/brodskiy.webp',
        rate: 4,
        price: 3799
    },
    {
        _id: 'sci01',
        category: 'Наука и техника',
        name: 'Гистология, цитология и эмбриология. Руководство к практическим занятиям. Атлас.',
        cover: 'http://localhost:4000/covers/gistology.webp',
        rate: 5,
        price: 15484
    },
    {
        _id: 'sci02',
        category: 'Наука и техника',
        name: 'Эхокардиография по Харви Фейгенбауму.',
        cover: 'http://localhost:4000/covers/echo.webp',
        rate: 4.5,
        price: 10182
    },
    {
        _id: 'sci03',
        category: 'Наука и техника',
        name: 'Здания с каркасами из стальных рам переменного сечения (расчет, проектирование, строительство).',
        cover: 'http://localhost:4000/covers/buildings.webp',
        rate: 3.5,
        price: 9610
    },
    {
        _id: 'sci04',
        category: 'Наука и техника',
        name: 'Большой русско-японский словарь (с приложением новых слов.',
        cover: 'http://localhost:4000/covers/dictionary.webp',
        rate: 4.5,
        price: 8776
    },
    {
        _id: 'sci05',
        category: 'Наука и техника',
        name: 'Оборудование нефтегазопереработки, химических и нефтехимических производств: учебник.',
        cover: 'http://localhost:4000/covers/gasoil.webp',
        rate: 4,
        price: 8299
    },
    {
        _id: 'phy01',
        category: 'Философия и религия',
        name: 'Иезуиты. Их история, учение, организация и практическая деятельность в сфере общественной жизни, политики и религии.',
        cover: 'http://localhost:4000/covers/jesuits.webp',
        rate: 3,
        price: 570
    },
    {
        _id: 'phy02',
        category: 'Философия и религия',
        name: 'Постанархизм без розовых очков.',
        cover: 'http://localhost:4000/covers/postanarchy.webp',
        rate: 2.5,
        price: 629
    },
    {
        _id: 'phy03',
        category: 'Философия и религия',
        name: 'Самарканд. Свет хасидского подполья.',
        cover: 'http://localhost:4000/covers/samarkand.webp',
        rate: 5,
        price: 2999
    },
    {
        _id: 'phy04',
        category: 'Философия и религия',
        name: 'Конфуций. Луньюй. Изречения и афоризмы.',
        cover: 'http://localhost:4000/covers/confucius.webp',
        rate: 3,
        price: 38472
    },
    {
        _id: 'phy05',
        category: 'Философия и религия',
        name: 'Ницше. Воля к власти. Опыт переоценки всех ценностей.',
        cover: 'http://localhost:4000/covers/nicshe.webp',
        rate: 5,
        price: 16602
    }
]

export default booksApi
