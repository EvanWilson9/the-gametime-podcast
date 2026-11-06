import Image from "next/image";
import AFSPBanner from "../assets/afsp_banner.png";
import SectionHeader from "./ui/SectionHeader";

const Community = () => (
  <section id="community" className="w-full bg-paper py-24">
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Beyond the Game"
        title="Community"
        accent="Causes"
        description="Organizations and awareness efforts we want to help spread the word about."
      />

      <div className="space-y-10">
        {/* AFSP */}
        <article className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <Image
            src={AFSPBanner}
            alt="AFSP Banner"
            width={1600}
            height={500}
            className="h-auto w-full object-cover"
          />
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-3">
              <h3 className="font-display text-3xl font-bold uppercase md:text-4xl">
                American Foundation for Suicide Prevention (AFSP)
              </h3>
              <p className="text-lg leading-relaxed text-slate-700">
                This organization aims to help spread awareness and support
                mental health initiatives throughout our community.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                If you or someone you care about is struggling, support is
                available 24/7. Call, text, or chat the 988 Suicide &amp; Crisis
                Lifeline by dialing 988. You can also connect with the Crisis
                Text Line by texting HELLO to 741741. You are not alone — help
                is just a conversation away.
              </p>
              <div className="flex flex-col gap-2 pt-2 font-semibold text-brand">
                <a
                  href="https://afsp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Visit the AFSP Website →
                </a>
                <a
                  href="https://supporting.afsp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Learn More About Suicide Prevention →
                </a>
              </div>
            </div>

            <div className="on-dark flex flex-col justify-center rounded-md bg-navy p-8 lg:col-span-2">
              <h4 className="font-display text-2xl font-bold uppercase">
                Donate &amp; Support the Cause
              </h4>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Every contribution helps provide education, advocacy, research,
                and support for individuals and families affected by suicide.
              </p>
              <a
                href="https://supporting.afsp.org/general-donations/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block self-start rounded-md bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Donate Now
              </a>
            </div>
          </div>
        </article>

        {/* Autism awareness */}
        <article className="grid items-center gap-10 rounded-lg border border-slate-200 bg-white p-8 md:p-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-bold uppercase md:text-4xl">
              Autism Signs &amp; Symptoms
            </h3>
            <a
              href="https://centriahealthcare.com/locations/indiana/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-brand hover:underline"
            >
              Visit Centria Healthcare in Indiana →
            </a>
          </div>
          <Image
            src="/images/autism-signs-img.webp"
            alt="Infographic describing common autism signs and symptoms"
            width={1024}
            height={1536}
            className="mx-auto h-auto w-full max-w-md rounded-md"
            sizes="(max-width: 1024px) 100vw, 448px"
          />
        </article>
      </div>
    </div>
  </section>
);

export default Community;
