import { Avatar, Button } from '@mui/material'
import { useState } from 'react'
import { collection,addDoc, serverTimestamp } from "firebase/firestore";

import '../css/TweetBox.css'
import db from '../../firebase';


const TweetBox = () => {
  const [tweetText, setTweetText] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const onChangeTweetText = (e) => {
    setTweetText(e.target.value)
  }

  const onChangeTweetImage = (e) => {
    setTweetImage(e.target.value)
  }

  // ボタンがクリックされたら、firebaseのDBにツイート内容を送る
  const sendTweet = (e) => {
    if (tweetText === "") return; //テキストが入っていないと送信できない
    e.preventDefault();
    addDoc(collection(db, 'posts'), {
      displayName: '関本圭汰',
      userName: 'Keita Sekimoto',
      verified: true,
      text: tweetText,
      avatar: 'http://shincode.info/wp-content/uploads/2021/12/icon.png',
      image: tweetImage,
      timestamp:serverTimestamp()
    })

    setTweetText("")
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            type="text"
            placeholder="いまどうしてる？"
            value={tweetText}
            onChange={onChangeTweetText}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="画像のURLを入力"
          value={tweetImage}
          onChange={onChangeTweetImage}
        />

        <Button
          type="submit"
          className="tweetBox__tweetButton"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
