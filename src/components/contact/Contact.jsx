"use client";

import BusinessPlanIcon from "@/icons/BussinessIcon";
import CheckIcon from "@/icons/CheckIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import MailIcon from "@/icons/MailIcon";
import FadeIn from "../animation wrappers/FadeIn";

export default function Contact() {
    return (
        <section id="contact" className="mt-40 px-5 flex justify-center">
            <FadeIn>
                <div className="w-full max-w-7xl grid md:grid-cols-2 gap-14">

                    {/* Left Side */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            ارتباط با من
                        </h2>

                        <p className="text-muted leading-7 mb-10">
                            اگر علاقه‌مند به همکاری علمی، پروژه‌های تحقیقاتی یا گفتگو درباره
                            هوش مصنوعی و علوم داده هستید، خوشحال می‌شوم از طریق فرم زیر یا
                            شبکه‌های علمی با من در ارتباط باشید.
                        </p>

                        <div className="flex flex-col gap-4">

                            <a
                                href="#"
                                className="flex items-center gap-3 text-text hover:text-primary transition"
                            >
                                <MailIcon className="w-7 h-7" />
                                university@email.com
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-text hover:text-primary transition"
                            >
                                <BusinessPlanIcon className="w-7 h-7" />
                                github.com/alizadeh
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-text hover:text-primary transition"
                            >
                                <CheckIcon className="w-7 h-7" />
                                Google Scholar
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-text hover:text-primary transition"
                            >
                                <LinkedinIcon className="w-7 h-7" />
                                LinkedIn Profile
                            </a>

                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <form
                        className="
          bg-secondary
          border border-muted
          rounded-xl
          p-8
          flex flex-col gap-6
        "
                    >
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-muted">نام</label>
                            <input
                                type="text"
                                placeholder="نام شما"
                                className="
              bg-transparent
              border border-muted
              rounded-lg
              px-4 py-3
              outline-none
              focus:border-primary
              transition
            "
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-muted">ایمیل</label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="
              bg-transparent
              border border-muted
              rounded-lg
              px-4 py-3
              outline-none
              focus:border-primary
              transition
            "
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-muted">پیام</label>
                            <textarea
                                rows="5"
                                placeholder="پیام خود را بنویسید..."
                                className="
              bg-transparent
              border border-muted
              rounded-lg
              px-4 py-3
              outline-none
              focus:border-primary
              transition
              resize-none
            "
                            />
                        </div>

                        <button
                            type="submit"
                            className="
            bg-primary
            text-black
            font-semibold
            py-3
            rounded-lg
            transition
            hover:opacity-90
          "
                        >
                            ارسال پیام
                        </button>
                    </form>

                </div>
            </FadeIn>
        </section>
    );
}
