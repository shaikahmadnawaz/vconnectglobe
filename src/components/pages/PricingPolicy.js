import React from "react";

const PricingPolicy = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center font-bold mb-0 text-xl">Pricing Policy</h1>
      <div className="px-10 flex gap-5 flex-col py-3 pb-11">
        <p>
          We are dedicated to providing you with the best mentoring services for
          studying abroad. We offer affordable and flexible pricing plans to
          cater to your specific needs. Our pricing range is from 499rs to
          999rs.
        </p>
        <div className="flex justify-center">
          <table className="border-separate border-spacing-2 border border-slate-400">
            <tr>
              <th className="border border-slate-300">Plan Details</th>
              <th className="border border-slate-300">Offerings</th>
            </tr>
            <tr>
              <td className="border border-slate-300">Basic Plan - 499rs</td>
              <td className="border border-slate-300">
                <ul className="list-disc ml-7">
                  <li>One-hour consultation with a study abroad mentor</li>
                  <li>Assistance with university and course selection</li>
                  <li>Review of application materials</li>
                  <li>Guidance on scholarship and financial aid opportunities</li>
                  <li>Assistance with visa application process</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300">Advanced Plan - 799rs</td>
              <td className="border border-slate-300">
                <ul className="list-disc ml-7">
                <li>Two one-hour consultations with a study abroad mentor</li>
                <li>Assistance with university and course selection</li>
                <li>Review of application materials</li>
                <li>Guidance on scholarship and financial aid opportunities</li>
                <li>Assistance with visa application process</li>
                <li>Help with pre-departure preparations</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300">Basic Plan - 499rs</td>
              <td className="border border-slate-300">
                <ul className="list-disc ml-7 ">
                <li>One-hour consultation with a study abroad mentor</li>
                <li>Assistance with university and course selection</li>
                <li>Review of application materials</li>
                <li>Guidance on scholarship and financial aid opportunities</li>
                <li>Assistance with visa application process</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingPolicy;
