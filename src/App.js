import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth/Auth";
import NavDrawer from "./Components/Layout/Components/Header&Nav";
import Dashboard from "./Components/Layout/Dashboard";
import ComBM from "./Components/Layout/Modules/Master-Modules/Company-B-M";
import CompanyMaster from "./Components/Layout/Modules/Master-Modules/Company-Master";
import CustomerMaster from "./Components/Layout/Modules/Master-Modules/Customer-Master";
import ProductMaster from "./Components/Layout/Modules/Master-Modules/Product-Master";
import BankUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/BankUpdate";
import CustomerUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/CustomerUpdate";
import ProductUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/ProductUpdate";

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      {isLoggedIn && <NavDrawer />}
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Dashboard /> : <Auth />} />
        <Route exact path="/CompanyBankMaster" element={isLoggedIn && <ComBM />} />
        <Route exact path="/EditBank/:id" element={isLoggedIn && <BankUpdate />} />
        <Route exact path="/EditCustomer/:id" element={isLoggedIn && <CustomerUpdate />} />
        <Route exact path="/EditProduct/:id" element={isLoggedIn && <ProductUpdate />} />
        <Route exact path="/CompanyMaster" element={isLoggedIn && <CompanyMaster />} />
        <Route exact path="/CustomerMaster" element={isLoggedIn && <CustomerMaster />} />
        <Route exact path="/ProductMaster" element={isLoggedIn && <ProductMaster />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
