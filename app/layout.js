import './globals.css'

export const metadata = {
  title: 'Ivan | Digital Transformation Leader',
  description: 'Strategic digital leader specializing in APAC markets, data-driven transformation, and AI-powered solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
