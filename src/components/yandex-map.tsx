"use client";

import { useEffect, useRef } from 'react';

// Глобальный флаг для отслеживания загрузки Яндекс Карт
declare global {
    interface Window {
        ymaps: any;
        _yandexMapsLoaded?: boolean;
    }
}

export default function YandexMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);

    useEffect(() => {
        // Функция инициализации карты
        const initializeMap = () => {
            if (!mapRef.current || !window.ymaps) return;

            try {
                // Если карта уже инициализирована, не создаем новую
                if (mapInstance.current) {
                    return;
                }

                // Создаем карту
                mapInstance.current = new window.ymaps.Map(mapRef.current, {
                    center: [56.339362, 43.801521],
                    zoom: 15,
                    controls: ['zoomControl', 'fullscreenControl']
                });

                // Создаем метку
                const placemark = new window.ymaps.Placemark([56.339362, 43.801521], {
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
        };

        // Если Яндекс Карты уже загружены, просто инициализируем карту
        if (window._yandexMapsLoaded && window.ymaps) {
            window.ymaps.ready(initializeMap);
            return;
        }

        // Если скрипт уже загружается, ждем его загрузки
        const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]');
        if (existingScript) {
            const checkYmaps = setInterval(() => {
                if (window.ymaps) {
                    clearInterval(checkYmaps);
                    window._yandexMapsLoaded = true;
                    window.ymaps.ready(initializeMap);
                }
            }, 100);
            return;
        }

        // Загружаем скрипт Яндекс Карт
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш_api_ключ&lang=ru_RU';
        script.async = true;
        script.onload = () => {
            window._yandexMapsLoaded = true;
            if (window.ymaps) {
                window.ymaps.ready(initializeMap);
            }
        };
        document.head.appendChild(script);

        return () => {
            // При размонтировании не уничтожаем карту полностью, чтобы избежать ошибок при переходе страниц
            // Просто сбрасываем ссылку на экземпляр
            mapInstance.current = null;
        };
    }, []);

    return (
        <div
            ref={mapRef}
            className="w-full h-64 md:h-80 lg:h-96"
            style={{ minHeight: '256px' }}
        />
    );
}