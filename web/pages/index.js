import { client, urlFor } from '../lib/sanity'
// import Image from 'next/image'

// const SITE_URL = 'https://next-image.netlify.app'

// const sanityLoader = ({ src, width, quality }) => {
//   return `https://${SITE_URL}/${src}?w=${width}&q=${quality || 75}`
// }

export default function ({ movies }) {
  return (
    <ul>
      {movies.map(({ title, poster }) => (
        <li>
          <figure>
            {/* <Image
              src={poster}
              alt={title}
              loader={sanityLoader}
              width="500"
              height="500"
              layout="fixed"
              objectFit="contain"
            /> */}
            <img src={urlFor(poster).width(600).height(400)} alt={title} />
          </figure>

          <h2>{title}</h2>
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const movies = await client.fetch(`
    *[_type == "movie"]|order(releaseDate desc){
	    _id,
 	    title,
      releaseDate,
      "poster": poster.asset->url,
    }
  `)

  return {
    props: { movies },
  }
}
