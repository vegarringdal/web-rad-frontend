import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfileDialog } from "@rad-tools";
import { Welcome } from "../routes/welcome/Welcome";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Access } from "../routes/access/access";

export function Router() {
    return (
        <BrowserRouter>
            <ProfileDialog />

            <div className="flex flex-col h-full">
                <Header />
                <div className="flex flex-row h-full mt-2">
                    <Routes>
                        <Route path="/" element={<Welcome />}></Route>
                        <Route path="/access/*" element={<Access />}></Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
