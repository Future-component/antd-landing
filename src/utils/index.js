export const imageCroppingUrl = (imageUrl, croppingParams) => {
    if (!imageUrl) return ''
    let image = imageUrl.indexOf('?') > -1 ? imageUrl.split('?')[0] : imageUrl
    if ((image.indexOf('oss') > -1 || image.indexOf('static') > -1) || image.indexOf('http') > -1) {
      image = `${image}?x-oss-process=image/resize,${croppingParams}`
    }
  
    return image
  }