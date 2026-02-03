export default {
  name: 'proofPoint',
  title: 'Proof Points (Hero Metrics)',
  type: 'document',
  fields: [
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g., "+32%", "$12M", "8"',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "conversion lift", "budget optimized"',
    },
    {
      name: 'positive',
      title: 'Positive Metric?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
