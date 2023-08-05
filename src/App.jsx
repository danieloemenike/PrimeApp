import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from "./pages/dashboard";
import Loans from "./pages/loans";
import LoanRequest from "./pages/loan-request";
import Repayment from "./pages/repayment";
import RootLayout from "./routes/root";
import NoMatch from "./pages/NoMatch";

export default function Home() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <RootLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: "loans",
          element: <Loans />
        },
        {
          path: "loan-request",
          element: <LoanRequest />
        },
        {
          path: "repayment",
          element: <Repayment />
        },
        { path: "*", element: <NoMatch /> },
      ]
    }
  ])
  return(
    <>
   <RouterProvider router = {router} />
    </>
  )
}

