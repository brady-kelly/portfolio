import { interests, languages } from "@/data/personal"
import { InterestsSection } from "@/components/content/interestsSection"
import { LanguagesSection } from "@/components/content/languagesSection"

export default async function LanguagesInterestsPage() {
    const languageList = languages;
    const interestList = interests;
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <main className="max-w-6xl mx-auto px-6 py-12">
                <LanguagesSection languages={languageList} />
                <InterestsSection interests={interestList} />
            </main>
        </div>
    )
}
