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

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Fresh Produce</h3>
            <p>Source your fruits and vegetables directly from local farmers.</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Flexible Orders</h3>
            <p>Get your produce in various quantities to suit your needs.</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Fast Delivery</h3>
            <p>Receive your fresh produce straight to your doorstep.</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Seasonal Choices</h3>
            <p>Select from a wide range of seasonal produce options.</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Support Local</h3>
            <p>Help local farmers thrive and keep their businesses afloat.</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Eco-friendly</h3>
            <p>Decrease food miles and carbon footprints with our services.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col p-12 items-center justify-center w-screen h-screen bg-lime-700">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-lime-500 mb-8">
          Get Started
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4 p-4">
          Embark on a grand adventure of supporting your local farmers and receiving the freshest produce straight to your doorstep.
        </h2>
        <p className="mb-4 text-white">
          Sign up now and experience the benefits!
        </p>
        <button className="bg-green-500 text-white py-2 px-4 rounded-full mr-4">Sign Up</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-full">Learn More</button>
      </div>
      <div></div>
      <section className="w-screen h-screen flex flex-row items-center justify-center p-12">

      </section>
    </div>
    <Footer />
    </>
  )
}
