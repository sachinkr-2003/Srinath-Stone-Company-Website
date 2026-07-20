import React from 'react';
import { Helmet } from 'react-helmet-async';

// Import all sub-components for the Homepage
import HeroBanner from '../components/home/HeroBanner';
import CompanyIntro from '../components/home/CompanyIntro';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProductsOverview from '../components/home/ProductsOverview';
import ServicesOverview from '../components/home/ServicesOverview';
import CompanyStats from '../components/home/CompanyStats';
import Testimonials from '../components/home/Testimonials';
import GalleryPreview from '../components/home/GalleryPreview';
import ContactPreview from '../components/home/ContactPreview';

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Srinath Stone Company | Premium Aggregates & M-Sand Supplier</title>
        <meta name="description" content="Leading manufacturer and supplier of construction aggregates, stone dust, wash sand, and M-sand. Supplying high-quality materials for massive infrastructure projects." />
      </Helmet>

      <HeroBanner />
      <CompanyIntro />
      <WhyChooseUs />
      <ProductsOverview />
      <ServicesOverview />
      <CompanyStats />
      <Testimonials />
      <GalleryPreview />
      <ContactPreview />
      
    </main>
  );
};

export default Home;
