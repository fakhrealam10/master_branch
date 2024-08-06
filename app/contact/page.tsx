"use client";
import React, { useState } from "react";
import Image from "next/image";

type StoreDetail = {
  name: string;
  details: React.ReactNode;
};

type ContactOfficeDetail = {
  name: string;
  details: React.ReactNode;
};

const Contact: React.FC = () => {
  const [display, setDisplay] = useState<number>(1);
  const [image, setImage] = useState<number>(1);
  const [store, setStore] = useState<number | null>(null);
  const [offices, setOffices] = useState<number | null>(null);

  const images = {
    HeadquartersImage: "/contact-images/head.jpg",
    factoryImage: "/contact-images/factory.jpg",
    ContactOfficeImage: "/contact-images/head.jpg",
    StoresImage: "/contact-images/store.jpg",
    TechnicalSupportImage: "/contact-images/technical.jpg",
    CustomerSupportImage: "/contact-images/customer.jpg",
    RepresentativeImage: "/contact-images/representative.jpg",
  };

  const HeadquartersDetails = (
    <div className="space-y-6">
      <div>
        <p>Fatih Sultan Mehmet Mah. Poligon Cad.</p>
        <p>
          Buyaka 2 sitesi No:8/B C Blok Kat:3 34771
          Tepeüstü-Ümraniye/İstanbul/Türkiye
        </p>
      </div>
      <div>Telephone: +90 (216) 484 42 70</div>
      <div>Fax: +90 (216) 484 42 76</div>
      <div>E-mail: info@canikarms.com</div>
      <div>Kep: samsunyurtsavunma@hs03.kep.tr</div>
    </div>
  );

  const factoryDetails = (
    <div className="space-y-6">
      <div>
        <p>
          Şabanoğlu OSB Mahallesi Ulubatlı Caddesi No:2B/B 55330 Tekkeköy -
          Samsun /Türkiye
        </p>
      </div>
      <div>Telephone : +90 (362) 266 66 71</div>
      <div>Fax : +90 (362) 266 66 72</div>
      <div>E-mail : info@canikarms.com</div>
    </div>
  );

  const storeDetails: StoreDetail[] = [
    {
      name: "Istanbul CANiK Store",
      details: (
        <>
          <div>Gümüşsuyu, İnönü Cd. No: 41 D, 34437 Beyoğlu/İstanbul</div>
          <div> Telefon : 0 (216) 484 42 70</div>
          <div> Faks : 0 (216) 484 42 76</div>
          <div> E-posta : info@canikarms.com</div>
        </>
      ),
    },
    {
      name: "Ankara CANiK Store",
      details: (
        <>
          <div>Mebusevleri Mah, Dögol Cd. No: 1/B, 06580 Çankaya/Ankara</div>
          <div> Telefon : 0 (312) 222 30 74</div>
          <div> Faks : 0 (312) 223 22 45</div>
          <div> Faks : 0 (312) 223 22 45</div>
          <div> E-posta : info@canikarms.com</div>
        </>
      ),
    },
    {
      name: "Samsun CANiK Store",
      details: (
        <>
          <div>
            Şabanoğlu OSB Mahallesi Ulubatlı Caddesi No:2B/B 55330 Tekkeköy -
            Samsun /Türkiye
          </div>
          <div>Telephone : +90 (362) 266 66 71</div>
          <div> Fax : +90 (362) 266 66 72</div>
          <div>E-mail : info@canikarms.com</div>
        </>
      ),
    },
  ];

  const contactOfficeDetails: ContactOfficeDetail[] = [
    {
      name: "Istanbul Office",
      details: (
        <div>
          <div>Fatih Sultan Mehmet Mah. Poligon Cad.</div>
          <div>
            Buyaka 2 sitesi No:8/B C Blok Kat:3 34771
            Tepeüstü-Ümraniye/İstanbul/Türkiye
          </div>
          <div>Telefon : +90 (216) 484 42 70</div>
          <div>Faks : +90 (216) 484 42 76</div>
        </div>
      ),
    },
    {
      name: "Ankara Office",
      details: (
        <div>
          <div>
            Mebusevleri, Tandoğan, Dögol Cd. 1/B, 06570 Anadolu
            Meydanı(Tandoğan) Çankaya / ANKARA
          </div>
          <div>Telefon : +90 (312) 222 30 74</div>
          <div> Faks : +90 (312) 223 22 45</div>
        </div>
      ),
    },
  ];

  const TechnicalSupportDetails = (
    <div className="space-y-6">
      <div>
        <p>AUTHORIZED SERVICE</p>
        <p>Technical Support Address Line 2</p>
      </div>
      <div>Barut Arms & Outdoor</div>
      <div>
        Rüzgarlıbahçe Mah. Cumhuriyet Caddesi No:99/B Kavacık/Beykoz/İstanbul
      </div>
      <div>info@barutarms.com</div>
    </div>
  );

  const CustomerSupportDetails = (
    <div className="space-y-6">
      <div>
        <h1>CUSTOMER SUPPORT</h1>
        <p>Arda Gedik</p>
      </div>
      <div>Email : arda.gedik@canik.com</div>
      <div>Telephone: +90 539 519 83 61</div>
      <div>Not: Week Days 08:30- 17:30</div>
      <div>
        Fatih Sultan Mehmet Mah. Poligon Cad. Buyaka 2 sitesi No:8/B C Blok
        Kat:3 34771 Tepeüstü-Ümraniye/İstanbul/Türkiye
      </div>
    </div>
  );

  const RepresentativeDetails = (
    <div className="space-y-6">
      <div>
        <h1>İSTANBUL</h1>
      </div>
      <div>
        Hikmet Dursunoğlu......... 0533 704 59 80 (İç Satış ve Pazarlama Müdürü)
      </div>
      <div>Özkan Büyükyıldırım...... 0533 704 59 90 - 0533 616 83 03</div>
      <div>
        Sait Ören........................ 0533 704 59 85 - 0533 462 64 04
      </div>
      <div className="space-y-6">
        <div>Tarkan Geleş.................. 0537 922 73 55</div>
        <div>
          <h1>ANKARA</h1>
        </div>
        <p>Fatih Çelen.....................0533 462 61 40</p>
      </div>
      <div>Mustafa Başar.................0533 462 64 01</div>
      <div>Serkan Erdem.................0533 583 05 46</div>
    </div>
  );

  return (
    <>
      <div className="relative bg-[url('/contact-images/contact1.jpg')] bg-cover h-[200px] md:h-[500px] md:w-full"></div>
      <div className="p-4 text-2xl md:text-3xl md:w-full h-16 bg-white text-black  md:text-start md:px-20">
        CONTACT
      </div>
      <div>
        <div className="flex flex-col md:flex-row p-4 md:space-x-4">
          <div className="flex flex-col  md:w-1/6 px-4 md:px-6 py-4 ">
            {[
              "Headquarters",
              "Factory",
              "Contact Offices",
              "Stores",
              "Technical Support",
              "Customer Support",
              "Representative",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: display === index + 1 ? "#1e293b" : "white",
                  color: display === index + 1 ? "white" : "black",
                }}
                className="p-2 border-b border-gray-300 cursor-pointer hover:bg-slate-100 hover:text-black"
                onClick={() => {
                  setDisplay(index + 1);
                  setImage(index + 1);
                  setStore(null);
                  setOffices(null);
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="md:py-20 py-5 px-10">
            {display === 3 &&
              contactOfficeDetails.map(
                (contactOfficeDetail: ContactOfficeDetail, index: number) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: offices === index ? "#1e293b" : "white",
                      color: offices === index ? "white" : "black",
                    }}
                    className="p-4 py-2 border-b border-gray-300 cursor-pointer hover:bg-slate-100 hover:text-black"
                    onClick={() => setOffices(index)}
                  >
                    {contactOfficeDetail.name}
                  </div>
                )
              )}
            {display === 4 &&
              storeDetails.map((storeDetail, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: store === index ? "#1e293b" : "white", // bg-slate-800 is #1e293b
                    color: store === index ? "white" : "black",
                  }}
                  className="p-4 py-2 border-b border-gray-300 cursor-pointer hover:bg-slate-100 hover:text-black"
                  onClick={() => setStore(index)}
                >
                  {storeDetail.name}
                </div>
              ))}
          </div>

          <div className=" md:py-20 md:w-[400px]">
            {image === 1 && (
              <Image
                src={images.HeadquartersImage}
                alt="Headquarters"
                width={500}
                height={500}
              />
            )}
            {image === 2 && (
              <Image
                src={images.factoryImage}
                alt="Factory"
                width={500}
                height={500}
              />
            )}
            {image === 3 && (
              <Image
                src={images.ContactOfficeImage}
                alt="Contact Office"
                width={500}
                height={500}
              />
            )}
            {image === 4 && (
              <Image
                src={images.StoresImage}
                alt="Stores"
                width={500}
                height={500}
              />
            )}
            {image === 5 && (
              <Image
                src={images.TechnicalSupportImage}
                alt="Technical Support"
                width={500}
                height={500}
              />
            )}
            {image === 6 && (
              <Image
                src={images.CustomerSupportImage}
                alt="Customer Support"
                width={500}
                height={500}
              />
            )}
            {image === 7 && (
              <Image
                src={images.RepresentativeImage}
                alt="Representative"
                width={500}
                height={500}
              />
            )}
          </div>
          <div className=" py-20 px-4 space-y-6 text-lg font-medium md:w-[800px]">
            {display === 1 && HeadquartersDetails}
            {display === 2 && factoryDetails}
            {display === 3 &&
              (offices !== null && contactOfficeDetails[offices]
                ? contactOfficeDetails[offices].details
                : null)}
            {display === 4 &&
              (store !== null && storeDetails[store]
                ? storeDetails[store].details
                : null)}
            {display === 5 && TechnicalSupportDetails}
            {display === 6 && CustomerSupportDetails}
            {display === 7 && RepresentativeDetails}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
