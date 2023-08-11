import * as posters from './images/index.js'

const booksApi = [
    {
        _id: 'dev01',
        category: 'Программирование',
        name: 'JavaScript для начинающих',
        poster: posters.javaScript,
        rate: 3,
        price: 912
    },
    {
        _id: 'dev02',
        category: 'Программирование',
        name: 'React и Redux: функциональная веб-разработка',
        poster: posters.reactRedux,
        rate: 4,
        price: 1540
    },
    {
        _id: 'dev03',
        category: 'Программирование',
        name: 'Angular 4. Быстрая разработка сверхдинамических Web-сайтов на TypeScript и PHP',
        poster: posters.angular,
        rate: 5,
        price: 1149
    },
    {
        _id: 'dev04',
        category: 'Программирование',
        name: 'Программирование на Python для начинающих',
        poster: posters.python,
        rate: 4.5,
        price: 660
    },
    {
        _id: 'dev05',
        category: 'Программирование',
        name: 'Объектно-ориентированное программирование на Visual Basic в среде Visual Studio .Net',
        poster: posters.oop,
        rate: 3.5,
        price: 3687
    },
    {
        _id: 'psy01',
        category: 'Психология',
        name: 'Семь навыков высокоэффективных людей: Мощные инструменты развития личности',
        poster: posters.skills,
        rate: 4,
        price: 1199
    },
    {
        _id: 'psy02',
        category: 'Психология',
        name: 'Позитивная иррациональность. Как извлекать выгоду из своих нелогичных поступков',
        poster: posters.positive,
        rate: 4,
        price: 529
    },
    {
        _id: 'psy03',
        category: 'Психология',
        name: 'Догнать зайца. Как лидеры рынка выигрывают в конкурентной борьбе и как великие компании могут их настичь',
        poster: posters.hare,
        rate: 5,
        price: 5666
    },
    {
        _id: 'psy04',
        category: 'Психология',
        name: 'Кто сказал что ты не можешь Ты можешь (Чидиак)',
        poster: posters.chidiak,
        rate: 3,
        price: 4399
    },
    {
        _id: 'psy05',
        category: 'Психология',
        name: '100 дней до цели. Достигаем любые цели...',
        poster: posters.goal,
        rate: 3.5,
        price: 5666
    },
    {
        _id: 'art01',
        category: 'Художественная литература',
        name: 'Гай Юлий Цезарь. Истины и максимы великого диктатора.',
        poster: posters.caesar,
        rate: 4,
        price: 17772
    },
    {
        _id: 'art02',
        category: 'Художественная литература',
        name: 'В окопах Сталинграда. Повесть.',
        poster: posters.stalingrad,
        rate: 5,
        price: 8514
    },
    {
        _id: 'art03',
        category: 'Художественная литература',
        name: 'Веном и Карнаж. Абсолютная резня. Омнибус.',
        poster: posters.venom,
        rate: 4,
        price: 6702
    },
    {
        _id: 'art04',
        category: 'Художественная литература',
        name: 'Собаки и олигархи. Адвокатские истории.',
        poster: posters.dogs,
        rate: 4,
        price: 77
    },
    {
        _id: 'art05',
        category: 'Художественная литература',
        name: 'Иосиф Бродский. Собрание сочинений в формате pocket book (комплект из 11-ти книг).',
        poster: posters.brodskiy,
        rate: 4,
        price: 3799
    },
    {
        _id: 'sci01',
        category: 'Наука и техника',
        name: 'Гистология, цитология и эмбриология. Руководство к практическим занятиям. Атлас.',
        poster: posters.gistology,
        rate: 5,
        price: 15484
    },
    {
        _id: 'sci02',
        category: 'Наука и техника',
        name: 'Эхокардиография по Харви Фейгенбауму.',
        poster: posters.echo,
        rate: 4.5,
        price: 10182
    },
    {
        _id: 'sci03',
        category: 'Наука и техника',
        name: 'Здания с каркасами из стальных рам переменного сечения (расчет, проектирование, строительство).',
        poster: posters.buildings,
        rate: 3.5,
        price: 9610
    },
    {
        _id: 'sci04',
        category: 'Наука и техника',
        name: 'Большой русско-японский словарь (с приложением новых слов.',
        poster: posters.dictionary,
        rate: 4.5,
        price: 8776
    },
    {
        _id: 'sci05',
        category: 'Наука и техника',
        name: 'Оборудование нефтегазопереработки, химических и нефтехимических производств: учебник.',
        poster: posters.gasoil,
        rate: 4,
        price: 8299
    },
    {
        _id: 'phy01',
        category: 'Философия и религия',
        name: 'Иезуиты. Их история, учение, организация и практическая деятельность в сфере общественной жизни, политики и религии.',
        poster: posters.jesuits,
        rate: 3,
        price: 570
    },
    {
        _id: 'phy02',
        category: 'Философия и религия',
        name: 'Постанархизм без розовых очков.',
        poster: posters.postanarchy,
        rate: 2.5,
        price: 629
    },
    {
        _id: 'phy03',
        category: 'Философия и религия',
        name: 'Самарканд. Свет хасидского подполья.',
        poster: posters.samarkand,
        rate: 5,
        price: 2999
    },
    {
        _id: 'phy04',
        category: 'Философия и религия',
        name: 'Конфуций. Луньюй. Изречения и афоризмы.',
        poster: posters.confucius,
        rate: 3,
        price: 38472
    },
    {
        _id: 'phy05',
        category: 'Философия и религия',
        name: 'Ницше. Воля к власти. Опыт переоценки всех ценностей.',
        poster: posters.nicshe,
        rate: 5,
        price: 16602
    }
]

export default booksApi