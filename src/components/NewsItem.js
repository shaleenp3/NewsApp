import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, author, publishedAt, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} published on {new Date(publishedAt).toGMTString()} </small></p>
            <a
              href={url}
              target="_blank"
              className="btn btn-sm btn-primary"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
