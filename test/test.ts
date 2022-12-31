import HtmlImageProcessor from "../src";

const documentStr = `
    <style>
    .red {
        color: red;
    }
    </style>
    <p class="red">This is a random string</p>
`

const rootDocument = document.createElement('div')
rootDocument.innerHTML = documentStr
const base64 = await HtmlImageProcessor.process({ main: rootDocument })
console.log(base64)
