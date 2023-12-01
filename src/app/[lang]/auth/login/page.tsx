


import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";


import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LoginForm from "./_page/form";



export default async function Page({params}:{params:{lang:Locale}}) {

  const dict = await getDictionary(params.lang)


  return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{dict['auth'].login_title}</CardTitle>
          <CardDescription>{dict['auth'].login_description}</CardDescription>
        </CardHeader>
        <LoginForm/>
      </Card>
  );
}
