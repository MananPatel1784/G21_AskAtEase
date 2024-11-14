import React from 'react';
import art from './Assets/art.jpg';
import mob from './Assets/mobile.avif';
import stock from './Assets/stock.avif';
import quote from './Assets/quotes.png';
import frd from './Assets/friedrich.webp';
import a from './Assets/architectural.webp';

function WidgetContent() {
  const contentData = [
    {
      title: 'Mobile App Programmer',
      description: 'The best Mobile App Development Company',
      imgSrc: mob,
    },
    {
      title: 'Quota of Quotes',
      description: 'Daily dosage of unforgettable lines from ...',
      imgSrc: quote,
    },
    {
      title: 'Art & Artist',
      description: 'A Space related to creating, practicing an...',
      imgSrc: art,
    },
    {
      title: 'Friedrich Nietzche',
      description: 'A Space dedicated to great work of Friedrich...',
      imgSrc: frd,
    },
    {
      title: 'Stock Market Strategies',
      description: 'Everything about investing in Stock...',
      imgSrc: stock,
    },
    {
      title: 'Architecture World',
      description: 'All about civil architecture...',
      imgSrc: a,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {contentData.map((content, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            marginBottom: '10px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            overflow: 'hidden',
          }}
        >
          <img
            style={{ width: 151 }}
            src={content.imgSrc}
            alt={content.title}
          />
          <div style={{ padding: '10px' }}>
            <h5
              style={{
                color: 'rgb(80, 80, 80)',
                fontSize: '15px',
                letterSpacing: '1.1px',
                margin: 0,
              }}
            >
              {content.title}
            </h5>
            <p style={{ color: 'gray', margin: 0 }}>{content.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WidgetContent;