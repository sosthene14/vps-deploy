type AvatarProps = { src: string; name: string }

export function Avatar({ src, name }: AvatarProps) {
  return (
    <div className="avatar-wrap">
      <img className="avatar" src={src} alt={`Portrait de ${name}`} />
      <span className="status-dot" aria-label="En ligne" />
    </div>
  )
}
