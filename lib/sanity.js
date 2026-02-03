import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// Fetch all portfolio content
export async function getPortfolioContent() {
  const query = `{
    "profile": *[_type == "profile"][0] {
      name,
      title,
      headline,
      description,
      email,
      phone,
      linkedinUrl,
      calendlyUrl,
      bio,
      stats
    },
    "proofPoints": *[_type == "proofPoint"] | order(order asc) {
      value,
      label,
      positive
    },
    "services": *[_type == "service"] | order(order asc) {
      title,
      timeline,
      description,
      deliverables,
      successMetric
    },
    "projects": *[_type == "project"] | order(order asc) {
      title,
      timeline,
      metrics,
      description,
      tags
    },
    "resources": *[_type == "resource"] | order(order asc) {
      iconName,
      title,
      description,
      "fileUrl": file.asset->url
    },
    "skills": *[_type == "skills"][0] {
      expert,
      advanced
    }
  }`

  return sanityClient.fetch(query)
}
