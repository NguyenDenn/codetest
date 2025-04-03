import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col text-center">
      <h1>Welcome to my code test</h1>
      <Link href="/test1">Test 1</Link>
      <Link href="/test2">Test 2</Link>
    </div>
  );
}
