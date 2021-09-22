import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description , imgUrl , newsId } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem"}}>
                    <img src={imgUrl===null?"https://source.unsplash.com/1600x900/?news,india":imgUrl} className="card-img-top" alt="..." />
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
