
import React from 'react';
import Header from "@/app/layout/Header/Header";
import Footer from '@/app/layout/Footer';
import Container from '@/app/layout/Container';
import UserPosts from './UserPosts';

export default async function page() {
  return (
    <main>
      <Header />
      <Container>
        <UserPosts />
      </Container>
      <Footer />
    </main>
  );
}
