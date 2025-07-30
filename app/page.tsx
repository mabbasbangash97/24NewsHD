import { NavBar } from "@/components/nav-bar";
import { NewsCard } from "@/components/news-card";
import { LatestNewsCard } from "@/components/latest-news-card";
import { NewsCategories } from "@/components/news-categories";
import { Footer } from "@/components/footer";
import { ParallaxHero } from "@/components/parallex-hero";

export default function Home() {
  const newsItems = [
    {
      category: "ICC World Test Championship",
      title:
        "Broad shines with favourite Test ton as England top Day 1 in Wellington",
      imageUrl:
        "https://media.newyorker.com/photos/5d323dcb58d95300082987d3/master/pass/SundayReading-Primary.jpg",
      href: "#",
    },
    {
      category: "ICC World Test Championship",
      title: "RSA century highlights South Africa fight in trying conditions",
      imageUrl:
        "https://media.istockphoto.com/id/1364827675/photo/huge-multi-sports-collage-taekwondo-tennis-soccer-basketball-etc.jpg?s=612x612&w=0&k=20&c=kOf4oF5JWyCo_Gpq4KJD5F2m35sjBZs58biitT96CwA=",
      href: "#",
    },
    {
      category: "News",
      title: "Former Australia batter named new Italy T20I captain",
      imageUrl:
        "https://www.shutterstock.com/editorial/image-editorial/MaT3E2x0NbT8Q920Nzc0NDY=/chivas'-isaac-brizuela-r-vies-ball-jesus-550nw-11062019a.jpg",
      href: "#",
    },
    {
      category: "News",
      title: "ICC Chair Jay Shah visits Dubai headquarters",
      imageUrl:
        "https://static.independent.co.uk/2021/07/13/17/e68894ee32518a23c5cf930efce8fa97Y29udGVudHNlYXJjaGFwaSwxNjI2Mjc4NTc0-2.60919808.jpg",
      href: "#",
    },
    {
      category: "News",
      title: "Injuries to key players force team into squad re-shuffle",
      imageUrl:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/393300/393368.jpg",
      href: "#",
    },
    {
      category: "News",
      title: "Injuries to key players force team into squad re-shuffle",
      imageUrl:
        "https://img.freepik.com/premium-photo/professional-cricket-player-action-wearing-india-team-jersey_641010-58386.jpg",
      href: "#",
    },
    {
      category: "News",
      title: "Injuries to key players force team into squad re-shuffle",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklJCdiX0A4hkJ4RQ1TpCt_b6hw1_jvU8A1w&s",
      href: "#",
    },
    {
      category: "News",
      title: "Injuries to key players force team into squad re-shuffle",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ACbrBQX3r5tmGEbHdPFdGE2QaxOEakW27A&s",
      href: "#",
    },
  ];

  const latestNews = [
    {
      title:
        "Fakhar Zaman Disheartened by PCB's Treatment Amid Uncertainty Over Future",
      timestamp: "3:25 pm | Dec 6, 2024",
      imageUrl:
        "https://media.newyorker.com/photos/5d323dcb58d95300082987d3/master/pass/SundayReading-Primary.jpg",
      href: "#",
    },
    {
      title: "Sufiyan Muqeem Joins Elite Company After Zimbabwe Series",
      timestamp: "2:55 pm | Dec 6, 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1364827675/photo/huge-multi-sports-collage-taekwondo-tennis-soccer-basketball-etc.jpg?s=612x612&w=0&k=20&c=kOf4oF5JWyCo_Gpq4KJD5F2m35sjBZs58biitT96CwA=",
      href: "#",
    },
    {
      title:
        "Incoming CA Chief Urges Tough Decisions for Australia's Ageing Test Team",
      timestamp: "2:04 pm | Dec 6, 2024",
      imageUrl:
        "https://www.shutterstock.com/editorial/image-editorial/MaT3E2x0NbT8Q920Nzc0NDY=/chivas'-isaac-brizuela-r-vies-ball-jesus-550nw-11062019a.jpg",
      href: "#",
    },
    {
      title: "ICC Reportedly Ready to Announce the Champions Trophy Schedule",
      timestamp: "12:13 pm | Dec 6, 2024",
      imageUrl:
        "https://static.independent.co.uk/2021/07/13/17/e68894ee32518a23c5cf930efce8fa97Y29udGVudHNlYXJjaGFwaSwxNjI2Mjc4NTc0-2.60919808.jpg",
      href: "#",
    },
    {
      title: "Former Australian Cricketer Named Italy Captain",
      timestamp: "12:08 pm | Dec 6, 2024",
      imageUrl:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/393300/393368.jpg",
      href: "#",
    },
    {
      title:
        "Former Cricketer Slams Salman Ali Agha's Captaincy After Zimbabwe",
      timestamp: "11:34 pm | Dec 6, 2024",
      imageUrl:
        "https://img.freepik.com/premium-photo/professional-cricket-player-action-wearing-india-team-jersey_641010-58386.jpg",
      href: "#",
    },
    {
      title:
        "PCB Announces Free Entry for Champions T20 Cup Matches in Karachi",
      timestamp: "10:34 am | Dec 6, 2024",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklJCdiX0A4hkJ4RQ1TpCt_b6hw1_jvU8A1w&s",
      href: "#",
    },
    {
      title: "PCB Faces Backlash Over Unpaid Salaries to Women's Cricket Team",
      timestamp: "10:14 am | Dec 6, 2024",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ACbrBQX3r5tmGEbHdPFdGE2QaxOEakW27A&s",
      href: "#",
    },
  ];

  return (
    <main>
      <NavBar />
      <p>Generic Issues Fetch for private and pubic issues as well as github issues with Orange Pro AI v11</p>
      <div className="bg-[#001B39] overflow-x-hidden">
        <div className="relative">
          <ParallaxHero
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/2560px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg"
            title="LIVE: Labuschagne-McSweeney provide Australia with added cushion on Day 1"
            subtitle="ICC World Test Championship"
          />

          <div className="relative z-10 -mt-32 overflow-x-auto pb-8 px-4 custom-scrollbar">
            <div className="flex space-x-4 w-full max-w-screen px-4">
              {newsItems.map((item, index) => (
                <NewsCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* White background sections */}
      <div className="bg-white">
        {/* Latest News Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 relative inline-block">
                Latest News (Testing Orange Pro AI v5)
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600" />
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestNews.map((news, index) => (
                <LatestNewsCard key={index} {...news} />
              ))}
            </div>
          </div>
        </div>

        {/* News Categories Section */}
        <div className="py-16 bg-gray-50">
          <NewsCategories />
        </div>
      </div>

      <Footer />
    </main>
  );
}
