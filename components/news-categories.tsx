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
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
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
    {
      title: "PAKISTAN",
      news: [
        {
          title:
            "Plane carrying 318 stranded Pakistanis in Syria lands in Pakistan",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
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
