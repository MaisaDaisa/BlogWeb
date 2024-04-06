
import React from 'react';
import "./globals.css";
import Header from "./layout/Header";
import Footer from './layout/Footer';
import { getPosts } from '@/lib/blogManagement';
import Container from './layout/Container';

export default async function Home() {


  return (
    <main>
      <Header />
      <Container>

      </Container>
      <Footer />
    </main>
  );
}
