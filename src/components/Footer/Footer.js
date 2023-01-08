import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterStyles";
import { footerData } from "../../data/FooterData";
import { websiteName } from "../../data/GlobalData";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          {/* {footerData.map((footerItem, index) => (
            // <FooterLinkItems key={index}>
            //   <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
            //   {footerItem.links.map((link, linkIndex) => (
            //     // <FooterLink key={linkIndex} to="/">
            //     //   {link}
            //     // </FooterLink>
            //   ))}
            // </FooterLinkItems>
          ))} */}
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon src="./assets/final white.png" />
            {websiteName}
          </SocialLogo>
          <WebsiteRights>{websiteName} © 2023</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="https://www.facebook.com/lcnitdgp" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/https://www.instagram.com/lcnitd/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href={"https://www.youtube.com/@TheLiteraryCircle"} target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="http://lcnitd.co.in/" target="_blank" aria-label="Website">
              <FaGlobe />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
