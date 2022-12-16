import NavBar from "./NavBar";
import Banner from "./Banner";
import NavbarHeader from "./NavbarHeader";
import Trending from "./Trending";
import YouMayLike from "./YouMayLike";
import FooterTop from "./FooterTop";
import FooterBody from "./FooterBody";

import React from 'react'

function Home() {
    return (
        <>
            <NavbarHeader />
            <NavBar />
            <Banner />
            <Trending />
            <YouMayLike />
            <FooterTop />
            <FooterBody />
        </>
    )
}

export default Home