import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import MainContent from './Layout/MainContent/MainContent';
import Document from "./Pages/Document";
import Archive from "./Pages/Archive";
import Alerts from "./Pages/Alerts";
import Deliveries from "./Pages/Document/Deliveries";
import PurchaseOrders from "./Pages/Document/PurchaseOrders";
import SalesOrders from "./Pages/Document/SalesOrders";
import SalesReturns from "./Pages/Document/SalesReturns";
import Settings from "./Pages/Settings";
import ViewDocument from "./Pages/Document/ViewDocument";
import EditDocument from "./Pages/Document/EditDocument";
import DeleteDocument from "./Pages/Document/DeleteDocument";

function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<MainContent Title={'Dashboard'} Content={<Dashboard />} />} />
                    <Route path="/document" element={<MainContent Title={'Document'} Content={<Document />} />} />
                    <Route path="/salesorders" element={<MainContent Title={'Commandes de vente'} Content={<SalesOrders />} />} />
                    <Route path="/purchaseorders" element={<MainContent Title={'Commandes Achat'} Content={<PurchaseOrders />} />} />
                    <Route path="/salesreturns" element={<MainContent Title={'Retours de vente'} Content={<SalesReturns />} />} />
                    <Route path="/deliveries" element={<MainContent Title={'Livraisons'} Content={<Deliveries />} />} />
                    <Route path="/archive" element={<MainContent Title={'Archive'} Content={<Archive />} />} />
                    <Route path="/alerts" element={<MainContent Title={'Alerts'} Content={<Alerts />} />} />
                    <Route path="/settings" element={<MainContent Title={'Settings'} Content={<Settings />} />} />
                    <Route path="/viewdocument/:id" element={<MainContent Title={'View Document'} Content={<ViewDocument />} />} />
                    <Route path="/editdocument/:id" element={<MainContent Title={'Edit Document'} Content={<EditDocument />} />} />
                    <Route path="/deletedocument/:id" element={<MainContent Title={'Delete Document'} Content={<DeleteDocument />} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
