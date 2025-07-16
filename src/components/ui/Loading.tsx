import { CircularProgress } from "@mui/material"
export default function FullScreenLoader() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] ">
      <div className="w-full h-full   rounded flex justify-center">
        <CircularProgress size={60} />
      </div>
    </div>
  )
}
// div className="flex items-center justify-center min-h-screen">
//       <div className="w-full max-w-md p-6 bg-white shadow rounded flex justify-center">
//         <CircularProgress />
//       </div>
//     </div>
