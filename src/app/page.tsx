"use client"
import Introduction from './introduction/page';
import {AnimatePresence} from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col m-0 p-0  backdrop-blur-md">
      <AnimatePresence mode="wait">
    <Introduction/>
    </AnimatePresence>
    </main>
  )
}
