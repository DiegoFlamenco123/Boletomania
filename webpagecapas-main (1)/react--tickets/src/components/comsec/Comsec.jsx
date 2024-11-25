
import perfil from '../../assets/img/fotokevin.png';
const posts = [
    {
      id: 1,
      title: 'De las mejores paginas para poder vivir mi experiencia en conciertos',
      to: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Twitter', to: '#' },
      author: {
        name: 'Mike Towers ',
        role: 'Co-Founder / Spotify',
        to: '#',
        imageSrc: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      },
    },
    {
        id: 1,
        title: 'De las mejores paginas para poder vivir mi experiencia en conciertos',
        to: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2023',
        datetime: '2023-03-16',
        category: { title: 'Facebook', to: '#' },
        author: {
          name: 'Alejandro Vasquez ',
          role: '',
          to: '#',
          imageSrc: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        },
      },
      {
        id: 1,
        title: 'De las mejores paginas para poder vivir mi experiencia en conciertos',
        to: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2023',
        datetime: '2023-03-16',
        category: { title: 'Facebook', to: '#' },
        author: {
          name: 'Mauricio Rosales ',
          role: 'Co-Founder / CTO',
          to: '#',
          imageSrc: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        },
      },
    // More posts...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comentarios de nuestros clientes</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
                Vive la experiencia de ir a tu concierto favorito con la accesibilidad que te disponemos con los mejores precios.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    to={post.category.to}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a to={post.to}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageSrc} alt="" className="h-12 w-12 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a to={post.author.to}>
                      <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  