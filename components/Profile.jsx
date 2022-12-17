import Image from "next/image";
import profilePicture from "../assets/profile_picture.svg";
import { user } from "../data/user.js";

const Profile = ({ name, username, pfp }) => {
  return (
    <div className="flex mb-5 items-center justify-between">
      <Image
        width={50}
        height={50}
        src={profilePicture}
        className="h-20 rounded-full mr-2 hover:opacity-60 transition-opacity"
        alt="User profile"
      />
      <div className="hidden xl:flex flex-col mr-2">
        <p>{user.name}</p>
        <p>@{user.username}</p>
      </div>
    </div>
  );
};

export default Profile;
