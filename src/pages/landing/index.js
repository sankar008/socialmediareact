import React from 'react';
import FadeIn from 'react-fade-in';
import { Navbar } from '../../components/Navbar/NavbarLanding';
import { IconSection } from './IconSection/Index';
import { LandingStart } from './landingStart/index';

export default function Landing() {

    return (
        <>
            <FadeIn>
                <div className="is-white">
                    {/* Navbar */}
                    <Navbar />

                    {/* Body */}
                    <div className="landing-wrapper">
                        {/* Hero */}
                        {/* <Hero /> */}

                        {/* Landing Start */}
                        <LandingStart />

                        {/* Icon Section */}
                        <IconSection />
                    </div>
                </div>
            </FadeIn>
        </>
    )
} 