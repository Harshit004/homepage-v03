"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

const footerLinks = [
  {
    id: "1",
    title: "About Us",
    list: [
      { id: "1-1", link: "/company", name: "Company" },
      { id: "1-2", link: "/brand", name: "Brand" },
      { id: "1-3", link: "/sustainability", name: "Sustainability" },
      { id: "1-4", link: "/products", name: "Product & Services" },
      { id: "1-5", link: "/", name: "News & Updates" },
    ],
  },
  {
    id: "2",
    title: "Legal",
    list: [
      { id: "2-1", link: "/", name: "Data Policy" },
      { id: "2-2", link: "/", name: "Privacy Policy" },
      { id: "2-3", link: "/", name: "Ethics & Compliance" },
      { id: "2-4", link: "/", name: "Terms & Conditions" },
      { id: "2-5", link: "/", name: "Cookies" },
    ],
  },
  {
    id: "3",
    title: "Social",
    list: [
      { id: "3-1", link: "/", name: "LinkedIn" },
      { id: "3-2", link: "/", name: "Twitter" },
      { id: "3-3", link: "/", name: "Instagram" },
      { id: "3-4", link: "/", name: "Facebook" },
      { id: "3-5", link: "/", name: "YouTube" },
    ],
  },
  {
    id: "4",
    title: "Contact",
    list: [
      { id: "4-1", link: "/careers", name: "Careers" },
      { id: "4-2", link: "/contact", name: "Office Locations" },
    ],
  },
];

export const Footer2 = () => {
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState<string | null>(null);

  const emailIdValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormErrors(null);

    if (!emailIdValidationRegex.test(email)) {
      setFormErrors("Invalid email format");
      return;
    }

    try {
      const response = await fetch("/api/subscribe-to-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Subscribed successfully!");
        setEmail("");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-black via-85% to-[#252525] px-6 pb-11 pt-24 text-white">
      <div className="border-t border-white/40 xl:border-t">
        <div className="mx-auto flex flex-col items-center justify-between gap-12 xl:max-w-[85%] xl:flex-row xl:items-start xl:gap-24">
          {/* LEFT SECTION - LOGO & NEWSLETTER */}
          <div className="max-xl:w-full xl:-mt-16">
            <Link href="/" className="mx-auto mb-8 block xl:mr-0">
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/93d4d7c4-0b19-4021-6a66-c8b3a2876f00/public"
                alt="Wae"
                width={120}
                height={60}
                className="mx-auto xl:ml-0"
              />
            </Link>

            {/* NEWSLETTER SECTION */}
            <div className="mb-6 xl:mb-16">
              <label htmlFor="newsletter" className="mb-4 block font-secondary text-sm uppercase md:text-base">
                Stay updated with our latest news and innovative water projects. Subscribe to our Newsletter.
              </label>

              <form onSubmit={handleSubmit} className="flex items-center max-xl:w-full">
                {/* Email Input */}
                <div className="relative flex flex-1">
                    {/* Newsletter Icon */}
                  <div className="left-5 top-1/2 hidden -translate-y-1/2 md:absolute xl:block">
                    <img src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/efa0a1a2-94bb-4cc1-43f6-67d61bdee200/public" alt="newsletter icon" />
                  </div>

                  {/* Email Input */}
                  <input
                    id="newsletter"
                    type="email"
                    name="newsletter-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to get the latest news..."
                    className="w-full bg-black p-3 xl:pl-16 placeholder:text-white rounded-lg rounded-tl-[8px] rounded-bl-[8px] border border-[#303030] focus-within:border-white"
                  />
                </div>

                {/* Subscribe Button */}
                <button type="submit" className="bg-white text-black px-6 py-3 rounded-lg rounded-tr-[8px] rounded-br-[8px] font-medium">
                  Subscribe
                </button>
              </form>

              {formErrors && <p className="mt-2 text-sm text-red-500">{formErrors}</p>}
            </div>

            {/* COPYRIGHT (Hidden for Mobile) */}
            <div className="hidden text-xs text-[#f2f2f2] opacity-75 xl:block">
              <p>© 2024 WAE Ltd.</p>
            </div>
          </div>

          {/* FOOTER LINKS */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 xl:-mt-10 xl:gap-9">
            {footerLinks.map((col) => (
              <div key={col.id}>
                <h6 className="mb-3 text-lg font-normal">{col.title}</h6>
                <ul>
                  <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                    {col.list.map((listItem) => (
                        <li key={listItem.id} className="mb-2 text-sm font-light opacity-80 last:mb-0">
                        <Link href={listItem.link} className="underline-offset-4 hover:underline">
                            {listItem.name}
                        </Link>
                        </li>
                    ))}
                  </div>
                </ul>
              </div>
            ))}
          </div>

          {/* COPYRIGHT (For Mobile) */}
          <div className="w-full text-center text-xs text-[#f2f2f2] opacity-75 xl:hidden">
            <p>© 2024 WAE Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};