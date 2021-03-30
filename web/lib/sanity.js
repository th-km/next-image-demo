import { createClient, createImageUrlBuilder, createPortableTextComponent } from 'next-sanity'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
}

export const urlFor = source => createImageUrlBuilder(config).image(source)
export const BlockContent = createPortableTextComponent({ ...config, serializers: {} })

export const client = createClient(config)
