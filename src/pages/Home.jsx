function Home() {
  const categories = [
    {
      name: "Farm Fresh Eggs",
      img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fresh Vegetables",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Seasonal Fruits",
      img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fresh Dairy",
      img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const products = [
    {
      name: "Farm Fresh Eggs",
      price: "₹150",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnf9ALxHPbtRWuLoGpRsp28mxyK6sQuUvRGcgGZFqWVw&s=10",
    },
    {
      name: "Organic Vegetables",
      price: "₹250",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fresh Carrots",
      price: "₹80",
      img: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <div className="bg-[#FFFDF8] text-[#1A1A1A] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[680px] flex items-center px-6 md:px-12 lg:px-20">

        <img
          src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=2000&q=90"
          alt="Beautiful green farm"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-4xl text-white">

          <span className="inline-flex items-center bg-white/15 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full text-sm">
            🌿 Fresh From Farm To Home
          </span>

          <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Good Food
            <br />
            <span className="text-[#D9E7A6]">
              Starts With Nature.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
            Discover fresh eggs, vegetables, fruits and everyday essentials
            sourced with care and delivered straight to your doorstep.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <button className="bg-[#2F5D3A] hover:bg-[#24492d] px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300">
              Shop Fresh Products →
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/40 hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Our Story
            </button>

          </div>

        </div>


        {/* Floating Trust Card */}
        <div className="hidden md:block absolute bottom-10 right-10 lg:right-20 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl w-[230px]">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 bg-[#E8F0E4] rounded-full flex items-center justify-center text-xl">
              🌱
            </div>

            <div>
              <p className="font-semibold">Farm Fresh</p>
              <p className="text-xs text-gray-500">
                Carefully sourced
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TRUST BAR ================= */}
      <section className="bg-white border-b border-gray-100">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">

          <div className="flex items-center justify-center gap-3 py-6 border-b md:border-b-0 md:border-r border-gray-100">
            <span className="text-2xl">🌿</span>
            <div>
              <p className="font-semibold text-sm">Farm Fresh</p>
              <p className="text-xs text-gray-500">Freshly sourced</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-6 border-b md:border-b-0 md:border-r border-gray-100">
            <span className="text-2xl">🤝</span>
            <div>
              <p className="font-semibold text-sm">Trusted Farmers</p>
              <p className="text-xs text-gray-500">Direct sourcing</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-6 md:border-r border-gray-100">
            <span className="text-2xl">📦</span>
            <div>
              <p className="font-semibold text-sm">Carefully Packed</p>
              <p className="text-xs text-gray-500">Quality checked</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-6">
            <span className="text-2xl">🏠</span>
            <div>
              <p className="font-semibold text-sm">Home Delivery</p>
              <p className="text-xs text-gray-500">Fresh to your door</p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= SHOP BY CATEGORY ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between md:items-end gap-5 mb-12">

            <div>

              <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
                Explore Our Collection
              </span>

              <h2 className="text-3xl md:text-5xl font-semibold mt-4">
                Shop By Category
              </h2>

            </div>

            <button className="text-[#2F5D3A] font-semibold hover:underline">
              View All Products →
            </button>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {categories.map((item, index) => (

              <div
                key={index}
                className="group relative h-[330px] rounded-[28px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
              >

                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <h3 className="text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-white/70 text-sm mt-1">
                    Explore collection →
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= OUR STORY ================= */}
      <section className="bg-[#F5F7F1] py-24 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=85"
              alt="Farm landscape"
              className="w-full h-[500px] object-cover rounded-[30px] shadow-xl"
            />

            <div className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-2xl shadow-xl p-5 w-[210px]">

              <p className="text-3xl font-bold text-[#2F5D3A]">
                100%
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Focused on freshness
              </p>

            </div>

          </div>


          <div>

            <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
              Our Story
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
              From The Farm
              <br />
              <span className="text-[#668A55]">
                With Love.
              </span>
            </h2>

            <p className="mt-7 text-gray-600 text-lg leading-relaxed">
              We believe that food should be simple, fresh and trustworthy.
              That's why we work closely with farmers to bring natural
              goodness closer to your home.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Every product we offer is selected with care, because we know
              that what reaches your table matters.
            </p>

            <button className="mt-8 bg-[#2F5D3A] text-white px-7 py-3.5 rounded-full hover:bg-[#24492d] transition">
              Discover Our Story →
            </button>

          </div>

        </div>

      </section>


      {/* ================= BEST SELLERS ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
              Customer Favourites
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold mt-4">
              Best Sellers
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Some of the fresh favourites our customers keep coming back for.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-7">

            {products.map((item, index) => (

              <div
                key={index}
                className="group bg-white rounded-[26px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <span className="absolute top-4 left-4 bg-white/95 px-4 py-1.5 rounded-full text-xs font-semibold text-[#2F5D3A]">
                    Best Seller
                  </span>

                </div>


                <div className="p-6">

                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.name}
                      </h3>

                      <div className="flex gap-1 mt-2 text-yellow-500 text-sm">
                        ★★★★★
                      </div>
                    </div>

                    <p className="text-xl font-bold text-[#2F5D3A]">
                      {item.price}
                    </p>

                  </div>

                  <button className="mt-6 w-full bg-[#2F5D3A] text-white py-3 rounded-full font-medium hover:bg-[#24492d] transition">
                    Add To Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FARM TO HOME ================= */}
      <section className="bg-[#F5F7F1] py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
            Our Promise
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold mt-4">
            From Farm To Your Table
          </h2>

          <p className="text-gray-500 mt-5 max-w-xl mx-auto">
            A simple journey built around freshness, care and trust.
          </p>


          <div className="grid md:grid-cols-4 gap-6 mt-14">

            {[
              ["🌱", "Farm", "Carefully grown by our farming partners."],
              ["🥬", "Select", "Products selected for freshness."],
              ["📦", "Pack", "Packed carefully with attention."],
              ["🏠", "Deliver", "Freshness delivered to your home."],
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="text-4xl">
                  {item[0]}
                </div>

                <h3 className="font-semibold text-lg mt-5">
                  {item[1]}
                </h3>

                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {item[2]}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= COMBO BANNER ================= */}
      <section className="px-6 md:px-12 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto relative min-h-[450px] rounded-[32px] overflow-hidden flex items-center">

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=85"
            alt="Fresh vegetables"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55"></div>

          <div className="relative z-10 text-white max-w-2xl p-10 md:p-16">

            <span className="text-[#D9E7A6] uppercase tracking-[3px] text-sm font-semibold">
              Fresh Everyday
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Build Your
              <br />
              Healthy Basket.
            </h2>

            <p className="mt-5 text-white/80 text-lg">
              Combine farm fresh eggs, seasonal vegetables and natural
              essentials for your everyday needs.
            </p>

            <button className="mt-8 bg-white text-[#2F5D3A] px-8 py-3.5 rounded-full font-semibold hover:bg-[#D9E7A6] transition">
              Explore Combos →
            </button>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FFFDF8]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
              Why Families Choose Us
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold mt-4">
              Freshness You Can Feel Good About.
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-7 mt-14">

            <div className="p-8 rounded-3xl bg-[#F5F7F1] text-center">

              <div className="text-4xl">🌿</div>

              <h3 className="text-xl font-semibold mt-5">
                Naturally Fresh
              </h3>

              <p className="text-gray-500 mt-3">
                Products sourced with freshness and quality in mind.
              </p>

            </div>


            <div className="p-8 rounded-3xl bg-[#F5F7F1] text-center">

              <div className="text-4xl">🤝</div>

              <h3 className="text-xl font-semibold mt-5">
                Farmer Connected
              </h3>

              <p className="text-gray-500 mt-3">
                Supporting the people who grow the food we enjoy.
              </p>

            </div>


            <div className="p-8 rounded-3xl bg-[#F5F7F1] text-center">

              <div className="text-4xl">❤️</div>

              <h3 className="text-xl font-semibold mt-5">
                Made With Care
              </h3>

              <p className="text-gray-500 mt-3">
                Every order prepared with your family in mind.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative py-28 px-6 text-center text-white overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1800&q=85"
          alt="Green farm"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1f3d27]/80"></div>

        <div className="relative z-10 max-w-3xl mx-auto">

          <span className="text-[#D9E7A6] uppercase tracking-[4px] text-sm font-semibold">
            Better Food Starts Here
          </span>

          <h2 className="text-4xl md:text-6xl font-semibold mt-5">
            Eat Fresh.
            <br />
            Live Better.
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Bring the goodness of the farm closer to your family.
          </p>

          <button className="mt-9 bg-white text-[#2F5D3A] px-9 py-4 rounded-full font-semibold hover:bg-[#D9E7A6] transition-all duration-300">
            Start Shopping →
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;