import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import React from "react";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className="border border-t-2 border-purple-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold  dark:text-white"
            >
              <span className="px-2 py-1"> Cuity </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                    <Footer.Title title="About"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="https://www.google.com" target="_blank" rel='noopener noreferrer'>
                            About Cuity
                        </Footer.Link>
                        <Footer.Link href="/blogs" target="_blank" rel='noopener noreferrer'>
                            Cuity Bolgs
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title="Follow us"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="https://www.google.com" target="_blank" rel='noopener noreferrer'>
                            GitHub
                        </Footer.Link>
                        <Footer.Link href="https://www.youtube.com" target="_blank" rel='noopener noreferrer'>
                            Youtube
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title="Follow us"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="https://www.google.com" target="_blank" rel='noopener noreferrer'>
                            GitHub
                        </Footer.Link>
                        <Footer.Link href="https://www.youtube.com" target="_blank" rel='noopener noreferrer'>
                            Youtube
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="/" by="Cuity's Blogs" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsTwitter}/>
                <Footer.Icon href="#" icon={BsYoutube}/>
                <Footer.Icon href="#" icon={BsLinkedin}/>
            </div>
        </div>
      </div>
    </Footer>
  );
}
