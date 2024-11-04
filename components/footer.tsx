import { Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="mailto:contact@example.com">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              تلفن تماس: 09146543959
            </p>
            <p className="text-sm text-muted-foreground">آدرس: مراغه</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
