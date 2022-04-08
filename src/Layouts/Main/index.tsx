import React, { Suspense } from "react"
import Section from "../../Components/Section"
import Loading from "../../Components/Loading"
let Intro = React.lazy(() => import("./Intro"));
let Stats = React.lazy(() => import("./Stats"));
let About = React.lazy(() => import("./About"));
export default function Main(){
  return (
  <main className="my-36">
    <Section>
      <Suspense fallback={<Loading p="p-10" />}>
        <Intro />
      </Suspense>
    </Section>

    <Section className="text-center">
      <Suspense fallback={<Loading p="p-10" />}>
        <Stats />
      </Suspense>
    </Section>

    <Section>
      <Suspense fallback={<Loading p="p-10" />}>
        <About />
      </Suspense>
    </Section>
  </main>
  );
}