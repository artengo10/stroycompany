"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const router = useRouter();

    const mainMenuItems = [
        { name: "Главная", path: "/" },
        { name: "Заявка", path: "/#form-section" },
        { name: "Контакты", path: "/#footer" },
    ];

    const servicesItems = [
        { name: "Фундамент", path: "/services/fundament" },
        { name: "Демонтаж", path: "/services/demontazh" },
        { name: "Внутренняя отделка", path: "/services/otdelka" },
        { name: "Отопление", path: "/services/otoplenie" },
        { name: "Электрика", path: "/services/elektrika" },
        { name: "Канализация", path: "/services/kanalizaciya" },
        { name: "Монолитные перекрытия", path: "/services/perekrytiya" },
        { name: "Кладка стен", path: "/services/kladka" },
        { name: "Малярные работы", path: "/services/malyar" },
        { name: "Плитка", path: "/services/plitka" },
        // Новые услуги
        {
            name: "Каркасное домостроение",
            path: "/services/karkasnoe-domostroenie",
            image: "/images/services/НОВОЕ_НАЗВАНИЕ_ФАЙЛА.jpg"
        },
        {
            name: "Монолитные домостроения",
            path: "/services/monolitnye-domostroeniya",
            image: "/images/services/НОВОЕ_НАЗВАНИЕ_ФАЙЛА.jpg"
        },
        {
            name: "Окна ПВХ алюминий",
            path: "/services/okna",
            image: "/images/services/НОВОЕ_НАЗВАНИЕ_ФАЙЛА.jpg"
        },
        {
            name: "Потолки натяжные",
            path: "/services/natyazhnye-potolki",
            image: "/images/services/НОВОЕ_НАЗВАНИЕ_ФАЙЛА.jpg"
        },
    ];

    const handleMenuClick = (path: string) => {
        router.push(path);
        setIsOpen(false);
        setIsServicesOpen(false);
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <header className="bg-slate-800/95 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50 shadow-xl">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Логотип */}
                    <div className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Логотип"
                            className="h-16 w-auto transition-all duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Контакты и соцсети */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        {/* Номер телефона */}
                        <div className="hidden sm:flex items-center space-x-2 bg-slate-700/80 px-4 py-2 rounded-lg border border-slate-600 transition-all duration-300 hover:bg-slate-600 hover:shadow-lg group">
                            <Phone className="h-4 w-4 text-blue-400" />
                            <span className="text-slate-200 font-medium">
                                +7 (906) 367-78-04
                            </span>
                        </div>

                        {/* Соцсети */}
                        <div className="flex space-x-3 md:space-x-3">
                            <a
                                href="https://wa.me/79063677804"
                                className="bg-green-600 text-white p-1.5 md:p-2 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-110 shadow-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Написать в WhatsApp"
                            >
                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                                </svg>
                            </a>
                            <a
                                href="https://web.telegram.org/k/#610614269"
                                className="bg-blue-600 text-white p-1.5 md:p-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-110 shadow-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Написать в Telegram"
                            >
                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                                </svg>
                            </a>
                        </div>

                        {/* Бургер-меню - отображается на всех устройствах */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-slate-700 border border-slate-600">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="bg-slate-800 border-l border-slate-700 overflow-y-auto w-[300px] sm:w-[400px]">
                                <SheetTitle className="sr-only">Меню навигации</SheetTitle>
                                <div className="flex flex-col space-y-2 mt-8">
                                    {/* Основные пункты меню */}
                                    {mainMenuItems.map((item, index) => (
                                        <Button
                                            key={index}
                                            variant="ghost"
                                            className="justify-start text-slate-200 text-lg hover:bg-slate-700 hover:text-blue-400 py-3 px-4 font-bebas tracking-wide text-xl transition-all duration-200"
                                            onClick={() => handleMenuClick(item.path)}
                                        >
                                            {item.name}
                                        </Button>
                                    ))}

                                    {/* Кнопка "Услуги" с выпадающим меню */}
                                    <div className="border-t border-slate-700 pt-2">
                                        <Button
                                            variant="ghost"
                                            className="justify-between w-full text-slate-200 text-lg hover:bg-slate-700 hover:text-blue-400 py-3 px-4 font-bebas tracking-wide text-xl transition-all duration-200"
                                            onClick={toggleServices}
                                        >
                                            <span>Услуги</span>
                                            {isServicesOpen ? (
                                                <ChevronDown className="h-5 w-5" />
                                            ) : (
                                                <ChevronRight className="h-5 w-5" />
                                            )}
                                        </Button>

                                        {/* Выпадающий список услуг */}
                                        {isServicesOpen && (
                                            <div className="ml-4 mt-1 space-y-1 border-l border-slate-600 pl-2">
                                                {servicesItems.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        variant="ghost"
                                                        className="justify-start w-full text-slate-300 text-base hover:bg-slate-700 hover:text-blue-400 py-2 px-3 font-bebas tracking-wide transition-all duration-200"
                                                        onClick={() => handleMenuClick(item.path)}
                                                    >
                                                        {item.name}
                                                    </Button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}