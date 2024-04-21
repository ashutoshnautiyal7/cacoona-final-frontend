import React from "react";

const Description = () => {
  return (
    <section className="bg-[#30304C] py-11 px-[1.2rem] md:px-[2.5rem] text-white">
      <h2 className="text-[39px] font-bold">Description</h2>
      <div className="leading-[120%] mt-11">
        <p>
          Unveil the transformative power of journaling with Chesper, your
          trusted companion on the journey of self-discovery. Crafted with care
          and designed with intention, Chesper is more than just a journal –
          it's your personal sanctuary for reflection, growth, and empowerment.
        </p>
        <h3 className="my-5 font-bold">Features:</h3>
        <ol start={1} className="list-decimal ml-6 space-y-2">
          <li>
            <b className="font-semibold">Safe Space for Self-Expression: </b>
            Dive into the depths of your inner world and express your thoughts,
            emotions, and dreams without inhibition. Chesper provides a secure
            haven where your words flow freely, fostering a sense of
            authenticity and self-awareness.
          </li>
          <li>
            <b className="font-semibold">Cacoona Clipcuts: </b>
            Embark on a journey of exploration with Cacoona Clipcuts, specially
            crafted pages that reveal hidden gems of wisdom and inspiration. Let
            these thoughtful prompts guide you as you navigate the realms of
            your imagination and intuition.
          </li>
          <li>
            <b className="font-semibold">Prompts for Self-Reflection: </b>
            Navigate your inner landscape with ease using Chesper's
            thought-provoking prompts and exercises. From gratitude practices to
            goal-setting activities, each page invites you to delve deeper into
            your psyche and uncover profound insights.
          </li>
          <li>
            <b className="font-semibold">Self-Discovery: </b>
            Unlock the door to self-discovery and unleash your limitless
            potential with Chesper. Explore your passions, unearth hidden
            talents, and gain clarity on your aspirations as you embark on a
            journey of personal growth and fulfillment.
          </li>
          <li>
            <b className="font-semibold">Crafted with Care: Mindset: </b>
            Cultivate a mindset of positivity and resilience with Chesper's
            uplifting affirmations and motivational prompts. Let your journal
            serve as a beacon of hope and inspiration, guiding you towards a
            brighter, more empowered future.
          </li>
        </ol>
      </div>
      <div className="">
        <h3 className="font-bold my-5">Crafted with Care:</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Each Chesper journal is meticulously crafted using high-quality
            materials to ensure durability and longevity.
          </li>
          <li>
            With its elegant design and intuitive layout, Chesper is a joy to
            use, inspiring creativity and self-expression with every page turn.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Description;
