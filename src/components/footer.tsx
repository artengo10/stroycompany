"use client";

import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);

    useEffect(() => {
        // Функция для безопасной работы с Yandex Maps
        const loadYandexMap = () => {
            if (mapRef.current) {
                const script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш_api_ключ&lang=ru_RU';
                script.async = true;
                script.onload = () => {
                    // Проверяем, что ymaps загрузился
                    if ((window as any).ymaps) {
                        initializeMap();
                    }
                };
                document.head.appendChild(script);
            }
        };

        const initializeMap = () => {
            const ymaps = (window as any).ymaps;
            if (!mapRef.current || !ymaps) return;

            ymaps.ready(() => {
                try {
                    if (mapInstance.current) {
                        mapInstance.current.destroy();
                    }

                    // Создаем карту с безопасным доступом
                    mapInstance.current = new ymaps.Map(mapRef.current, {
                        center: [56.339362, 43.801521],
                        zoom: 15,
                        controls: ['zoomControl', 'fullscreenControl']
                    });

                    // Создаем метку с безопасным доступом
                    const placemark = new ymaps.Placemark([56.339362, 43.801521], {
                        balloonContent: 'г. Нижний Новгород, ул. Федосеенко, д. 52 с<br/>Строительная компания',
                        hintContent: 'Наш офис'
                    }, {
                        preset: 'islands#blueBuildingIcon',
                        iconColor: '#3b82f6'
                    });

                    // Добавляем метку на карту
                    mapInstance.current.geoObjects.add(placemark);
                    placemark.balloon.open();
                } catch (error) {
                    console.error('Error initializing Yandex Map:', error);
                }
            });
        };

        loadYandexMap();

        return () => {
            if (mapInstance.current) {
                try {
                    mapInstance.current.destroy();
                } catch (error) {
                    console.error('Error destroying map:', error);
                }
            }
        };
    }, []);

    return (
        <footer id="footer" className="bg-slate-800 border-t border-slate-700 shadow-2xl">
            <div className="container mx-auto px-4 py-8 md:py-12">
                {/* Контактная информация */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center mb-3 md:mb-4">
                            <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-2 md:mr-3" />
                            <h3 className="text-white text-base md:text-lg lg:text-xl font-bold tracking-wide font-bebas">КОНТАКТЫ</h3>
                        </div>
                        <a href="tel:89063677804" className="text-slate-300 text-sm md:text-base lg:text-lg block hover:text-blue-400 transition-colors mb-1">
                            8 (906) 367-78-04
                        </a>
                        <a href="mailto:12ort@mail.com" className="text-slate-300 text-sm md:text-base lg:text-lg block hover:text-blue-400 transition-colors">
                            12ort@mail.com
                        </a>
                    </div>

                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center mb-3 md:mb-4">
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-2 md:mr-3" />
                            <h3 className="text-white text-base md:text-lg lg:text-xl font-bold tracking-wide font-bebas">АДРЕС</h3>
                        </div>
                        <p className="text-slate-300 text-sm md:text-base lg:text-lg">г. Нижний Новгород, ул. Федосеенко, д. 52 с</p>
                    </div>

                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center mb-3 md:mb-4">
                            <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-2 md:mr-3" />
                            <h3 className="text-white text-base md:text-lg lg:text-xl font-bold tracking-wide font-bebas">СОЦИАЛЬНЫЕ СЕТИ</h3>
                        </div>
                        <div className="flex space-x-2 md:space-x-3 lg:space-x-4 md:justify-start">
                            <a
                                href="https://wa.me/79063677804"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="ghost" size="icon" className="text-green-400 hover:bg-slate-600 border border-slate-600 h-8 w-8 md:h-10 md:w-10">
                                    <svg className="h-3 w-3 md:h-4 md:w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                                    </svg>
                                </Button>
                            </a>
                            <a
                                href="https://web.telegram.org/k/#610614269"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-slate-600 border border-slate-600 h-8 w-8 md:h-10 md:w-10">
                                    <svg className="h-3 w-3 md:h-4 md:w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                                    </svg>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Яндекс.Карта */}
                <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600 mb-8 md:mb-12 overflow-hidden">
                    <div className="p-4 border-b border-slate-600">
                        <h3 className="text-white text-lg font-bebas tracking-wide text-center">
                            МЫ НАХОДИМСЯ
                        </h3>
                    </div>
                    <div
                        ref={mapRef}
                        className="w-full h-64 md:h-80 lg:h-96"
                        style={{ minHeight: '256px' }}
                    />
                </div>
            </div>
        </footer>
    );
}