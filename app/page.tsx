import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Your Next.js App</CardTitle>
          <CardDescription>
            This is a modern Next.js application with TypeScript, Tailwind CSS, and shadcn/ui components.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">Get started by editing app/page.tsx</p>
          <div className="flex gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

