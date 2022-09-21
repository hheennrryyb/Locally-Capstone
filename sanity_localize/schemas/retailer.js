export default {
    name: 'retailer',
    title: 'Maker',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Maker Name',
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
            name: 'image',
            title: 'Profile Photo',
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
            title: 'name',
            media: 'image',
        },
    },
}