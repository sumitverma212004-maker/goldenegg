import React from "react";

function Contact() {
  return (
    <div className="bg-[#FFFDF8] text-[#1A1A1A] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[420px] flex items-center justify-center text-center px-6">

        <img
          src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1800&q=85"
          alt="Fresh farm"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1f3d27]/70"></div>

        <div className="relative z-10 text-white max-w-3xl">

          <span className="inline-block bg-white/15 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full text-sm">
            🌿 We'd Love To Hear From You
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold mt-6">
            Let's Stay
            <span className="text-[#D9E7A6]"> Connected.</span>
          </h1>

          <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Have a question about our products, delivery or anything else?
            Our team is here to help.
          </p>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">


          {/* ================= LEFT INFO ================= */}
          <div>

            <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
              We're Here
              <br />
              <span className="text-[#668A55]">
                To Help You.
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
              Whether you want to know more about our products, need help
              with an order or simply want to say hello, feel free to reach
              out.
            </p>


            {/* CONTACT CARDS */}
            <div className="mt-10 space-y-5">

              {/* Phone */}
              <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition">

                <div className="w-14 h-14 rounded-2xl bg-[#E8F0E4] flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Call Us
                  </p>

                  <p className="font-semibold text-lg">
                    +91 98765 43210
                  </p>
                </div>

              </div>


              {/* Email */}
              <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition">

                <div className="w-14 h-14 rounded-2xl bg-[#F4EFD9] flex items-center justify-center text-2xl">
                  ✉️
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Email Us
                  </p>

                  <p className="font-semibold text-lg">
                    hello@yourbrand.com
                  </p>
                </div>

              </div>


              {/* Location */}
              <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition">

                <div className="w-14 h-14 rounded-2xl bg-[#E7EFEA] flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Our Location
                  </p>

                  <p className="font-semibold text-lg">
                    Dausa, Rajasthan
                  </p>
                </div>

              </div>

            </div>


            {/* SOCIAL */}
            <div className="mt-10">

              <p className="font-semibold">
                Follow Our Journey
              </p>

              <div className="flex gap-3 mt-4">

                <button className="w-11 h-11 rounded-full bg-[#F5F7F1] hover:bg-[#2F5D3A] hover:text-white transition">
                  📷
                </button>

                <button className="w-11 h-11 rounded-full bg-[#F5F7F1] hover:bg-[#2F5D3A] hover:text-white transition">
                  f
                </button>

                <button className="w-11 h-11 rounded-full bg-[#F5F7F1] hover:bg-[#2F5D3A] hover:text-white transition">
                  𝕏
                </button>

              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}
          <div className="bg-white rounded-[30px] p-7 md:p-10 shadow-xl border border-gray-100">

            <div className="mb-8">

              <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
                Send A Message
              </span>

              <h2 className="text-2xl md:text-3xl font-semibold mt-3">
                How Can We Help?
              </h2>

              <p className="text-gray-500 mt-2">
                Fill in the details and we'll get back to you.
              </p>

            </div>


            <form className="space-y-5">

              {/* Name */}
              <div>

                <label className="text-sm font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#668A55] focus:ring-2 focus:ring-[#668A55]/10 transition"
                />

              </div>


              {/* Email */}
              <div>

                <label className="text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#668A55] focus:ring-2 focus:ring-[#668A55]/10 transition"
                />

              </div>


              {/* Phone */}
              <div>

                <label className="text-sm font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-2 w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#668A55] focus:ring-2 focus:ring-[#668A55]/10 transition"
                />

              </div>


              {/* Subject */}
              <div>

                <label className="text-sm font-medium">
                  Subject
                </label>

                <select
                  className="mt-2 w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-600 outline-none focus:border-[#668A55] focus:ring-2 focus:ring-[#668A55]/10 transition"
                >
                  <option>Select a topic</option>
                  <option>Product Enquiry</option>
                  <option>Order Support</option>
                  <option>Delivery</option>
                  <option>Other</option>
                </select>

              </div>


              {/* Message */}
              <div>

                <label className="text-sm font-medium">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="mt-2 w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none resize-none focus:border-[#668A55] focus:ring-2 focus:ring-[#668A55]/10 transition"
                ></textarea>

              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#2F5D3A] text-white py-4 rounded-full font-semibold hover:bg-[#24492d] transition-all duration-300 shadow-md"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= QUICK HELP ================= */}
      <section className="bg-[#F5F7F1] py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <span className="text-[#668A55] uppercase tracking-[3px] text-sm font-semibold">
            Quick Help
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Need An Answer Quickly?
          </h2>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white rounded-3xl p-7 hover:shadow-xl transition">

              <div className="text-3xl">
                📦
              </div>

              <h3 className="font-semibold text-lg mt-4">
                Order Support
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Need help with an existing order?
              </p>

              <button className="mt-4 text-[#2F5D3A] font-semibold">
                Get Help →
              </button>

            </div>


            <div className="bg-white rounded-3xl p-7 hover:shadow-xl transition">

              <div className="text-3xl">
                🚚
              </div>

              <h3 className="font-semibold text-lg mt-4">
                Delivery Questions
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Want to know about delivery?
              </p>

              <button className="mt-4 text-[#2F5D3A] font-semibold">
                Learn More →
              </button>

            </div>


            <div className="bg-white rounded-3xl p-7 hover:shadow-xl transition">

              <div className="text-3xl">
                🌿
              </div>

              <h3 className="font-semibold text-lg mt-4">
                Product Information
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Have questions about our products?
              </p>

              <button className="mt-4 text-[#2F5D3A] font-semibold">
                Ask Us →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative py-24 px-6 text-center text-white">

        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=85"
          alt="Organic farm"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1f3d27]/80"></div>

        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-semibold">
            We're Just A Message Away.
          </h2>

          <p className="mt-5 text-white/80 text-lg">
            Let's make fresh, honest food a part of your everyday life.
          </p>

          <button className="mt-8 bg-white text-[#2F5D3A] px-8 py-4 rounded-full font-semibold hover:bg-[#D9E7A6] transition">
            Start Shopping →
          </button>

        </div>

      </section>

    </div>
  );
}

export default Contact;