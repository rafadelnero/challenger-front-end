import React from 'react';
import { Layout, Form, Input, Button, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

function SimpsonCharacterForm() {
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />

      <Content style={{ margin: '0 16px' }}>
        <Row>
          <Col span={12} offset={6}>
            <div className="site-layout-background" style={{ padding: 100 }}>
              <h1>Simpson Character</h1>
              <Form name="basic">
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input the Name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Surname"
                  name="surname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input the Surname!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Birth Date"
                  name="birthdate"
                  rules={[
                    {
                      required: true,
                      message: 'Please input the Birth Date!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Country"
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: 'Please input the Country!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="City"
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: 'Please input the City!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Javachallengers -{' '}
        <a href="https://github.com/rafadelnero/challenger-front-end">
          challenger front end
        </a>{' '}
        - 2020
      </Footer>
    </Layout>
  );
}

export default SimpsonCharacterForm;
