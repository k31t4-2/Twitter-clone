// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import '../css/Timeline.css'
import TweetBox from './TweetBox'
import TweetPost from './TweetPost'

import db from '../../firebase'
import {
  collection,
  // doc,
  // getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'

import FlipMove from 'react-flip-move';

const Timeline = () => {
  // useState --------------------------------------------
  // 格納したデータをmap関数で取り出していくので配列にしておく
  const [posts, setPosts] = useState([])

  // useEffect ------------------------------------------
  useEffect(() => {
    const postData = collection(db, 'posts')
    const q = query(postData, orderBy('timestamp', 'desc'))
    // リアルタイムではないデータの取得方法
    // getDocs(q).then((QuerySnapshot) => {
    //   setPosts(QuerySnapshot.docs.map((doc) => doc.data()))
    // })

    // リアルタイムでデータを取得方法
    onSnapshot(q, (QuerySnapshot) => {
      setPosts(QuerySnapshot.docs.map((doc) => doc.data()))
    })
  }, [])
  // ↑↑↑ 最初にリロードした時だけデータを取得してくる
  // useEffectでコントロールしていないと、通常は毎回リロードするたびに取得される

  return (
    <div className="timeline">
      {/* header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* tweet */}
      <TweetBox />
      {/* post contents */}
      <FlipMove>
        {posts.map((post) => (
          <TweetPost
            key={post.text} //同一のkeyを設定するとエラーになるので、応急処置としてtextを設定しておく
            // 改善点として、ライブラリのuuidなどを設定してあげる
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Timeline
