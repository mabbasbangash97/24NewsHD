// import Image from "next/image";
// import Link from "next/link";

// interface NewsCardProps {
//   category: string;
//   title: string;
//   imageUrl?: string;
//   href: string;
// }

// export function NewsCard({ category, title, href }: NewsCardProps) {
//   return (
//     <Link href={href} className="block w-[300px] flex-shrink-0">
//       <div className="relative group bg-[#002B59] rounded-lg overflow-hidden shadow-lg">
//         <div className="relative h-[200px] w-full">
//           <Image
//             src={
//               "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/640px-Googleplex_HQ_%28cropped%29.jpg"
//             }
//             alt={title}
//             fill
//             className="object-cover transition-transform group-hover:scale-105"
//           />
//         </div>
//         <div className="p-4">
//           <div className="text-sm font-medium text-blue-300 mb-2">
//             {category}
//           </div>
//           <h3 className="text-lg font-bold leading-tight text-white">
//             {title}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );
// }

import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  category: string;
  title: string;
  imageUrl?: string;
  href: string;
}

export function NewsCard({ category, title, href }: NewsCardProps) {
  return (
    <Link href={href} className="block w-[300px] flex-shrink-0">
      <div className="relative group h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-1 hover:shadow-xl">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/640px-Googleplex_HQ_%28cropped%29.jpg"
          }
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-sm font-medium text-blue-300 mb-2">
            {category}
          </div>
          <h3 className="text-xl font-bold leading-tight text-white">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
