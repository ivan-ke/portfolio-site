export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Your Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g., "Digital Transformation Leader"',
    },
    {
      name: 'headline',
      title: 'Hero Headline',
      type: 'text',
      rows: 2,
    },
    {
      name: 'description',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'bio',
      title: 'About Me Bio',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'calendlyUrl',
      title: 'Calendly URL',
      type: 'url',
    },
    {
      name: 'stats',
      title: 'About Section Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    },
  ],
}
