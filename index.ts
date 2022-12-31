import html2canvas from 'html2canvas';
import {HTMLToImageConfig} from "./src/@types/HTMLToImageConfig";
import ImageFormatToBase64Type from "./src/config/ImageFormatTypeMapper";

export default class HtmlToImage {
    public static async convertNodeToBase64Str(screenshotConfig: HTMLToImageConfig) {
        const {header, main, footer, imageFormat='JPEG'} = screenshotConfig
        const documentToCapture = document.createElement('div');
        documentToCapture.appendChild(header)
        documentToCapture.appendChild(main)
        documentToCapture.appendChild(footer)
        const canvasGenerated = await html2canvas(documentToCapture)
        return canvasGenerated.toDataURL(ImageFormatToBase64Type[imageFormat.toUpperCase()])
    }
}
