"use client"

import { Moon } from "@/assets/svg/moon"
import { Sun } from "@/assets/svg/sun"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Прочитать текущую тему из cookie или data-theme атрибута
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light"
    if (currentTheme === "light" || currentTheme === "dark") {
      setTheme(currentTheme)
    } else {
      setTheme("light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    // Записать в cookie с expires, path и т.д.
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000` // 1 год
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full cursor-pointer  hover:scale-125"
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  )
}
