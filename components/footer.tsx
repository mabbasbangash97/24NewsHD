import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  urdu?: boolean;
}

export function Footer({ urdu }: FooterProps) {
  return (
    <>
      {urdu ? (
        <>
          {" "}
          <footer className="bg-[#001B39] border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row-reverse justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="https://24newshd.tv/uploads/theme/logo-1580807238.png"
                      alt="ICC Logo"
                      width={100}
                      height={100}
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                <nav className="flex flex-wrap justify-center md:justify-start gap-6">
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    ہمارے بارے میں
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    رابطہ
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    رازداری کی پالیسی
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    استعمال کی شرائط
                  </Link>
                </nav>
              </div>
              <div className="mt-8 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} ۔ 24 یوز ایچ ڈی۔ جملہ حقوق محفوظ
                ہیں۔
              </div>
            </div>
          </footer>
        </>
      ) : (
        <>
          <footer className="bg-[#001B39] border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="https://24newshd.tv/uploads/theme/logo-1580807238.png"
                      alt="ICC Logo"
                      width={100}
                      height={100}
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                <nav className="flex flex-wrap justify-center md:justify-end gap-6">
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of Use
                  </Link>
                </nav>
              </div>
              <div className="mt-8 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} 24 News HD. All rights reserved.
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
