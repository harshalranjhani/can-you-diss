import { useRouter } from "next/router";

const DetailPost = () => {
  const router = useRouter();
  const slug = router.query.id;
  return <div>{slug}</div>;
};

export default DetailPost;
