import { Card, Avatar, Tag, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import {
  HeartOutlined
} from '@ant-design/icons';

const Article = () => {
    return (
        <Card className='card'>
        <div className='card__header'>
          <div className='card-header-left'>
            <Space align='baseline' direction='horizontal'>
            <span className='card-header-title'>Hello world</span>
            <HeartOutlined style={{ fontSize: '18px' }}/>
            </Space> 
            <Space size={8}>
            <Tag style={{margin: 0, backgroundColor: 'white', border: '1px rgba(0, 0, 0, 0.5) solid'}} >hello</Tag>
            <Tag style={{margin: 0, backgroundColor: 'white', border: '1px rgba(0, 0, 0, 0.5) solid'}} >bye</Tag>
            </Space>
          </div>
          <Meta
          avatar={<Avatar className='card-avatar' src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title="Card title"
          description="This is the description"
          />
        </div>
        <span style={{fontSize: '12px', width: '670px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat.</span>
      </Card>
    )
}
export default Article