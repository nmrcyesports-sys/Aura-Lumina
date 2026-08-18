export function Shipping() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-zinc-50 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-zinc-200 p-8 sm:p-16">
        <h1 className="font-serif text-4xl text-zinc-900 mb-8 text-center">Shipping & Returns</h1>
        
        <div className="space-y-12 text-zinc-600 leading-relaxed text-sm">
          <section>
            <h2 className="font-serif text-2xl text-zinc-900 mb-4">Complimentary Shipping</h2>
            <p className="mb-4">
              We are pleased to offer complimentary standard shipping on all orders. Each fragrance is meticulously packaged to ensure it arrives in perfect condition.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Standard Delivery:</strong> 3-5 business days (Complimentary)</li>
              <li><strong>Express Delivery:</strong> 1-2 business days ($25.00)</li>
              <li><strong>Next Day Delivery:</strong> Available in select metropolitan areas ($35.00)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-zinc-900 mb-4">Order Processing</h2>
            <p>
              Orders are processed and dispatched within 24 hours of receipt, Monday through Friday, excluding holidays. Orders placed on weekends or holidays will be processed the following business day. Once your order has been dispatched, you will receive an email containing your tracking information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-zinc-900 mb-4">Returns Policy</h2>
            <p className="mb-4">
              We want you to be completely satisfied with your Aura Lumina experience. If for any reason you are not satisfied, we accept returns of unopened and unused products within 30 days of the original purchase date.
            </p>
            <p className="mb-4">
              Please note that due to hygiene and safety reasons, we cannot accept returns of fragrances that have been opened or sprayed. All return requests must be authorized by our concierge team prior to shipping.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-zinc-900 mb-4">How to Initiate a Return</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Contact our concierge team via the Contact Us page or email.</li>
              <li>Provide your order number and reason for return.</li>
              <li>You will receive a complimentary return shipping label and instructions.</li>
              <li>Pack the item securely in its original packaging.</li>
              <li>Drop off the package at the designated courier location.</li>
            </ol>
            <p className="mt-4">
              Refunds will be credited to the original form of payment within 5-7 business days of receiving the returned item.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
