import ImageFormatConstant from "./ImageFormatConstant";

type ImageFormatTypeMapper = {
    [imageFormat in ImageFormatConstant]: string
}

const ImageFormatToBase64Mapper: ImageFormatTypeMapper = {
    JPG: 'image/jpeg',
    JPEG: 'image/jpeg',
    PNG: 'image/png'
}
export default ImageFormatToBase64Mapper
