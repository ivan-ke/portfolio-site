import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Ivan | Digital Transformation Leader',
  description: 'Strategic digital leader specializing in APAC markets, data-driven transformation, and AI-powered solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Script 
          src="https://js-na2.hsforms.net/forms/embed/245081453.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
