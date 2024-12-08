import Image from "next/image";
import Link from "next/link";

interface LatestNewsCardProps {
  title: string;
  imageUrl?: string;
  timestamp: string;
  href: string;
}

export function LatestNewsCard({
  title,
  //   imageUrl,
  timestamp,
  href,
}: LatestNewsCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/640px-Googleplex_HQ_%28cropped%29.jpg"
          }
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <time className="text-sm text-blue-300">{timestamp}</time>
        <h3 className="font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
