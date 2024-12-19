import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-24 bg-background">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-5xl font-extrabold text-foreground mb-6">
          Welcome to EduNext
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          A full-stack educational platform template built with Next.js, Prisma,
          and MySQL. Perfect for building secure and scalable educational
          applications.
        </p>
        <Button className="w-full sm:w-auto mx-auto">Get Started</Button>
      </div>
    </div>
  );
}
