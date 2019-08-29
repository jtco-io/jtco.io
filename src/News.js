import React from 'react';
import './News.css';

function FakeNews() {
  function news(count=10) {

  }
  return (
    <div>Fake News</div>
  )
}

function News() {
  return (
    <div className="News">
      <FakeNews/>
    </div>
  );
}

export default News;
