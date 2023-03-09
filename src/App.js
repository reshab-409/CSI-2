import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth/Auth";
import NavDrawer from "./Components/Layout/Components/Header&Nav";
import Dashboard from "./Components/Layout/Dashboard";
import ComBM from "./Components/Layout/Modules/Master-Modules/Company-B-M";
import CompanyMaster from "./Components/Layout/Modules/Master-Modules/Company-Master";
import CustomerMaster from "./Components/Layout/Modules/Master-Modules/Customer-Master";
import GoDownMaster from "./Components/Layout/Modules/Master-Modules/GoDownMaster";
import ProductMaster from "./Components/Layout/Modules/Master-Modules/Product-Master";
import ProductionUnit from "./Components/Layout/Modules/Master-Modules/ProductionUnit-Master";
import RawMaterialMaster from "./Components/Layout/Modules/Master-Modules/RawMaterial-Master";
import BankUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/BankUpdate";
import CustomerUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/CustomerUpdate";
import GoDownUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/GoDownUpdate";
import ProductionUnitUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/ProductionUnitUpdate";
import ProductUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/ProductUpdate";
import RawMaterialUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/RawMaterialUpdate";
import VendorUpdate from "./Components/Layout/Modules/Master-Modules/UpdateModule/VendorUpdate";
import VendorMaster from "./Components/Layout/Modules/Master-Modules/Vendor-Master";

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      {isLoggedIn && <NavDrawer />}
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Dashboard /> : <Auth />} />
        <Route exact path="/CompanyBankMaster" element={isLoggedIn && <ComBM />} />
        <Route exact path="/EditBank/:id" element={isLoggedIn && <BankUpdate />} />
        <Route exact path="/CompanyMaster" element={isLoggedIn && <CompanyMaster />} />
        <Route exact path="/CustomerMaster" element={isLoggedIn && <CustomerMaster />} />
        <Route exact path="/EditCustomer/:id" element={isLoggedIn && <CustomerUpdate />} />
        <Route exact path="/ProductMaster" element={isLoggedIn && <ProductMaster />} />
        <Route exact path="/EditProduct/:id" element={isLoggedIn && <ProductUpdate />} />
        <Route exact path="/VendorMaster" element={isLoggedIn && <VendorMaster />} />
        <Route exact path="/EditVendor/:id" element={isLoggedIn && <VendorUpdate />} />
        <Route exact path="/RawMaterialMaster" element={isLoggedIn && <RawMaterialMaster />} />
        <Route exact path="/EditRawMaterial/:id" element={isLoggedIn && <RawMaterialUpdate />} />
        <Route exact path="/GoDownMaster" element={isLoggedIn && <GoDownMaster />} />
        <Route exact path="/EditGoDown/:id" element={isLoggedIn && <GoDownUpdate />} />
        <Route exact path="/ProductionUnitMaster" element={isLoggedIn && <ProductionUnit />} />
        <Route exact path="/EditProductionUnit/:id" element={isLoggedIn && <ProductionUnitUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
