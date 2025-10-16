"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-lg border-b border-blue-100">
            <div className="container mx-auto px-1 py-4">
                <div className="flex items-center justify-between">
                    {/* Логотип */}
                    <div className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Логотип"
                            className="h-22 w-auto transition-all duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Контакты и соцсети */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        {/* Номер телефона */}
                        <div className="hidden sm:flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 transition-all duration-300 hover:bg-blue-100 hover:shadow-md group">
                            <Phone className="h-4 w-4 text-blue-700" />
                            <span className="text-blue-800 font-medium">
                                +7 (999) 999-99-99
                            </span>
                        </div>

                        {/* Соцсети */}
                        <div className="flex space-x-2 md:space-x-3">
                            <a
                                href="#"
                                className="bg-green-500 text-white p-2 rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-110"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="bg-blue-500 text-white p-2 rounded-full transition-all duration-300 hover:bg-blue-600 hover:scale-110"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                                </svg>
                            </a>
                        </div>

                        {/* Бургер-меню */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-blue-700 hover:bg-blue-50">
                                    <Menu className="h-6 w-6 md:h-7 md:w-7" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="bg-white border-l border-blue-100">
                                <SheetTitle className="sr-only">Меню навигации</SheetTitle>
                                <div className="flex flex-col space-y-4 mt-8">
                                    <Button
                                        variant="ghost"
                                        className="justify-start text-blue-800 text-lg hover:bg-blue-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Главная
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="justify-start text-blue-800 text-lg hover:bg-blue-50"
                                        onClick={() => {
                                            document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                                            setIsOpen(false);
                                        }}
                                    >
                                        Заявка
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="justify-start text-blue-800 text-lg hover:bg-blue-50"
                                        onClick={() => {
                                            document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                                            setIsOpen(false);
                                        }}
                                    >
                                        Контакты
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}