import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import { useEffect } from 'react'
import { MasonryWrapper } from './MasonryWrapper'

export const GalleryResponsive = () => {
	useEffect(() => {
		let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			pswpModule: () => import('photoswipe')
		})
		lightbox.init()

		return () => {
			if (lightbox) {
				lightbox.destroy()
				lightbox = null
			}
		}
	}, [])

	return (
		<MasonryWrapper id="gallery">
			{Array.from({ length: 12 }).map((_, i) => (
				<a
					className="group relative rounded-xl transition-all hover:scale-105"
					data-cropped="true"
					href={`/archivo-page/img-${i + 1}.webp`}
					data-pswp-width="1152"
					data-pswp-height="767"
					target="_blank"
					key={i}
				>
					<img className="rounded-xl" src={`/archivo-page/thumbnails/img-${i + 1}.webp`} alt="" />
				</a>
			))}
		</MasonryWrapper>
	)
}
