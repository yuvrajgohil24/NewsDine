import React from 'react'

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className='my-3'>
      <div className="card" >
        <img src={imageUrl ? imageUrl : "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItems