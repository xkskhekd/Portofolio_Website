import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-accent text-6xl font-bold mb-4">404</p>
      <h1 className="font-heading text-2xl font-semibold mb-3">
        Halaman tidak ditemukan
      </h1>
      <p className="text-text-dim font-body mb-8 max-w-sm">
        Sepertinya sinyal terputus di sini. Halaman yang Anda cari tidak ada.
      </p>
      <Link
        href="/"
        className="bg-accent text-background font-heading font-semibold px-6 py-3 rounded-lg hover:bg-accent-dim transition-colors"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}