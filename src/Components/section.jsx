import React, { useEffect } from 'react';
import "aos/dist/aos.css"; 
import AOS from 'aos';

const Section = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="bg-gray-900 text-white py-8">
        <div className="flex flex-col items-start md:flex-row my-12 md:my-24" data-aos="fade-up">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
            <p className="text-sm md:text-xs text-gray-50 mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the fest.
            </p>
            <a href="#"
               className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Explore Now
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-full border"
                     style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                <div className="border-2-2 border-yellow-555 absolute h-full border"
                     style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-xs text-yellow-300">1-6 May, 2021</p>
                    <h4 className="mb-3 font-bold text-md md:text-2xl">Registration</h4>
                    <p className="text-sm md:text-xs leading-snug text-gray-50 text-opacity-100">
                      Pick your favourite event(s) and register in that event by filling the form corresponding to that event. It's that easy.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-xs text-yellow-300">6-9 May, 2021</p>
                    <h4 className="mb-3 font-bold text-md md:text-2xl">Participation</h4>
                    <p className="text-sm md:text-xs leading-snug text-gray-50 text-opacity-100">
                      Participate online. The links for your registered events will be sent to you via email and WhatsApp groups. Use those links and show your talent.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-xs text-yellow-300">10 May, 2021</p>
                    <h4 className="mb-3 font-bold text-md md:text-2xl">Result Declaration</h4>
                    <p className="text-sm md:text-xs leading-snug text-gray-50 text-opacity-100">
                      The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be announced on the WhatsApp groups and will be mailed to you.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-xs text-yellow-300">12 May, 2021</p>
                    <h4 className="mb-3 font-bold text-md md:text-2xl text-left">Prize Distribution</h4>
                    <p className="text-sm md:text-xs leading-snug text-gray-50 text-opacity-100">
                      The winners will be contacted by our team for their addresses and the winning goodies will be sent to their addresses.
                    </p>
                  </div>
                </div>
              </div>
              <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" alt="Tech Fest Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
