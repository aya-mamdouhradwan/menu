import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - الصفحة غير موجودة</h1>
      <p>الصفحة المطلوبة غير موجودة.</p>
      <Link href="/" style={{ color: "var(--foreground)", textDecoration: "underline" }}>
        العودة للرئيسية
      </Link>
    </div>
  );
}
