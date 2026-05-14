
import heroImage from './images/hero-image.jpg'


import { useState } from 'react'


import livingRoom1 from './images/living-room-1.jpg'
import livingRoom2 from './images/living-room-2.jpg'
import livingRoom3 from './images/living-room-3.jpg'
import livingRoom4 from './images/living-room-4.jpg'

import kitchen1 from './images/kitchen-1.jpg'
import kitchen2 from './images/kitchen-2.jpg'

import ceiling1 from './images/ceiling-design-1.jpg'
import ceiling2 from './images/ceiling-design-2.jpg'

import wardrobe1 from './images/wardrobe-1.jpg'
import wardrobe2 from './images/wardrobe-2.jpg'

export default function KKSProjectsWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const services = [
    {
      title: 'Interior Fitout Design',
      description:
        'Complete interior fitout planning with modern space design, layout optimization, material selection, and premium visualization for commercial and residential spaces.',
    },
    {
      title: 'Interior Fitout Execution',
      description:
        'End-to-end execution including ceilings, flooring, partitions, furniture coordination, electrical integration, lighting, painting, and finishing works.',
    },
    {
      title: 'Building Repair & Maintenance',
      description:
        'Professional building repair solutions, civil maintenance, waterproofing, renovation, repainting, structural correction, and facility upkeep services.',
    },
    {
      title: 'AMC for Technical Assets',
      description:
        'Annual maintenance contracts for technical assets including electrical systems, facility equipment, lighting systems, preventive maintenance, and operational support.',
    },
  ];

  const categories = [
    'Living Rooms',
    'Bedrooms',
    'Modular Kitchens',
    'False Ceilings',
    'Luxury Villas',
    'Home Renovations',
  ];

  const testimonials = [
    {
      name: 'Residential Client',
      feedback:
        'Professional execution, elegant finishing, and smooth project coordination from start to completion.',
    },
    {
      name: 'Apartment Interior Client',
      feedback:
        'KKS Projects transformed our apartment beautifully with premium quality work and modern designs.',
    },
    {
      name: 'Villa Renovation Client',
      feedback:
        'Excellent attention to detail, timely delivery, and highly professional execution team.',
    },
  ];

  const projects = [
    'Luxury Villa Interior',
    'Modern Apartment Renovation',
    'Premium Bedroom Design',
    'Luxury Living Room Fitout',
    'Kitchen & Dining Interior',
    'Modern Home Renovation',
  ];

  const floatingImages = [
  livingRoom1,
  livingRoom2,
  livingRoom3,
  livingRoom4,
  kitchen1,
  kitchen2,
  ceiling1,
  ceiling2,
  wardrobe1,
  wardrobe2,
  ];

  return (
    <div className="bg-[#0F172A] text-white min-h-screen font-\['Poppins'\] overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="KKS Projects"
              className="w-16 h-16 object-contain rounded-full border border-white/10 shadow-lg"
            />

            <div>
              <h1 className="text-2xl font-bold tracking-wide">
                KKS Projects
              </h1>
              <p className="text-xs text-gray-400 tracking-[3px] uppercase">
                Civil • Interiors • Fit-Out Works
              </p>
            </div>
          </div>

         <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
  <a href="#home" className="hover:text-orange-400 transition">
    Home
  </a>

  <a href="#services" className="hover:text-orange-400 transition">
    Services
  </a>

  <a href="#contact" className="hover:text-orange-400 transition">
    Contact
  </a>
</nav>

<button
  className="md:hidden text-3xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>


        </div>
      </header>

      {menuOpen && (
  <div className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-8 space-y-6 text-center border-t border-white/10">
    <a
      href="#home"
      className="block text-lg hover:text-orange-400"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </a>

    <a
      href="#services"
      className="block text-lg hover:text-orange-400"
      onClick={() => setMenuOpen(false)}
    >
      Services
    </a>

    <a
      href="#contact"
      className="block text-lg hover:text-orange-400"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </a>
  </div>
)}

      <section id="home" className="relative h-screen flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0,0,0,0.65)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl text-center">
          <p className="uppercase tracking-[8px] text-orange-400 mb-4 text-sm">
            Interior Fitout • Design • Execution
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
            Premium <span className="text-orange-400">Interior Fitout</span> Solutions
          </h1>

          <div className="space-y-5 mb-8">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Specialized in premium residential interior fitout design and execution for apartments, villas, luxury homes, renovations, and modern living spaces.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white/10 border border-white/10 px-5 py-3 rounded-full backdrop-blur-md">
                Mumbai
              </span>

              <span className="bg-white/10 border border-white/10 px-5 py-3 rounded-full backdrop-blur-md">
                Thane
              </span>

              <span className="bg-white/10 border border-white/10 px-5 py-3 rounded-full backdrop-blur-md">
                Navi Mumbai
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-semibold shadow-2xl"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="border border-white/30 hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl font-semibold"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#111827] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Project Gallery</h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore our premium residential interior fitout portfolio featuring modern apartments, elegant villas, luxury living spaces, and stylish home transformations.
          </p>
        </div>

        <div className="relative flex flex-wrap justify-center gap-10 px-6">
          {floatingImages.map((image, index) => (
            <div
              key={index}
              className=""
            >
              <img src={image} alt="Project" className="w-full h-56 object-cover rounded-3xl shadow-2xl" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-4xl font-extrabold text-orange-400 mb-3">50+</h3>
              <p className="text-gray-300 uppercase tracking-[3px] text-sm">
                Projects Completed
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-4xl font-extrabold text-orange-400 mb-3">5+</h3>
              <p className="text-gray-300 uppercase tracking-[3px] text-sm">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-4xl font-extrabold text-orange-400 mb-3">100%</h3>
              <p className="text-gray-300 uppercase tracking-[3px] text-sm">
                Client Satisfaction
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-4xl font-extrabold text-orange-400 mb-3">24/7</h3>
              <p className="text-gray-300 uppercase tracking-[3px] text-sm">
                Project Support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-400 uppercase tracking-[5px] mb-4">
              Why Choose KKS Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elegant Interiors With Reliable Execution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-400 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Premium Finishing
              </h3>

              <p className="text-gray-400 leading-relaxed">
                High-quality materials and elegant finishing for modern residential spaces.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-400 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                On-Time Delivery
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Professional planning and execution to ensure timely project completion.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-400 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Modern Designs
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Stylish and functional interior concepts designed for modern lifestyles.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-400 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                End-to-End Solutions
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Complete support from planning and design to execution and final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-28 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-400 uppercase tracking-[5px] mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Residential Interior Fitout Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-orange-500 transition duration-500 shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500 mb-6 flex items-center justify-center text-2xl font-bold">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange-400 uppercase tracking-[5px] mb-4">
              Project Categories
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Residential Interior Expertise
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-lg hover:border-orange-400 hover:text-orange-400 transition duration-300"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-400 uppercase tracking-[5px] mb-4">
              Client Testimonials
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted By Homeowners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl"
              >
                <div className="flex gap-1 text-orange-400 text-xl mb-6">
                  ★★★★★
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  “{testimonial.feedback}”
                </p>

                <h4 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-xl">
              <h3 className="text-orange-400 text-2xl font-bold mb-4">Call Us</h3>
              <p className="text-gray-300 text-lg">+91 7208201077</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-xl">
              <h3 className="text-orange-400 text-2xl font-bold mb-4">Email</h3>
              <p className="text-gray-300 text-lg">info@kksprojects.co.in</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-xl">
              <h3 className="text-orange-400 text-2xl font-bold mb-4">Office</h3>
              <p className="text-gray-300 text-lg">Parel, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 shadow-2xl backdrop-blur-lg">
            <div className="text-center mb-12">
              <p className="text-orange-400 uppercase tracking-[5px] mb-4">Contact Us</p>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's Build Something Great
              </h2>
            </div>

            <form
  action="https://formspree.io/f/mdabvqpd"
  method="POST"
  className="space-y-8"
>
  <div className="grid md:grid-cols-2 gap-8">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-400"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-400"
    />
  </div>

  <textarea
    rows="6"
    name="message"
    placeholder="Tell us about your project"
    required
    className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-400"
  />

  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-2xl font-semibold shadow-xl"
    >
      Send Message
    </button>
  </div>
</form>
            <div className="mt-14">
              <h3 className="text-center text-2xl font-semibold mb-8">
                Connect With Us
              </h3>

              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                  href="https://wa.me/917208201077"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-5 bg-[#1a1a1a] border border-white/10 hover:border-green-500 rounded-3xl px-8 py-5 transition duration-300 shadow-xl hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-8 h-8"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Chat with us on</p>
                    <h4 className="text-xl font-bold group-hover:text-green-400 transition">
                      WhatsApp Business
                    </h4>
                  </div>
                </a>

                <a
                  href="https://instagram.com/kksprojects"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-5 bg-[#1a1a1a] border border-white/10 hover:border-pink-500 rounded-3xl px-8 py-5 transition duration-300 shadow-xl hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-lg">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                      alt="Instagram"
                      className="w-8 h-8 rounded-lg"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Follow our latest work</p>
                    <h4 className="text-xl font-bold group-hover:text-pink-400 transition">
                      Instagram
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111827]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-orange-400 uppercase tracking-[5px] mb-4">
            Service Locations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Home Interiors in Mumbai, Thane & Navi Mumbai
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            KKS Projects delivers premium residential interior fitout and renovation services across Mumbai, Thane, and Navi Mumbai with elegant designs, modern execution, and reliable project management.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center bg-black">
        <p className="text-gray-500">
          © 2026 KKS Projects • Premium Residential Interior Fitout Solutions
        </p>
      </footer>

      <a
        href="https://wa.me/917208201077"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 transition w-16 h-16 rounded-full shadow-2xl flex items-center justify-center animate-pulse border-4 border-white/20"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
}
