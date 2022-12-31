import ImageFormatConstant from "../config/ImageFormatConstant";

export interface HTMLToImageConfig {
    header?: HTMLElement
    main: HTMLElement
    footer?: HTMLElement
    imageFormat?: ImageFormatConstant
}
