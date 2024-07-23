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
        github: "https://github.com/srideep-banerjee/Notes-Synced",
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
    },
    {
        name: "Piccy",
        description: "A native android image sharing application with firebase backend and mvvm architecture",
        github: "https://github.com/srideep-banerjee/Piccy",
        skills: [
            "MVVM",
            "Jetpack Compose",
            "Kotlin",
            "Firebase Firestore",
            "Firebase Storage"
        ]
    },
    {
        name: "Time Table Creator ReactJS",
        description: "It's a web application UI created using ReactJS through which a Time Table can be created manually and also automatically using AI. It's the react version of old Time Table Creator UI.",
        skills: [
            "React",
            "JavaScript",
            "HTML",
            "CSS"
        ]
    },
    {
        name: "Time Table Scheduler Backend",
        description: `A Java + HTML, CSS and Javascript application to find optimal time schedule of lectures, maintaining the constraints of professor's availability. The application consists of three codebases:- 
1. A java based web server(backend) that contains the genetic time scheduling algorithm,
2. UI(frontend) written in HTML, CSS and Javascript. Both communicating using REST API endpoints,
3. A CEF based custom browser written in java to display the UI without browser restrictions.`,
        skills: [
            "Java",
            "REST API",
            "Genetic Algorithms"
        ]
    },
    {
        name: "Todo React Frontend",
        description: "A web app to create Todos built using typescript and react",
        github: "https://github.com/srideep-banerjee/Todo-React-Frontend",
        skills: [
            "TypeScript",
            "React"
        ]
    },
]