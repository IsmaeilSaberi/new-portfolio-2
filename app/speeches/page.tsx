import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon, VideoIcon } from "lucide-react";

// این دیتا در واقعیت از یک API یا دیتابیس گرفته می‌شود
const speeches = [
  {
    id: 1,
    title: "نقش رسانه در دفاع مقدس",
    date: "۱۴۰۲/۰۶/۳۱",
    location: "دانشگاه تهران",
    image: "/images/book1.jpg",
    description:
      "بررسی تأثیر رسانه‌ها در شکل‌گیری افکار عمومی در دوران دفاع مقدس",
    detailsLink: "/speeches/1",
    videoLink: "https://example.com/video/1",
  },
  {
    id: 2,
    title: "ادبیات پایداری در ایران معاصر",
    date: "۱۴۰۲/۰۷/۱۵",
    location: "فرهنگسرای ارسباران",
    image: "/images/book1.jpg",
    description:
      "مروری بر سیر تحول ادبیات پایداری در ایران از انقلاب اسلامی تا کنون",
    detailsLink: "/speeches/2",
    videoLink: "https://example.com/video/2",
  },
  {
    id: 3,
    title: "خاطره‌نگاری در ادبیات جنگ",
    date: "۱۴۰۲/۰۸/۰۳",
    location: "کتابخانه ملی ایران",
    image: "/images/book1.jpg",
    description: "اهمیت و روش‌های خاطره‌نگاری در ثبت وقایع دفاع مقدس",
    detailsLink: "/speeches/3",
    videoLink: "https://example.com/video/3",
  },
];

export default function SpeechesPage() {
  return (
    <div
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-3xl font-bold text-gray-900 mb-6 text-right"
          style={{ fontFamily: "Shabnam, sans-serif" }}
        >
          سخنرانی‌های سید محمدرضا موسوی‌نژاد
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speeches.map((speech) => (
            <Card key={speech.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <Image
                    src={speech.image}
                    alt={speech.title}
                    width={300}
                    height={200}
                    className="object-cover rounded-md"
                  />
                </div>
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "Shabnam, sans-serif" }}
                >
                  {speech.title}
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ fontFamily: "Shabnam, sans-serif" }}
                >
                  {speech.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarIcon className="h-4 w-4 ml-2" />
                  <span style={{ fontFamily: "Shabnam, sans-serif" }}>
                    {speech.date}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPinIcon className="h-4 w-4 ml-2" />
                  <span style={{ fontFamily: "Shabnam, sans-serif" }}>
                    {speech.location}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-4">
                <Button asChild>
                  <Link href={speech.detailsLink}>
                    <span style={{ fontFamily: "Shabnam, sans-serif" }}>
                      اطلاعات بیشتر
                    </span>
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={speech.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <VideoIcon className="h-4 w-4 ml-2" />
                    <span style={{ fontFamily: "Shabnam, sans-serif" }}>
                      مشاهده فیلم
                    </span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
