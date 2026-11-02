"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight, BusFront, ScanSearch, Search, Waypoints } from "lucide-react";
import { getLevelById } from "@/lib/data";
import { MAX_LEVEL } from "@/lib/level-utils";

export function HeroSection() {
  const [level, setLevel] = useState("");
  const router = useRouter();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = String(Number.parseInt(level, 10));
    if (getLevelById(value)) router.push(`/levels/${value}/`);
  }

  return (
    <section className="border-b border-border bg-[#eaf8fb]">
      <div className="container mx-auto grid min-h-[520px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-[#0b7285]">Video and screenshot walkthroughs</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-[#17313a] sm:text-6xl">Jam Bus:Sandfall Level Guides</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#435f68]">
            Find the correct bus order, compare full-board screenshots, and watch complete solutions for the published Jam Bus:Sandfall levels.
          </p>

          <form onSubmit={submit} className="mt-8 flex max-w-xl gap-2" aria-label="Find a Jam Bus level">
            <label className="sr-only" htmlFor="hero-level-search">Enter a level number</label>
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <input
                id="hero-level-search"
                name="level"
                inputMode="numeric"
                value={level}
                onChange={(event) => setLevel(event.target.value.replace(/\D/g, ""))}
                placeholder={`Enter level 1-${MAX_LEVEL}`}
                className="h-12 w-full rounded-md border border-[#9fcbd3] bg-white pl-11 pr-3 text-base outline-none focus:border-[#0b7285] focus:ring-2 focus:ring-[#0b7285]/20"
              />
            </div>
            <button type="submit" className="inline-flex h-12 items-center gap-2 rounded-md bg-[#d9480f] px-5 font-bold text-white hover:bg-[#b93d0d]">
              Go <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#31515b]">
            <span className="inline-flex items-center gap-2"><BusFront className="h-4 w-4 text-[#d9480f]" />20 verified guides</span>
            <span className="inline-flex items-center gap-2"><Waypoints className="h-4 w-4 text-[#0b7285]" />Board-specific routing notes</span>
            <Link href="/find-level/" className="inline-flex items-center gap-2 text-[#b93d0d] hover:underline">
              <ScanSearch className="h-4 w-4" aria-hidden="true" />
              Find by Screenshot when level numbers change
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-lg border border-[#9fcbd3] bg-white shadow-lg">
          <Image
            src="/images/store/gameplay-1.webp"
            alt="Jam Bus Sandfall official gameplay showing colored buses and layered sand"
            width={576}
            height={1246}
            className="h-[430px] w-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
