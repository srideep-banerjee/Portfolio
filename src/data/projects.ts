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
        apk: "https://drive.google.com/file/d/1-rgnU8AsQStIbGUlMhrlL5mod8tFF-ao/view?usp=sharing",
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
        name: "Todo Flutter",
        description: `A Todo application created in flutter`,
        github: "https://github.com/srideep-banerjee/Todo-Flutter",
        apk: "https://drive.google.com/file/d/1-y-veAhlbZEaA2n7WE4Jlnh8aIikPKLY/view?usp=drive_link",
        skills: [
            "Flutter",
            "Dart",
            "Future"
        ]
    },
    {
        name: "Door Alert",
        description: "An Android + IoT project to send push notification to android app whenever movement is detected at a door (Uses Firebase Cloud Messaging and Realtime Database)",
        link: "https://www.youtube.com/watch?v=jVoAJNi9HJ8",
        skills: [
            "Internet of Things(IoT)",
            "NodeMCU",
            "Firebase Cloud Messaging",
            "Firebase RTDB",
            "Android SDK",
            "XML",
            "Kotlin",
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
        name: "Canvas Card Editor",
        description: "A Jetpack Compose based Android application to create cards, by adding text to a canvas, changing text attributes like position, color, font family and font size.",
        github: "https://github.com/srideep-banerjee/Canvas-Card-Editor",
        apk: "https://drive.google.com/file/d/1-0AdnJGx32_9Y5zRyo4glwPy1rWQUNp5/view?usp=drive_link",
        skills: [
            "Jetpack Compose",
            "Kotlin",
            "MVVM",
            "Android SDK"
        ]
    },
    {
        name: "Contacts",
        description: "A native android contacts application that can view contacts, search contacts, add new contacts and make phone calls to a number",
        github: "https://github.com/srideep-banerjee/Contacts",
        apk: "https://drive.google.com/file/d/1IwXT8dtSzNk1Fy4gFOP0oRGUKnpA2XlV/view?usp=sharing",
        skills: [
            "Java",
            "Android SDK",
            "MVVM",
            "XML",
            "SQLite"
        ]
    },
    {
        name: "Room Compose App",
        description: "A demo android application built using Jetpack Compose and Room DB",
        github: "https://github.com/srideep-banerjee/Room-Compose-App",
        apk: "https://drive.google.com/file/d/11jeRf5Bdy2X5XQB8SpkLCRcy-kZJVIcV/view?usp=drive_link",
        skills: [
            "Kotlin",
            "Jetpack Compose",
            "MVVM",
            "Room DB",
            "SQLite"
        ]
    },
    {
        name: "Time Table Scheduler Backend",
        description: `A Java + HTML, CSS and Javascript application to find optimal time schedule of lectures, maintaining the constraints of professor's availability. The application consists of three codebases:- 
1. A java based web server(backend) that contains the genetic time scheduling algorithm,
2. UI(frontend) written in HTML, CSS and Javascript. Both communicating using REST API endpoints,
3. A CEF based custom browser written in java to display the UI without browser restrictions.`,
        github: "https://github.com/srideep-banerjee/TimeTableScheduler-Backend",
        skills: [
            "Java",
            "REST API",
            "Genetic Algorithms"
        ]
    },
    {
        name: "Time Table Creator ReactJS",
        description: "It's a web application UI created using ReactJS through which a Time Table can be created manually and also automatically using AI. It's the react version of old Time Table Creator UI.",
        github: "https://github.com/srideep-banerjee/Time-Table-Creator-ReactJS",
        skills: [
            "React",
            "JavaScript",
            "HTML",
            "CSS"
        ]
    },
    {
        name: "Todo Spring Backend",
        description: "A Spring application that serves a Todo web application along with necessary REST API endpoints, while storing data in MySQL database.",
        github: "https://github.com/srideep-banerjee/Todo-Spring-Backend",
        skills: [
            "Spring Framework",
            "REST API",
            "MySQL"
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