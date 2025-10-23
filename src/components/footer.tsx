import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-slate-800 border-t border-slate-700 shadow-2xl">
            <div className="container mx-auto px-4 py-12">
                {/* Контактная информация */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center mb-4">
                            <Phone className="h-5 w-5 text-blue-400 mr-3" />
                            <h3 className="text-white text-xl font-bold tracking-wide">КОНТАКТЫ</h3>
                        </div>
                        <p className="text-slate-300 text-lg">+7 (999) 999-99-99</p>
                        <p className="text-slate-300 text-lg">example@email.com</p>
                    </div>

                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center mb-4">
                            <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                            <h3 className="text-white text-xl font-bold tracking-wide">АДРЕС</h3>
                        </div>
                        <p className="text-slate-300 text-lg">г. Москва, ул. Примерная, д. 123</p>
                    </div>

                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center mb-4">
                            <Mail className="h-5 w-5 text-blue-400 mr-3" />
                            <h3 className="text-white text-xl font-bold tracking-wide">СОЦИАЛЬНЫЕ СЕТИ</h3>
                        </div>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-slate-600 border border-slate-600">
                                <Instagram className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-slate-600 border border-slate-600">
                                <Facebook className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-slate-600 border border-slate-600">
                                <Twitter className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Место для карты */}
                <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl h-64 flex items-center justify-center border border-slate-600 mb-12">
                    <p className="text-slate-400 text-lg">Здесь будет карта</p>
                </div>

                <div className="text-center pt-8 border-t border-slate-700">
                    <p className="text-slate-400 text-lg">© 2024 Все права защищены</p>
                </div>
            </div>
        </footer>
    );
}