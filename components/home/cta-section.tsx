import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";

export function CTASection() {
  const benefits = [
    "Access to millions of customers",
    "Easy-to-use seller dashboard",
    "Secure payment processing",
    "Marketing and promotion tools",
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Vendor selling products online"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#122B5F]/70 to-[#F4A826]/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block bg-[#F4A826]/20 text-[#F4A826] px-4 py-1 rounded-full text-sm font-medium mb-4">
              For Sellers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122B5F] mb-4 leading-tight">
              Start Selling on Paymitra Today
            </h2>
            <p className="text-gray-700 mb-6">
              Join our growing community of successful vendors and reach more customers. 
              Our platform provides everything you need to start and grow your online business.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#F4A826] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Link href="/vendor/register">
              <ButtonGradient variant="yellow" size="lg" className="group">
                Become a Vendor
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </ButtonGradient>
            </Link>
          </div>
          
          {/* Right image */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Vendor dashboard"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}