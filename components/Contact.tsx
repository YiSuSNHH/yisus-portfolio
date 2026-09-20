"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { personal } = portfolioData;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xlggbblk", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-card px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <FadeIn direction="left">
          <h2 className="max-w-md text-4xl font-semibold tracking-[-0.055em] text-foreground md:text-5xl">
            Let&apos;s talk about the work.
          </h2>
          <p className="mt-4 max-w-md leading-7 text-muted-foreground">
            Reach out for Technical Engineering roles, requirement specifications, platform architecture, or technical collaboration.
          </p>

          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <a className="flex items-center gap-3 transition hover:text-foreground" href={`mailto:${personal.email}`}>
              <Mail size={16} className="text-primary" />
              {personal.email}
            </a>
            <a className="flex items-center gap-3 transition hover:text-foreground" href={`tel:${personal.phone.replace(/\s/g, "")}`}>
              <Phone size={16} className="text-primary" />
              {personal.phone}
            </a>
            <a className="flex items-center gap-3 transition hover:text-foreground" href={personal.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="text-primary" />
              GitHub
            </a>
            <a className="flex items-center gap-3 transition hover:text-foreground" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} className="text-primary" />
              LinkedIn
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-primary" />
              {personal.location}
            </p>
          </div>
        </FadeIn>

        <FadeIn className="rounded-xl border bg-background p-5 md:p-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input id="email" name="email" type="email" required placeholder="you@company.com" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="Tell me about the role or engineering problem."
              />
            </div>

            <Button type="submit" disabled={status === "loading"} className="h-10 rounded-md px-4">
              {status === "loading" ? "Sending..." : "Send message"}
              <Send data-icon="inline-end" />
            </Button>

            {status === "success" && (
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                Message sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Message could not be sent. Please use email or try again.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
