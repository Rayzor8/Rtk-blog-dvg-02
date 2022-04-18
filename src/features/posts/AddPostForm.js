import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select, Button } from 'antd';
import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
   const dispatch = useDispatch();
   const { Option } = Select;


   const users = useSelector(selectAllUsers);


   const usersOptions = users.map((user) => (
      <Option key={user.id} value={user.id}>
         {user.name}
      </Option>
   ));

   const onFinish = (values) => {
      console.log(values)
      dispatch(postAdded(values.title, values.content, values.userId));
   };

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
   };

   return (
      <section>
         <h2>Add a New Post</h2>
         <Form
            {...layout}
            initialValues={{
               remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
         >
            <Form.Item
               label="Post Title:"
               name="title"
               rules={[
                  {
                     required: true,
                     message: 'Please input your Post Title!',
                  },
               ]}
            >
               <Input placeholder="Input Post Title" />
            </Form.Item>
            <Form.Item
               label="Author:"
               name="userId"
               rules={[
                  {
                     required: true,
                     message: 'Please input your Post Title!',
                  },
               ]}
            >
               <Select>{usersOptions}</Select>
            </Form.Item>

            <Form.Item
               label="Post Content:"
               name="content"
               rules={[
                  {
                     required: true,
                     message: 'Please input your Post Title!',
                  },
               ]}
            >
               <Input.TextArea placeholder="Input Post Content" />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
               <Button type="primary" htmlType="submit">
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </section>
   );
};
export default AddPostForm;
