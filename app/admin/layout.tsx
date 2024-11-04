import { redirect } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // در حالت واقعی، اینجا باید احراز هویت انجام شود
  const isAuthenticated = true;

  if (!isAuthenticated) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-l bg-muted/40 p-4">
        <nav className="space-y-2">
          <h2 className="mb-4 text-lg font-bold">پنل مدیریت</h2>
          <a href="/admin" className="block p-2 hover:bg-muted rounded-md">داشبورد</a>
          <a href="/admin/books" className="block p-2 hover:bg-muted rounded-md">مدیریت کتاب‌ها</a>
          <a href="/admin/speeches" className="block p-2 hover:bg-muted rounded-md">مدیریت سخنرانی‌ها</a>
          <a href="/admin/profile" className="block p-2 hover:bg-muted rounded-md">پروفایل</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}