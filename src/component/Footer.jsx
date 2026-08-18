function Footer() {
  return (
    <footer className="bg-[#183222] text-white">

      {/* ================= NEWSLETTER ================= */}
      <div className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <span className="text-[#D9E7A6] uppercase tracking-[3px] text-sm font-semibold">
                Stay Connected
              </span>

              <h2 className="text-3xl md:text-4xl font-semibold mt-3">
                Freshness In Your Inbox.
              </h2>

              <p className="mt-4 text-white/60 max-w-lg">
                Get updates about fresh products, special offers and what's
                new from our farm-to-home journey.
              </p>

            </div>


            <div className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border border-white/15 rounded-full px-6 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#D9E7A6]"
              />

              <button className="bg-[#D9E7A6] text-[#183222] px-7 py-4 rounded-full font-semibold hover:bg-white transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">


          {/* BRAND */}
          <div className="lg:pr-8">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-[#D9E7A6] flex items-center justify-center text-2xl">
                🌿
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Swadesi
                </h2>

                <p className="text-xs text-white/40">
                  Farm to Home
                </p>
              </div>

            </div>


            <p className="mt-6 text-white/60 leading-relaxed">
              Fresh, natural and honestly sourced food brought closer to your
              family. From farmers we trust to homes we care about.
            </p>


            {/* SOCIAL */}
            <div className="flex gap-3 mt-7">

              <a
              
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D9E7A6] hover:text-[#183222] transition"
              >
                📷
              </a>

              <a
               
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D9E7A6] hover:text-[#183222] transition"
              >
                f
              </a>

              <a
              
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D9E7A6] hover:text-[#183222] transition"
              >
                𝕏
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="/"
                  className="text-white/60 hover:text-[#D9E7A6] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-white/60 hover:text-[#D9E7A6] transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="text-white/60 hover:text-[#D9E7A6] transition"
                >
                  Our Products
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-white/60 hover:text-[#D9E7A6] transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* SUPPORT */}
          <div>

            <h3 className="text-lg font-semibold">
              Support
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  
                  className="text-white/60 hover:text-[#D9E7A6] transition"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  
                  className="text-white/60 hover:text-[#D9E7A6] transition"
                >
                  Delivery Information
                </a>
              </li>

              <li>
                <a
                 
                  className="text-white/60 hover:text-[#D9E7A6] transition"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                 
                  className="text-white/60 hover:text-[#D9E7A6] transition"
                >
                  Privacy Policy
                </a>
              </li>

            </ul>

          </div>


          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-4">

                <span className="text-xl">
                  📍
                </span>

                <div>
                  <p className="text-sm text-white/40">
                    Location
                  </p>

                  <p className="text-white/70 mt-1">
                    Jaipur, Rajasthan
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <span className="text-xl">
                  ✉️
                </span>

                <div>
                  <p className="text-sm text-white/40">
                    Email
                  </p>

                  <p className="text-white/70 mt-1">
                    support@swadesi.com
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <span className="text-xl">
                  📞
                </span>

                <div>
                  <p className="text-sm text-white/40">
                    Phone
                  </p>

                  <p className="text-white/70 mt-1">
                    +91 12345 67890
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FARM MESSAGE ================= */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <div className="flex items-center gap-3">

              <span className="text-2xl">
                🌱
              </span>

              <p className="text-white/60 text-sm">
                Good food. Good farmers. Better living.
              </p>

            </div>

            <p className="text-white/40 text-sm">
              Made with care for every family.
            </p>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}
      <div className="bg-[#10261A] border-t border-white/5">

  <div className="max-w-7xl mx-auto px-6 py-5">

    <div className="flex justify-center items-center text-center">

      <p className="text-white/40 text-sm">
        © 2026 Swadesi. All rights reserved.
      </p>

    </div>

  </div>

</div>

    </footer>
  );
}

export default Footer;