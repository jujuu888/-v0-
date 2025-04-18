import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">المرشد السياحي</h3>
            <p className="text-primary-foreground/80">
              دليلك الشامل للسياحة في المملكة العربية السعودية، نقدم لك أفضل التجارب السياحية والمعلومات الدقيقة.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-primary-foreground/80 hover:text-primary-foreground">
                  المدن السياحية
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="text-primary-foreground/80 hover:text-primary-foreground">
                  المواقع التراثية
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-primary-foreground/80 hover:text-primary-foreground">
                  الفعاليات
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground">
                  الخدمات السياحية
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">معلومات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                  عن المرشد
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground">
                  شروط الاستخدام
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground">
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <address className="not-italic text-primary-foreground/80">
              <p>الرياض، المملكة العربية السعودية</p>
              <p className="mt-2">البريد الإلكتروني: info@tourism-guide.sa</p>
              <p className="mt-2">الهاتف: 966512345678+</p>
            </address>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>© {new Date().getFullYear()} المرشد السياحي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
