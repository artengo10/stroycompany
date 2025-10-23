"use client";

import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";

export default function Home() {
    useEffect(() => {
        // Этот код выполнится только на клиенте
    }, []);

    const scrollToForm = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const services = [
        {
            id: "fundament",
            title: "Фундамент",
            description: "Все виды фундаментов под ключ. Ленточный, плитный, свайный, УШП.",
            image: "/services/fundament.jpg",  // путь к изображению
            href: "/services/fundament"
        },
        {
            id: "demontazh",
            title: "Демонтаж",
            description: "Профессиональный демонтаж любой сложности. Вывоз мусора.",
            image: "/services/demontazh.jpg",  // путь к изображению
            href: "/services/demontazh"
        },
        {
            id: "otdelka",
            title: "Внутренняя отделка",
            description: "Предчистовая отделка white box. Качественные материалы.",
            image: "/services/otdelka.jpg",  // путь к изображению
            href: "/services/otdelka"
        },
        {
            id: "otoplenie",
            title: "Отопление",
            description: "Монтаж систем отопления. Подбор и установка оборудования.",
            image: "/services/otoplenie.jpg",  // путь к изображению
            href: "/services/otoplenie"
        },
        {
            id: "elektrika",
            title: "Электрика",
            description: "Электромонтажные работы любой сложности. Безопасно.",
            image: "/services/elektrika.jpg",  // путь к изображению
            href: "/services/elektrika"
        },
        {
            id: "kanalizaciya",
            title: "Канализация",
            description: "Установка автономной канализации и септиков.",
            image: "/services/kanalizaciya.jpg",  // путь к изображению
            href: "/services/kanalizaciya"
        },
        {
            id: "perekrytiya",
            title: "Монолитные перекрытия",
            description: "Устройство монолитных перекрытий. Опалубка и армирование.",
            image: "/services/perekrytiya.jpg",  // путь к изображению
            href: "/services/perekrytiya"
        },
        {
            id: "kladka",
            title: "Кладка стен",
            description: "Кирпичная кладка стен. Соблюдение нормативов.",
            image: "/services/kladka.jpg",  // путь к изображению
            href: "/services/kladka"
        },
        {
            id: "malyar",
            title: "Малярные работы",
            description: "Профессиональные малярные и штукатурные работы.",
            image: "/services/malyar.jpg",  // путь к изображению
            href: "/services/malyar"
        },
        {
            id: "plitka",
            title: "Плитка",
            description: "Укладка керамической плитки и керамогранита.",
            image: "/services/plitka.jpg",  // путь к изображению
            href: "/services/plitka"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800">
            <Header />

            <main className="flex-grow">
                {/* Главный контент */}
                <section id="hero" className="relative">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/main-photo.jpg"
                            alt="Строительные работы"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/70"></div>
                    </div>

                    <div className="relative z-10 container mx-auto px-4 py-24 min-h-[85vh] flex items-center">
                        <div className="w-full max-w-4xl mx-auto text-center">
                            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 md:p-12 shadow-2xl mb-8 border border-slate-700 mx-2">
                                <div className="space-y-6">
                                    {/* ОБНОВЛЕННЫЙ ЗАГОЛОВОК - исправлен перенос текста */}
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-wide font-bebas px-2">
                                        ПРОФЕССИОНАЛЬНЫЕ<br className="hidden sm:block" /> СТРОИТЕЛЬНЫЕ УСЛУГИ
                                    </h1>
                                    <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto px-2">
                                        Полный комплекс строительных работ от фундамента до внутренней отделки
                                    </p>
                                </div>
                            </div>

                            {/* Кнопка */}
                            <div className="flex justify-center">
                                <Button
                                    onClick={scrollToForm}
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 sm:px-10 md:px-14 py-4 sm:py-5 text-base sm:text-lg md:text-xl shadow-xl hover:shadow-xl transition-all duration-300 border border-blue-500 font-bebas tracking-wider"
                                    size="lg"
                                >
                                    ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Секция услуг */}
                <section className="container mx-auto px-3 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide font-bebas">
                            НАШИ УСЛУГИ
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto px-2">
                            10 направлений строительных работ для реализации вашего проекта
                        </p>
                    </div>

                    {/* Улучшенная сетка */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                id={service.id}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                href={service.href}
                            />
                        ))}
                    </div>
                </section>

                {/* Секция с формой */}
                <section id="form-section" className="container mx-auto px-4 py-20">
                    <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide font-bebas">
                                СВЯЖИТЕСЬ С НАМИ
                            </h2>
                            <p className="text-slate-300 text-xl">
                                Оставьте заявку и мы свяжемся с вами для бесплатной консультации
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}