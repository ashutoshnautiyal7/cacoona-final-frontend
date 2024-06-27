import Footer from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing and using Cacoona.com, you agree to be bound by these
              Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Use of the Website
            </h2>
            <p className="text-gray-700">
              You agree to use Cacoona.com for lawful purposes only and in a way
              that does not infringe the rights of, restrict or inhibit anyone
              else's use and enjoyment of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. Product Information
            </h2>
            <p className="text-gray-700">
              We strive to provide accurate product information, but we do not
              warrant that product descriptions or other content is accurate,
              complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Pricing and Availability
            </h2>
            <p className="text-gray-700">
              All prices are subject to change without notice. We reserve the
              right to modify or discontinue any product without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Ordering and Payment
            </h2>
            <p className="text-gray-700">
              By placing an order, you are offering to purchase a product. All
              orders are subject to acceptance and availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. Shipping and Delivery
            </h2>
            <p className="text-gray-700">
              Delivery times may vary depending on the delivery address and the
              type of product ordered. We are not responsible for delays outside
              our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              7. Returns and Refunds
            </h2>
            <p className="text-gray-700">
              Please refer to our Returns Policy for information on how to
              return products and receive refunds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              8. Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content on Cacoona.com, including text, graphics, logos, and
              images, is the property of Cacoona.com and protected by copyright
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              Cacoona.com shall not be liable for any indirect, incidental,
              special, consequential or punitive damages resulting from your use
              of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to update or modify these Terms and
              Conditions at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              11. Contact Information
            </h2>
            <p className="text-gray-700">
              For any questions regarding these Terms and Conditions, please
              contact us at terms@cacoona.com.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
