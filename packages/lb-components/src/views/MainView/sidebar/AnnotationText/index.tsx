import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import TextAreaFormat from '@/views/MainView/sidebar/TextAreaFormat';
import { TextUtils } from '@/utils/TextUtils';
import { AppState } from '@/store';
import { ToolInstance } from '@/store/annotation/types';
import { connect } from 'react-redux';

interface IProps {
  toolInstance: ToolInstance;
}

const AnnotationText: React.FC<IProps> = ({ toolInstance }) => {
  const [, forceRender] = useState<number>(0);
  useEffect(() => {
    if (toolInstance) {
      toolInstance.on('selectedChange', () => {
        forceRender((s) => s + 1);
      });
      toolInstance.on('updateTextAttribute', () => {
        // 文本属性的更新

        forceRender((s) => s + 1);
      });

      toolInstance.on('messageError', (error: string) => {
        message.error(error);
      });
    }
  }, [toolInstance]);

  if (!toolInstance) {
    return null;
  }

  const { config } = toolInstance;

  return (
    <div>
      {toolInstance?.config?.textConfigurable && toolInstance.selectedID && (
        <TextAreaFormat
          onChange={toolInstance.textChange}
          textValue={toolInstance.selectedText}
          checkString={TextUtils.checkString(config?.textCheckType, config?.customFormat)}
          textCheckType={config.textCheckType}
        />
      )}
    </div>
  );
};

function mapStateToProps(state: AppState) {
  return { toolInstance: state.annotation.toolInstance };
}

export default connect(mapStateToProps)(AnnotationText);
