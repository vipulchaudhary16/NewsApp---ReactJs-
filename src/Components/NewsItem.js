import React, { Component } from 'react'

import logoDef from '../Logo.png';

export class NewsItem extends Component {
    
    render() {
        let { title, description , imgUrl , newsId } = this.props;
        return (
            <div className="my-3">
                <div className="card bg-dark text-white border border-white">
                    <img src={imgUrl ? imgUrl : logoDef} className="card-img-top" alt="Can't Load This photo🤔" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsId} target="blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
