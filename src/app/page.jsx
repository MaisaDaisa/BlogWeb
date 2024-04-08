
import React from 'react';
import "./globals.css";
import Header from "./layout/Header/Header";
import Footer from './layout/Footer';
import Container from './layout/Container';
import HomePage from '@/app/(Paths)/homePage/HomePage';
export default async function Home() {


  return (
    <main>
      <Header />
      <Container>
        <HomePage />
      </Container>
      <Footer />
    </main>
  );
}
