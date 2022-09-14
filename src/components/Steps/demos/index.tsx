import React from 'react';
import { Steps, Card } from '@anon/design-mobile';
import { CheckCircleFill, CloseCircleFill } from 'antd-mobile-icons';

const { Step } = Steps;

const App = () => {
  return (
    <>
      <Card title="横向步骤条">
        <Steps current={0}>
          <Step title="步骤一" icon={<CheckCircleFill />} />
          <Step title="步骤二" />
          <Step title="步骤三" />
        </Steps>
      </Card>

      <Card title="横向步骤条失败">
        <Steps current={2}>
          <Step title="第一步" />
          <Step title="第二步" />
          <Step title="第三步" icon={<CloseCircleFill />} />
          <Step title="第四步" />
        </Steps>
      </Card>

      <Card title="横向步骤条失败">
        <Steps current={3}>
          <Step title="第一步" description="测试测试测试测试" />
          <Step title="第二步" description="测试测试测试测试" />
          <Step title="第三步" description="测试测试测试测试" />
          <Step
            title="第四步"
            description="测试测试测试测试"
            status="error"
            icon={<CloseCircleFill />}
          />
        </Steps>
      </Card>

      <Card title="纵向步骤条">
        <Steps direction="vertical">
          <Step title="填写机构信息" status="process" icon={<CheckCircleFill />} />
          <Step title="签约机构" status="wait" />
          <Step title="关联服务区" status="wait" />
        </Steps>
      </Card>

      <Card title="纵向步骤条失败">
        <Steps direction="vertical">
          <Step title="填写机构信息" status="finish" description="完成时间：2020-12-01 12:30" />
          <Step title="签约机构" status="finish" description="完成时间：2020-12-01 12:30" />
          <Step title="关联服务区" status="finish" description="完成时间：2020-12-01 12:30" />
          <Step title="审批失败" status="error" icon={<CloseCircleFill />} />
        </Steps>
      </Card>
    </>
  );
};

export default App;
