import { timeline } from "@/data/historyData";
import FadeIn from "../animation wrappers/FadeIn";

export default function History() {

    return (
        <section id="history" className="relative overflow-hidden min-h-[100vh] flex justify-center mt-30">
            <FadeIn>
                <div className="w-full max-w-7xl flex flex-col relative px-5">
                    <h2 className="text-3xl font-bold mb-12 text-start border-b-2 border-primary w-fit pb-3">
                        تاریخچه و مسیر حرفه‌ای
                    </h2>

                    <div className="flex flex-wrap gap-8 justify-between">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex flex-col gap-3 md:w-[47%]">
                                <span className="flex items-center gap-3 leading-0 "><span className="w-5 h-5 border-4 rounded-full" />{item.year}</span>
                                <h1 className="text-primary text-lg font-bold">{item.title}</h1>
                                <p className="text-muted">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
