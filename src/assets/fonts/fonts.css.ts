import { fontFace } from "@vanilla-extract/css";

export const testFont = fontFace({
    src: `url(FONT_FILE_NAME.woff2) format('woff2');`
})

export const firaCode = fontFace({
    src: `url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap');`
})