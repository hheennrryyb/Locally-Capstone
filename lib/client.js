import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


//connecting with sanity client in sanity manage
export const client = sanityClient({
    projectId: 'aiy4ifzh',
    dataset: 'production',
    apiVersion: '2022-09-14',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)