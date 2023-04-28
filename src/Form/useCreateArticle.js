import { createArticle } from "../blogApi/blogApi"

export const useCreateArticle = (form) => {
    const onFinish = (value) => {
        const tagList = value.tagList.map(item => {
            return item.tag
          })
        const body = JSON.stringify({article: {...value, tagList}})
        createArticle(body);
    }
    const initialValues = {
        tagList: [
          {
            tag: null
          }
        ]
      }
    form.setFieldsValue(initialValues)
    return onFinish
}