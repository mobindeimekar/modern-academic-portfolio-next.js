import Image from "next/image";
import Button from "../ui/Button";
import FadeIn from "../animation wrappers/FadeIn";



export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden min-h-[100vh] flex justify-center">

            <div className="w-full max-w-7xl flex flex-col md:flex-row relative">

                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-[var(--color-primary)] opacity-20 blur-3xl" />
                    <div className="absolute left-1/4 bottom-1/4 h-72 w-72 rounded-full bg-[var(--color-primary)] opacity-20 blur-3xl" />
                </div>
                
                {/* description */}
                <FadeIn direction="left" delay={0.8} distance={80}>
                    <div className="w-full min-h-[80vh] md:min-h-[100vh] flex flex-col justify-center text-center md:text-right px-5">




                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                            دکتر محمد علیزاده
                        </h1>
                        <p className="mb-4 text-xl text-muted">
                            استاد علوم کامپیوتر و پژوهشگر هوش مصنوعی
                        </p>
                        <p className="mb-8 leading-relaxed text-muted">
                            تمرکز بر یادگیری عمیق، بینایی ماشین و توسعه الگوریتم‌های
                            هوشمند برای حل مسائل پیچیده در دنیای واقعی.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Button variant="primary">حوزه‌های پژوهش</Button>
                            <Button variant="ghost">ارتباط با من</Button>

                        </div>




                    </div>
                </FadeIn>

                {/* image */}


                <FadeIn direction="right" delay={0.8} distance={80} margin='0px' className="w-full">
                    <div className="w-full min-h-[80vh] md:min-h-[100vh] overflow-hidden md:pt-20 -mt-25 md:mt-0 ">
                        <div className="relative w-full h-[80vh] md:h-[100vh]">
                            <Image
                                sizes="(max-width: 768px) 100vw, 50vw"
                                src="/images/drShot.png"
                                alt="drShot"
                                className="object-contain"
                                fill
                                priority
                            />
                        </div>
                    </div>
                </FadeIn>



            </div>

        </section>
    );
}