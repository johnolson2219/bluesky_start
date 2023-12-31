import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Head from "@docusaurus/Head"

type StructuredDataSearchboxProps = React.HTMLAttributes<HTMLScriptElement>

const StructuredDataSearchbox: React.FC<StructuredDataSearchboxProps> = () => {
  const {
    siteConfig: { url },
  } = useDocusaurusContext()

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
    </Head>
  )
}

export default StructuredDataSearchbox
