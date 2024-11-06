import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// این دیتا در واقعیت از یک API یا دیتابیس گرفته می‌شود
const books = [
  {
    id: 1,
    title: "اسطوره‌های تاریخ مقاومت ایران (جلد ۱)",
    description: "بررسی تاریخ مقاومت ایران در برابر تهاجمات خارجی",
    image: "/images/book1.jpg",
    detailsLink: "/books/1",
    buyLink: "https://example.com/buy/1",
  },
  {
    id: 2,
    title: "یادهای نیک (جلد ۱)",
    description: "خاطرات رزمندگان دفاع مقدس",
    image: "/images/book2.jpg",
    detailsLink: "/books/2",
    buyLink: "https://example.com/buy/2",
  },
  {
    id: 3,
    title: "عمری که مرا داده شده بر زمین چنین گذشت (جلد ۳)",
    description: "زندگی‌نامه و خاطرات نویسنده",
    image: "/images/book3.jpg",
    detailsLink: "/books/3",
    buyLink: "https://example.com/buy/3",
  },
];

export default function BookList() {
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
          کتاب‌های سید محمدرضا موسوی‌نژاد
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-w-2 aspect-h-3 mb-4">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={150}
                    height={200}
                    className="object-cover rounded-md"
                  />
                </div>
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "Shabnam, sans-serif" }}
                >
                  {book.title}
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ fontFamily: "Shabnam, sans-serif" }}
                >
                  {book.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between p-4">
                <Button asChild>
                  <Link href={book.detailsLink}>جزئیات بیشتر</Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={book.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    خرید کتاب
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
