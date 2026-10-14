import EditorialHeader from '@/components/editorial/EditorialHeader'
import '@/components/editorial/editorial.css'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main id="main-content" className="rams-document">
      <EditorialHeader language="en" />
      <div className="section rams-document-body">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="opacity-70 mb-6">Last updated: July 7, 2026</p>

        <div className="text-base md:text-lg opacity-80 space-y-6">
          <p>
            This Privacy Policy explains how personal data is collected and processed when you visit this website
            (https://thomaszanelli.co/en), in accordance with the EU General Data Protection Regulation (GDPR).
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">1. Data Controller</h2>
            <p>
              The data controller responsible for the processing of personal data on this website is:
            </p>
            <p className="mt-2">
              Thomas Zanelli<br/>
              Email: thomaszanelli@icloud.com
            </p>
            <p className="mt-2">VAT Number: 01492490451</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Types of Data Collected</h2>
            <p className="mt-2">Technical analytics</p>
            <p className="mt-2">
              This website uses Vercel Web Analytics, a privacy-focused analytics solution that does not use cookies and does not track users across websites.
            </p>
            <p className="mt-2">
              The collected data is aggregated and anonymized and cannot be used to identify individual visitors.
              Examples of collected data include:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Page views and navigation patterns (in aggregate form)</li>
              <li>Basic device and performance metrics</li>
              <li>Anonymous usage statistics</li>
            </ul>
            <p className="mt-2">No personally identifiable information (PII) is collected.</p>

            <p className="mt-6">Performance metrics (Speed Insights)</p>
            <p className="mt-2">
              This website also uses Vercel Speed Insights to measure performance indicators such as Core Web Vitals.
            </p>
            <p className="mt-2">
              These metrics are collected anonymously, solely for performance monitoring and optimization purposes, and do not allow user identification.
            </p>

            <p className="mt-6">Google Analytics</p>
            <p className="mt-2">
              This website may use Google Analytics 4, provided by Google Ireland Limited, to collect aggregated statistics about visits and page usage.
              Google Analytics is activated only if the user gives consent through the cookie banner.
            </p>
            <p className="mt-2">
              When consent is granted, Google Analytics may use cookies or similar technologies to distinguish sessions, measure visits, and produce statistical reports.
            </p>

            <p className="mt-6">Redesign quote requests</p>
            <p className="mt-2">
              If you use the redesign request form, this website processes the data you voluntarily submit:
              the website URL to review, your name, email address, optional company or business name, and message.
            </p>
            <p className="mt-2">
              The system technically verifies that the submitted URL corresponds to a public and reachable web page.
              If an OpenAI key is configured, public content from the submitted page may be analyzed to generate an initial technical summary in support of the response.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Cookies and Tracking Technologies</h2>
            <p>This website uses:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>technical technologies required for the website to work;</li>
              <li>a browser-stored preference to remember the analytics consent choice;</li>
              <li>Google Analytics cookies only after explicit consent.</li>
            </ul>
            <p className="mt-2">
              If consent is declined, Google Analytics is not loaded and the related analytics cookies are not set by this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Purpose and Legal Basis of Processing</h2>
            <p>Data is processed to:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>monitor aggregated website usage;</li>
              <li>improve performance, usability, and technical reliability;</li>
              <li>measure content effectiveness through Google Analytics, only after consent.</li>
              <li>manage redesign review, quote, and contact requests submitted through the form.</li>
            </ul>
            <p className="mt-2">
              The legal basis for technical tools and essential metrics is the legitimate interest of the data controller
              (Article 6(1)(f) GDPR). For Google Analytics and related analytics cookies, the legal basis is the user’s consent
              (Article 6(1)(a) GDPR), which can be withdrawn at any time through the “Cookie” button on the website.
              For requests submitted through the form, the legal basis is the performance of pre-contractual steps requested by the user
              (Article 6(1)(b) GDPR).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
            <p>
              All collected data is stored only in aggregated and anonymized form and is retained for a limited period.
            </p>
            <p className="mt-2">
              Temporary technical data generated by Vercel Analytics is automatically deleted within a short timeframe and is never stored in a way that allows identification of users.
            </p>
            <p className="mt-2">
              Data collected through Google Analytics is retained according to the settings configured in the Google Analytics account and Google’s policies.
            </p>
            <p className="mt-2">
              Data submitted through the request form is retained for the time necessary to respond, prepare a quote,
              and manage the resulting pre-contractual or contractual relationship.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. User Rights</h2>
            <p>Under the GDPR, users have the right to:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Access their personal data</li>
              <li>Request rectification or deletion</li>
              <li>Request restriction of processing</li>
              <li>Object to processing for legitimate reasons</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-2">
              To exercise these rights or request information about processing, you may contact: thomaszanelli@icloud.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
            <p>
              This Privacy Policy may be updated from time to time.
              Any changes will be published on this page along with an updated revision date.
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <Link className="btn" href="/en">Back to site</Link>
          <a className="back-to-top-inline" href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </main>
  )
}
