import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section>
    <div className="p-4 md:p-8 text-3xl md:text-5xl w-full h-20 bg-black text-white ">
      <h3>{title}</h3>
    </div>
    <div className="p-4 md:p-8 text-base md:text-2xl bg-black text-white">
      {children}
    </div>
  </section>
);

const About: React.FC = () => {
  return (
    <>
      <div className="relative bg-[url('/about-images/Guns.jpeg')] bg-cover md:bg-inherit h-[200px] md:h-[600px] md:w-full"></div>
      <div className="p-4 text-2xl md:text-3xl md:w-full h-16 bg-white text-black md:text-start md:px-20">
        ABOUT
      </div>
      <Section title="OUR VISION">
        <p>
          Becoming the best brand that produces innovative products, quality
          service, and smart solutions in firearms and defense industries.
        </p>
        <div className="relative bg-[url('/about-images/gun3.jpg')] bg-fixed bg-cover h-[200px] md:h-[500px] "></div>
      </Section>
      <Section title="OUR MISSION">
        <p>
          Investing in trained human sources that design, develop, and produce
          the products, services, and solutions of the future with highly
          efficient smart processes in firearms and defense industries.
        </p>
        <div className="relative bg-[url('/about-images/gun2.jpg')] bg-fixed bg-cover h-[200px] md:h-[500px] "></div>
      </Section>
      <Section title="COMPANY'S VALUES & PRINCIPLES">
        <div className="space-y-4 md:space-y-6">
          <p>
            As CANiK, while conducting our business in line with our mission and
            vision, we are committed to acting in accordance with the following
            values and ethical principles:
          </p>
          <p>
            Trust: As a company that, first and foremost, designs and
            manufactures service pistols for law enforcement and the military,
            we are well aware that human lives and the successful execution of
            missions ensuring public order and national security, may rely on
            our handguns. Therefore, we manufacture our products to the highest
            standards so they can always be trusted to perform even in the most
            challenging circumstances.
          </p>
          <p>
            Integrity: Because the trust of our customers in our products is our
            utmost priority when we put our pistols, accessories, and other
            services on the market, we make sure that they will always perform
            as they have been advertised. In very exceptional cases where our
            products and services do not satisfy our customers expectations, we
            take all the necessary steps according to our responsibility to
            protect the trust placed in our company.
          </p>
          <p>
            Ease of use: Our product designs and manufacturing materials reflect
            our state-of-the-art techniques and technologies. Still, we would
            never allow these technological developments to make our products so
            complicated as to render them hard to use and maintain. We will
            always use state-of-the-art techniques and technologies to produce
            operator-friendly and efficient handguns.
          </p>
        </div>
        <div className="relative bg-[url('/about-images/gun1.jpg')] bg-fixed bg-cover h-[200px] md:h-[500px] "></div>
      </Section>
      <Section title="ETHICAL VALUES">
        <div className="space-y-4 md:space-y-6">
          <p>
            INTEGRITY, HONESTY, AND TRANSPARENCY: Our organization pursues the
            principles of honesty, integrity, and transparency in all its
            activities and behaviors in its influential areas.
          </p>
          <p>
            CUSTOMER ORIENTATION: Our organization aims to create a positive
            impact on our customers in its activities by anticipating the needs
            of our customers. It also aims to increase customer satisfaction by
            keeping our quality and delivery performances at the highest level.
          </p>
          <p>
            EXCELLENCE: Our organization aims to achieve perfection by working
            in accordance with ethical principles and laws and by working
            performance-oriented.
          </p>
          <p>
            RESPONSIBILITY: Our organization monitors the social, economic, and
            environmental impacts of all its products and services and is aware
            that it is responsible for all of its stakeholders within this
            frame.
          </p>
          <p>
            SUSTAINABILITY: Our organization is aware that the needs of
            today&apos;s generation must be met without sacrificing the needs of
            future generations.
          </p>
          <p>
            RESPECT: Our organization respects all the rights and reputation of
            its employees, stakeholders, and its competitors.
          </p>
          <p>
            JUSTICE: Our organization undertakes to treat its employees,
            stakeholders, and competitors fairly and to avoid any
            discrimination.
          </p>
        </div>
      </Section>
      <Section title="OUR INTEGRATED MANAGEMENT SYSTEM POLICY">
        <div className="space-y-4 md:space-y-6">
          <p>
            Our company aims to be the best brand that produces innovative
            products, quality service, and smart solutions in the field of
            firearms;
          </p>
          <ul className="list-disc ml-4 md:ml-8">
            <li>
              To increase internal and external stakeholder satisfaction by
              integrating sector-specific developing national and international
              quality standards into its existing system.
            </li>
            <li>
              To raise environmentally and socially conscious individuals who
              contribute to national development by taking into account the
              conditions of the country and region, in accordance with global
              competitive conditions.
            </li>
            <li>
              To continuously improve management systems activities by
              monitoring its processes with targets in order to achieve its
              vision.
            </li>
            <li>
              To increase occupational health and safety, prevent pollution,
              protect the environment, and ensure business sustainability by
              fulfilling compliance obligations and legal requirements.
            </li>
            <li>
              Conducting technological and scientific research and ensuring the
              effective use of necessary infrastructure and resources to
              increase talents.
            </li>
            <li>
              Continuously increasing individual competencies through in-house
              and external training programs.
            </li>
            <li>
              To reduce OHS risks by giving importance to the participation of
              employees and their opinions while carrying out its activities, to
              improve its processes to eliminate hazards, and to support its
              external stakeholders with encouraging activities in this regard.
            </li>
            <li>
              To transform safety and security into a culture adapting the
              people-first understanding through infrastructure.
            </li>
            <li>
              Preventing waste on site, using sustainable resources, carrying
              out its activities with the awareness of reducing the effects of
              climate change and protecting the ecosystem.
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default About;
