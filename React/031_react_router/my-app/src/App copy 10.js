import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function Products(){
  return <div>products</div>
}

function ProductDetail(){
  const location = useLocation()
  const { id } = useParams()
  
  return <div>product detail {id}</div>
}

function ProductDetailNotice(){
  const location = useLocation()
  const { id } = useParams()

  return <div>product detail notice {id}</div>
}

function Cart(){
  return <div>cart</div>
}

function Users(){
  return <div>Users</div>
}

function UsersCoupon(){
  return <div>user coupon</div>
} 

function UsersQuestion(){
  return <div>user question</div>
} 

function UsersNotice(){
  return <div>user notice</div>
} 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/products/:id/notice" element={<ProductDetailNotice />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/users/coupon" element={<UsersCoupon />}/>
        <Route path="/users/question" element={<UsersQuestion />}/>
        <Route path="/users/notice" element={<UsersNotice />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;