import { Header } from "@/components/Header/Header"

export const LayoutHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <Header />
      <div className="pt-[50px]">{children}</div>
    </div>
  )
}
