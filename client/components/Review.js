import React from 'react'

export default function Review({review}) {
  console.log('REVIEWS!!', review)
  return (
    <div className="media-left">
      <h5>{review.subject}</h5>
      <div className="media-body">
        <p> {review.content}</p>
      </div>
    </div>
  )
}
