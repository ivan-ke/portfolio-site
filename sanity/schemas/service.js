export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
    },
    {
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      description: 'e.g., "4-6 weeks"',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'successMetric',
      title: 'Success Metric',
      type: 'object',
      fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
