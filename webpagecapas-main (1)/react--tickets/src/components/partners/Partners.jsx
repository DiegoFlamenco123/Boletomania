
const products = [
    
      {
        id: 1,
        imageSrc:"https://www.cocacolaep.com/assets/Uploads/resources/Coca-Cola-1210.jpg",
        
      },
    
      {
        id: 1,
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1200px-Pepsi_2023.svg.png"
        
      },
    
      {
        id: 1,
        imageSrc:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102013/logo_emblema_pilsener.jpg?itok=KXH1Fu-s",
        
      },

      {
        id: 1,
        imageSrc:"https://guausuplemento.com/wp-content/uploads/2024/07/perfil-guauguau.webp"
        
      },
   
  ]
 
  export default function sponsors() {
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
  