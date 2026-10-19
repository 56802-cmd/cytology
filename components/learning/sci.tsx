import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'

const SUB: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
}
const SUP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '−',
}
const PATTERN = /([₀-₉]+)|([⁰¹²³⁴-⁹⁺⁻]+)/g

/**
 * Many Thai web fonts (and their Google Fonts subsets) omit Unicode sub/superscript
 * glyphs, so chemical notation like "CO₂" or "Na⁺" renders as missing boxes.
 * This converts those characters into real <sub>/<sup> elements in the main font.
 */
export function sci(text: string): ReactNode {
  if (!PATTERN.test(text)) return text
  PATTERN.lastIndex = 0
  const out: ReactNode[] = []
  let last = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = PATTERN.exec(text))) {
    if (match.index > last) out.push(text.slice(last, match.index))
    if (match[1]) {
      out.push(<sub key={key++}>{[...match[1]].map((c) => SUB[c]).join('')}</sub>)
    } else {
      out.push(<sup key={key++}>{[...match[2]].map((c) => SUP[c]).join('')}</sup>)
    }
    last = match.index + match[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export function sciNode(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    if (typeof child === 'string') return sci(child)
    if (isValidElement(child)) {
      const el = child as ReactElement<{ children?: ReactNode }>
      if (el.props.children === undefined) return el
      return cloneElement(el, undefined, sciNode(el.props.children))
    }
    return child
  })
}
