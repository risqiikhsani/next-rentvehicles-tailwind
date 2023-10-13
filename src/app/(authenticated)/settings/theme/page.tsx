import { Separator } from "@/components/ui/separator"
import AppearanceForm from "./_page/appearance-form"
import Title from "@/components/typography/Title"

export default function SettingsAppearancePage() {
  return (
    <>
      <Title title="Appearance" text="Customize the appearance of the app. Automatically switch between day
          and night themes."/>
      <AppearanceForm />
    </>

  )
}