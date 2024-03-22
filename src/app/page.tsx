'use client'
import Homepage from "./_components/pages";
import { useEffect } from "react";
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return <Homepage />;
}
