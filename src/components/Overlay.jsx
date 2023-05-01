import React from 'react';
import './styles/overlay.css'

function Overlay({ channel, status }) {
  const backgroundImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1),  rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${channel.img})`
  };

  if (!status) {
    return (
      <div style={backgroundImage} className="overlay overlay--paused" />
    );
  }
}

export default React.memo(Overlay);
