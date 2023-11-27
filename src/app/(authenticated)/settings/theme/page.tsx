import { Separator } from "@/components/ui/separator"

import Title from "@/components/typography/Title"
import Appearance from "./_page/appearance"

export default function SettingsAppearancePage() {
  return (
    <>
      <Title title="Appearance" text="Customize the appearance of the app. Automatically switch between day
          and night themes."/>
      <Appearance/>
    </>

  )
}