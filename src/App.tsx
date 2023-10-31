import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { HomePage } from "./pages/home/HomePage"
import { OrdersPage } from "./pages/orders/OrdersPage"
import { UpdatePage } from "./pages/update/UpdatePage"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="/update" element={<UpdatePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #c4c4c4;
  }
`

export default App
