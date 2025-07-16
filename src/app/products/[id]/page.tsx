import { productAPI } from "@/api/api"
import { ButtonDefault } from "@/components/ui/ButtonDefault"
import { ProductType } from "@/types/types"
import { isSafeDomain } from "@/utils/safeDomain"
// import axios from "axios"
import Image from "next/image"
// import Link from "next/link"
import { notFound } from "next/navigation"

export default async function Product({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params

  const search = await searchParams

  const pageBack = search.pageBack
  const scrollBack = search.scrollBack

  // теперь можно использовать pageBack
  console.log("pageBack =", pageBack)

  const product: ProductType | null = await productAPI
    .getProductInfo(id)
    .catch(() => null)
  //   const product: ProductType | null = await axios
  //     .get(`https://api.escuelajs.co/api/v1/products/${id}`)
  //     .then((res) => res.data)
  //     .catch(() => null)

  if (!product) {
    throw notFound()
  }

  return (
    <div className="p-4 max-[500]:p-2">
      <ButtonDefault url={`/?page=${pageBack}&scrollBack=${scrollBack}`}>
        Back
      </ButtonDefault>
      {/* <Link href={`/?page=${pageBack}&scrollBack=${scrollBack}`}>Back</Link> */}
      <div className="pt-5 flex flex-wrap gap-[20px]">
        <div>
          <Image
            src={
              isSafeDomain(product.category.image)
                ? product.category.image
                : "/image/no-photo.jpg"
            }
            alt="avatarProduct"
            width={250}
            height={250}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-wrap text-2xl font-bold  gap-[10px]">
            <div>Model: </div>
            <div>{product.title}</div>
          </div>
          <div className="max-w-[600px] w-full">
            <div>Description:</div>
            <div>{product.description}</div>
          </div>
          <div className="text-green-600 font-semibold flex gap-[10px]">
            <span>Price:</span>
            <span>{product.price} $</span>
          </div>
          <div className="flex gap-[10px]">
            <span>Category:</span>
            <span>{product.category.name}</span>
          </div>

          {/* <p className="text-green-600 font-semibold">
            Price: {product.price} $
          </p>
          <p>Category:{product.category.name}</p> */}
        </div>
      </div>
    </div>
  )
}

// ;<div className="flex justify-between  flex-wrap flex-1">
//   <div className="flex flex-wrap">
//     <div>Model: </div>
//     <div>{el.title}</div>
//   </div>
//   <div className="flex flex-wrap text-green-600 font-semibold">
//     <div>Prise: </div>
//     <div>${el.price}</div>
//   </div>
// </div>
