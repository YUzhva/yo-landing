export function preloadImages(imageSrcs) {
  return imageSrcs.map((imageSrc) => {
    const preloadedImage = new Image();
    preloadedImage.src = imageSrc;
    return preloadedImage;
  });
}
