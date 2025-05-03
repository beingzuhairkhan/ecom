import Link from "next/link";
import Image from "next/image";

import { FEATURED_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#122B5F] mb-3">Popular Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our most popular categories and find what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_CATEGORIES.map((category, index) => (
            <Link 
              href={`/categories/${category.slug}`} 
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122B5F]/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#F4A826] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-sm">Shop Collection</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}