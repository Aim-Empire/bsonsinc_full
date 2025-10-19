export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center rounded-2xl shadow-lg mt-10">
      <h2 className="text-4xl font-extrabold mb-4">Be Part of the Bsons Inc Movement 🚀</h2>
      <p className="max-w-2xl mx-auto text-lg opacity-90">
        Whether you’re looking to <strong>build your career</strong>, 
        <strong> invest in our mission</strong>, or <strong>support our global cause</strong> —
        there’s a place for you in <span className="font-semibold">Bsons Inc</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="/careers"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          💼 Explore Careers
        </a>

        <a
          href="/invest"
          className="bg-green-500 hover:bg-green-600 font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          💰 Become an Investor
        </a>

        <a
          href="/donate"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          ❤️ Donate Now
        </a>
      </div>

      <p className="mt-8 text-sm opacity-75">
        Every contribution and connection strengthens our mission to build communities worldwide.
      </p>
    </section>
  );
}