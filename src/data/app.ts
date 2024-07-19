import * as React from 'react'
import Home from '../home/Home'
import Skills from '../skills/Skills'

export const appData: Map<string, React.FunctionComponent | null> = new Map([
    ["Profile", Home],
    ["Skills", Skills],
    ["Projects", null],
    ["Education", null]
])