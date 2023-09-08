import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer container_w">
      <div className="footerMain">
        <div className="right">
          <span className="logo">MORENT</span>
          <span className="moto">
            Our vision is to provide convenience and help increase your sales
            business.
          </span>
        </div>
        <div className="left">
          <ul className="list">
            <span className="listTitle">About</span>
            <li className="listItem">How it works</li>
            <li className="listItem">Featured</li>
            <li className="listItem">Partnership</li>
            <li className="listItem">Bussiness Relation</li>
          </ul>
          <ul className="list">
            <span className="listTitle">Socials</span>
            <li className="listItem">Discord</li>
            <li className="listItem">Instagram</li>
            <li className="listItem">Twitter</li>
            <li className="listItem">Facebook</li>
          </ul>
          <ul className="list">
            <span className="listTitle">Community</span>
            <li className="listItem">Events</li>
            <li className="listItem">Blog</li>
            <li className="listItem">Podcast</li>
            <li className="listItem">Invite a friend</li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <span className="text rights">©2022 MORENT. All rights reserved</span>
        <div className="privacy">
          <span className="text">Privacy & Policy</span>
          <span className="text">Terms & Condition</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
