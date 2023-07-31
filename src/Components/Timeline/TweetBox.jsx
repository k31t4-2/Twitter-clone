import { Avatar, Button } from "@mui/material";
import "../css/TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input type="text" placeholder="いまどうしてる？" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="画像のURLを入力"
        />
        <Button type="submit" className="tweetBox__tweetButton">
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
