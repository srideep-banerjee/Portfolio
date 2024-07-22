export type Project = {
    name: string,
    description: string,
    github?: string
    apk?: string,
    link?: string,
    skills: Array<string>
}

export const projectsCategoryData = [
    "All",
    "Android",
    "Flutter",
    "React-Native",
    "Backend",
    "Frontend",
    "DBMS",
]

export const projectsData: Array<Project> = [
    {
        name: "Notes-Synced",
        description: `An Android / Web application built using flutter and firebase backend to perform CRUD operations on notes, synced across multiple devices`,
        link: "https://notes-102da.web.app/",
        skills: [
            "Flutter",
            "Firebase Firestore",
            "Dart",
            "Stream",
            "Future",
            "provider",
            "sqflite",
            "Indexed DB"
        ]
    }
]