import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="!text-5xl">Page not found</h1>
        <p className="mt-4 text-muted">That page does not exist. Head back to the portfolio.</p>
        <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
      </div>
    </main>
  );
}
