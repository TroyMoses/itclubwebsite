'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  textRevealVariants, 
  cardRevealVariants, 
  staggeredContainerVariants, 
  buttonVariants,
  sectionVariants,
} from '@/lib/animations';

// Sample event data
const events = [
  {
    id: 1,
    title: 'Tech Talk: AI Revolution',
    date: '2025-05-10',
    time: '2:00 PM - 4:00 PM',
    location: 'Main Auditorium',
    description: 'Join us for an insightful session on the future of AI.',
    isUpcoming: true,
    image: '/janintake.jpg',
  },
  {
    id: 2,
    title: 'Hackathon 2025',
    date: '2025-06-15',
    time: '10:00 AM - 6:00 PM',
    location: 'Tech Lab',
    description: 'Compete in our annual coding challenge!',
    isUpcoming: true,
    image: '/prog1.JPG',
  },
  {
    id: 3,
    title: 'Workshop: Cloud Computing',
    date: '2025-03-20',
    time: '1:00 PM - 3:00 PM',
    location: 'Online',
    description: 'Learn the basics of cloud computing with AWS.',
    isUpcoming: false,
    image: '/prog2.JPG',
  },
];

export default function Events() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const filteredEvents = events.filter((event) => {
    if (filter === 'upcoming') return event.isUpcoming;
    if (filter === 'past') return !event.isUpcoming;
    return true;
  });

  return (
    <div className="flex flex-col h-full">
      {/* Header with reveal animation */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={textRevealVariants}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10"
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">
              IT - CLUB BUGEMA MAIN CAMPUS
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-lg font-normal">
              Home
            </Link>
            <Link href="/event" className="text-lg border-b-2 border-green-700">
              Events
            </Link>
            <Link href="/projects" className="text-lg font-normal">
              Projects
            </Link>
            <Link href="/team" className="text-lg font-normal">
              Team
            </Link>
            <Link href="/blogs" className="text-lg font-normal">
              Blogs
            </Link>
            <Button variant="default">Join Us</Button>
          </nav>
        </div>
      </motion.header>

      <main className="flex-1">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="relative bg-background py-12 px-4 sm:px-6 lg:px-8"
        >
          {/* Animated background */}
          <motion.div 
            className="absolute inset-0 -z-10"
            style={{ y: backgroundY }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:6rem_4rem]">
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50" />
            </div>
          </motion.div>

          {/* Header Section with enhanced reveal */}
          <motion.div 
            variants={textRevealVariants}
            className="text-center mb-16 relative"
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl"
              variants={textRevealVariants}
            >
              <span className="inline-block">IT Club</span>{" "}
              <span className="inline-block bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                Events
              </span>
            </motion.h1>
            <motion.p 
              variants={textRevealVariants}
              className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto"
            >
              Stay updated with our exciting tech events, workshops, and hackathons!
            </motion.p>
          </motion.div>

          {/* Filter Buttons with spring animation */}
          <motion.div 
            variants={staggeredContainerVariants}
            className="flex justify-center space-x-4 mb-12"
          >
            {['all', 'upcoming', 'past'].map((filterOption) => (
              <motion.div
                key={filterOption}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onClick={() => setFilter(filterOption as any)}
                  variant={filter === filterOption ? 'default' : 'outline'}
                  className="px-6 relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)} Events
                  </span>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Events Grid with staggered reveal */}
          <motion.div 
            variants={staggeredContainerVariants}
            className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredEvents.length === 0 ? (
              <motion.p 
                variants={textRevealVariants}
                className="text-center text-gray-500 col-span-full text-lg"
              >
                No events found.
              </motion.p>
            ) : (
              filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={cardRevealVariants}
                  custom={index}
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group bg-card rounded-xl shadow-md overflow-hidden"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.2 }}
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.4 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"
                      />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="p-6 relative"
                    variants={textRevealVariants}
                  >
                    <h2 className="text-xl font-semibold text-foreground mb-3">{event.title}</h2>
                    <p className="text-gray-500 leading-relaxed">{event.description}</p>
                    <motion.div 
                      className="mt-6 space-y-3"
                      variants={staggeredContainerVariants}
                    >
                      {[
                        { icon: FaCalendarAlt, text: event.date },
                        { icon: FaClock, text: event.time },
                        { icon: FaMapMarkerAlt, text: event.location }
                      ].map(({ icon: Icon, text }, i) => (
                        <motion.p 
                          key={i}
                          variants={textRevealVariants}
                          className="flex items-center text-foreground text-sm"
                        >
                          <Icon className="mr-3 text-green-700" /> {text}
                        </motion.p>
                      ))}
                    </motion.div>
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="mt-6"
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500"
                        variant="default"
                      >
                        {event.isUpcoming ? 'Register Now' : 'View Details'}
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>
      </main>

      {/* Footer with reveal animation */}
      <motion.footer 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t py-8 px-10 mt-auto"
      >
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/blogs" className="text-sm text-gray-500 hover:text-foreground transition-colors">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-foreground transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-foreground transition-colors">
                  LinkedIn
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:text-foreground transition-colors">
                  Documentation
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-foreground transition-colors">
                  GitHub
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-foreground transition-colors">
                  Learning Materials
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              © 2025 IT Club Bugema Main Campus. All rights reserved..
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
