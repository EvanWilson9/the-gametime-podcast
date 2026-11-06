import Image, { type StaticImageData } from "next/image";
import SectionHeader from "./ui/SectionHeader";
import { socialLinks } from "@/data/socialLinks";

// --- Assets: Logos ---
import AfterHoursImg from "@/assets/shirtImages/AfterHoursImg.jpg";
import CotsCornerImg from "@/assets/shirtImages/CotsCornerImg.jpg";
import FollowingThePackImg from "@/assets/shirtImages/FollowingThePackImg.jpg";
import GameTimeLiveImg from "@/assets/shirtImages/GameTimeLiveImg.jpg";
import RamonsPlaybookImg from "@/assets/shirtImages/RamonsPlaybookImg.jpg";
import TheGameTimeNetworkImg from "@/assets/shirtImages/TheGameTimeNetworkImg.jpg";

// --- Assets: Base Garments ---
import BlackShirtBase from "@/assets/shirtImages/black-shirt.webp";
import BlackHoodieBase from "@/assets/shirtImages/black-hoodie.png";
import BlackSweatshirtBase from "@/assets/shirtImages/black-sweatshirt.webp";

type Color = "White" | "Pink" | "Black";

interface Product {
  id: string;
  name: string;
  image: StaticImageData;
  localPrice: number;
  shippingPrice: number;
  description: string;
  sizes: string[];
  colors: Color[];
}

const swatch: Record<Color, string> = {
  White: "bg-white",
  Pink: "bg-pink-400",
  Black: "bg-black",
};

const graphics: { name: string; image: StaticImageData }[] = [
  { name: "Classic", image: TheGameTimeNetworkImg },
  { name: "After Hours", image: AfterHoursImg },
  { name: "Cot's Corner", image: CotsCornerImg },
  { name: "Following The Pack", image: FollowingThePackImg },
  { name: "Ramon's Playbook", image: RamonsPlaybookImg },
  { name: "GameTime Live", image: GameTimeLiveImg },
];

const products: Product[] = [
  {
    id: "classic-tee",
    name: "GameTime T-Shirt",
    image: BlackShirtBase,
    localPrice: 17,
    shippingPrice: 24,
    description: "Official GameTime Classic Tee.",
    sizes: ["Kids S", "Kids M", "Kids L", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["White", "Pink", "Black"],
  },
  {
    id: "premium-hoodie",
    name: "GameTime Hoodie",
    image: BlackHoodieBase,
    localPrice: 35,
    shippingPrice: 42,
    description: "Heavyweight premium hoodie.",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["White", "Pink", "Black"],
  },
  {
    id: "classic-sweatshirt",
    name: "GameTime Sweatshirt",
    image: BlackSweatshirtBase,
    localPrice: 22,
    shippingPrice: 30,
    description: "Relaxed fit sweatshirt.",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["White", "Pink", "Black"],
  },
];

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{children}</p>
);

const Merch = () => (
  <section id="merch" className="w-full overflow-x-hidden bg-paper py-24 text-slate-900">
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Custom Collection 2026 • Premium Apparel"
        title="GameTime"
        accent="Merch"
        description="Browse the lineup, pick your piece, graphic, color and size, then reach out to us on social media to get yours."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white"
          >
            <div className="relative aspect-square bg-slate-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-10"
              />
            </div>
            <div className="flex flex-1 flex-col border-t border-slate-100 p-6">
              <h3 className="font-display text-2xl font-bold uppercase">{product.name}</h3>
              <p className="mt-1 text-slate-600">{product.description}</p>
              <p className="mt-3 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">${product.localPrice}</span> local pickup ·{" "}
                <span className="font-semibold text-slate-900">${product.shippingPrice}</span> shipped
              </p>

              <div className="mt-5">
                <Label>Colors</Label>
                <ul className="flex flex-wrap gap-3">
                  {product.colors.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className={`h-5 w-5 rounded-full border border-slate-300 ${swatch[c]}`} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <Label>Sizes</Label>
                <ul className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-semibold uppercase text-slate-700"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Graphics */}
      <div className="mt-16">
        <h3 className="mb-6 text-center font-display text-2xl font-bold uppercase md:text-3xl">
          Choose Your <span className="text-brand">Graphic</span>
        </h3>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {graphics.map((g) => (
            <li key={g.name} className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <div className="relative aspect-square">
                <Image
                  src={g.image}
                  alt={`${g.name} graphic`}
                  fill
                  sizes="(min-width: 1024px) 15vw, 30vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-700">{g.name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact CTA */}
      <div className="on-dark mt-16 border-t-2 border-brand bg-navy p-8 text-center md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">Get Yours</p>
        <h3 className="font-display text-3xl font-bold uppercase md:text-5xl">
          Interested in <span className="text-brand">Merch?</span>
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
          Check out our merchandise and reach out to us through our social media channels if
          you&apos;re interested in purchasing something!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {socialLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-medium text-white transition-colors hover:border-brand hover:bg-brand"
            >
              <platform.icon className="h-5 w-5" />
              {platform.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Merch;
