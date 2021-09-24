import React, { Component } from 'react'

import logoDef from '../Logo.png';

export class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsId, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card bg-dark text-white border border-white">
                    <img style={{ "height": "210px" }} src={imgUrl ? imgUrl : logoDef} className="card-img-top" alt="Can't Load This photo🤔" />
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-light text-dark" style={{ left: '90%', zIndex: '1' }}> {source}</span>
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a href={newsId} target="blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
