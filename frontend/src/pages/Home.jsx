import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { ProblemPreview } from "../components/sections/ProblemPreview";
import { Community } from "../components/sections/Community";

export function Home() {
    return (
        <>
            <Hero />
            <Features />
            <ProblemPreview />
            <Community />
        </>
    );
}
