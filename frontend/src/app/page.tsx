import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <Header />
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-green-500">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Fresh Produce */}
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Fresh Produce</h3>
            <p>Source your fruits and vegetables directly from local farmers.</p>
          </div>

          {/* Flexible Orders */}
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Flexible Orders</h3>
            <p>Get your produce in various quantities to suit your needs.</p>
          </div>

          {/* Fast Delivery */}
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Fast Delivery</h3>
            <p>Receive your fresh produce straight to your doorstep.</p>
          </div>

          {/* Seasonal Choices */}
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Seasonal Choices</h3>
            <p>Select from a wide range of seasonal produce options.</p>
          </div>

          {/* Support Local */}
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Support Local</h3>
            <p>Help local farmers thrive and keep their businesses afloat.</p>
          </div>

          {/* Eco-friendly */}
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Eco-friendly</h3>
            <p>Decrease food miles and carbon footprints with our services.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
