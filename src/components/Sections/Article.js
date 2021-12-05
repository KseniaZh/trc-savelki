import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


function Article(props) {


    return (
        <div className='article'>

            <h3>{props.articleName}</h3>
            {
                props.article_text.map((item, index) => {
                    return <div key={index}>
                                <FontAwesomeIcon icon={faCircle} className='iconCircle' />
                                {item}
                            </div>
                })
            }
             
        </div>
    )
}

export default Article

