import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <p>404!! Could not find requested resource (Not Custom Style Yet)</p>
      <p>
        View <Link href="/">all posts</Link>
      </p>
    </div>
  );
}
