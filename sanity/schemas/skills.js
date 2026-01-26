export default {
  name: 'skills',
  title: 'Skills Matrix',
  type: 'document',
  fields: [
    {
      name: 'expert',
      title: 'Expert Skills',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'advanced',
      title: 'Advanced Skills',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
