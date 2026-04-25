import Image from "next/image";
import FadeIn from "../animation wrappers/FadeIn";

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden min-h-[100vh] flex justify-center pt-30 ">

            <FadeIn>
                <div className="w-full max-w-7xl flex flex-col md:flex-row relative">


                    {/* description */}
                    <div className="w-full min-h-[100vh] flex flex-col justify-center text-center md:text-right px-5">

                        <h2 className="text-4xl font-extrabold mb-7 pb-3 border-b-3 border-primary flex w-fit">
                            درباره من
                        </h2>

                        <div className="text-right space-y-5 leading-relaxed">

                            <p className="text-muted md:text-lg">
                                من عضو هیئت علمی دانشکده کامپیوتر هستم و بیش از یک دهه در حوزه‌های
                                <span className="text-primary"> هوش مصنوعی</span>،
                                یادگیری ماشین و شبکه‌های عصبی عمیق فعالیت کرده‌ام.
                                تمرکز اصلی من طراحی معماری‌های نوین برای حل مسائل پیچیده دنیای واقعی است.
                            </p>

                            <p className="text-muted">
                                مسیر حرفه‌ای من با علاقه به درک رفتار داده‌ها آغاز شد.
                                از اولین پروژه‌های تحقیقاتی در دوران دکتری تا توسعه مدل‌های
                                یادگیری عمیق برای سیستم‌های هوشمند، همواره تلاش کرده‌ام
                                مرز بین نظریه و کاربرد عملی را کمرنگ‌تر کنم.
                            </p>

                            <div className="border-r-4 border-primary p-6 py-4 bg-primary/20 rounded-xl">
                                <p className="text-muted">
                                    باور من این است که هوش مصنوعی تنها مجموعه‌ای از الگوریتم‌ها نیست؛
                                    بلکه ابزاری برای ساخت آینده‌ای هوشمندتر است.
                                    هر پروژه پژوهشی برای من فرصتی برای کشف یک مسیر تازه است.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-6 pt-6">
                                <div className="text-center p-6 rounded-2xl border border-primary bg-primary/20">
                                    <p className="text-2xl font-bold text-primary">۱۰+</p>
                                    <p className="text-sm text-muted">سال سابقه تدریس</p>
                                </div>
                                <div className="text-center p-6 rounded-2xl border border-primary bg-primary/20">
                                    <p className="text-2xl font-bold text-primary">Deep Learning</p>
                                    <p className="text-sm text-muted">پژوهش فعال و مستمر</p>
                                </div>
                                <div className="text-center p-6 rounded-2xl border border-primary bg-primary/20">
                                    <p className="text-2xl font-bold text-primary">مقاله 5</p>
                                    <p className="text-sm text-muted">مقاله ISI معتبر</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* image */}
                    <div className="w-full min-h-[100vh] overflow-hidden hidden md:block">
                        <div className="w-full h-full relative">
                            <Image src='/images/about.png' alt="about" className="object-contain scale-85" fill />
                        </div>
                    </div>

                </div>
            </FadeIn>

        </section>
    );
}