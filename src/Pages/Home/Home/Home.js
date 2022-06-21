import React from 'react';
import Contact from '../../Contact/Contact';
import ExceptionalDental from '../../ExceptionalDental/ExceptionalDental';
import Footer from '../../Footer/Footer';
import Testimonials from '../../Testimonials/Testimonials';
import ApointmentBanner from '../ApointmentBanner/ApointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Navigation from './Shared/Navigation/Navigation';


const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Services></Services>
           <ApointmentBanner></ApointmentBanner>
           <ExceptionalDental></ExceptionalDental>
           <Testimonials></Testimonials>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;