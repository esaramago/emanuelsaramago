import type React from 'react'

export type Spacing =
  | '3xs'
  | '2xs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl'
  | '3xl'
  | (string & {})

export type Break = 'mobile' | 'small'

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType
  direction?: 'row' | 'column'
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  gap?: Spacing
  break?: Break
  wrap?: boolean
  fullWidth?: boolean
  children?: React.ReactNode
}
