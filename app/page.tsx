import { Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const programs = [
  {
    title: "Women Techmakers",
    description:
      "Advance your tech career and connect with a supportive global community.",
    image: "/prog1.JPG",
  },
  {
    title: "Tech Equity Collective",
    description:
      "Launch your tech career with resources and support needed to break into the tech industry.",
    image: "/prog3.JPG",
  },
  {
    title: "Google Developer Experts",
    description:
      "Become a recognized leader in your field and share your passion for Google technologies.",
    image: "/prog2.JPG",
  },
  {
    title: "Accelerator",
    description:
      "Fuel your innovation with Google's accelerator programs for startups and developers.",
    image: "/prog4.JPG",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Image
              src="/medialogo.png"
              alt="GDSC Logo"
              width={32}
              height={32}
              className="h-8 w-16"
            /> */}
            <span className="text-2xl">
              IT - CLUB BUGEMA MAIN CAMPUS
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-lg border-b-2 border-green-700"
            >
              Home
            </Link>
            <Link href="/event" className="text-lg font-normal">
              Events
            </Link>
            <Link href="#" className="text-lg font-normal">
              Projects
            </Link>
            <Link href="#" className="text-lg font-normal">
              Team
            </Link>
            <Link href="/blogs" className="text-lg font-normal">
              Blogs
            </Link>
            <Button variant="default">Join Us</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 ">
        {/* Hero Section */}
        <section className=" pt-10 pb-20 px-10">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Join the Developer Community
                </h1>
                <p className="text-gray-500 md:text-xl">
                  Tap into a global network of developers passionate about
                  Google technologies. Find your local Google Developer Group
                  and start connecting!
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button variant="default" size="lg">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[370px] overflow-hidden rounded-xl">
                <Image
                  src="/banner.jpg"
                  alt="Community gathering"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Communities Section */}
        <section className="py-20 px-10">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
              abut the communities
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className=" border-none">
                <CardHeader>
                  <Users className="h-12 w-12 text-pink-500" />
                  <CardTitle>Google Developer Groups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Google Developer Groups (GDGs) bring together developers and
                    technologists to connect, learn, and grow alongside Google
                    {"'"}s technologies and experts.
                  </p>
                </CardContent>
              </Card>
              <Card className=" border-none">
                <CardHeader>
                  <Globe className="h-12 w-12 text-green-500" />
                  <CardTitle>Google Developer Groups on Campus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    GDGs on Campus provide learning opportunities for aspiring
                    developers from universities and colleges around the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20  px-10">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
              Additional communities and programs
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <Card key={program.title}>
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{program.title}</CardTitle>
                    <p className="text-sm text-gray-500">
                      {program.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" size="sm">
                      Learn more
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 px-10">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Become a leader in your local developer community
                </h2>
                <p className="text-gray-500">
                  Lead a Google Developer Group (GDG) and empower your local
                  developer community. Check if a chapter already exists in your
                  city or campus, and get involved!
                </p>
                <Button size="lg">Lead a GDG</Button>
              </div>
              <div className="relative h-[350px] overflow-hidden rounded-xl">
                <Image
                  src="/leadership.jpg"
                  alt="DevFest speakers"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-10">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  X (Twitter)
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  YouTube
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Women Techmakers
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Google Developer Groups
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Google Developer Experts
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Accelerators
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Developer Resources
              </h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Google API Console
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Google Cloud Console
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Firebase Console
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              © 2024 Google Developer Student Clubs. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
