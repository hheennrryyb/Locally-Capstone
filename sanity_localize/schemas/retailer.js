export default {
    name: 'retailer',
    title: 'Retailer',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'banner',
            title: 'Banner',
            type: 'image',
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            title: 'Launchpad Location',
            name: 'location',
            type: 'geopoint'
        }

    ],
    preview: {
        select: {
            title: 'title',
            media: 'logo',
        },
    },
}