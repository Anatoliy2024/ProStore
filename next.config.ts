import type { NextConfig } from "next"

// const allowedHosts = [
//   "i.imgur.com",
//   "pravatar.cc",
//   "placeimg.com",
//   "www.google.com",
//   "example.com",
//   "cdn.somesite.com",
//   // добавляй по мере необходимости
// ]

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ["i.imgur.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "pravatar.cc",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "placeimg.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "www.google.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // Можно добавить ещё правил
    ],
  },
}

export default nextConfig
