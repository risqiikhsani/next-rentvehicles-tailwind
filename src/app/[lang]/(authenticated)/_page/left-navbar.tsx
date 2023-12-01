'use client'

import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

import { usePathname } from 'next/navigation'
import { useAuth } from "@/context/Auth";
import { admin_urls, basic_urls, setting_urls } from "@/constants/urls";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Locale } from "@/i18n.config";
import CustomLink from "@/components/CustomLink";



const LeftNavBar = ({ lang }: { lang: Locale }) => {

  const pathname = usePathname()

  const { user } = useAuth();

  const renderUrls = (urls: any) => {
    return urls.map((a: any, index: number) => (
      <CustomLink
        lang={lang}
        href={a.url}
        key={index}
        className={
          pathname === a.url
            ? 'px-4 py-2 hover:bg-secondary m-4 rounded-md hover:cursor-pointer flex items-center bg-green-300 text-base'
            : 'px-4 py-2 hover:bg-secondary m-4 rounded-md hover:cursor-pointer flex items-center text-base'
        }
      >
        {a.icon && <a.icon className="w-5 h-5 mr-2" />} {a.text}
      </CustomLink>
    ));
  };

  return (
    <nav className="top-20 left-0 w-64 sticky h-screen hidden md:block">
      <div className="overflow-y-auto h-screen py-4">
        {user.role === 'Admin' && renderUrls(admin_urls)}
        {user.role === 'Basic' && renderUrls(basic_urls)}
        <Separator />
        {user.ID != 0 && <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-normal gap-2 p-8 text-base">
              <Cog6ToothIcon className="w-5 h-5" />
              Settings
            </AccordionTrigger>
            <AccordionContent>
              {renderUrls(setting_urls)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>}

      </div>
    </nav>
  );
};

export default LeftNavBar;
