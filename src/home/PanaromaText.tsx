import { useEffect, useState } from "react"

export default function PanaromaText() {
    const textList = [
        "Android Developer",
        "Flutter Developer",
        "React-Native Developer",
        "Backend Engineer",
        "Frontend Developer"
    ]

    const [index, setIndex] = useState(0)
    const [obscurePoint, setObscurePoint] = useState<number | null>(null)
    const [obscureDirection, setObscureDirection] = useState<"before" | "after">("before")
    
    useEffect(()=>{
        update()
    })
    
    function update() {
        const nextIndex = (index + 1) % textList.length
        const greaterTextLength = Math.max(textList[nextIndex].length, textList[index].length)
        if (obscurePoint == null) {
            setTimeout(() => {
                setObscurePoint(0)
            }, 4000)
        } else if (obscurePoint < greaterTextLength - 1) {
            setTimeout(() => {
                setObscurePoint(obscurePoint + 1)
            }, 100)
        } else if (obscurePoint == greaterTextLength - 1 && obscureDirection == "before") {
            setTimeout(() => {
                setObscurePoint(0)
                setObscureDirection("after")
            }, 100);
        } else if (obscurePoint == greaterTextLength - 1 && obscureDirection == "after") {
            setTimeout(() => {
                setObscurePoint(null)
                setObscureDirection("before")
                setIndex(nextIndex)
            }, 100);
        }
    }

    function getStartingUnobscuredText(): string {
        const nextIndex = (index + 1) % textList.length
        
        if (obscurePoint == null || obscureDirection == "before") {
            return ""
        }
        return textList[nextIndex].substring(0, Math.min(obscurePoint, textList[nextIndex].length))
    }

    function getObscuredText(): string {
        const nextIndex = (index + 1) % textList.length
        const greaterTextLength = Math.max(textList[nextIndex].length, textList[index].length)
        if (obscurePoint == null) {
            return ""
        }
        if (obscureDirection == "before") {
            return "/".repeat(obscurePoint + 1)
        }
        return "/".repeat(greaterTextLength - obscurePoint)
    }

    function getEndingUnobscuredText(): string {
        if (obscurePoint == null) {
            return textList[index]
        }
        if (obscureDirection == "after" || obscurePoint >= textList[index].length) {
            return ""
        }
        return textList[index].substring(obscurePoint + 1)
    }
    return (
        <span>
            <span style={{color: "skyblue"}}>{getStartingUnobscuredText()}</span>
            <span style={{color: "dodgerblue"}}>{getObscuredText()}</span>
            <span style={{color: "skyblue"}}>{getEndingUnobscuredText()}</span>
            {/* <button onClick={update}>Click Me</button> */}
        </span>
    )
}