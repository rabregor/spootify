import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DiscoverItem from './DiscoverItem';
import '../styles/_discover-block.scss';

function scrollContainer(id, { isNegative } = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    const amount = isNegative ? -scrollableContainer.offsetWidth : scrollableContainer.offsetWidth;
    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

function DiscoverBlock({ text, id, data, imagesKey = 'images' }) {
  const DiscoverContainerScroll = () =>
  <div className="discover-block"> 
    <div className="discover-block__header">
          <h2>{text}</h2>
          <span />
          {
              data.length ? (
              <div className="animate__fadeInRightBig">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={scrollContainer(id, { isNegative: true })}
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={scrollContainer(id)}
                />
              </div>
            ) : null
          }
      </div> </div>;

  const DiscoverBlockContent = () =>
    <div className="discover-block__row" id={id}>
    {data.map(({ [imagesKey]: images, name, uri }) => (
      <DiscoverItem key={id} images={images} name={name} track={uri}  />
    ))}
  </div>;
  
  return (
    <>
    <DiscoverContainerScroll />
    <DiscoverBlockContent />
    </>
  );
}
export default DiscoverBlock;
/* backup
function scrollContainer(id, { isNegative } = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    const amount = isNegative ? -scrollableContainer.offsetWidth : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

export default function DiscoverBlock({text, id, data, imagesKey = 'images' }) {
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        {
          data.length ? (
            <div className="animate__fadeInRightBig">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={scrollContainer(id, { isNegative: true })}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollContainer(id)}
              />
            </div>
          ) : null
        }
      </div>
      <div className="discover-block__row" id={id}>
        {data.map(({ [imagesKey]: images, name, uri }) => (
          <DiscoverItem key={id} images={images} name={name} track={uri}  />
        ))}
      </div>
    </div>
  );
}
*/
