import React from "react";
import Header from "../widgets/Header";
import Hero from "../widgets/Hero";
import Solutions from "../widgets/Solutions";
import HowItWorks from "../widgets/HowItWorks";

function Index() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="mt-20">
        <Hero />
      </main>
      <section className="md:p-20">
        <Solutions />
      </section>
      <section className="mt-20">
        <HowItWorks />
      </section>
    </div>
  );
}

export default Index;
