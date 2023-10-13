'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from './ui/button'

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

const NextBreadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }: TBreadCrumbProps) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (

        <div className={containerClasses}>
            <div className={listClasses}>
                    <Link href={'/'}>{homeElement}</Link>
            </div>
            {pathNames.length > 0 && separator}
            {
                pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    return (
                        <>
                                <Link key={index} className={itemClasses} href={href}>{itemLink}</Link>
                            {pathNames.length !== index + 1 && separator}
                        </>
                    )
                })
            }
        </div>

    )
}

export default NextBreadcrumb