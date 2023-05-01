import React from 'react';

function Channel({ channel, activeChannel, switchChannel }) {
  const handleClick = (event) => {
    event.preventDefault();
    switchChannel(channel);
  };

  return (
    <div
      className={`channel-container ${channel.name === activeChannel.name ? 'channel--active': '' }`}
      onClick={handleClick}
    >
      <i className={`channel__icon fa-solid fa-caret-right ${channel.name === activeChannel.name ? 'channel__icon--active' : ''}`} />
      <div
        className={`channel channel--shadow ${channel.name === activeChannel.name ? 'channel--active' : ''}`}
        href="#"
        onClick={handleClick}
      >
        {channel.name}
      </div>
    </div>
  );
}

export default React.memo(Channel);
