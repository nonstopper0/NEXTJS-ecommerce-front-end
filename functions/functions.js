const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export function fromImgToUrl(image) {
    if (!image) {
        return "/vercel.svg"
    }

    if (image.url.indexOf("/") === 0) {
        console.log(API_URL, image)
        return `${API_URL}${image.url}`
    }

    return image.url
}

export function twoDecimals(num) { 
    return parseFloat(num).toFixed(2)
}