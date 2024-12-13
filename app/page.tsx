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
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/1",
    },
    {
      category: "ICC World Test Championship",
      title: "RSA century highlights South Africa fight in trying conditions",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/2",
    },
    {
      category: "News",
      title: "Former Australia batter named new Italy T20I captain",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/3",
    },
    {
      category: "News",
      title: "ICC Chair Jay Shah visits Dubai headquarters",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/4",
    },
    {
      category: "News",
      title: "Injuries to key players force team into squad re-shuffle",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/5",
    },
  ];

  const latestNews = [
    {
      title:
        "Fakhar Zaman Disheartened by PCB's Treatment Amid Uncertainty Over Future",
      timestamp: "3:25 pm | Dec 6, 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/latest-1",
    },
    {
      title: "Sufiyan Muqeem Joins Elite Company After Zimbabwe Series",
      timestamp: "2:55 pm | Dec 6, 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/latest-2",
    },
    {
      title:
        "Incoming CA Chief Urges Tough Decisions for Australia's Ageing Test Team",
      timestamp: "2:04 pm | Dec 6, 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/latest-3",
    },
    {
      title: "ICC Reportedly Ready to Announce the Champions Trophy Schedule",
      timestamp: "12:13 pm | Dec 6, 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/latest-4",
    },
    {
      title: "Former Australian Cricketer Named Italy Captain",
      timestamp: "12:08 pm | Dec 6, 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/latest-5",
    },
    {
      title:
        "Former Cricketer Slams Salman Ali Agha's Captaincy After Zimbabwe",
      timestamp: "11:34 pm | Dec 6, 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/latest-6",
    },
    {
      title:
        "PCB Announces Free Entry for Champions T20 Cup Matches in Karachi",
      timestamp: "10:34 am | Dec 6, 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/latest-7",
    },
    {
      title: "PCB Faces Backlash Over Unpaid Salaries to Women's Cricket Team",
      timestamp: "10:14 am | Dec 6, 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/news/latest-8",
    },
  ];

  return (
    <main>
      <NavBar />
      {/* Blue background section */}
      <div className="bg-[#001B39]">
        <div className="relative">
          <ParallaxHero
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/2560px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg"
            title="LIVE: Labuschagne-McSweeney provide Australia with added cushion on Day 1"
            subtitle="ICC World Test Championship"
          />

          {/* News Cards Grid */}
          <div className="relative z-10 -mt-32 overflow-x-auto pb-8 -mx-4 px-8 custom-scrollbar">
            <div className="flex space-x-4 w-max px-4">
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
                Latest News
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
