import type { ReactNode } from 'react'
import Masonry from 'react-masonry-css'
import '../styles/masonry.css'

const breakpointColumnsObj = {
	default: 3,
	700: 2,
	500: 1
}

interface Props {
	children: ReactNode
	className?: string
	id?: string
}

export const MasonryWrapper: React.FC<Props> = ({ children, className, id }) => {
	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className={`my-masonry-grid ${className}`}
			columnClassName="my-masonry-grid_column"
			id={id}
		>
			{children}
		</Masonry>
	)
}
