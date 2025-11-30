import React from 'react'
import {Martini} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="parent">
        <div className="card">
            <img src={ props.image } alt="" />
            <div className='container'>
                <div className="destName">
                    <span>{ props.name }</span>
                </div>
                <div className="dscrptn">
                    <span>{ props.description }</span>
                </div>
                <div className="tags">    
                    <div className="tag1">
                        { props.icon }{ props.tag1 }
                    </div>
                    <div className="tag2">
                        { props.tag2 }
                    </div>
                </div>
                <button>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card