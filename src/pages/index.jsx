import Header from '../Component/Header'
import Hero from '../Component/Hero'
import FaithAction from '../Component/FaithAction'
import CommunitiesServed from '../Component/CommunitiesServed'
import ImpactStats from '../Component/ImpactStats'
import ProgramsSection from '../Component/ProgramsSection'
import TrustSection from '../Component/TrustSection'
import CTASection from '../Component/CTASection'
import FamilyStorySection from '../Component/FamilyStorySection'
import NewsSection from '../Component/NewsSection'
import ClosingCTASection from '../Component/ClosingCTASection'
import Footer from '../Component/Footer'


export default function IndexPage() {
    return (
        <>
            <Header />
            <Hero />
            <FaithAction />
            <CommunitiesServed />
            <ImpactStats />
            <ProgramsSection />
            <TrustSection />
            <CTASection />
            <FamilyStorySection />
            <NewsSection />
            <ClosingCTASection />
            <Footer />
        </>
    )
}