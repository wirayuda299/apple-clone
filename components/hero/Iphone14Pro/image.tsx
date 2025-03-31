import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type HeroImageProps = {
  title: Readonly<string>;
  heroImage: ImagesSizesTypes;
};

export default function HeroImage({
  heroImage: { imageLarge, imageSmall, imageMedium },
  title,
}: HeroImageProps) {
  return (
    <picture className="w-full h-screen pb-[65px]">
      <source
        media="(max-width:734px)"
        width={imageSmall.width}
        height={imageSmall.height}
        srcSet={urlFor(imageSmall.source).fit("fill").quality(60).url()}
      />
      <source
        media="(max-width:1068px)"
        width={imageMedium.width}
        height={imageMedium.height}
        srcSet={urlFor(imageMedium.source).fit("fill").quality(60).url()}
      />
      <Image
        priority
        fetchPriority="high"
        className="object-cover h-full w-full object-center"
        alt={title}
        quality={100}
        src={urlFor(imageLarge.source).auto("format").url()}
        width={imageLarge.width}
        height={imageLarge.height}
      />
    </picture>
  );
}
