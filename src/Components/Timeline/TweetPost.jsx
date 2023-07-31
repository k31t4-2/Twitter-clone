import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from '@mui/icons-material'

import '../css/TweetPost.css'
import { Avatar } from '@mui/material'

const TweetPost = (props) => {

  const {
    displayName,
    userName,
    verified,
    text,
    avatar,
    image
  } = props

  return (
    <div className="tweetPost">
      <div className="tweetPost__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="tweetPost__body">
        <div className="tweetPost__header">
          <div className="tweetPost__header-text">
            <h3 className="tweetPost__header-title">{displayName}</h3>
            <span className="tweetPost__header-special">
              <VerifiedUser verified={verified} className="tweetPost__badge" />
              @{userName}
            </span>
          </div>
          <div className="tweetPost__header-Desc">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="画像" />
        <div className="tweetPost__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default TweetPost
