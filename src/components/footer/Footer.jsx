import BusinessPlanIcon from "@/icons/BussinessIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import MailIcon from "@/icons/MailIcon";
import MapIcon from "@/icons/MapIcon";
import FadeIn from "../animation wrappers/FadeIn";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-muted/30">

            <FadeIn>
                <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-14">

                    {/* 1 — Logo + Description */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                                {/* جای لوگو */}
                                <span className="font-bold text-primary">A</span>
                            </div>

                            <h3 className="text-lg font-bold">دکتر محمد علیزاده</h3>
                        </div>

                        <p className="text-muted leading-7 text-sm max-w-sm">
                            استاد علوم کامپیوتر و پژوهشگر هوش مصنوعی.
                            علاقمند به یادگیری عمیق، الگوریتم‌های تکاملی، تحلیل داده و توسعه مدل‌های هوشمند.
                        </p>
                    </div>

                    {/* 2 — Navigation Links */}
                    <div>
                        <h4 className="font-semibold mb-4">لینک‌ها</h4>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a href="#home" className="hover:text-primary transition">خانه</a></li>
                            <li><a href="#about" className="hover:text-primary transition">درباره من</a></li>
                            <li><a href="#history" className="hover:text-primary transition">تاریخچه</a></li>
                            <li><a href="#publications" className="hover:text-primary transition">مقالات</a></li>
                            <li><a href="#contact" className="hover:text-primary transition">ارتباط با من</a></li>
                        </ul>
                    </div>

                    {/* 3 — Social Networks */}
                    <div>
                        <h4 className="font-semibold mb-4">شبکه‌های علمی</h4>
                        <div className="flex flex-col gap-4 text-sm">

                            <a href="#" className="flex items-center gap-3 hover:text-primary transition">
                                <MailIcon className="w-7 h-7" />
                                ایمیل دانشگاهی
                            </a>

                            <a href="#" className="flex items-center gap-3 hover:text-primary transition">
                                <BusinessPlanIcon className="w-7 h-7" />
                                GitHub
                            </a>

                            <a href="#" className="flex items-center gap-3 hover:text-primary transition">
                                <MapIcon className="w-7 h-7" />
                                Google Scholar
                            </a>

                            <a href="#" className="flex items-center gap-3 hover:text-primary transition">
                                <LinkedinIcon className="w-7 h-7" />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>
            </FadeIn>
            
            {/* Bottom Bar */}
            <div className="border-t border-muted/20 py-6 text-center text-xs text-muted">
                © {new Date().getFullYear()} تمامی حقوق محفوظ است — طراحی شده توسط مبین دیمه کار
            </div>
        </footer>
    );
}
