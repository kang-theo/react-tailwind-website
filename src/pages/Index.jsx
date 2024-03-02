import React from "react";
import Header from "../widgets/Header";
import Hero from "../widgets/Hero";
import Solutions from "../widgets/Solutions";

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
    </div>
  );
}

export default Index;
