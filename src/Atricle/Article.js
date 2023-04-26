import { Card, Avatar, Tag, Space, Button } from 'antd';
import Meta from 'antd/es/card/Meta';
import Markdown from 'markdown-to-jsx';
import {
  HeartOutlined
} from '@ant-design/icons';
import format from 'date-fns/format';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

const Article = ({data, type = 'inList'}) => {
  const location = useLocation();
  const history = useHistory()
  const loggedIn = useSelector(state => state.profileData.loggedIn)
  const username = useSelector(state => state.profileData.name)
  const showTags = (tagList) => {
    if(tagList === null) {
      return null
    }
     return tagList.map((item, index) => {
      return <div key={index} className='article__tag'>
        <span>{item}</span>
      </div>
     })
  }
  const cardClassName = type === 'singlePage' ? 'card card--singlePage' : 'card' 
  const bodyContent = type === 'singlePage' ?
  <Markdown className='article__body'>{data.body}</Markdown> : null
  const userButtons = () => {
    if(type === 'singlePage' && loggedIn && data.author.username === username) {
      return (
        <Space size={12}>
          <Button danger>Delete</Button>
          <Button onClick={() => {history.push(location.pathname + '/edit')}} style={{color: '#52C41A', borderColor: '#52C41A'}}>Edit</Button>
        </Space>
      )
    }
  }
    return (
        <Card className={cardClassName}>
        <div className='card__header'>
          <div className='card-header-left'>
            <Space align='baseline' direction='horizontal'>
            <span className='card-header-title'>{data.title}</span>
            <HeartOutlined style={{ fontSize: '18px', lineHeight: '8px' }}/>
            <span className='favourite-count'>{data.favoritesCount}</span>
            </Space> 
            <Space size={8}>
              {showTags(data.tagList)}
            </Space>
          </div>
          <Meta
          avatar={<Avatar className='card-avatar' src={data.author.image} />}
          title={data.author.username}
          description={format(new Date(data.createdAt), 'PP')}
          />
        </div>
        <Space align='center'  style={type === 'singlePage' ? {marginTop: 10, justifyContent: 'space-between'} : null}>
          <span className='article__description'>{data.description}</span>
          {userButtons()}
        </Space>
        {bodyContent}
      </Card>
    )
}
export default Article