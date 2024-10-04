import React from 'react';
import { Table, Avatar } from 'antd';

const ChannelsData = [
  {
    key: '1',
    source: 'Google',
    visitors: '3.5K',
    revenues: '$5,768',
    sales: '590',
    conversion: '4.8%',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', // Google logo
  },
  {
    key: '2',
    source: 'Twitter',
    visitors: '2.2K',
    revenues: '$4,635',
    sales: '467',
    conversion: '4.3%',
    icon: 'https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg', // Twitter logo
  },
  {
    key: '3',
    source: 'Github',
    visitors: '2.1K',
    revenues: '$4,290',
    sales: '420',
    conversion: '3.7%',
    icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // GitHub logo
  },
];

const columns = [
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
    render: (text, record) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={record.icon} style={{ marginRight: 8 }} />
        {text}
      </div>
    ),
  },
  {
    title: 'Visitors',
    dataIndex: 'visitors',
    key: 'visitors',
  },
  {
    title: 'Revenues',
    dataIndex: 'revenues',
    key: 'revenues',
    render: (text) => <span style={{ color: 'green' }}>{text}</span>,
  },
  {
    title: 'Sales',
    dataIndex: 'sales',
    key: 'sales',
  },
  {
    title: 'Conversion',
    dataIndex: 'conversion',
    key: 'conversion',
    render: (text) => <span style={{ color: 'blue' }}>{text}</span>,
  },
];

const TopChannelsTable = () => {
  return <Table columns={columns} dataSource={ChannelsData} pagination={false} />;
};

export default TopChannelsTable;
