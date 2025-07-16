export const dynamic = "force-static"

export default async function About() {
  // Время генерации страницы
  const generatedAt = new Date().toLocaleString("ru-RU")
  return (
    <div className="min-h-[calc(100vh-50px)]  flex justify-center items-center flex-col gap-[20px]">
      <h1 className="text-3xl">О нас</h1>
      <div className="text-center">
        Это тестовое приложение для демонстрации работы с Next.js
      </div>
      <p className="text-center mt-4 text-sm text-gray-500">
        Страница сгенерирована: {generatedAt}
      </p>
    </div>
  )
}
