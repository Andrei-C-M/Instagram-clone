
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
            <Posts />
        </section>

        <section>
            {/* Mini Profile */}

            {/* Suggestions */}
        </section>
    </main>
  )
}