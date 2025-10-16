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
        <Card className="w-full max-w-md mx-auto shadow-lg border-blue-100">
            <CardHeader className="bg-blue-50 rounded-t-lg border-b border-blue-100">
                <CardTitle className="text-black text-center">
                    Оставить заявку
                </CardTitle>
                <CardDescription className="text-blue-900 text-center">
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
                            className="text-blue-900 placeholder-blue-400 border-blue-200 focus:border-blue-500"
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
                            className="text-blue-900 placeholder-blue-400 border-blue-200 focus:border-blue-500"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-blue-900 hover:bg-blue-800 text-white shadow-md transition-colors duration-300"
                    >
                        Отправить
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}