import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  return (
    <div>
      <h1>Coffee Store {id}</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
