import React from 'react'
import type { GridProps } from '@/types/ui'
import './grid.css'

export default function Grid({
  tag: Tag = 'div',
  direction,
  align,
  justify,
  gap,
  break: breakProp,
  wrap,
  fullWidth,
  className,
  style,
  children,
  ...rest
}: GridProps) {
  const customStyle: Record<string, string | number | undefined> = {}

  if (gap) customStyle['--gap'] = `var(--wa-space-${gap})`
  if (align) customStyle['--align'] = align
  if (justify) customStyle['--justify'] = justify
  if (wrap !== undefined) customStyle['--wrap'] = wrap ? 'wrap' : 'nowrap'
  if (direction) customStyle['--direction'] = direction

  const gridClasses = [
    'l-grid',
    breakProp ? `break--${breakProp}` : null,
    fullWidth ? 'l-grid--full-width' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      className={gridClasses}
      style={{
        ...customStyle,
        ...style,
      } as React.CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  )
}

