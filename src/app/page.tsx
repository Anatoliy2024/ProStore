"use client"
import { Suspense } from "react"
import { ProductsBlock } from "@/components/ProductsBlock/ProductsBlock"

export default function Home() {
  return (
    <Suspense>
      <ProductsBlock />
    </Suspense>
  )
}
