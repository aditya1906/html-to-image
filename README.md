# html-to-image
- - -
Converts your HTMLElement to an image in Base64 Encoding Format.

## Getting Started

Import the package using
```typescript
import HtmlToImage from 'html-to-image'
```

To Convert your HTMLElement to Base 64 Image by

```typescript
import HtmlToImage from "./HtmlToImage";

const element = document.createElement('div')
const base64URL = HtmlToImage.convertNodeToBase64Str({
    main: element
})
```
## Options
```typescript
HtmlToImage.convertNodeToBase64Str({
    header?: HTMLElement, // Header Content
    main: HTMLElement, // Main Content
    footer: HTMLElement, // Footer Content
    imageFormat?: 'JPG' | 'JPEG' | 'PNG' // The imageFormat of the Base64 Encoding, Default is JPEG
})
```
