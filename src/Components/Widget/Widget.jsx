// eslint-disable-next-line no-unused-vars
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'
import { Search } from '@mui/icons-material'
import React from 'react'

import "../css/Widget.css";

const Widget = () => {
  return (
    <>
      <div className="widgets">
        <div className="widgets__input">
          <Search className="widgets__input-searchIcon" />
          <input type="text" placeholder="キーワード検索" />
        </div>
        <div className="widgets__widgetsContainer">
          <h2>いまどうしてる？</h2>
          {/* 以下はタイムラインのライブラリを追加・追記していく */}

          <TwitterTweetEmbed tweetId={'1684825664703336448'} />

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="camp_is_beer"
            options={{ height: 400 }}
          />

          <TwitterShareButton
            url={'https://twitter.com/camp_is_beer'}
            options={{ text: '#Reactの勉強中です!', via: 'camp_is_beer' }}
          />
        </div>
      </div>
    </>
  )
}

export default Widget
