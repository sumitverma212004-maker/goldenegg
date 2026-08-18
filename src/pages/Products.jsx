import { useState } from "react";

function Products() {
  const [category, setCategory] = useState("All");

  const products = [
    {
      name: "Fresh Apples",
      price: "₹120",
      category: "Fruits",
      badge: "Best Seller",
      img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Organic Vegetables",
      price: "₹250",
      category: "Vegetables",
      badge: "Organic",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fresh Spinach",
      price: "₹40",
      category: "Vegetables",
      badge: "Fresh",
      img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Brown Eggs Tray",
      price: "₹150",
      category: "Eggs",
      badge: "Farm Fresh",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHYtSHGKEaiFNqSH9vW2i1-oGXqjrUQoiEtS1atAfRg&s=10",
    },
    {
      name: "Fresh Tomatoes",
      price: "₹60",
      category: "Vegetables",
      badge: "Fresh",
      img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Organic Carrots",
      price: "₹50",
      category: "Vegetables",
      badge: "Organic",
      img: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Farm Fresh Bananas",
      price: "₹70",
      category: "Fruits",
      badge: "Fresh",
      img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fresh Green Peas",
      price: "₹90",
      category: "Vegetables",
      badge: "Popular",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALetJV6DKi93SwzyEFM-2S2JewnqcN8KxOurZ3LsFNw&s=10",
    },
  ];

  const categories = ["All", "Fruits", "Vegetables", "Eggs"];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="bg-[#fffdf8] text-[#1A1A1A] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[500px] flex items-center px-6 md:px-12 lg:px-20">

        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=85"
          alt="Fresh organic vegetables"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-3xl text-white">

          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full text-sm">
            🌿 Farm Fresh • Naturally Grown
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold mt-6 leading-tight">
            Freshness You Can
            <br />
            <span className="text-[#D9E7A6]">Taste & Trust.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Discover fresh fruits, vegetables and farm products sourced with
            care and delivered straight to your home.
          </p>

          <button className="mt-8 bg-[#2F5D3A] hover:bg-[#24492d] px-8 py-3.5 rounded-full font-medium transition-all duration-300">
            Shop Fresh Products →
          </button>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="py-20 px-6 text-center">

        <span className="text-[#668A55] uppercase tracking-[4px] text-sm font-semibold">
          Our Collection
        </span>

        <h2 className="text-3xl md:text-5xl font-semibold mt-4">
          Good Food Starts
          <span className="text-[#668A55]"> With Good Ingredients.</span>
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
          Carefully sourced products made for families who care about what
          goes on their table.
        </p>

      </section>


      {/* ================= CATEGORY BAR ================= */}
      <section className="px-6 md:px-12 lg:px-20 pb-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-semibold">
              Explore Products
            </h2>

            <p className="text-gray-500 mt-1">
              Fresh choices for everyday living
            </p>
          </div>


          <div className="flex flex-wrap justify-center gap-3">

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-6 py-2.5 rounded-full border transition-all duration-300 ${
                  category === item
                    ? "bg-[#2F5D3A] text-white border-[#2F5D3A]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#2F5D3A] hover:text-[#2F5D3A]"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {filteredProducts.map((item, index) => (

            <div
              key={index}
              className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[270px] object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badge */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#2F5D3A]">
                  {item.badge}
                </span>

                {/* Heart */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/95 rounded-full flex items-center justify-center text-lg shadow-sm hover:scale-110 transition">
                  ♡
                </button>

              </div>


              {/* CONTENT */}
              <div className="p-6">

                <p className="text-xs uppercase tracking-wider text-[#668A55] font-semibold">
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold mt-2">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-yellow-500 text-sm">
                    ★★★★★
                  </span>

                  <span className="text-xs text-gray-400">
                    4.9
                  </span>
                </div>

                <div className="flex items-center justify-between mt-5">

                  <div>
                    <p className="text-xl font-bold text-[#2F5D3A]">
                      {item.price}
                    </p>

                    <p className="text-xs text-gray-400">
                      Freshly sourced
                    </p>
                  </div>

                  <button className="bg-[#2F5D3A] text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-[#24492d] hover:scale-105 transition">
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= FEATURED BANNER ================= */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">

        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px] min-h-[400px] flex items-center">

          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=85"
            alt="Organic farm"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#1f3d27]/75"></div>

          <div className="relative z-10 p-10 md:p-16 text-white max-w-2xl">

            <span className="text-[#D9E7A6] uppercase tracking-[3px] text-sm font-semibold">
              Farm To Home
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
              Fresh Food.
              <br />
              Honest Choices.
            </h2>

            <p className="mt-5 text-white/80 text-lg leading-relaxed">
              We work closely with farmers to bring you products that are
              fresh, carefully selected and full of natural goodness.
            </p>

            <button className="mt-7 bg-white text-[#2F5D3A] px-7 py-3 rounded-full font-semibold hover:bg-[#D9E7A6] transition">
              Learn About Us
            </button>

          </div>

        </div>

      </section>


      {/* ================= WHY SHOP WITH US ================= */}
      <section className="bg-[#F5F7F1] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold mt-4">
              More Than Just Fresh Food.
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-7 mt-14">

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">

              <div className="w-16 h-16 mx-auto bg-[#E8F0E4] rounded-2xl flex items-center justify-center text-3xl">
                🌱
              </div>

              <h3 className="text-xl font-semibold mt-6">
                Naturally Fresh
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Fresh products sourced with care and delivered to your home.
              </p>

            </div>


            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">

              <div className="w-16 h-16 mx-auto bg-[#F5EED8] rounded-2xl flex items-center justify-center text-3xl">
                🤝
              </div>

              <h3 className="text-xl font-semibold mt-6">
                Trusted Farmers
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                We work directly with farmers and value their hard work.
              </p>

            </div>


            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">

              <div className="w-16 h-16 mx-auto bg-[#E7EFEA] rounded-2xl flex items-center justify-center text-3xl">
                ❤️
              </div>

              <h3 className="text-xl font-semibold mt-6">
                Made With Care
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Every order is prepared with quality and your family in mind.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="text-center py-24 px-6">

        <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
          Freshness Is Waiting
        </span>

        <h2 className="text-4xl md:text-5xl font-semibold mt-4">
          Bring Better Food Home.
        </h2>

        <p className="mt-5 text-gray-500 max-w-xl mx-auto text-lg">
          Choose fresh. Choose natural. Choose food you can trust.
        </p>

        <button className="mt-8 bg-[#2F5D3A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#24492d] transition-all duration-300 shadow-lg">
          Explore All Products →
        </button>

      </section>

    </div>
  );
}

export default Products;