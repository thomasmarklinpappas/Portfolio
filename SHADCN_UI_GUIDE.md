# Shadcn UI Components Guide

This guide explains how to use the Shadcn UI components that have been added to your portfolio project.

## What's Been Added

The following Shadcn UI components have been manually added to your project:

### Core Components
- **Button** (`components/ui/button.tsx`) - Versatile button component with multiple variants
- **Card** (`components/ui/card.tsx`) - Container component for displaying content
- **Input** (`components/ui/input.tsx`) - Form input component
- **Textarea** (`components/ui/textarea.tsx`) - Multi-line text input component
- **Label** (`components/ui/label.tsx`) - Form label component
- **Badge** (`components/ui/badge.tsx`) - Tag/label component for displaying status or categories

## How to Use

### Importing Components

```tsx
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Textarea, Badge } from "@/components/ui";
```

### Button Component

```tsx
// Basic usage
<Button>Click me</Button>

// Different variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>
```

### Card Component

```tsx
<Card>
  <CardHeader>
    <CardTitle>Project Title</CardTitle>
    <CardDescription>Project description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Project content goes here</p>
  </CardContent>
</Card>
```

### Form Components

```tsx
<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="name">Name</Label>
    <Input id="name" placeholder="Enter your name" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" placeholder="Enter your message" />
  </div>
  <Button>Submit</Button>
</div>
```

### Badge Component

```tsx
// Different variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>

// Custom styling
<Badge className="bg-blue-500 text-white hover:bg-blue-600">Custom</Badge>
```

## Integration Examples

### Project Cards

You can use the Card component to create beautiful project showcases:

```tsx
<Card>
  <CardHeader>
    <CardTitle>SnapLoom</CardTitle>
    <CardDescription>AI-powered image editor</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground mb-4">
      Transform your images effortlessly with SnapLoom, at no cost.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <Badge variant="secondary">React</Badge>
      <Badge variant="secondary">Next.js</Badge>
      <Badge variant="secondary">TypeScript</Badge>
    </div>
    <Button size="sm" className="w-full">View Project</Button>
  </CardContent>
</Card>
```

### Contact Form

Replace your existing contact form with Shadcn UI components:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Get In Touch</CardTitle>
    <CardDescription>Send me a message</CardDescription>
  </CardHeader>
  <CardContent>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Your message" />
      </div>
      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  </CardContent>
</Card>
```

## Customization

All components use CSS variables defined in your `globals.css` file. You can customize the appearance by modifying these variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 10% 3.9%;
  --radius: 0.5rem;
}
```

## Adding More Components

To add more Shadcn UI components:

1. Create the component file in `components/ui/`
2. Add the export to `components/ui/index.ts`
3. The component will be available through `@/components/ui`

## Demo Component

A demo component has been created at `components/ui-demo.tsx` that showcases all the available components. You can temporarily add this to your page to see all components in action.

## Benefits

- **Consistent Design**: All components follow the same design system
- **Accessibility**: Built with accessibility in mind
- **Customizable**: Easy to customize with CSS variables
- **TypeScript**: Full TypeScript support
- **Responsive**: Works well on all screen sizes
- **Dark Mode**: Supports dark mode out of the box

These components will help you create a more polished and professional-looking portfolio with consistent styling throughout. 