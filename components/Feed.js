
import { Suspense } from "react";
import Stories from "./Stories";
import Posts from "./Posts";


export default function Feed() {
  return (
    <main>
        <section>
            <Suspense fallback={null}>
                <Stories />
            </Suspense>
            <Suspense fallback={null}>
                <Posts />
            </Suspense>
        </section>

        <section>
            {/* Mini Profile */}

            {/* Suggestions */}
        </section>
    </main>
  )
}