import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testData } from "@/lib/data";

export default function AdminDashboard() {
  const { books, speeches } = testData;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">داشبورد مدیریت</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>تعداد کتاب‌ها</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{books.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>تعداد سخنرانی‌ها</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{speeches.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>بازدید امروز</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">۱۲۳</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">آخرین فعالیت‌ها</h2>
        <div className="space-y-4">
          <div className="bg-muted/40 p-4 rounded-lg">
            <p>کتاب جدید "راز موفقیت در کسب و کار" اضافه شد</p>
            <p className="text-sm text-muted-foreground">۲ ساعت پیش</p>
          </div>
          <div className="bg-muted/40 p-4 rounded-lg">
            <p>سخنرانی "سمینار موفقیت در کسب و کار" بروزرسانی شد</p>
            <p className="text-sm text-muted-foreground">۵ ساعت پیش</p>
          </div>
        </div>
      </div>
    </div>
  );
}