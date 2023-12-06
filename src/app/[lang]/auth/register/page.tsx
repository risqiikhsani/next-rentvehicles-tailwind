
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import RegisterForm from "./_page/form";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";



export default async function Page({params}:{params:{lang:Locale}}) {

    const dict = await getDictionary(params.lang)

    return (
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{dict.auth.register}</CardTitle>
                    <CardDescription>{dict.auth.register_description}</CardDescription>
                </CardHeader>
                <RegisterForm/>
            </Card>
    );
}
