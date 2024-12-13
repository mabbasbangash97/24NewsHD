import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { UrduLatestNewsCard } from "@/components/urdu/urdu-latest-news";
import { UrduNewsCard } from "@/components/urdu/urdu-new-card";
import { UrduNewsCategories } from "@/components/urdu/urdu-news-categories";
import { UrduParallaxHero } from "@/components/urdu/urdu-parallex-hero";

export default function UrduHome() {
  const newsItems = [
    {
      category: "آئی سی سی ورلڈ ٹیسٹ چیمپئن شپ",
      title:
        "ویلنگٹن میں پہلے دن انگلینڈ کی برتری کے ساتھ براڈ کا پسندیدہ ٹیسٹ سنچری",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/1",
    },
    {
      category: "آئی سی سی ورلڈ ٹیسٹ چیمپئن شپ",
      title:
        "مشکل حالات میں جنوبی افریقہ کی جدوجہد میں آر ایس اے کی سنچری نمایاں",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/2",
    },
    {
      category: "خبریں",
      title: "سابق آسٹریلیائی بلے باز اٹلی ٹی20 کپتان مقرر",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/3",
    },
    {
      category: "خبریں",
      title: "آئی سی سی چیئرمین جے شاہ کا دبئی ہیڈکوارٹر کا دورہ",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/4",
    },
    {
      category: "خبریں",
      title: "اہم کھلاڑیوں کی چوٹوں کے باعث ٹیم میں ردوبدل",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/5",
    },
  ];

  const latestNews = [
    {
      title:
        "پی سی بی کے رویے سے فخر زمان مایوس، مستقبل کے بارے میں غیر یقینی صورتحال",
      timestamp: "3:25 بجے | 6 دسمبر، 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/latest-1",
    },
    {
      title:
        "زمبابوے سیریز کے بعد سفیان مقیم نے نامور کھلاڑیوں کی صف میں جگہ بنا لی",
      timestamp: "2:55 بجے | 6 دسمبر، 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/latest-2",
    },
    {
      title:
        "آسٹریلیا کے عمر رسیدہ ٹیسٹ ٹیم کے لیے سی اے کے نئے سربراہ کا سخت فیصلوں کا مطالبہ",
      timestamp: "2:04 بجے | 6 دسمبر، 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/latest-3",
    },
    {
      title: "آئی سی سی چیمپئنز ٹرافی کا شیڈول جلد جاری کرنے کی خبر",
      timestamp: "12:13 بجے | 6 دسمبر، 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/latest-4",
    },
    {
      title: "سابق آسٹریلیائی کرکٹر اٹلی کا کپتان مقرر",
      timestamp: "12:08 بجے | 6 دسمبر، 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/latest-5",
    },
    {
      title: "زمبابوے کے بعد سابق کرکٹر کی سلمان علی آغا کی کپتانی پر تنقید",
      timestamp: "11:34 بجے | 6 دسمبر، 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/latest-6",
    },
    {
      title:
        "پی سی بی کا کراچی میں چیمپئنز ٹی20 کپ میچز کے لیے مفت داخلے کا اعلان",
      timestamp: "10:34 بجے | 6 دسمبر، 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/latest-7",
    },
    {
      title:
        "خواتین کرکٹ ٹیم کی تنخواہوں کی عدم ادائیگی پر پی سی بی کو تنقید کا سامنا",
      timestamp: "10:14 بجے | 6 دسمبر، 2024",
      imageUrl:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
      href: "/urdu/news/latest-8",
    },
  ];

  return (
    <main className="rtl">
      <NavBar urdu={true} />
      {/* Blue background section */}
      <div className="bg-[#001B39]">
        <div className="relative">
          <UrduParallaxHero
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/2560px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg"
            title="براہ راست: لابوشین-میکسوینی نے آسٹریلیا کو پہلے دن اضافی برتری فراہم کی"
            subtitle="آئی سی سی ورلڈ ٹیسٹ چیمپئن شپ"
          />

          {/* News Cards Grid */}
          <div className="relative z-10 -mt-32 overflow-x-auto pb-8 custom-scrollbar">
            <div className="flex space-x-4 w-max px-4">
              {newsItems.map((item, index) => (
                <UrduNewsCard key={index} {...item} />
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
              <h2 className="text-2xl font-bold text-gray-900 relative inline-block text-right w-full ">
                تازہ ترین خبریں
                <div className="absolute -bottom-2 right-0 w-full h-1 bg-blue-600" />
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestNews.map((news, index) => (
                <UrduLatestNewsCard key={index} {...news} />
              ))}
            </div>
          </div>
        </div>

        {/* News Categories Section */}
        <div className="py-16 bg-gray-50">
          <UrduNewsCategories />
        </div>
      </div>

      <Footer urdu={true} />
    </main>
  );
}
