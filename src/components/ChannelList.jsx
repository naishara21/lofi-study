import React from 'react';
import Channel from './Channel';

function ChannelList({ channelList, activeChannel, switchChannel }) {
  const renderList = () => {
    return channelList.map((channel) => {
      return (
        <Channel
          key={channel.name}
          channel={channel}
          activeChannel={activeChannel}
          switchChannel={switchChannel}
        />
      );
    });
  };

  return (
    <div className="channelList">
      {renderList()}
    </div>
  );
}

export default React.memo(ChannelList);
