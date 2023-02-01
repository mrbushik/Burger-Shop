import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Main</h1>
      <Link href="/burgers">All Burgers</Link>
    </>
  );
}
