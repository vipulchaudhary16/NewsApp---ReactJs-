import React, { Component } from "react";
import logoDef from "../Logo.png";
import '../App.css';

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } =
            this.props;
        return (
            <div className="my-3">
                <div className="card bg-dark text-white border border-white">
                    <div className="d-flex justify-content-end position-absolute ">
                        <span className="badge bg-light text-dark">{source}</span>
                    </div>
                    <div className="img-div">
                        <img
                            style={{ height: "210px" }}
                            src={imgUrl ? imgUrl : logoDef}
                            className="card-img-top"
                            alt=" "
                        />
                    </div>

                    <div className="card-body">
                        <h5 className="title">{title}</h5>
                        <div className="desc-div">
                            <p className="description">{description}</p>
                        </div>
                        <div className="author-txt">
                            <p className="">
                                <small className="text-muted">
                                    By {!author ? "Unknown" : author} on{" "}
                                    {new Date(date).toGMTString()}
                                </small>
                            </p>
                        </div>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
