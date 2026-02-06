export function generateSrcSet(
  src: string,
  width: number,
  format: string = 'webp'
): string {
  const sizes = [640, 750, 828, 1080, 1200, 1920];
  return sizes
    .filter(size => size <= width)
    .map(size => `${src}?w=${size}&f=${format} ${size}w`)
    .join(', ');
}

export function generateBlurPlaceholder(src: string): string {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#f0f0f0" />
    </svg>
  `)}`;
}

export function optimizeImage(options: {
  src: string;
  width: number;
  height: number;
  alt: string;
  quality?: number;
}) {
  return {
    ...options,
    srcSet: generateSrcSet(options.src, options.width),
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    blurDataUrl: generateBlurPlaceholder(options.src),
  };
}
