"use client";

import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";

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

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
            <Header />

            <main className="flex-grow">
                {/* Главный контент - текст поверх фото */}
                <section className="relative">
                    {/* Фоновое изображение */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/main-photo.jpg"
                            alt="Главное фото"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Контент поверх фото */}
                    <div className="relative z-10 container mx-auto px-4 py-20 min-h-[80vh] flex items-center">
                        <div className="w-full max-w-4xl mx-auto text-center">
                            {/* Текст с полупрозрачным фоном */}
                            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
                                <div className="space-y-6">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                                        Лучшие решения для вашего бизнеса
                                    </h1>
                                    <p className="text-lg text-black leading-relaxed">
                                        Наша команда профессионалов готова помочь вам достичь
                                        выдающихся результатов и реализовать самые смелые проекты
                                    </p>
                                </div>
                            </div>

                            {/* Кнопка */}
                            <div className="flex justify-center">
                                <Button
                                    onClick={scrollToForm}
                                    className="bg-blue-900 hover:bg-blue-800 text-white px-8 md:px-12 py-4 text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    size="lg"
                                >
                                    Оставить заявку
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Секция с формой */}
                <section id="form-section" className="container mx-auto px-4 py-16">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                                Свяжитесь с нами
                            </h2>
                            <p className="text-blue-900 text-lg">
                                Оставьте заявку и мы свяжемся с вами в ближайшее время
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