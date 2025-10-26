"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactFormService() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Убираем всю очистку и форматирование - отправляем как есть
        try {
            const response = await fetch('/api/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone, // отправляем без изменений
                    message: formData.message
                }),
            });

            const result = await response.json();

            if (result.success) {
                alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
                setFormData({ name: "", phone: "", message: "" });
            } else {
                alert("Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            name: e.target.value
        });
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            phone: e.target.value // принимаем любое значение без форматирования
        });
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            message: e.target.value
        });
    };

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-2xl border-slate-700 bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="bg-slate-700/50 rounded-t-xl border-b border-slate-600">
                <CardTitle className="text-white text-center text-2xl tracking-wide font-bebas">
                    ОСТАВЬТЕ ЗАЯВКУ
                </CardTitle>
                <CardDescription className="text-slate-300 text-center text-lg">
                    Мы перезвоним вам в течение 15 минут
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300 text-sm font-medium">
                            Ваше имя
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Иван Иванов"
                            value={formData.name}
                            onChange={handleNameChange}
                            required
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg py-6"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-300 text-sm font-medium">
                            Номер телефона
                        </Label>
                        <Input
                            id="phone"
                            type="text" // меняем с "tel" на "text" чтобы убрать телефонную клавиатуру на мобильных
                            name="phone"
                            placeholder="Введите номер телефона"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            required
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg py-6"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-300 text-sm font-medium">
                            Сообщение
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Расскажите о вашем проекте..."
                            value={formData.message}
                            onChange={handleMessageChange}
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg min-h-[100px]"
                            disabled={isLoading}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500 tracking-wide font-bebas"
                        disabled={isLoading}
                    >
                        {isLoading ? "ОТПРАВКА..." : "ОТПРАВИТЬ ЗАЯВКУ"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}