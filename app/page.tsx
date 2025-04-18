import { Globe, Users } from "lucide-react";
import Image from "next/image";
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
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-10 pb-10 px-10">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl text-white/80 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bugema IT Club
                </h1>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
                  <span className="text-green-700">Innovate.</span>{" "}
                  <span className="text-green-500 italic">Learn.</span>{" "}
                  <span className="text-white/80">Connect</span>
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Join Bugema University{"'"}s leading IT community. Explore
                  cutting-edge technologies, collaborate on exciting projects,
                  and build lasting connections with fellow tech minds.
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

        {/* About Clubs Section */}
        <section className="py-10 px-10">
          <div className="container">
            <h2 className="text-3xl text-white/80 font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Our Different Clubs
            </h2>
            <div className="flex justify-center items-center gap-6">
              <Card className="border-none">
                <CardHeader>
                  <Users className="h-12 w-12 mb-4 mt-2 text-pink-500" />
                  <CardTitle className="text-xl text-white/80">
                    Google Developer Students Club {"("}GDSC{")"}
                  </CardTitle>
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
                  <Globe className="h-12 w-12 mb-4 text-green-500" />
                  <CardTitle className="text-xl text-white/80">
                    Nethub
                  </CardTitle>
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
        <section className="py-10 px-10">
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
        <section className="py-16 px-10">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl text-white/80 font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Become a Club Leader
                </h1>
                <h2 className="text-xl text-green-600 font-bold tracking-tighter sm:text-2xl md:text-3xl">
                  Shape the Future of Tech at Bugema
                </h2>
                <p className="text-gray-500">
                  Want to make a real impact on our IT community? Lead
                  initiatives, organize events, and inspire your fellow
                  students. This is your chance to develop your leadership
                  skills and help the Bugema IT Club reach new heights.
                </p>
                <Button size="lg">Explore Leader Roles</Button>
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
    </div>
  );
}
