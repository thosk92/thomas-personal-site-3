export default function RevealText({ children }: { children: string }) {
  return <span data-reveal="words">{children.split(' ').map((word, index) => (
    <span key={`${index}-${word}`} className="reveal-mask"><span className="reveal-word">{word}</span>{' '}</span>
  ))}</span>
}
