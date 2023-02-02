import React, { useState, useEffect } from "react";
import Head from "next/head";

const Review = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Review</title>
        <title name="title" content="Review"></title>
      </Head>
      <div>
        <h1>Review</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.slice(0, 20).map((res) => (
              <div key={res.id} className="review">
                {res.id}
                {`${res.body.slice(0, 90)}...`}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return {
    props: {
      reviews: data,
    },
  };
}
export default Review;
