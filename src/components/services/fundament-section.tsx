"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FundamentSection() {
    const scrollToForm = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const fundamentTypes = [
        {
            title: "Ленточный фундамент",
            description: "Монолитный ленточный фундамент обладает запасом прочности и считается одним из самых надежных.",
            image: "/len-tochniy-fundament.jpg"
        },
        {
            title: "Монолитная плита",
            description: "Сплошная монолитная железобетонная плита под всей площадью здания.",
            image: "/monolitnaya-plita.jpg"
        },
        {
            title: "Утепленная шведская плита",
            description: "Современная технология с интегрированными коммуникациями и системой теплого пола.",
            image: "/ushp.jpg"
        }
    ];

    return (
        <section id="fundament" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Фундамент под ключ
                    </h2>
                    <p className="text-blue-900 text-lg max-w-3xl mx-auto">
                        Мы строим все виды фундаментов «под ключ». Выбор типа фундамента зависит от геологии участка,
                        типа строения, его этажности и материала стен.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {fundamentTypes.map((type, index) => (
                        <Card key={index} className="overflow-hidden border-blue-200">
                            <div className="aspect-video bg-blue-100 overflow-hidden">
                                <img
                                    src={type.image}
                                    alt={type.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">
                                    {type.title}
                                </h3>
                                <p className="text-blue-800">
                                    {type.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        onClick={scrollToForm}
                        className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg"
                        size="lg"
                    >
                        Рассчитать стоимость фундамента
                    </Button>
                </div>
            </div>
        </section>
    );
}