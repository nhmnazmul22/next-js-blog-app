"use client";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}
