import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layout/DefaultLayout"
import { CheckOut } from "./pages/Checkout"
import { PurchaseConfirmation } from "./pages/PurchaseConfirmation"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <DefaultLayout /> }>
                <Route path="/" element={ <Home /> } />
                <Route path="/checkout" element={ <CheckOut /> } />
                <Route path="/purchaseConfirmation" element={ <PurchaseConfirmation /> } />
            </Route>
        </Routes>
    )
}