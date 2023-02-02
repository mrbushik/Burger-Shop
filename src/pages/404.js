import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const notFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>This page was not found</h2>
      <p>
        Go to the<Link href="/"> main page</Link> in 3 seconds
      </p>
    </div>
  );
};

export default notFoundPage;
