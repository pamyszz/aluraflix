import React from "react";
import useScrollHeader from "../../hooks/useScrollHeader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import GlobalStyles from "../../components/GlobalStyles";

const Home = () => {
    const blackHeader = useScrollHeader();

    return (
        <>
            <GlobalStyles />
            <Header black={blackHeader} />
            <Outlet />
            <Footer />
        </>
    );
};

export default Home;
