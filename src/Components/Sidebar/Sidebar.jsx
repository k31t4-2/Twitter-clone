import TwitterIcon from '@mui/icons-material/Twitter'
import SidebarMenu from './SidebarMenu'
import HomeIcon from '@mui/icons-material/Home'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import NotificationsIcon from '@mui/icons-material/Notifications'
import EmailIcon from '@mui/icons-material/Email'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import PersonIcon from '@mui/icons-material/Person'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Button } from '@mui/material'

import "../css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon className="sidebar__twitterIcon" />

      {/* propsを渡していく */}
      <SidebarMenu text="HOME" Icon={HomeIcon} active/>
      <SidebarMenu text="話題を検索" Icon={ZoomOutIcon} />
      <SidebarMenu text="通知" Icon={NotificationsIcon} />
      <SidebarMenu text="メッセージ" Icon={EmailIcon} />
      <SidebarMenu text="リスト" Icon={TextSnippetIcon} />
      <SidebarMenu text="認証済み" Icon={CheckCircleOutlineIcon} />
      <SidebarMenu text="プロフィール" Icon={PersonIcon} />
      <SidebarMenu text="もっと見る" Icon={MoreHorizIcon} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        ツイートする
      </Button>
    </div>
  )
}

export default Sidebar
