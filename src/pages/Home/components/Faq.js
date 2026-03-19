import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
      {
        "id": 1,
        "question": "Why should I use ElecGuide?",
        "answer": "Elecguid is an e-kart application that allows users to buy programming books or learning materials online easily."
      },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Just open the Elecguide application, log in to your account, and open your Elecguide to purchase it anytime."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "No. Refunds are usually not available for Elecguide because they are digital products that can be downloaded immediately After purchasing."
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Yes, Elecguide supports international payments. Users from different countries can purchase eBooks using online payment methods like credit cards, debit cards, or other global payment options. International payments allow customers to pay from other countries, sometimes with currency conversion."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}
