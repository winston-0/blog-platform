import { Space, Button, Popconfirm } from 'antd'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'

import { deleteArticle } from '../blogApi/blogApi'

const ArticleUserButtons = () => {
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()
  const onDelete = () => {
    deleteArticle(match.params.slug)
    history.push('/articles')
  }
  return (
    <Space size={12}>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        okText="Yes"
        cancelText="No"
        onConfirm={onDelete}
        placement="leftBottom"
      >
        <Button danger>Delete</Button>
      </Popconfirm>
      <Button
        onClick={() => {
          history.push(location.pathname + '/edit')
        }}
        style={{ color: '#52C41A', borderColor: '#52C41A' }}
      >
        Edit
      </Button>
    </Space>
  )
}

export default ArticleUserButtons
