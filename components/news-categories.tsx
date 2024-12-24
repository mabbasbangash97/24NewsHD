import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  title: string;
  image?: string;
  category?: string;
  href: string;
}

interface NewsCategoryProps {
  title: string;
  news: NewsItem[];
}

function NewsCategory({ title, news }: NewsCategoryProps) {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-blue-600 pl-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-6">
        {news.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group flex items-start gap-4"
          >
            {item.image && (
              <div className="relative w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function NewsCategories() {
  const categories = [
    {
      title: "PAKISTAN",
      news: [
        {
          title:
            "Plane carrying 318 stranded Pakistanis in Syria lands in Pakistan",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ACbrBQX3r5tmGEbHdPFdGE2QaxOEakW27A&s",

          href: "#",
        },
        {
          title:
            "Govt welcomes PTI's 'softened stance' on dialogue with a pinch of salt",
          href: "#",
        },
        {
          title:
            "PTI can't get 'Faizyab' anymore, says Sherry Rehman as govt, opposition trade barbs in Senate",
          href: "#",
        },
      ],
    },
    {
      title: "WORLD",
      news: [
        {
          title: "Biden pardons 39 people, commutes sentences of 1,500 others",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title:
            "UK aims to boost home-schooling safety after Sara Sharif's murder",
          href: "#",
        },
        {
          title:
            "Time magazine names President-elect Trump 'Person of the Year'",
          href: "#",
        },
      ],
    },
    {
      title: "SPORTS",
      news: [
        {
          title:
            "Aqib Javed named interim red-ball head coach after Gillespie's resignation",
          image:
            "https://media.newyorker.com/photos/5d323dcb58d95300082987d3/master/pass/SundayReading-Primary.jpg",
          href: "#",
        },
        {
          title:
            "South Africa's Nortje ruled out of white-ball series against Pakistan",
          href: "#",
        },
        {
          title: "'No deal yet' for cricket's Champions Trophy format",
          href: "#",
        },
      ],
    },
    {
      title: "TECHNOLOGY",
      news: [
        {
          title:
            "WhatsApp working on exciting translating feature for chat messages",
          image:
            "https://www.shutterstock.com/editorial/image-editorial/MaT3E2x0NbT8Q920Nzc0NDY=/chivas'-isaac-brizuela-r-vies-ball-jesus-550nw-11062019a.jpg",
          href: "#",
        },
        {
          title: "Meta's Instagram says services back up after outages",
          href: "#",
        },
        {
          title: "Apple integrates ChatGPT into iPhone with latest iOS update",
          href: "#",
        },
      ],
    },
    {
      title: "PAKISTAN",
      news: [
        {
          title:
            "Plane carrying 318 stranded Pakistanis in Syria lands in Pakistan",
          image:
            "data:image/png;base64,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",
          href: "#",
        },
        {
          title:
            "Govt welcomes PTI's 'softened stance' on dialogue with a pinch of salt",
          href: "#",
        },
        {
          title:
            "PTI can't get 'Faizyab' anymore, says Sherry Rehman as govt, opposition trade barbs in Senate",
          href: "#",
        },
      ],
    },
    {
      title: "WORLD",
      news: [
        {
          title: "Biden pardons 39 people, commutes sentences of 1,500 others",
          image:
            "data:image/jpeg;base64,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",
          href: "#",
        },
        {
          title:
            "UK aims to boost home-schooling safety after Sara Sharif's murder",
          href: "#",
        },
        {
          title:
            "Time magazine names President-elect Trump 'Person of the Year'",
          href: "#",
        },
      ],
    },
    {
      title: "SPORTS",
      news: [
        {
          title:
            "Aqib Javed named interim red-ball head coach after Gillespie's resignation",
          image:
            "https://static.independent.co.uk/2021/07/13/17/e68894ee32518a23c5cf930efce8fa97Y29udGVudHNlYXJjaGFwaSwxNjI2Mjc4NTc0-2.60919808.jpg",
          href: "#",
        },
        {
          title:
            "South Africa's Nortje ruled out of white-ball series against Pakistan",
          href: "#",
        },
        {
          title: "'No deal yet' for cricket's Champions Trophy format",
          href: "#",
        },
      ],
    },
    {
      title: "TECHNOLOGY",
      news: [
        {
          title:
            "WhatsApp working on exciting translating feature for chat messages",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title: "Meta's Instagram says services back up after outages",
          href: "#",
        },
        {
          title: "Apple integrates ChatGPT into iPhone with latest iOS update",
          href: "#",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
      {categories.map((category, index) => (
        <NewsCategory key={index} title={category.title} news={category.news} />
      ))}
    </div>
  );
}
