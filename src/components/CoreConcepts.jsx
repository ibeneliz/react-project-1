import { CORE_CONCEPTS } from '../data.jsx';
import CoreConcept from './CoreConcept.jsx'

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((item) => (<CoreConcept key={item.title} {...item} />))}
                {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </section>
    );
}