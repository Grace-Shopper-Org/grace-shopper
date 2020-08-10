import React from 'react'

export default function Review({review}) {
  console.log('REVIEWS!!', review)
  return (
    <div className="single-review">
      <div className="review-subject">
        <b>{review.subject}</b>
      </div>
      <div className="review-body"> {review.content}</div>
    </div>
  )
}
