import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-white border-t border-blue-100 shadow-lg">
            <div className="container mx-auto px-4 py-8">
                {/* Контактная информация */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                        <div className="flex items-center mb-3">
                            <Phone className="h-5 w-5 text-black mr-2" />
                            <h3 className="text-black text-lg font-semibold">Контакты</h3>
                        </div>
                        <p className="text-blue-800">+7 (999) 999-99-99</p>
                        <p className="text-blue-800">example@email.com</p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                        <div className="flex items-center mb-3">
                            <MapPin className="h-5 w-5 text-black mr-2" />
                            <h3 className="text-black text-lg font-semibold">Адрес</h3>
                        </div>
                        <p className="text-blue-800">г. Москва, ул. Примерная, д. 123</p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                        <div className="flex items-center mb-3">
                            <Mail className="h-5 w-5 text-black mr-2" />
                            <h3 className="text-black text-lg font-semibold">Социальные сети</h3>
                        </div>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon" className="text-blue-700 hover:bg-blue-100">
                                <Instagram className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-blue-700 hover:bg-blue-100">
                                <Facebook className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-blue-700 hover:bg-blue-100">
                                <Twitter className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Место для карты */}
                <div className="bg-blue-50 rounded-lg h-64 flex items-center justify-center border border-blue-100">
                    <p className="text-black">Здесь будет карта</p>
                </div>

                <div className="text-center mt-8 pt-4 border-t border-black">
                    <p className="text-black">© 2024 Все права защищены</p>
                </div>
            </div>
        </footer>
    );
}