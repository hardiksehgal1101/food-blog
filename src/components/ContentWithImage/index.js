import React from 'react'
import "./styles.css"
import img5 from "./../../images/5.jpg"

const ContentWithImage = () => {
    return (
        <div className="content__container">
            <div className="bg__image">
                <img className="big__image" src={img5} alt="" />
                </div>
                <div className="description" >
<h1>
Lorem ipsum doler Lorem ipsum doler Lorem ipsum doler Lorem ipsum doler
</h1>
<p>
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler

Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
Lorem ipsum doler
</p>
                </div>
            
        </div>
    )
}

export default ContentWithImage
