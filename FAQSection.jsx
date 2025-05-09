import React from "react";

const faqs = [
  {
    question: "What is Netflix ?",
    answer: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    ]
  },
  {
    question: "How much does Netflix cost ?",
    answer: [
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    ]
  },
  {
    question: "Where can I watch ?",
    answer: [
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    ]
  },
  {
    question: "How do I cancel ?",
    answer: [
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    ]
  },
  {
    question: "What can I watch from Netflix ?",
    answer: [
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    ]
  },
  {
    question: "Is Netflix good for kids ?",
    answer: [
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    ]
  }
];

const FAQSection = () => {
  return (
    <section className="FAQ__list__container">
      <h1 className="FAQ__heading">Frequently Asked Questions</h1>
      <div className="FAQ__list">
        {faqs.map((faq, index) => (
          <div className="FAQ__accordian" key={index}>
            <button className="FAQ__title">
              {faq.question}
              <i className="fal fa-plus">+</i>
            </button>
            <div className="FAQ__visible">
              {faq.answer.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hero-start">
        <form action="" method="post">
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className="hero-start-email-started">
            <div className="hero-start-email">
              <input type="email" placeholder="Email Address" />
            </div>
            <button>Get Started <i className="fal fa-chevron-right"></i></button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FAQSection;
