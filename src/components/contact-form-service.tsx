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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Данные формы:", formData);
        alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
        setFormData({ name: "", phone: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
                            onChange={handleChange}
                            required
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg py-6"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-300 text-sm font-medium">
                            Номер телефона
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="+7 (999) 999-99-99"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg py-6"
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
                            onChange={handleChange}
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg min-h-[100px]"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500 tracking-wide font-bebas"
                    >
                        ОТПРАВИТЬ ЗАЯВКУ
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}