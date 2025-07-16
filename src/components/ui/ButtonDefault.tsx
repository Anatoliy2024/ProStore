import Link from "next/link"

export const ButtonDefault = ({
  url,
  children,
}: {
  url: string
  children: string
}) => {
  return (
    <Link href={url}>
      <div className="max-w-[100px] flex justify-center items-center p-2 rounded-xl  buttonHeader">
        {children}
      </div>
    </Link>
  )
}
