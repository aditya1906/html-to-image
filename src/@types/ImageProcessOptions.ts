import ImageFormatConstant from "../config/ImageFormatConstant";

export interface ImageProcessOptions {
    imageFileName?: string,
    imageFormat?: ImageFormatConstant
    file?: boolean
}
