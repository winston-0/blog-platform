import { Button, Form, Input, Space } from "antd"
import { useCreateArticle } from "./useCreateArticle"

const ArticleForm = () => {
  const onFinish = useCreateArticle()
  const initialValues = {
    tagList: [
      {
        tag: null
      }
    ]
  }
    return (
        <Form initialValues={initialValues} onFinish={onFinish} name="newArticle" style={{width: 874}} layout='vertical' colon={false} requiredMark={false}>
            <Form.Item name='title' label='Title'>
                <Input placeholder="Title"></Input>
            </Form.Item>
            <Form.Item name='description' label='Short description'>
                <Input placeholder="Description"></Input>
            </Form.Item>
            <Form.Item name='body' label='Text'>
                <Input.TextArea autoSize={{minRows: 7, maxRows: 7}} placeholder="Text"></Input.TextArea>
            </Form.Item>
            <Form.List name='tagList'>
                {(fields, {add, remove}) => (
                            <>
                            {fields.map(({key, name }) => (
                                <Space align="baseline" style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                  }} key={key}>
                                <Form.Item
                                  name={[name, 'tag']}
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Missing Tag',
                                    },
                                  ]}
                                >
                                  <Input placeholder="Tag" />
                                </Form.Item>
                                {(key !== 0 || fields.length > 1) ?
                                  <Button onClick={() => remove(name)} danger>Delete</Button>
                                  : null
                                }  
                                {key === fields.length - 1 ?
                                  <Button style={{color: '#1890FF', borderColor: '#1890FF'}} onClick={() => add(name)}>Add tag</Button>
                                  : null
                                }
                                </Space>
                            ))}
                          </>
                )}
            </Form.List>
            <Form.Item>
              <Button style={{width: 185}} type="primary" htmlType="submit">Send</Button>
            </Form.Item>
        </Form>
    )
}

export default ArticleForm