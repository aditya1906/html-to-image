import {ImageProcessOptions} from "./@types/ImageProcessOptions";
import html2canvas from "html2canvas";
import ImageFormatToBase64Type from "./config/ImageFormatTypeMapper";

export default class HtmlImageProcessor {

    private readonly header?: HTMLElement
    private readonly footer?: HTMLElement

    constructor({header, footer}) {
        this.header = header
        this.footer = footer
    }

    public async process(domElement: HTMLElement, options: ImageProcessOptions) {
        const {imageFormat = 'JPEG', imageFileName = "new", file = false} = options

        const documentToCapture = this.reconstruct(domElement);
        const renderedCanvas = await html2canvas(documentToCapture)
        const blobImage = await this.getBlobImage(renderedCanvas, imageFormat)

        if (!file) return blobImage

        return new File(
            [blobImage],
            `${imageFileName}.${imageFormat}`,
            {
                type: blobImage.type,
                lastModified: new Date().getTime()
            }
        )
    }

    private reconstruct(domElement: HTMLElement) {
        const reconstructedDiv = document.createElement('div');
        this.header && reconstructedDiv.appendChild(this.header)
        reconstructedDiv.appendChild(domElement)
        this.footer && reconstructedDiv.appendChild(this.footer)
        return reconstructedDiv;
    }

    private async getBlobImage(canvas: HTMLCanvasElement, imageFormat) {
        const imageBase64Str = canvas.toDataURL(ImageFormatToBase64Type[imageFormat.toUpperCase()])
        const imageResponse = await fetch(imageBase64Str);

        return await imageResponse.blob()
    }
}
