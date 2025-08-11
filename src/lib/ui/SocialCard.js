import React from "react";
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialCard = () => {
  return (
    <div className="social-box mt-8">
      <ul className="flex gap-3">
        <li className="text-2xl hover:text-pink-500">
          <Link href={"https://github.com/Aminul721"} alt="social link git">
            <FaGithub />
          </Link>
        </li>
        <li className="text-2xl hover:text-pink-500">
          <Link
            href={"https://www.linkedin.com/in/aminul-islam-sunbin/"}
            alt="social link linkedin"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className="text-2xl hover:text-pink-500">
          <Link
            href={"https://www.facebook.com/sanbin.islam.3/"}
            alt="social link facebook"
          >
            <FaFacebook />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialCard;
