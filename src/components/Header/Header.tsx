// import Link from "next/link"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import { ButtonDefault } from "../ui/ButtonDefault"

export const Header = () => {
  return (
    <div className="h-[50px] bg-lime-700 fixed min-w-screen flex justify-between   items-center gap-[20px] px-[40px] max-[350]:px-[10px] header">
      <div className="flex gap-[20px]">
        <ButtonDefault url={"/"}>Home</ButtonDefault>
        <ButtonDefault url={"/about"}>About us</ButtonDefault>
        {/* <Link href={"/"}>
          <div className="p-2  rounded-xl buttonHeader">Home</div>
        </Link>
        <Link href={"/about"}>
          <div className="p-2 rounded-xl  buttonHeader">About us</div>
        </Link> */}
      </div>
      <ThemeToggle />
    </div>
  )
}
