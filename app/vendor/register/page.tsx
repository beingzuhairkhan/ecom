import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AuthForm } from "@/components/auth/auth-form";
import { PaymitraLogo } from "@/components/paymitra-logo";

export const metadata: Metadata = {
  title: "Become a Vendor - Paymitra",
  description: "Register as a vendor on Paymitra to start selling your products",
};

export default function VendorRegisterPage() {
  const benefits = [
    "Access to millions of customers",
    "Easy-to-use seller dashboard",
    "Secure payment processing",
    "Marketing and promotion tools",
    "Detailed sales analytics",
    "Dedicated vendor support",
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-5">
      {/* Left side - information */}
      <div className="lg:col-span-2 bg-gradient-to-br from-[#122B5F] to-[#395C93] p-8 md:p-10 flex items-center">
        <div className="text-white max-w-xl mx-auto">
          <Link href="/" className="inline-block mb-10">
            <PaymitraLogo className="text-white" size="lg" />
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Grow Your Business with Paymitra</h1>
          <p className="mb-8 opacity-90 text-lg">
            Join our growing community of successful vendors and reach more customers.
            Our platform provides everything you need to start and grow your online business.
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm mb-6">
            <h3 className="font-semibold text-xl mb-4">Vendor Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-[#F4A826] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-sm opacity-80">
            Already have a vendor account?{" "}
            <Link 
              href="/vendor/login" 
              className="text-[#F4A826] font-medium hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      
      {/* Right side - form */}
      <div className="lg:col-span-3 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-[#122B5F] mb-10 lg:hidden">
            Become a Vendor
          </h2>
          
          <AuthForm type="vendor-register" />
        </div>
      </div>
    </div>
  );
}