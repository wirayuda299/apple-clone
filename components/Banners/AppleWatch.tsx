import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

type Responses = Base & ImagesSizesTypes;

export default async function AppleWatch() {
  const res = (await client.fetch(
    `*[_type == "banner" && page == "watch"]`,
  )) as Responses[];

  return (
    <section className="pt-10">
      <div className="w-full bg-white text-black text-center  h-screen">
        <div className="flex flex-col items-center relative w-full h-full pt-16">
          <div className="absolute top-5">
            <Image
              alt="apple watch"
              src="/assets/images/logo/apple_watch.png"
              width={100}
              height={100}
              className="object-contain mx-auto"
            />
            <h2 className=" font-semibold p-3 text-3xl sm:text-4xl md:text-5xl max-w-xl">
              {res[0].title}
            </h2>
            <p className="text-base px-3 font-medium sm:text-base max-w-lg sm:px-5">
              {res[0].subTitle}
            </p>
            <div className="mt-5">
              <Link
                className="font-semibold text-base md:text-xl  bg-blue-600 py-2 px-5 text-white rounded-full"
                href={"/beli"}
                prefetch={false}
              >
                Beli
              </Link>
            </div>
          </div>
          <picture className="w-full h-full">
            <source
              srcSet={urlFor(res[0].imageSmall.source).quality(60).url()}
              width={res[0].imageSmall.width}
              height={res[0].imageSmall.height}
              media="(max-width: 734px)"
              className="object-contain object-bottom w-full h-full"
            />
            <source
              srcSet={urlFor(res[0].imageMedium.source).quality(60).url()}
              width={res[0].imageMedium.width}
              height={res[0].imageMedium.height}
              media="(max-width: 734px)"
              className="object-contain object-bottom w-full h-full"
            />
            <Image
              alt={res[0].title}
              src={urlFor(res[0].imageLarge.source)
                .auto("format")
                .crop("center")
                .quality(70)
                .url()}
              width={res[0].imageLarge.width}
              height={res[0].imageLarge.height}
              fetchPriority="high"
              priority
              sizes="(min-width:1028px) 100vw, 80vw"
              className="object-cover object-bottom w-full h-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
