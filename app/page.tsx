import { Footer } from "@/components/footer";
import { LatestNewsCard } from "@/components/latest-news-card";
import { NavBar } from "@/components/nav-bar";
import { NewsCard } from "@/components/news-card";
import Image from "next/image";

export default function Home() {
  const newsItems = [
    {
      category: "ICC World Test Championship",
      title:
        "Broad shines with favourite Test ton as England top Day 1 in Wellington",
      imageUrl: "/placeholder.svg?height=400&width=600",
      href: "#",
    },
    {
      category: "ICC World Test Championship",
      title: "RSA century highlights South Africa fight in trying conditions",
      imageUrl: "/placeholder.svg?height=400&width=600",
      href: "#",
    },
    {
      category: "News",
      title: "Former Australia batter named new Italy T20I captain",
      imageUrl: "/placeholder.svg?height=400&width=600",
      href: "#",
    },
    {
      category: "News",
      title: "ICC Chair Jay Shah visits Dubai headquarters",
      imageUrl: "/placeholder.svg?height=400&width=600",
      href: "#",
    },
    {
      category: "News",
      title: "Injuries to key players force team into squad re-shuffle",
      imageUrl: "/placeholder.svg?height=400&width=600",
      href: "#",
    },
  ];

  const latestNews = [
    {
      title:
        "Fakhar Zaman Disheartened by PCB's Treatment Amid Uncertainty Over Future",
      timestamp: "3:25 pm | Dec 6, 2024",
      imageUrl: "/placeholder.svg?height=300&width=400",
      href: "#",
    },
    {
      title: "Sufiyan Muqeem Joins Elite Company After Zimbabwe Series",
      timestamp: "2:55 pm | Dec 6, 2024",
      imageUrl: "/placeholder.svg?height=300&width=400",
      href: "#",
    },
    {
      title:
        "Incoming CA Chief Urges Tough Decisions for Australia's Ageing Test Team",
      timestamp: "2:04 pm | Dec 6, 2024",
      imageUrl: "/placeholder.svg?height=300&width=400",
      href: "#",
    },
    {
      title: "ICC Reportedly Ready to Announce the Champions Trophy Schedule",
      timestamp: "12:13 pm | Dec 6, 2024",
      imageUrl: "/placeholder.svg?height=300&width=400",
      href: "#",
    },
    {
      title: "Former Australian Cricketer Named Italy Captain",
      timestamp: "12:08 pm | Dec 6, 2024",
      imageUrl: "/placeholder.svg?height=300&width=400",
      href: "#",
    },
    {
      title:
        "Former Cricketer Slams Salman Ali Agha's Captaincy After Zimbabwe",
      timestamp: "11:34 pm | Dec 6, 2024",
      imageUrl: "/placeholder.svg?height=300&width=400",
      href: "#",
    },
    {
      title:
        "PCB Announces Free Entry for Champions T20 Cup Matches in Karachi",
      timestamp: "10:34 am | Dec 6, 2024",
      imageUrl: "/placeholder.svg?height=300&width=400",
      href: "#",
    },
    {
      title: "PCB Faces Backlash Over Unpaid Salaries to Women's Cricket Team",
      timestamp: "10:14 am | Dec 6, 2024",
      imageUrl: "/placeholder.svg?height=300&width=400",
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#001B39]">
      <NavBar />
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[calc(100vh-4rem)] mb-[-8rem] lg:ml-8 lg:mr-20">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/640px-Googleplex_HQ_%28cropped%29.jpg"
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001B39]/70 to-[#001B39]" />
          </div>
          <div className="absolute bottom-32 left-0 right-0 p-8 text-white">
            <div className="max-w-3xl">
              <div className="text-lg font-bold mb-2 lg:pl-16">
                ICC World Test Championship
              </div>
              <h1 className="text-4xl font-extrabold mb-4 lg:pl-16">
                LIVE: Labuschagne-McSweeney provide Australia with added cushion
                on Day 1
              </h1>
              <h3 className="text-md font-bold lg:pl-16">8h</h3>
            </div>
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="relative z-10 overflow-x-auto pb-8 -mx-4 px-8 custom-scrollbar w-[98vw]">
          <div className="flex space-x-4 w-max lg:pl-24 pr-8">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Latest News Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white relative inline-block">
              Latest News
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-400" />
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((news, index) => (
              <LatestNewsCard
                key={index}
                title={news.title}
                imageUrl={news.imageUrl}
                timestamp={news.timestamp}
                href={news.href}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
