import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="mb-8 md:mx-24">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <h1 className="text-4xl text-center font-bold mb-4">
          Terms and Conditions
        </h1>
        <p className="mb-10 text-center">
          Welcome to our website, where you can find a variety of delicious
          Bengali food recipes. By using this website, you agree to be bound by
          these terms and conditions. If you do not agree with any of these
          terms and conditions, please do not use our website.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Intellectual Property Rights
        </h2>
        <p className="mb-4">
          All content published on this website, including but not limited to
          text, images, graphics, logos, and videos, is our property or used
          with permission. You may view, print, or download content from this
          website for personal use only. Any other use of content without our
          prior written consent is strictly prohibited.
        </p>
        <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
        <p className="mb-4">
          When using our website, you agree to behave responsibly, courteously,
          and legally. This includes refraining from posting obscene,
          defamatory, or threatening content, or engaging in any activity that
          could harm the reputation of our website or our users. We reserve the
          right to remove any content or user account at our discretion.
        </p>
        <h2 className="text-2xl font-bold mb-4">Accuracy of Information</h2>
        <p className="mb-4">
          We strive to provide accurate and up-to-date information on our
          website. However, we make no representations or warranties about the
          accuracy, completeness, or reliability of any content on the site.
          Therefore, you use the information provided on our website at your own
          risk.
        </p>
        <h2 className="text-2xl font-bold mb-4">Links to Third-Party Sites</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites or resources.
          These links are provided for your convenience only and do not imply
          endorsement or approval of the content on these sites. We have no
          control over, and assume no responsibility for the content, privacy
          policies, or practices of any third-party sites.
        </p>
        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          We will not be held liable for any damages arising out of or in
          connection with the use of our website. This includes direct,
          indirect, incidental, consequential, or punitive damages. We also do
          not guarantee that our website will be uninterrupted or error-free,
          and we reserve the right to modify or discontinue any aspect of the
          site at any time without notice.
        </p>
        <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify, defend, and hold harmless our website, its
          affiliates, and their respective directors, officers, employees, and
          agents from and against any and all claims, damages, liabilities,
          costs, and expenses (including reasonable attorneys’ fees) arising out
          of or in connection with your use of our website.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Governing Law and Jurisdiction
        </h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws of the state of [State], without giving effect to any
          principles of conflicts of law. You agree to submit to the personal
          jurisdiction of the courts located within [City/County] for the
          resolution of any disputes arising out of or relating to these terms
          and conditions.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Changes to Terms and Conditions
        </h2>
        <p className="mb-4">
          We reserve the right to modify or update these terms and conditions at
          any time without prior notice. Your continued use of the website after
          any such changes constitutes your acceptance of the new terms and
          conditions.
        </p>

        <Link
          to="/register"
          className="btn border-[#C19D60] bg-[#C19D60] mt-8 normal-case text-white"
        >
          Back to Register
        </Link>
      </div>
    </div>
  );
};

export default Terms;
