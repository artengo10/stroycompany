"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        comment: "" // добавляем поле для комментария
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    comment: formData.comment // добавляем комментарий в отправку
                }),
            });

            const result = await response.json();

            if (result.success) {
                alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
                setFormData({ name: "", phone: "", comment: "" });
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
            phone: e.target.value
        });
    };

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            comment: e.target.value
        });
    };

    return (
        <Card className="w-full max-w-md mx-auto shadow-lg border-slate-700 bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="bg-slate-700/50 rounded-t-lg border-b border-slate-600">
                <CardTitle className="text-white text-center text-2xl font-bebas tracking-wide">
                    ОСТАВИТЬ ЗАЯВКУ
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300 text-sm font-medium">
                            Ваше имя
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Ваше имя"
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
                            type="text"
                            name="phone"
                            placeholder="Введите номер телефона"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            required
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg py-6"
                            disabled={isLoading}
                        />
                    </div>

                    {/* Добавляем поле для комментария */}
                    <div className="space-y-2">
                        <Label htmlFor="comment" className="text-slate-300 text-sm font-medium">
                            Комментарий (необязательно)
                        </Label>
                        <Textarea
                            id="comment"
                            name="comment"
                            placeholder="Дополнительная информация о вашем проекте..."
                            value={formData.comment}
                            onChange={handleCommentChange}
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg min-h-[100px]"
                            disabled={isLoading}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500 font-bebas tracking-wide"
                        disabled={isLoading}
                    >
                        {isLoading ? "ОТПРАВКА..." : "ОТПРАВИТЬ"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}