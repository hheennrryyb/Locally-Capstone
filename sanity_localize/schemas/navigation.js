export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: 'navId',
      type: 'slug',
      title: "Navigation Id"
    },
    {
      name: "items",
      type: "array",
      title: "Navigation items",
      of: [{ type: "navigationItem" }]
    }
  ]
}