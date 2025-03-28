import Script from "next/script";

export default function StatCounter() {
  return (
    <>
      <Script id="statcounter-config" strategy="afterInteractive">
        {`
          var sc_project=13109507; 
          var sc_invisible=1; 
          var sc_security="16bd1cac";
        `}
      </Script>
      <Script
        src="https://www.statcounter.com/counter/counter.js"
        strategy="afterInteractive"
      />
      <noscript>
        <div className="statcounter">
          <a
            title="website statistics"
            href="https://statcounter.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="statcounter"
              src="https://c.statcounter.com/13109507/0/16bd1cac/1/"
              alt="website statistics"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </noscript>
    </>
  );
}
