export default {
  name: 'resource',
  title: 'Downloadable Resources',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      options: {
        list: [
          { title: 'Briefcase', value: 'Briefcase' },
          { title: 'Bar Chart', value: 'BarChart3' },
          { title: 'Target', value: 'Target' },
          { title: 'Award', value: 'Award' },
          { title: 'Users', value: 'Users' },
          { title: 'Globe', value: 'Globe' },
        ],
      },
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
