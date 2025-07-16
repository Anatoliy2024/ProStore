"use client"
import { productAPI } from "@/api/api"
import { ProductType } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Paginator } from "../Paginator/Paginator"
import { throttle } from "lodash"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { isSafeDomain } from "@/utils/safeDomain"

import FullScreenLoader from "../ui/Loading"

export const ProductsBlock = () => {
  const [products, setProducts] = useState<ProductType[] | []>([])
  const [total, setTotalProducts] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const [loading, setLoading] = useState(true)
  const [isWrongURL, setIsWrongURL] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const offsetUrl = Number(searchParams.get("page")) || 1
  const scroll = Number(searchParams.get("scrollBack")) || 0
  const totalPage = Math.ceil(total / 10)

  useEffect(() => {
    setLoading(true)

    Promise.all([
      productAPI.getProductsInfo(offsetUrl),
      productAPI.getAllProducts(),
    ])
      .then(([productsData, allProductsData]) => {
        setProducts(productsData)
        setTotalProducts(allProductsData.length)
        // обработать thirdResult, если нужно
      })
      .catch((error) => {
        console.log(error)
        setIsWrongURL(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [offsetUrl])

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY)
    }, 200)

    window.addEventListener("scroll", handleScroll)

    // Очистка при размонтировании
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  useEffect(() => {
    if (scroll > 0) {
      window.scrollTo(0, scroll)
      const params = new URLSearchParams(searchParams.toString())
      params.delete("scrollBack")
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }
  }, [scroll, products, searchParams, pathname, router])

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(newPage))
    params.delete("scrollBack") // удаляем параметр scroll

    router.push(`${pathname}?${params.toString()}`, { scroll: false })

    // dispatch(setRoomPage(newPage)) // переключаем страницу в Redux
  }

  return (
    <div className="p-4 max-[1000]:px-2 ">
      {/* {loading && <div>загрузка...</div>} */}
      {totalPage > 1 && (
        <Paginator
          currentPage={offsetUrl}
          onPageChange={handlePageChange}
          totalPages={totalPage}
        />
      )}
      {loading && <FullScreenLoader />}
      {!loading && !isWrongURL && (
        <div className="flex flex-col gap-3 pt-5">
          {products.length > 0 &&
            products.map((el) => (
              <Link
                key={el.id}
                href={`/products/${el.id}?pageBack=${offsetUrl}&scrollBack=${scrollY}`}
              >
                <div className="flex gap-8 items-center text-2xl justify-between px-10 flex-wrap border p-2.5 rounded-2xl  transition-all duration-400 ease-in-out max-[1000]:px-3 productCard">
                  <div>
                    <Image
                      src={
                        isSafeDomain(el.category.image)
                          ? el.category.image
                          : "/image/no-photo.jpg"
                      }
                      width={250}
                      height={250}
                      alt="avatarProduct"
                    />

                    {/* <Image
                      src={el.category.image}
                      alt="avatarProduct"
                      width={250}
                      height={250}
                    /> */}
                  </div>
                  <div className="flex justify-between  flex-wrap flex-1 gap-[10px]">
                    <div className="flex flex-wrap gap-[5px]">
                      <div>Model: </div>
                      <div>{el.title}</div>
                    </div>
                    <div className="flex flex-wrap text-green-600 font-semibold gap-[5px]">
                      <div>Prise: </div>
                      <div>${el.price}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
      {!loading && isWrongURL && (
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
          Проблемы с API
        </div>
      )}
    </div>
  )
}
