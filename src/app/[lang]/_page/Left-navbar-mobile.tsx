'use client'

import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

import { usePathname } from 'next/navigation'
import { useAuth } from "@/context/Auth";
import { admin_urls, basic_urls, setting_urls } from "@/constants/urls";
import { SheetClose } from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Locale } from "@/i18n.config";
import CustomLink from "@/components/CustomLink";




const LeftNavBarMobile = ({ lang }: { lang: Locale }) => {

    const pathname = usePathname()

    const { user } = useAuth();

    const renderUrls = (urls: any) => {
        return urls.map((a: any, index: number) => (
            <SheetClose asChild>
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
            </SheetClose>
        ));
    };

    return (
        <>
            {user.role === 'Admin' && renderUrls(admin_urls)}
            {user.role === 'Basic' && renderUrls(basic_urls)}

        </>
    );
};

export default LeftNavBarMobile;
