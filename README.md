# html-to-image
- - -
Converts your HTMLElement to an image in Base64 Encoding Format.

## Getting Started
Install
```
npm i html-to-image
```
Import the package using
```typescript
import HtmlToImage from 'html-to-image'
```

## Usage

```typescript
import HtmlToImage from 'html-to-image'

const htmlImgGenerator = new HtmlImageProcessor({...})
const imageFile = htmlImgGenerator.process(domNode, {file: true})

const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org',
    files: [imageFile]
}
navigator.share(shareData)

```
## Options
Constructor args
```typescript
header?: HTMLElement
footer?: HTMLElement
```
Process Args
```typescript
imageFileName?: string,     // Image File Name to be set. Default set to 'new'
imageFormat?: ImageFormatConstant   // Format of the Image. Default set to 'JPEG'
file?: boolean  // If set to true, will return File object. Else will return the Image Blob Data.
```
