import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import MainContent from './Layout/MainContent/MainContent';
import Document from "./Pages/Document";
import Alerts from "./Pages/Alerts";
import Deliveries from "./Pages/Document/Deliveries";
import PurchaseOrders from "./Pages/Document/PurchaseOrders";
import SalesOrders from "./Pages/Document/SalesOrders";
import SalesReturns from "./Pages/Document/SalesReturns";
import Settings from "./Pages/Settings";
import ViewDocument from "./Pages/Document/ViewDocument";
import EditDocument from "./Pages/Document/EditDocument";
import DeleteDocument from "./Pages/Document/DeleteDocument";
import AddDocumentForm from "./Layout/Components/AddDocumentForm";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Header from "./Layout/Header/Header";


function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {

    const location = useLocation();

    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";

    return (
        <div className="bg-gray-100 min-h-screen">
            {!isRegisterPage && !isLoginPage && <Header />}

            <Routes>
               <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/document" element={<MainContent Title={'Document'} Content={<Document />} />} />
                <Route path="/salesorders" element={<MainContent Title={'Commandes de vente'} Content={<SalesOrders />} Action={"Add Document"}
                    ActionLink={`/documents/add?table=ORDR`} />} />
                <Route path="/purchaseorders" element={<MainContent Title={'Commandes Achat'} Content={<PurchaseOrders />} Action={"Add Product"}
                    ActionLink={"/documents/add?table=OPOR"} />} />
                <Route path="/salesreturns" element={<MainContent Title={'Retours de vente'} Content={<SalesReturns />} Action={"Add Product"}
                    ActionLink={"/documents/add?table=ORDN"} />} />
                <Route path="/deliveries" element={<MainContent Title={'Livraisons'} Content={<Deliveries />} Action={"Add Product"}
                    ActionLink={"/documents/add?table=ORLN"} />} />
                <Route path="/alerts" element={<MainContent Title={'Alerts'} Content={<Alerts />} />} />
                <Route path="/settings" element={<MainContent Title={'Settings'} Content={<Settings />} />} />
                <Route path="/viewdocument/:id" element={<MainContent Content={<ViewDocument />} />} />
                <Route path="/editdocument/:id" element={<MainContent Content={<EditDocument />} />} />
                <Route path="/deletedocument/:id" element={<MainContent Content={<DeleteDocument />} />} />
                <Route path="/documents/add" element={<MainContent Title={'Ajouter Document'} Content={<AddDocumentForm />} />} />


            </Routes>
        </div>
    );
}

export default App;
