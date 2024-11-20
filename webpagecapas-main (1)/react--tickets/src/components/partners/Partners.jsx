/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    
      {
        id: 1,
        imageSrc:"https://static.wixstatic.com/media/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg/v1/fit/w_2500,h_1330,al_c/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg",
        
      },
    
      {
        id: 1,
        imageSrc:"https://mewmagazine.es/wp-content/uploads/2021/07/Eladio-Carrion_000.jpg"
        
      },
    
      {
        id: 1,
        imageSrc:"https://static.wixstatic.com/media/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg/v1/fit/w_2500,h_1330,al_c/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg",
        
      },

      {
        id: 1,
        imageSrc:"https://mewmagazine.es/wp-content/uploads/2021/07/Eladio-Carrion_000.jpg"
        
      },
    // More products...
  ]
 
  export default function Example() {
    return (
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-48 py-16 sm:px-6 sm:py-24 lg:max-w-8xl lg:px-8">
  
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Patrocinadores</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-40">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  