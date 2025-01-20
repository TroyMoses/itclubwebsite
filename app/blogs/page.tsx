import { Search } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Search Header */}
      {/* <div className="border-b">
        <div className="container py-4 px-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search all articles..."
              className="pl-10 w-full md:max-w-xl"
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>
      </div> */}
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
            <Search className="h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search all articles..."
              className="pl-10 w-full md:max-w-xl"
            />
            <Button className="">
              Search
            </Button>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-lg font-normal">
              Home
            </Link>
            <Link href="#" className="text-lg font-normal">
              Events
            </Link>
            <Link href="#" className="text-lg font-normal">
              Projects
            </Link>
            <Link href="#" className="text-lg font-normal">
              Team
            </Link>
            <Link href="/blogs" className="text-lg font-semibold border-b-2 border-primary">
              Blogs
            </Link>
            <Button className='text-md'>Join Us</Button>
          </nav>
        </div>
      </header>

      <div className="container py-8 grid gap-8 lg:grid-cols-[1fr_300px]">
        <main>
          {/* Featured Articles */}
          <section className="mb-12 px-10">
            <h2 className="text-2xl font-bold mb-6">Featured articles</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {featuredArticles.map((article, index) => (
                  <CarouselItem key={index}>
                    <Link href={article.href}>
                      <Card>
                        <CardContent className="p-0">
                          <div className="relative aspect-[2/1] overflow-hidden">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex gap-2 mb-3">
                              {article.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                            <p className="text-muted-foreground">{article.excerpt}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>

          {/* Categories */}
          {categories.map((category) => (
            <section key={category.title} className="mb-12 px-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <Button variant="link">See posts →</Button>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.posts.map((post, index) => (
                  <Card key={index}>
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Sidebar */}
        <aside>
          <Card>
            <CardHeader>
              <CardTitle>Latest blogs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {latestBlogs.map((blog, index) => (
                  <article key={index} className="space-y-1">
                    <time className="text-sm text-muted-foreground">{blog.date}</time>
                    <h3 className="font-medium hover:underline">
                      <Link href="#">{blog.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">{blog.excerpt}</p>
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Follow Section */}
      <section className="bg-blue-50 py-16 px-10">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Follow Google for Developers</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map((social, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {social.icon}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{social.description}</p>
                  <Button variant="outline" size="sm">
                    {social.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const featuredArticles = [
  {
    title: "Introducing Android XR SDK Developer Preview",
    excerpt: "The Android XR SDK, a new platform for building extended reality (XR) experiences on Android, is now available for devs to try.",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["ANDROID", "AR", "AI"],
    href: "#"
  },
  // Add more featured articles...
]

const categories = [
  {
    title: "AI",
    posts: [
      {
        title: "Google AI Developers Community Spotlight Contest",
        excerpt: "Join our contest and showcase your AI innovations",
        image: "/placeholder.svg?height=200&width=400"
      },
      {
        title: "Gemini 2.0: Level Up Your Apps",
        excerpt: "Explore real-time multimodal interactions",
        image: "/placeholder.svg?height=200&width=400"
      },
      {
        title: "See the Similarity: Visual Search",
        excerpt: "Implementing visual search with embeddings",
        image: "/placeholder.svg?height=200&width=400"
      }
    ]
  },
  {
    title: "Mobile",
    posts: [
      {
        title: "Celebrating Flutter's Production Era",
        excerpt: "What's new in Flutter development",
        image: "/placeholder.svg?height=200&width=400"
      },
      {
        title: "Firebase Demo Day '24",
        excerpt: "Build and run AI powered apps",
        image: "/placeholder.svg?height=200&width=400"
      },
      {
        title: "TensorFlow Lite is now LiteRT",
        excerpt: "Exploring the new TensorFlow Lite",
        image: "/placeholder.svg?height=200&width=400"
      }
    ]
  }
]

const latestBlogs = [
  {
    date: "JAN 08, 2025",
    title: "Google AI Developers Community Spotlight Contest",
    excerpt: "The Google AI Developers Community Spotlight Contest is seeking innovative, diverse projects using Google's AI tools..."
  },
  {
    date: "JAN 07, 2025",
    title: "Building a better smart home",
    excerpt: "The public beta launch of Home APIs for Android allows developers to create better smart home experiences..."
  },
  {
    date: "JAN 07, 2025",
    title: "Build the future of home with Google Home APIs",
    excerpt: "The Google Home APIs are now in public developer beta for Android..."
  }
]

const socialLinks = [
  {
    icon: <div className="w-8 h-8 bg-red-600 rounded-full" />,
    description: "Subscribe to join a community of creative developers and learn the latest in Google technology.",
    buttonText: "Learn more"
  },
  {
    icon: <div className="w-8 h-8 bg-pink-500 rounded-full" />,
    description: "Follow and discover developer resources, community events, and inspirational stories.",
    buttonText: "Learn more"
  },
  {
    icon: <div className="w-8 h-8 bg-blue-600 rounded-full" />,
    description: "Join a community of creative developers and learn how to use the latest in technology.",
    buttonText: "Learn more"
  },
  {
    icon: <div className="w-8 h-8 bg-gray-600 rounded-full" />,
    description: "Subscribe to Google for Developers news. Your information will be used in accordance with Google's privacy policy.",
    buttonText: "Subscribe"
  }
]

