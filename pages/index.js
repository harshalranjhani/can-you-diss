import Link from "next/link";

const index = () => {
  return (
    <div className="w-screen  text-center ">
      <p className="text-7xl font-extrabold">Can You Diss</p>
      <ul className="tex-lg">
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href={"/register"}>register</Link>
        </li>
      </ul>
    </div>
  );
};

export default index;
