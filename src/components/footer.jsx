const Footer = () => {
  return (
    <main>
      <div className="footerStyle ">
        <div className="footerDiv1">
          <h5 className="ms-4">Need Some help?</h5>
          <ul class="list-group list1 ms-2 ">
            <li class="list-group-item list1">
              <i class="bi bi-house-door-fill me-2"></i> New York, NY,
              10012,USA.
            </li>
            <li class="list-group-item list1">
              <i class="bi bi-envelope-at-fill me-2"></i> info@toluene.com
            </li>
            <li class="list-group-item list1">
              <i class="bi bi-telephone-fill me-2"></i> +1 393 456 7890
            </li>
            <li class="list-group-item list1">
              <i class="bi bi-telephone-fill me-2 list1"></i> +1 949 247 5055
            </li>
            <li class="list-group-item list1">
              <i class="bi bi-facebook me-4"></i>
              <i class="bi bi-twitter me-4"></i>
              <i class="bi bi-instagram me-4"></i>
              <i class="bi bi-linkedin me-4"></i>
              <i class="bi bi-google me-4"></i>
            </li>
          </ul>
        </div>
        <div className="footerDivs list1">
          <h5 className="ms-2 ">Products</h5>
          <ul class="list-group">
            <li class="list-group-item list1">Bookings</li>
            <li class="list-group-item list1">Hospitality</li>
            <li class="list-group-item list1">Holidays</li>
            <li class="list-group-item list1">Shopping</li>
            <li class="list-group-item list1">Security</li>
          </ul>
        </div>
        <div className="footerDivs list1">
          <h5 className="ms-3 ">Links</h5>
          <ul class="list-group">
            <li class="list-group-item list1">Bookings</li>
            <li class="list-group-item list1">Pricing</li>
            <li class="list-group-item list1">Orders</li>
            <li class="list-group-item list1">Settings</li>
            <li class="list-group-item list1">Help</li>
          </ul>
        </div>
        <div className="footerDivs list1">
          <h5 className="ms-2 ">Partners</h5>
          <ul class="list-group">
            <li class="list-group-item list1">Rakuten</li>
            <li class="list-group-item list1">Ecowas</li>
            <li class="list-group-item list1">Qatar</li>
            <li class="list-group-item list1">Versace</li>
            <li class="list-group-item list1">Emirates</li>
          </ul>
        </div>
        <div className="footerDivs list1">
          <h5 className="ms-2 ">Locations</h5>
          <ul class="list-group">
            <li class="list-group-item list1">Asia</li>
            <li class="list-group-item list1">Europe</li>
            <li class="list-group-item list1">America</li>
            <li class="list-group-item list1">Afica</li>
            <li class="list-group-item list1">Australia</li>
          </ul>
        </div>
        <div className="footerEnd text-center">
          <span className="mx-3">Accessibility Statement</span>{" "}
          <span className="mx-3">Privacy Policy</span>{" "}
          <span className="mx-3">Cookie Policy</span>{" "}
          <span className="mx-3">Cybersecurity</span>
          <br />
          <span>
            {" "}
            Copyright © 2021 - 2070. All rights <br /> reserved
          </span>
        </div>
      </div>
    </main>
  );
};

export default Footer;
