"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    href: string;
}

export default function ServiceCard({ id, title, description, image, href }: ServiceCardProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
    };

    return (
        <Card
            className="overflow-hidden border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:border-blue-500/50 hover:translate-y-[-5px] group h-full flex flex-col"
        >
            {/* Изображение - фиксированная высота */}
            <div className="aspect-video bg-slate-700 overflow-hidden relative flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors duration-300"></div>
            </div>

            {/* Заголовок - фиксированная высота */}
            <CardHeader className="pb-2 flex-grow-0 px-3 pt-3 min-h-[60px] flex items-center justify-center">
                <CardTitle className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 text-center font-bebas tracking-wide leading-tight">
                    {title}
                </CardTitle>
            </CardHeader>

            {/* Описание - гибкий контейнер с фиксированной минимальной высотой */}
            <CardContent className="flex-grow pb-3 px-3 flex flex-col">
                <div className="flex-grow flex items-center justify-center min-h-[60px]">
                    <p className="text-slate-300 leading-relaxed text-xs text-center service-card-text w-full">
                        {description}
                    </p>
                </div>

                {/* Кнопка - фиксированная внизу */}
                <div className="mt-3 pt-2 border-t border-slate-600/50">
                    <Button
                        onClick={handleClick}
                        className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 text-xs border border-slate-600 hover:border-blue-500 transition-all duration-300"
                        variant="outline"
                    >
                        ПОДРОБНЕЕ
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}