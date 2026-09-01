import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, EnvelopeSimple } from "@phosphor-icons/react";
import Navbar from "../components/Navbar";
import HomeFooter from "../components/home/HomeFooter";
import ProductGallery from "../components/products/ProductGallery";
import ProductDetailHero from "../components/products/ProductDetailHero";
import ProductDetailHighlights from "../components/products/ProductDetailHighlights";
import ProductDetailSpecs from "../components/products/ProductDetailSpecs";
import ProductDetailStory from "../components/products/ProductDetailStory";
import RelatedProducts from "../components/products/RelatedProducts";
import { getProductBySlug } from "../data/catalog";
import { parseProductDescription } from "../utils/parseProductDescription";

function storyBeyondNote(note: string, intro: string): string | null {
  const trimmedIntro = intro.trim();
  const trimmedNote = note.trim();
  if (!trimmedIntro || trimmedIntro === trimmedNote) return null;
  if (trimmedIntro.startsWith(trimmedNote)) {
    const extra = trimmedIntro.slice(trimmedNote.length).replace(/^[.!\s]+/, "").trim();
    return extra || null;
  }
  return trimmedIntro;
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  const parsed = useMemo(
    () => (product ? parseProductDescription(product.description) : null),
    [product],
  );

  if (!product || !parsed) {
    return (
      <div className="min-h-[100dvh] bg-canvas text-ink">
        <Navbar />
        <main className="mx-auto flex max-w-lg flex-col items-center px-5 py-32 text-center">
          <h1 className="font-display text-3xl font-semibold tracking-[-0.03em]">Product not found</h1>
          <p className="mt-3 text-ink-soft">
            This product may have moved. Browse the full catalog to find what you need.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-steel px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-steel-deep"
          >
            <ArrowLeft size={16} weight="bold" />
            All products
          </Link>
        </main>
        <HomeFooter />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-canvas text-ink">
      <Navbar />

      <main className="pb-24 lg:pb-0">
        <section className="pdp-hero-zone">
          <div className="mx-auto max-w-[1240px] px-5 pt-24 md:px-8 lg:px-10">
            <Link
              to={`/products?cat=${product.categoryId}`}
              className="inline-flex min-h-[2.75rem] items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-steel"
            >
              <ArrowLeft size={16} weight="bold" aria-hidden="true" />
              Back to {product.category}
            </Link>

            <div className="mt-8 grid items-center gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <ProductGallery product={product} />
              </div>
              <ProductDetailHero product={product} />
            </div>
          </div>
        </section>

        <ProductDetailStory text={storyBeyondNote(product.note, parsed.intro)} />

        <ProductDetailHighlights items={parsed.highlights} />

        <ProductDetailSpecs ingredients={parsed.ingredients} nutrition={parsed.nutrition} />

        <RelatedProducts product={product} />
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/92 p-4 backdrop-blur-md sm:hidden">
        <Link
          to="/contact"
          className="flex min-h-[2.75rem] w-full items-center justify-center gap-2 rounded-full bg-steel text-sm font-semibold text-white transition-colors hover:bg-steel-deep active:scale-[0.98]"
        >
          <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
          Enquire
        </Link>
      </div>

      <HomeFooter />
    </div>
  );
}
