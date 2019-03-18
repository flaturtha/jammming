import React from 'react';
import './Track.css';

class Track extends React.Component {

  renderAction(isRemoval) {
    return (isRemoval ? '-' : '+');
  }

  render() {
    return (
      <div>
        <div class="Track">
          <div class="Track-information">
            <h3>Tiny Dancer</h3>
            <p>Elton John | Madman Across The Water</p>
          </div>
          <a class="Track-action">+</a>
        </div>

        <div class="Track">
          <div class="Track-information">
            <h3>Tiny Dancer</h3>
            <p>Tim McGraw | Love Story</p>
          </div>
          <a class="Track-action">+</a>
        </div>
        
        <div class="Track">
          <div class="Track-information">
            <h3>Tiny Dancer</h3>
            <p>Rockabye Baby! | Lullaby Renditions of Elton John</p>
          </div>
          <a class="Track-action">+</a>
        </div>
      </div>
    )
  }
};

export default Track;