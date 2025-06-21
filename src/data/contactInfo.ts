import { LucideIcon } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";

interface iSocialLink {
  Icon: LucideIcon;
  href: string;
  label: string;
}

interface iContactInfo {
  Icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export const contactInfo: iContactInfo[] = [
  {
    Icon: Mail,
    label: "Email",
    value: "rahul.chooudhary7813@gmail.com",
    href: "mailto:rahul.choudhary@example.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 7224077737",
    href: "tel:+919876543210",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "India (Remote Available)",
    href: "#",
  },
];

export const socialLinks: iSocialLink[] = [
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];
