function About() {
  return (
    <div className="bg-[#fffdf8] text-[#1A1A1A] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[620px] flex items-center px-6 md:px-12 lg:px-20 py-20">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1800&q=85"
            alt="Fresh farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl text-white">
          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full text-sm mb-6">
            🌿 Naturally Grown • Farm Fresh • Trusted
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            From Our Farms,
            <br />
            <span className="text-[#D9E7A6]">To Your Family.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            We believe good food starts with good farming. We connect you
            directly with farmers to bring fresh, natural and honest food
            straight to your doorstep.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button className="bg-[#2F5D3A] hover:bg-[#24492d] px-7 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg">
              Explore Our Products
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/40 hover:bg-white hover:text-black px-7 py-3.5 rounded-full font-medium transition-all duration-300">
              Discover Our Story
            </button>
          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">

          <span className="text-[#668A55] uppercase tracking-[4px] text-sm font-semibold">
            Who We Are
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Food Should Be
            <span className="text-[#668A55]"> Simple & Honest.</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            In a world where food travels through countless hands before
            reaching your table, we chose a different path — one that brings
            farmers and families closer together.
          </p>

        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=85"
              alt="Green farm"
              className="w-full h-[480px] object-cover rounded-[28px] shadow-xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-7 -right-4 md:right-8 bg-white rounded-2xl shadow-xl p-6 w-[220px]">
              <p className="text-3xl font-bold text-[#2F5D3A]">100%</p>
              <p className="text-gray-500 text-sm mt-1">
                Farm focused sourcing
              </p>
            </div>
          </div>


          {/* Content */}
          <div>
            <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
              Our Story
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
              A Small Idea That
              <br />
              <span className="text-[#668A55]">Grew Into Something Bigger.</span>
            </h2>

            <p className="mt-7 text-gray-600 leading-relaxed text-lg">
              Our journey started with a simple belief — food should be
              natural, fresh and trustworthy. We wanted to make it easier for
              families to know where their food comes from.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              So we began working closely with farmers, understanding their
              practices and creating a direct connection between the farm and
              your kitchen.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Today, every product we bring to you represents our commitment
              to freshness, quality and honest sourcing.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9F0E4] flex items-center justify-center text-xl">
                🌱
              </div>

              <div>
                <p className="font-semibold">Grown With Care</p>
                <p className="text-sm text-gray-500">
                  Because better food starts at the farm.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-[#2F5D3A] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-4xl md:text-5xl font-semibold">100%</h3>
            <p className="mt-2 text-white/70">Fresh Products</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-semibold">50+</h3>
            <p className="mt-2 text-white/70">Farmer Partners</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-semibold">1K+</h3>
            <p className="mt-2 text-white/70">Happy Families</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-semibold">100%</h3>
            <p className="mt-2 text-white/70">Commitment</p>
          </div>

        </div>
      </section>


      {/* ================= WHAT WE BELIEVE ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#F5F7F1]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
              Our Values
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold mt-4">
              What We Believe In
            </h2>

            <p className="mt-5 text-gray-600">
              These principles guide everything we do — from choosing our
              farmers to delivering food to your home.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-7">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#EAF1E5] flex items-center justify-center text-3xl">
                🌿
              </div>

              <h3 className="text-xl font-semibold mt-7">
                Natural Freshness
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                We focus on bringing food that is fresh, simple and as close
                to its natural form as possible.
              </p>

            </div>


            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#F4EFD9] flex items-center justify-center text-3xl">
                🤝
              </div>

              <h3 className="text-xl font-semibold mt-7">
                Farmer First
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                We believe farmers deserve recognition and a fair opportunity
                to grow with the communities they serve.
              </p>

            </div>


            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-3xl">
                ❤️
              </div>

              <h3 className="text-xl font-semibold mt-7">
                Honest Quality
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                From sourcing to delivery, we believe transparency and trust
                should always come first.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= FARMERS ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div className="order-2 lg:order-1">

            <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
              The People Behind Your Food
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
              Meet The Farmers
              <br />
              <span className="text-[#668A55]">Who Make It Possible.</span>
            </h2>

            <p className="mt-7 text-gray-600 text-lg leading-relaxed">
              Behind every fresh product is a farmer who works early mornings,
              cares for the soil and puts in countless hours to grow something
              meaningful.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We work closely with local farming communities and believe that
              supporting farmers creates a healthier food system for everyone.
            </p>

            <button className="mt-8 bg-[#2F5D3A] text-white px-7 py-3.5 rounded-full hover:bg-[#24492d] transition-all">
              Meet Our Community
            </button>

          </div>


          <div className="order-1 lg:order-2 relative">

            <img
              src="https://images.unsplash.com/photo-1557234195-bd9f2906fe3b?auto=format&fit=crop&w=1200&q=85"
              alt="Farmer working in field"
              className="w-full h-[500px] object-cover rounded-[30px] shadow-xl"
            />

            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg">
              <p className="font-semibold">Supporting Local Farmers</p>
              <p className="text-sm text-gray-500 mt-1">
                Growing together, naturally.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= FARM TO HOME ================= */}
      <section className="py-24 px-6 bg-[#F5F7F1]">

        <div className="max-w-6xl mx-auto text-center">

          <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
            Our Promise
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold mt-4">
            From Farm To Home
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            A simple journey designed around freshness, care and trust.
          </p>


          <div className="grid md:grid-cols-4 gap-6 mt-14">

            <div className="bg-white rounded-3xl p-7 shadow-sm">
              <div className="text-4xl">🌱</div>
              <h3 className="font-semibold mt-5">01. Farm</h3>
              <p className="text-gray-500 text-sm mt-2">
                Carefully grown by our farming partners.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-sm">
              <div className="text-4xl">🥚</div>
              <h3 className="font-semibold mt-5">02. Select</h3>
              <p className="text-gray-500 text-sm mt-2">
                Products are selected with quality in mind.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-sm">
              <div className="text-4xl">📦</div>
              <h3 className="font-semibold mt-5">03. Pack</h3>
              <p className="text-gray-500 text-sm mt-2">
                Packed carefully to preserve freshness.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-sm">
              <div className="text-4xl">🏠</div>
              <h3 className="font-semibold mt-5">04. Home</h3>
              <p className="text-gray-500 text-sm mt-2">
                Delivered fresh to your doorstep.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative py-28 px-6 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=85"
          alt="Fresh green farm"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1f3d27]/80"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">

          <span className="text-white/80 uppercase tracking-[4px] text-sm">
            Better Food Starts Here
          </span>

          <h2 className="text-4xl md:text-6xl font-semibold mt-5 leading-tight">
            Eat Better.
            <br />
            Live Better.
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Discover fresh products sourced with care and delivered with
            honesty.
          </p>

          <button className="mt-9 bg-white text-[#2F5D3A] px-8 py-4 rounded-full font-semibold hover:bg-[#D9E7A6] transition-all duration-300">
            Explore Products →
          </button>

        </div>

      </section>

    </div>
  );
}

export default About;