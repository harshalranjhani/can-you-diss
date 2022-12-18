import Link from "next/link";

const TagUser = ({ username }) => {
  return (
    <Link
      className="font-semibold text-twit-blue hover:underline transition-all duration-300"
      href={`/profile/${username}`}
    >
      @{username}
    </Link>
  );
};

export default TagUser;
