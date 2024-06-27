import React from "react";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to Cacoona.com. This Privacy Policy outlines how we collect,
            use, and protect your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p className="text-gray-700">
            We collect information you provide directly to us, such as when you
            create an account, make a purchase, or contact our customer service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700">
            We use your information to process orders, provide customer support,
            and improve our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            4. Information Sharing and Disclosure
          </h2>
          <p className="text-gray-700">
            We do not sell your personal information. We may share information
            with service providers who help us operate our business.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p className="text-gray-700">
            We implement security measures to protect your personal information
            from unauthorized access and misuse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, or delete your personal
            information. Contact us for any privacy-related requests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            7. Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@cacoona.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
