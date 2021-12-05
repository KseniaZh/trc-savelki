import React from 'react';
import Article from './Article';

function About(props) {


    return (
        <div className='about_component'>

            <div className=''>
                <div className='about_component__header'>
                    <h2>{props.header_1}</h2>
                    <h2>{props.header_2}</h2>
                </div>

                <div className={`about_component__section ${props.classname}`}>
                    <div className='about_component__img'>
                        <img
                            src={props.foto}
                            alt={props.fotoAlt}
                        />
                    </div>
                    <div className='about_component__article'>
                        <h4>{props.articleHeader}</h4>
                        {
                            props.article.map((obj, index) => {
                                return <Article
                                    key={index}
                                    {...obj}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
             
        </div>
    )
}

export default About

