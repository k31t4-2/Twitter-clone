import "../css/SidebarMenu.css";

function SidebarMenu(props) {

  const {
    Icon,
    text,
    active,
   } = props;
  return (
    <>
      <div className={`sidebarMenu ${active && "sidebarMenu-active" }`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </>
  )
}

export default SidebarMenu

