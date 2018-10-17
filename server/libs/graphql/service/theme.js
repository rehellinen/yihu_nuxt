import {ThemeModel} from "../../../model/ThemeModel"

/**
 *  theme.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:42
 */

export const getTheme = async () => {
  return await (new ThemeModel()).getTheme()
}
