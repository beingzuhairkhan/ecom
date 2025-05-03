import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "Brand 1",
    logo: "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&rect=0,0,6000,2000",
  },
  {
    id: 2,
    name: "Brand 2",
    logo: "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&rect=0,1000,6000,2000",
  },
  {
    id: 3,
    name: "Brand 3",
    logo: "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&rect=0,2000,6000,2000",
  },
  {
    id: 4,
    name: "Brand 4",
    logo: "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&rect=0,3000,6000,2000",
  },
  {
    id: 5,
    name: "Brand 5",
    logo: "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&rect=0,4000,6000,2000",
  },
  {
    id: 6,
    name: "Brand 6",
    logo: "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&rect=0,5000,6000,2000",
  },
];

export function BrandsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-medium text-center text-gray-500 mb-8">
          Trusted by top brands
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-70">
          {brands.map((brand) => (
            <div key={brand.id} className="flex justify-center">
              <div className="relative h-12 w-36">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  layout="fill"
                  objectFit="contain"
                  className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}