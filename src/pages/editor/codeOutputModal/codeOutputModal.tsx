import React from 'react';
import { IPlane } from '../plane/plane';
// Components
import Modal from '../../../components/reusable/modal/modal';
import CodeSandbox from '../codeSandbox/codeSandbox';
// Styles
import classes from './codeOutputModal.module.scss';

interface ICodeOutputModalProps {
  isOpen: boolean;
  onClose: () => void;
  planes: IPlane[];
}

const create3dObjectCode = (planes: IPlane[]) => {
  return `export default ${JSON.stringify(planes, null, 2)}
  `;
};

const appComponent = `import React from "react";
import 3dObject from "./3dObject.json";
import plane from "./plane.js";

const Object = () => {
  return 3dObject.map((plane) => {
    <Plane id={plane.id} properties={plane.properties} />;
  });
};`;

const planeComponent = `import React from "react";

const Plane = ({ properties }: IPlaneProps) => {
  const { dimensions, position, rotation, color } = properties;
    
  return (
    <div
      className='plane'
      style={{
        dimensions.width,
        dimensions.height,
        backgroundColor: color,
        transform: \`translate3d(\${position.x}px, \${position.y}px, \${position.z}px) rotateX(\${rotation.x}deg) rotateY(\${rotation.y}deg) rotateZ(\${rotation.z}deg)\`,
      }}
    />
  );
};`;

const planeStyling = `.plane {
  box-sizing: border-box;
  position: absolute;
  transform-style: preserve-3d;
  transform-origin: top left;
}`;

const CodeOutputModal = ({ isOpen, onClose, planes }: ICodeOutputModalProps) => {
  return (
    <Modal panelProps={{ className: classes['root'] }} isOpen={isOpen} onClose={onClose}>
      <h2>Copy this</h2>
      <CodeSandbox
        files={{
          '/app.js': {
            code: appComponent,
          },
          '/3dObject.js': {
            active: true,
            code: create3dObjectCode(planes),
          },
          '/plane.js': {
            code: planeComponent,
          },
          '/plane.css': {
            code: planeStyling,
          },
        }}
        editorProps={{ style: { height: '300px'} }}
      />
    </Modal>
);
};

export default CodeOutputModal;
