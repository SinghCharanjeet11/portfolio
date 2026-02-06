export default function JsonLd() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Charanjeet Singh",
        "jobTitle": "Full-Stack Developer",
        "description": "Full-stack developer specializing in React, Next.js, Node.js, and PostgreSQL",
        "url": "https://charanjeetsingh.dev",
        "sameAs": [
            "https://github.com/SinghCharanjeet11",
            "https://www.linkedin.com/in/charanjeet-singh-12ba2732a"
        ],
        "knowsAbout": [
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "MongoDB",
            "Full-Stack Development",
            "Frontend Development",
            "Backend Development"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "B.Tech in Computer Science"
        },
        "email": "charansingh9450v@gmail.com",
        "knowsLanguage": ["English", "Hindi"]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
