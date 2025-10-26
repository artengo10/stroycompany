import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message = "" } = await request.json();

    // Проверяем обязательные поля
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Имя и телефон обязательны для заполнения" },
        { status: 400 }
      );
    }

    // Получаем данные из переменных окружения
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { success: false, error: "Серверная ошибка конфигурации" },
        { status: 500 }
      );
    }

    // Форматируем телефон (очищаем от лишних символов)
    const cleanPhone = phone.replace(/\D/g, "");

    // Создаем красивое сообщение для Telegram
    const telegramMessage = `
🎯 *НОВАЯ ЗАЯВКА С САЙТА*

👤 *Имя:* ${name}
📞 *Телефон:* ${cleanPhone}
${message ? `💬 *Сообщение:* ${message}` : ""}
⏰ *Время отправки:* ${new Date().toLocaleString("ru-RU")}
    `.trim();

    // Отправляем в Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: "Markdown", // Используем Markdown для форматирования
        }),
      }
    );

    const data = await response.json();

    if (data.ok) {
      return NextResponse.json({
        success: true,
        message: "Заявка успешно отправлена!",
      });
    } else {
      console.error("Telegram API error:", data);
      return NextResponse.json(
        { success: false, error: "Ошибка отправки в Telegram" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return NextResponse.json(
      { success: false, error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
