import React from 'react';
import about_1 from '../../img/about_1.png';
import about_2 from '../../img/about_2.png';
import about_3 from '../../img/about_3.jpg';
import about_4 from '../../img/about_4.jpg';
import About from '../../components/Sections/About';

import about_5 from '../../img/4.png';

function AboutUs(props) {

    const state = [
        {
            header_1: ' ',
            header_2: '',
            slogan: 'СТАТУС: ЗАКРЫТ',
            foto: about_2,
            fotoAlt: '',
            articleHeader: '',
            article: [
                {
                    articleName: 'GBA 15 300 м2',
                    article_text: [],
                },
                {
                    articleName: '',
                    article_text: [],
                },
                {
                    articleName: 'Этажность',
                    article_text: ['4 надземных (торговые)', '1 цокольный (торговый)', '1 подземный (паркинг)'],
                },
                {
                    articleName: 'Паркинг',
                    article_text: ['55 м/м наземный', '61 м/м подземный', '800  м/м наземный (общий)'],
                }
            ],
            classname: 'block_foto_left',
  
        },
        {
            header_1: ' ',
            header_2: '',
            slogan: 'ЗАПУСК II кв. 2022г.',
            foto: about_5,
            fotoAlt: '',
            articleHeader: '',
            article: [
                {
                    articleName: 'GLA 10 975 м2',
                    article_text: [],
                },
                {
                    articleName: 'Изменение позиционирования:',
                    article_text: ['Обновление и новое зонирование галерей', 'Новый дизайн интерьеров'],
                },
                {
                    articleName: 'Реконструкция здания, включая:',
                    article_text: ['замена рекламных конструкций, подсветки фасадов', 'изменена схема движения транспорта на территории'],
                },
                {
                    articleName: 'Полное обновление состава арендаторов',
                    article_text: ['Кроме торговой составляющей появятся социальные, спортивные и развлекательные направления', 'новое ресторанное пространство'],
                }
            ],
            classname: 'block_foto_right',

        },
        {
            header_1: 'прогнозный трафик — 220 000 - 240 000 чел. в месяц',
            header_2: '',
            slogan: '',
            foto: about_3,
            fotoAlt: '',
            articleHeader: '',
            article: [
                {
                    articleName: 'СПЕЦИАЛИЗАЦИЯ',
                    article_text: ['торгово-общественный центр'],
                },
                {
                    articleName: 'ПОЗИЦИОНИРОВАНИЕ',
                    article_text: ['ориентирован на посетителей со средним доходом'],
                },
                {
                    articleName: '',
                    article_text: [],
                },
                {
                    articleName: '',
                    article_text: [],
                }
            ],
            classname: 'block_foto_left',

        },
        {
            header_1: 'особенности проекта',
            header_2: '',
            slogan: '',
            foto: about_4,
            fotoAlt: '',
            articleHeader: '',
            article: [
                {
                    articleName: '',
                    article_text: [
                        'В Торговом центре Савелки будет сосредоточен самый большой в городе состав детских развивающих концепций (языковые школы, школы танцев, спортивные школы, дошкольные подготовительные курсы, школы рисования и творчества, зона мастер-классов и т.д.) ',
                        'Будет представлен фитнес с современным оборудованием.',
                        'Рестораны, ориентированные на детей и семейный отдых.',
                        'Также ТК будет включать в себя продуктовый супермаркет, магазин бытовой техники и электроники, группу товаров для дома, косметика и парфюмерия, сопутствующие товары.',
                    ],
                },
                {
                    articleName: '',
                    article_text: [],
                },
                {
                    articleName: '',
                    article_text: [],
                },
                {
                    articleName: '',
                    article_text: [],
                }
            ],
            classname: 'block_foto_right',

        },
        //{
        //    header_1: '',
        //    header_2: '',
        //    slogan: '',
        //    foto: about_1,
        //    fotoAlt: '',
        //    articleHeader: '',
        //    article: [
        //        {
        //            articleName: '',
        //            article_text: [],
        //        },
        //        {
        //            articleName: '',
        //            article_text: [],
        //        },
        //        {
        //            articleName: '',
        //            article_text: [],
        //        },
        //        {
        //            articleName: '',
        //            article_text: [],
        //        }
        //    ],
        //    classname: 'block_foto_right',

        //},
    ]

    return (
        <div className='section_about_us__wrapper'>
            {
                state.map((obj, index) => {
                    return <About
                        key={index}
                        {...obj}
                    />
                })
            }
            
        </div>
    )
}

export default AboutUs

