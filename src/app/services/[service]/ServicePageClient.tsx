"use client";

import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';

interface Service {
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    image: string;
    price: string;
}

interface ServicePageClientProps {
    service: Service;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
    const router = useRouter();

    const handleOrderClick = () => {
        router.push('/#form-section');
    };

    const handleCallClick = () => {
        window.open('tel:+79999999999');
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800">
            <Header />

            <main className="flex-grow py-8">
                <div className="container mx-auto px-4">
                    {/* Хлебные крошки */}
                    <nav className="mb-8">
                        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Назад к услугам
                        </Link>
                    </nav>

                    {/* Заголовок */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide font-bebas">
                            {service.title}
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            {service.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Изображение услуги */}
                        <div className="rounded-2xl overflow-hidden border border-slate-700">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-64 md:h-80 object-cover"
                            />
                        </div>

                        {/* Информация об услуге */}
                        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white font-bebas tracking-wide">
                                    О услуге
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-slate-300 leading-relaxed">
                                    {service.fullDescription}
                                </p>

                                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                                    <span className="text-slate-300">Стоимость:</span>
                                    <span className="text-2xl text-blue-400 font-bold font-bebas">
                                        {service.price}
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button
                                        onClick={handleOrderClick}
                                        className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 text-lg border border-blue-500 font-bebas tracking-wide"
                                    >
                                        ЗАКАЗАТЬ УСЛУГУ
                                    </Button>
                                    <Button
                                        onClick={handleCallClick}
                                        variant="outline"
                                        className="flex-1 bg-slate-700 hover:bg-slate-600 border-slate-600 text-white"
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        Позвонить
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Особенности услуги */}
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 mb-12">
                        <CardHeader>
                            <CardTitle className="text-2xl text-white font-bebas tracking-wide text-center">
                                Что мы предлагаем
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-center p-3 bg-slate-700/30 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                                        <span className="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
}