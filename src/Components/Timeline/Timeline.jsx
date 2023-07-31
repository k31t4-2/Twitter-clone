// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../css/Timeline.css";
import TweetBox from './TweetBox';
import TweetPost from './TweetPost';

const Timeline = () => {
  return (
    <div className="timeline">
      {/* header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* tweet */}
      <TweetBox />
      {/* post contents */}
      <TweetPost
        displayName="関本圭汰"
        userName="camp_is_beer"
        verified={true}
        text="twitter クローン作成中"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random"
      />
    </div>
  )
}

export default Timeline
