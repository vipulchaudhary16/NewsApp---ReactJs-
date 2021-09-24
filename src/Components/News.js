import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spiner';
// impt
// import PropTypes from 'prop-types'



export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'science'
    }

    // static PropTypes = {
    //     country: PropTypes.string,
    //     pageSize : PropTypes.number
    // }

    articles = [
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": "Zee Media Bureau",
            "title": "LIVE: President Ram Nath Kovind inaugurates Ramayana Conclave in Ayodhya - Zee News",
            "description": "LIVE: President Ram Nath Kovind inaugurates Ramayana Conclave in Ayodhya",
            "url": "https://zeenews.india.com/india/live-updates/breaking-latest-live-news-updates-covid-19-coronavirus-narendra-modi-mann-ki-baat-afghanistan-taliban-united-states-monsoon-imd-rainfall-2389371",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2021/08/29/965581-untitled-design-2021-08-29t140436.385.jpg",
            "publishedAt": "2021-08-29T10:21:57Z",
            "content": "29 August 2021, 15:51 PM\r\nAyodhya: President Ram Nath Kovind and his family members Sunday offered prayers to Ram Lalla at a makeshift temple in Ayodhya. The president also planted a sapling and was … [+16432 chars]"
        },
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 38
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153e324c9b5847f58a17aae8fe1569a2&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        })
        console.log(this.state.page)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153e324c9b5847f58a17aae8fe1569a2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        console.log(this.state.page)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153e324c9b5847f58a17aae8fe1569a2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }
    render() {
        return (
            <div className="container my-3" >
                <h2 className="text-center text-light">News Nodes : Top Headlines</h2>
                {/* It will show the spinner only when the loading state is true */}
                {this.state.loading && <Spinner />}
                <div className="row ">
                    {/* When loading is not true , data will be shown */}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between ">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark my-3" onClick={this.handlePrevClick}>&larr;Previous </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" class="btn btn-dark my-3" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
