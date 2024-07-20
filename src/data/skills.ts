export const categoryData = [
    "All",
    "Languages",
    "Android",
    "Flutter",
    "React-Native",
    "Backend",
    "Frontend",
    "DBMS",
    "Tools"
]

const languages = [
    "Java",
    "Kotlin",
    "Dart",
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
    "Go",
    "HTML",
    "CSS",
    "XML"
]

const android = [
    "Java",
    "Kotlin",
    "Coroutines",
    "Android SDK",
    "ADB",
    "Jetpack Compose",
    "MVVM",
    "Room DB",
    "OkHTTP",
    "Retrofit",
    "SQLite",
    "XML"
]

const flutter = [
    "Dart",
    "Future",
    "Stream",
    "Flutter SDK",
    "provider",
    "sqflite",
    "shared_preferences"
]

const reactNative = [
    "JavaScript",
    "TypeScript",
    "CSS",
    "React-Native SDK",
    "React",
    "NodeJS"
]

const backend = [
    "Spring Framework",
    "REST API",
    "Firebase RTDB",
    "Firebase Firestore",
    "Firebase Storage",
    "Firebase Cloud Messaging",
    "NodeJS"
]

const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Indexed DB",
    "React",
    "NodeJS"
]

const dbms = [
    "MySQL",
    "Firebase Firestore",
    "Firebase RTDB",
    "SQLite"
]

const tools = [
    "Git",
    "GitHub",
    "ChatGPT",
    "Gemini",
    "Android Studio",
    "ADB",
    "Firebase Console"
]

let all = languages
    .concat(
        tools,
        android,
        flutter,
        reactNative,
        backend,
        frontend,
        dbms
    )
all = [...new Set(all)]

export function getDataByCategory(name: string) {
    if (name == "All") {
        return all
    }
    if (name == "Languages") {
        return languages
    }
    if (name == "Android") {
        return android
    }
    if (name == "Flutter") {
        return flutter
    }
    if (name == "React-Native") {
        return reactNative
    }
    if (name == "Backend") {
        return backend
    }
    if (name == "Frontend") {
        return frontend
    }
    if (name == "DBMS") {
        return dbms
    }
    if (name == "Tools") {
        return tools
    }
    return []
}