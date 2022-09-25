export default {
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    fields: [
        {
            name: "text",
            type: "string",
            title: "Navigation Text"
        },
        {
            name: "navigationItemSlug",
            type: "slug",
            title: "Navigation Item Slug"
        }
    ]
}