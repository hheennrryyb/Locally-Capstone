export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Category Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        // {
        //     name: 'parents',
        //     title: 'Parent categories',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'reference',
        //             to: [{ type: 'category' }],
        //         },
        //     ],
        // },
    ],
    // preview: {
    //     select: {
    //         title: 'title',
    //         image: 'image',
    //         slug: 'slug',
    //     },
    //     prepare({ title, image, slug }) {
    //         return {
    //             title,
    //             media: image,
    //             subtitle: slug.current,
    //         }
    //     }
    // }
}