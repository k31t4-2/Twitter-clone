import { forwardRef } from 'react'
import '../css/TweetPost.css'
import { Avatar } from '@mui/material'

import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from '@mui/icons-material'

// eslint-disable-next-line react/display-name
const TweetPost = forwardRef((props, ref) => {
  const { displayName, userName, verified, text, avatar, image } = props

  return (
    <div className="tweetPost"ref={ref}>
      <div className="tweetPost__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="tweetPost__body">
        <div className="tweetPost__header">
          <div className="tweetPost__header-text">
            <h3 className="tweetPost__header-title">{displayName}</h3>
            <span className="tweetPost__header-special">
              <VerifiedUser verified={verified.toString()} className="tweetPost__badge" />@
              {userName}
            </span>
          </div>
          <div className="tweetPost__header-Desc">
            <p>{text}</p>
          </div>
        </div>
        {/* alt属性有りだと入力していないのに画像が出てくる */}
        <img src={image} />
        <div className="tweetPost__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  )
})

export default TweetPost
