import { Checkbox, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)}>
        {task.title}
      </Checkbox>
      <Button icon={<MoreOutlined />} onClick={() => onDelete(task.id)} />
    </div>
  );
};

export default TaskItem;
