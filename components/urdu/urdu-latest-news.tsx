import Image from "next/image";
import Link from "next/link";

interface UrduLatestNewsCardProps {
  title: string;
  imageUrl: string;
  timestamp: string;
  href: string;
}

export function UrduLatestNewsCard({
  title,
  imageUrl,
  timestamp,
  href,
}: UrduLatestNewsCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="relative aspect-[4/3] rounded-t-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2 text-right">
        <time className="text-sm text-blue-600 font-medium">{timestamp}</time>
        <h3 className="font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
      </div>
    </Link>
  );
}
