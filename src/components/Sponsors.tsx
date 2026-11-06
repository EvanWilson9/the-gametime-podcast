import Image from "next/image";
import KDLogo from "../assets/K_D_logo.png";
import BlueTvSponsor from "../assets/blueTv_sponsor.jpg";
import SectionHeader from "./ui/SectionHeader";

const linkClass = "break-words font-medium text-brand-tint underline-offset-2 hover:underline";

const PhotoRow = ({ prefix, alt }: { prefix: string; alt: string }) => (
  <div className="mt-5 grid grid-cols-3 gap-3">
    {[1, 2, 3].map((n) => (
      <div
        key={n}
        className="relative aspect-4/3 overflow-hidden rounded-md border border-white/10 bg-white"
      >
        <Image
          src={`/images/sponsorImages/${prefix}${n}.jpg`}
          alt={`${alt} ${n}`}
          fill
          sizes="(min-width: 1024px) 15vw, 30vw"
          className="object-contain"
        />
      </div>
    ))}
  </div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="border-t-2 border-brand bg-ink/60 p-6 ring-1 ring-white/10 transition-colors hover:bg-ink/80 md:p-8">{children}</div>
);

const Sponsors = () => (
  <section id="sponsors" className="on-dark w-full bg-navy py-24">
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Thank You"
        title="Game Time"
        accent="Sponsors"
        description="The local businesses that help put Game Time on the air."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="font-display text-2xl font-bold uppercase text-white">Bigsy&apos;s Sports Grill</h3>
          <p className="mt-2 text-white/80">
            <a
              href="https://www.google.com/maps/dir//7802+Brookville+Rd,+Indianapolis,+IN+46239/@40.2128896,-85.4065152,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x886b4f5faa3b60fb:0xfbb50e63d1a32bf6!2m2!1d-86.030092!2d39.751396?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoASAFQAw%3D%3D"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              7802 Brookville Road, Indinapolis, Indiana
            </a>
            <br />
            (463-202-2970)
          </p>
          <PhotoRow prefix="bigsys-img" alt="Bigsy's Sports Grill sponsor image" />
        </Card>

        <Card>
          <h3 className="font-display text-2xl font-bold uppercase text-white">
            Hamilton Mechanical Services
          </h3>
          <p className="mt-2 text-white/80">(317 612-1979)</p>
          <PhotoRow prefix="hamilton-img" alt="Hamilton Mechanical Services sponsor image" />
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <Image
              src="/images/sponsorImages/esscents-logo.jpg"
              alt="Esscents By Ebony logo"
              width={330}
              height={250}
              className="h-14 w-20 rounded bg-white object-contain p-1"
            />
            <h3 className="font-display text-2xl font-bold uppercase text-white">Esscents By Ebony</h3>
          </div>
          <p className="mt-3 text-white/80">
            <a href="mailto:esscentsbyebony@gmail.com" className={linkClass}>
              esscentsbyebony@gmail.com
            </a>
          </p>
          <p className="mt-1 text-sm text-white/65">
            Find Esscents By Ebony on Facebook, Instagram, and TikTok.
          </p>
          <div className="mt-5 grid grid-cols-2 items-start gap-3">
            {[1, 2].map((n) => (
              <Image
                key={n}
                src={`/images/sponsorImages/esscents${n}.jpg`}
                alt={`Esscents By Ebony sponsor image ${n}`}
                width={1080}
                height={n === 1 ? 1621 : 1351}
                sizes="(min-width: 1024px) 220px, 45vw"
                className="h-auto w-full rounded-md object-contain"
              />
            ))}
          </div>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <p className="text-white/80">
              Jason Hancock with{" "}
              <a
                href="https://wiredtothenines.com/"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Wired to the Nines
              </a>
              <br />
              <span className="text-sm text-white/65">(wiredtothenines@yahoo.com)</span>
            </p>
          </Card>

          <Card>
            <a
              href="https://beacons.ai/kandddesignco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="K&D Design Co."
              className="flex items-center gap-5"
            >
              <Image
                src={KDLogo}
                width={180}
                height={180}
                alt="K&D Design Co."
                className="h-auto w-20 shrink-0 rounded bg-white object-contain p-1"
              />
              <div className="text-sm leading-snug text-white/65">
                <h3 className="font-display text-xl font-bold uppercase text-white underline decoration-brand underline-offset-4">
                  K &amp; D Design Co.
                </h3>
                <p>Custom Apparel · Made For You · Sports · Birthdays · Event</p>
                <p>Exclusive printer For all game time network gear.</p>
              </div>
            </a>
          </Card>

          <Card>
            <Image
              src={BlueTvSponsor}
              alt="Blue TV sponsor"
              width={1000}
              height={300}
              className="mx-auto h-auto w-full max-w-40 rounded-md bg-white object-contain p-2"
            />
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Sponsors;
