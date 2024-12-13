import Image from "next/image";
import Link from "next/link";

interface UrudNewsItem {
  title: string;
  image?: string;
  category?: string;
  href: string;
}

interface UrduNewsCategoryProps {
  title: string;
  news: UrudNewsItem[];
}

function UrduNewsCategory({ title, news }: UrduNewsCategoryProps) {
  return (
    <div className="space-y-6">
      <div className="border-r-4 border-blue-600 pr-4">
        <h2 className="text-xl font-bold text-gray-900 text-right">{title}</h2>
      </div>
      <div className="space-y-6">
        {news.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group flex items-start gap-4 flex-row-reverse"
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
            <div className="flex-1 text-right">
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

export function UrduNewsCategories() {
  const categories = [
    {
      title: "پاکستان",
      news: [
        {
          title:
            "شام میں پھنسے 318 پاکستانیوں کو لے کر آنے والا طیارہ پاکستان پہنچ گیا",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title: "حکومت نے پی ٹی آئی کے 'نرم موقف' کا خیرمقدم کیا",
          href: "#",
        },
        {
          title: "پی ٹی آئی اب 'فیض یاب' نہیں ہو سکتی، شیری رحمان کا بیان",
          href: "#",
        },
      ],
    },
    {
      title: "دنیا",
      news: [
        {
          title:
            "بائیڈن نے 39 افراد کو معافی دی، 1,500 دیگر کی سزاؤں میں کمی کی",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title:
            "سارہ شریف کے قتل کے بعد برطانیہ کا گھر پر تعلیم کی حفاظت بڑھانے کا ارادہ",
          href: "#",
        },
        {
          title: "ٹائم میگزین نے صدر منتخب ٹرمپ کو 'شخصیت سال' قرار دیا",
          href: "#",
        },
      ],
    },
    {
      title: "کھیل",
      news: [
        {
          title:
            "گلیسپی کے استعفے کے بعد عاقب جاوید عبوری ریڈ بال ہیڈ کوچ مقرر",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title:
            "جنوبی افریقہ کے نورٹجے پاکستان کے خلاف وائٹ بال سیریز سے باہر",
          href: "#",
        },
        {
          title: "چیمپئنز ٹرافی کے فارمیٹ پر 'ابھی تک کوئی معاہدہ نہیں'",
          href: "#",
        },
      ],
    },
    {
      title: "ٹیکنالوجی",
      news: [
        {
          title:
            "واٹس ایپ چیٹ پیغامات کے لیے دلچسپ ترجمہ فیچر پر کام کر رہا ہے",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title: "میٹا کا انسٹاگرام سروسز بند ہونے کے بعد بحال",
          href: "#",
        },
        {
          title:
            "ایپل نے تازہ ترین iOS اپ ڈیٹ کے ساتھ آئی فون میں ChatGPT کو شامل کیا",
          href: "#",
        },
      ],
    },
    {
      title: "پاکستان",
      news: [
        {
          title:
            "شام میں پھنسے 318 پاکستانیوں کو لے کر آنے والا طیارہ پاکستان پہنچ گیا",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title: "حکومت نے پی ٹی آئی کے 'نرم موقف' کا خیرمقدم کیا",
          href: "#",
        },
        {
          title: "پی ٹی آئی اب 'فیض یاب' نہیں ہو سکتی، شیری رحمان کا بیان",
          href: "#",
        },
      ],
    },
    {
      title: "دنیا",
      news: [
        {
          title:
            "بائیڈن نے 39 افراد کو معافی دی، 1,500 دیگر کی سزاؤں میں کمی کی",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title:
            "سارہ شریف کے قتل کے بعد برطانیہ کا گھر پر تعلیم کی حفاظت بڑھانے کا ارادہ",
          href: "#",
        },
        {
          title: "ٹائم میگزین نے صدر منتخب ٹرمپ کو 'شخصیت سال' قرار دیا",
          href: "#",
        },
      ],
    },
    {
      title: "کھیل",
      news: [
        {
          title:
            "گلیسپی کے استعفے کے بعد عاقب جاوید عبوری ریڈ بال ہیڈ کوچ مقرر",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title:
            "جنوبی افریقہ کے نورٹجے پاکستان کے خلاف وائٹ بال سیریز سے باہر",
          href: "#",
        },
        {
          title: "چیمپئنز ٹرافی کے فارمیٹ پر 'ابھی تک کوئی معاہدہ نہیں'",
          href: "#",
        },
      ],
    },
    {
      title: "ٹیکنالوجی",
      news: [
        {
          title:
            "واٹس ایپ چیٹ پیغامات کے لیے دلچسپ ترجمہ فیچر پر کام کر رہا ہے",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Brent_Grimes-Hamburg_Sea_Devils.jpg",
          href: "#",
        },
        {
          title: "میٹا کا انسٹاگرام سروسز بند ہونے کے بعد بحال",
          href: "#",
        },
        {
          title:
            "ایپل نے تازہ ترین iOS اپ ڈیٹ کے ساتھ آئی فون میں ChatGPT کو شامل کیا",
          href: "#",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
      {categories.map((category, index) => (
        <UrduNewsCategory
          key={index}
          title={category.title}
          news={category.news}
        />
      ))}
    </div>
  );
}
