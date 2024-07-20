import '../styles/AppBar.css'

type AppBarProps = {
    items: string[]
    seletedIndex: number
    onSelectionChange: (selection: number) => void
}
export default function AppBar({ items, seletedIndex, onSelectionChange }: AppBarProps) {

    const elements: JSX.Element[] = []
    for (let index = 0; index < items.length; index++) {
        elements.push(
            <li
                key={index}
                onClick={()=>(index != seletedIndex ? onSelectionChange(index) : null)}
                className={"app-bar-item " + (index == seletedIndex ? "selected" : "")}
            >
                {items[index]}
            </li>
        )
    }

    return (
        <nav className='app-bar-container'>
            <ul className='app-bar-list'>
                {elements}
            </ul>
        </nav>
    )
}