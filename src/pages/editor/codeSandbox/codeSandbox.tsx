import React from 'react';
// Components
import { SandpackProvider, SandpackCodeEditor, SandpackFiles, SandpackProviderProps, CodeEditorProps } from '@codesandbox/sandpack-react';
import { cobalt2, aquaBlue } from '@codesandbox/sandpack-themes';

interface ICodeSandboxProps extends SandpackProviderProps {
  className?: string;
  editorProps?: CodeEditorProps;
}

const CodeSandbox = ({ className, files, editorProps, ...props }: ICodeSandboxProps) => {
  return (
    <SandpackProvider className={className} template='react' theme={aquaBlue} files={files} {...props} options={{}}>
      <SandpackCodeEditor readOnly showReadOnly={false} showTabs {...editorProps} />
    </SandpackProvider>
  );
};

export default CodeSandbox;
