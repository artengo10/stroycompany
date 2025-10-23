"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Данные формы:", formData);
        alert("Заявка отправлена!");
        setFormData({ name: "", phone: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Card className="w-full max-w-md mx-auto shadow-lg border-slate-700 bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="bg-slate-700/50 rounded-t-lg border-b border-slate-600">
                <CardTitle className="text-white text-center text-2xl font-bebas tracking-wide">
                    ОСТАВИТЬ ЗАЯВКУ
                </CardTitle>
                <CardDescription className="text-slate-300 text-center text-lg">
                    Заполните форму и мы свяжемся с вами
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg py-6"
                        />
                    </div>
                    <div>
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="Ваш номер телефона"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="text-white placeholder-slate-400 border-slate-600 bg-slate-700/50 focus:border-blue-500 text-lg py-6"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500 font-bebas tracking-wide"
                    >
                        ОТПРАВИТЬ
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}