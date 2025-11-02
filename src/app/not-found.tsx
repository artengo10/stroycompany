"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Construction } from "lucide-react";
import { motion } from "framer-motion";

export default function Custom404() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            <div className="text-center">
                {/* Анимированное число 404 */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative mb-8"
                >
                    <div className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 relative">
                        404
                        {/* Эффект свечения */}
                        <div className="absolute inset-0 text-9xl md:text-[12rem] text-blue-400/20 blur-xl -z-10">
                            404
                        </div>
                    </div>

                    {/* Декор - инструменты строителя */}
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                            y: [0, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="absolute -top-4 -right-4"
                    >
                        <Construction className="h-12 w-12 text-orange-400" />
                    </motion.div>
                </motion.div>

                {/* Заголовок и текст */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-bebas tracking-wide">
                        ОЙ! СТРАНИЦА НЕ НАЙДЕНА
                    </h1>
                    <p className="text-slate-300 text-lg max-w-md mx-auto">
                        Кажется, мы не можем найти страницу, которую вы ищете.
                        Возможно, она находится в процессе строительства или была перемещена.
                    </p>
                </motion.div>

                {/* Анимированные элементы декора */}
                <div className="relative mb-12">
                    {/* Плавающие элементы */}
                    <motion.div
                        animate={{
                            x: [0, 20, 0],
                            y: [0, -15, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="absolute -left-10 top-1/2 w-4 h-4 bg-blue-400 rounded-full opacity-60"
                    />
                    <motion.div
                        animate={{
                            x: [0, -15, 0],
                            y: [0, 20, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1
                        }}
                        className="absolute -right-8 top-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-60"
                    />
                    <motion.div
                        animate={{
                            x: [0, 10, 0],
                            y: [0, 25, 0]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 2
                        }}
                        className="absolute left-1/4 -bottom-8 w-2 h-2 bg-green-400 rounded-full opacity-60"
                    />
                </div>

                {/* Кнопки действий */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        onClick={() => router.push("/")}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
                    >
                        <Home className="h-5 w-5" />
                        На главную
                    </Button>

                    <Button
                        onClick={() => router.back()}
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Назад
                    </Button>
                </motion.div>

                {/* Дополнительная информация */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mt-12 p-6 bg-slate-800/50 rounded-lg border border-slate-700 max-w-md mx-auto"
                >
                    <p className="text-slate-400 text-sm mb-2">
                        Нужна помощь со строительством?
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-2 text-slate-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-sm">+7 (906) 367-78-04</span>
                        </div>
                    </div>
                </motion.div>

                {/* Декоративная строительная сетка */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-orange-400/20 rounded-lg rotate-45" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-blue-400/20 rounded-lg rotate-12" />
                    <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-purple-400/20 rounded-lg -rotate-45" />
                </div>
            </div>
        </div>
    );
}