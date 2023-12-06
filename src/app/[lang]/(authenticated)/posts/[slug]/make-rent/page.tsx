import Title from "@/components/typography/Title"

import { Locale } from "@/i18n.config"
import FormRentCar from "./_page/form"
import { getDictionary } from "@/lib/dictionary"

export default async function Page({ params }: { params: { slug: string, lang: Locale } }) {
    const slug = params.slug
    const lang = params.lang

    const dictionary = await getDictionary(lang)

    return (
        <>
            <Title title={dictionary.make_rent.title} text={dictionary.make_rent.description} />
            <p>post id is {slug}</p>
            <div className="space-y-8 max-w-lg">
                <FormRentCar slug={slug} lang={lang} />
            </div>
        </>
    )
}
