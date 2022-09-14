import React from 'react';
import { AutoCenter, Card } from '@anon/design-mobile';

const App = () => {
  return (
    <>
      <Card title="内容不够整行宽度时自动居中" style={{ marginBottom: 5 }}>
        <AutoCenter>色发售肯德基本菲卡建设的步伐快结束的话</AutoCenter>
      </Card>

      <Card title="内容达到满宽后保持正常的左对齐">
        <AutoCenter>
          Voluptate laborum cillum voluptate aliqua ullamco nostrud ipsum irure velit sint qui id.
          Sint qui minim ipsum nostrud nulla nulla nulla reprehenderit reprehenderit consequat
          reprehenderit. Exercitation labore enim dolor in ullamco et do sit mollit dolor elit duis
          nulla. Incididunt irure aliquip nostrud tempor. Dolor irure anim enim laboris. Veniam
          occaecat dolore anim ipsum eiusmod commodo aliqua voluptate do elit cupidatat. Veniam
          labore sit ullamco eu ipsum in minim. Exercitation nisi proident culpa. Id aliqua ad
          commodo exercitation do nulla magna incididunt ut cillum laboris officia ea commodo quis.
          Ipsum consectetur esse labore proident. Ea sit magna aute sint cillum ipsum ullamco amet
          nulla do proident. Eu eu elit non occaecat occaecat. Mollit aliqua eiusmod fugiat mollit
          aliqua nostrud occaecat. Non velit esse pariatur pariatur officia exercitation ipsum.
        </AutoCenter>
      </Card>
    </>
  );
};

export default App;
