import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={1}
            title="DELL 21.5 inch SE2219HX Ultra Thin Bezel LED Backlit Computer Monitor
          (Black)"
            price={9590.0}
            image="https://m.media-amazon.com/images/I/516uAGJoQpL._AC_SS130_.jpg"
            alt="DELL 21.5 inch SE2219HX Ultra Thin Bezel LED Backlit Computer Monitor
          (Black)"
            rating={5}
          />
          <Product
            id={2}
            title="Logitech MK215 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Design, 2-Year Battery Life(Keyboard)"
            price={1295.0}
            image="https://images-eu.ssl-images-amazon.com/images/I/71YHTqeOeZL._AC_UL160_SR160,160_.jpg"
            alt="Logitech MK215 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Design, 2-Year Battery Life(Keyboard)"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Seagate Backup Plus Hub 4 TB External HDD - USB 3.0 for Windows and Mac, 3 yr Data Recovery Services, Desktop Hard Drive with 2 USB Ports and 4 Month Adobe CC Photography (STEL4000300)"
            price={7599.0}
            image="https://m.media-amazon.com/images/I/51EJKp8POHL._AC._SR360,460.jpg"
            alt="Seagate Backup Plus Hub 4 TB External HDD - USB 3.0 for Windows and Mac, 3 yr Data Recovery Services, Desktop Hard Drive with 2 USB Ports and 4 Month Adobe CC Photography (STEL4000300)"
            rating={5}
          />
          <Product
            id={4}
            title="Strontium Nitro Plus 64GB Type-C USB 3.1 Flash Drive - OTG Mobile Pen Drive"
            price={1165.0}
            image="https://m.media-amazon.com/images/I/417wt9tmb4L._AC_UL320_.jpg"
            alt="Strontium Nitro Plus 64GB Type-C USB 3.1 Flash Drive - OTG Mobile Pen Drive"
            rating={4}
          />
          <Product
            id={5}
            title="Seagate Game Drive for Xbox 1TB SSD External Solid State Drive, Portable USB 3.0, Designed for Xbox One, with 2 Month Xbox..."
            price={11499.0}
            image="https://m.media-amazon.com/images/I/91mOlV4IxfL._AC_UL320_.jpg"
            alt="Seagate Game Drive for Xbox 1TB SSD External Solid State Drive, Portable USB 3.0, Designed for Xbox One, with 2 Month Xbox..."
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Netgear Nighthawk XR500 Pro, AC2600 Dual Band Gaming WiFi Router (Black)"
            price={22999.0}
            image="https://m.media-amazon.com/images/I/81K4IHoxEHL._AC_UL320_.jpg"
            alt="Netgear Nighthawk XR500 Pro, AC2600 Dual Band Gaming WiFi Router (Black)"
            rating={5}
          />
          <Product
            id={7}
            title="Samsung T5 500GB Up to 540MB/s USB 3.1 Gen 2 (10Gbps, Type-C) External Solid State Drive (Portable SSD) Alluring Blue (MU-PA500B)"
            price={6399.0}
            image="https://m.media-amazon.com/images/I/81oYFsPwVrL._AC_UL320_.jpg"
            alt="Samsung T5 500GB Up to 540MB/s USB 3.1 Gen 2 (10Gbps, Type-C) External Solid State Drive (Portable SSD) Alluring Blue (MU-PA500B)"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={8}
            title="Samsung 32-inch (80 cm) Curved Gaming Monitor- Full HD, AMD Free Sync - LC32G75TQSWXXL"
            price={55890.0}
            image="https://m.media-amazon.com/images/I/71LpkdG1xUL._AC_UY218_.jpg"
            alt="Samsung 32-inch (80 cm) Curved Gaming Monitor- Full HD, AMD Free Sync - LC32G75TQSWXXL"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
