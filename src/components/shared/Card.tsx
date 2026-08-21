import type { HTMLAttributes, PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  className?: string;
}

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <article className={`card ${className ?? ''}`.trim()} {...rest}>
      {children}
    </article>
  );
}
