import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { testData } from "@/lib/data";

export default function Home() {
  const { author, books, latestNews } = testData;

  return (
    <div className="container py-8">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
        <Image
          src={latestNews.image}
          alt={latestNews.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 p-8 flex items-end">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-2">{latestNews.title}</h2>
            <p className="mb-4">{latestNews.description}</p>
            <Link href={latestNews.link}>
              <Button variant="secondary">مشاهده کتاب</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-4">درباره من</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          {author.bio}
        </p>
        <Link href="/about">
          <Button>می‌خواهم بیشتر بدانم</Button>
        </Link>
      </section>

      {/* Recent Books */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8 text-center">کتاب‌های اخیر</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Card key={book.id}>
              <CardHeader>
                <div className="relative h-[200px] w-full mb-4">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>{book.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {book.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/books/${book.id}`} className="w-full">
                  <Button className="w-full">توضیحات بیشتر</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
