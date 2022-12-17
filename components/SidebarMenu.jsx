import { outlinedIcons } from "../assets/icons";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const SidebarMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center xl:items-start xl:w-[300px]">
      <div className="space-y-6 xl:space-y-4 w-full flex flex-col items-center justify-center">
        <div className="sidebar-menu-item mt-4">
          <outlinedIcons.Home sx={{ fontSize: "28px" }} />
          <h2 className="sidebar-text-item">Home</h2>
        </div>
        <div className="sidebar-menu-item">
          <outlinedIcons.Notification sx={{ fontSize: "28px" }} />
          <h2 className="sidebar-text-item">Notifications</h2>
        </div>
        <div className="sidebar-menu-item">
          <AccountCircleOutlinedIcon sx={{ fontSize: "28px" }} />
          <h2 className="sidebar-text-item">Profile</h2>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
