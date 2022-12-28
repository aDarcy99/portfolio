import clsx from 'clsx';
import React, { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from 'react';
// Components
import Plane, { TPlane } from './plane/plane';
import Button from '../../components/reusable/button/button';
import { v4 as uuid } from 'uuid';
// Styles
import classes from './index.module.scss';
import CodeOutputModal from './codeOutputModal/codeOutputModal';

interface IEditorPageProps {}

const createDefaultPlane = () => {
  return JSON.parse(
    JSON.stringify({
      id: uuid(),
      properties: {
        color: '#34eb64',
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        dimensions: {
          width: 100,
          height: 100,
        },
      },
    })
  );
};

const EditorPage = ({ ...props }: IEditorPageProps) => {
  const [planes, setPlanes] = useState<TPlane[]>([createDefaultPlane()]);
  const [currentlyEditingPlaneId, setCurrentlyEditingPlaneId] = useState<string | undefined>(undefined);
  const [isCodeOutputModalOpen, setIsCodeOutputModalOpen] = useState(false);

  const currentlyEditingPlane: TPlane | undefined = planes.find((plane) => plane.id === currentlyEditingPlaneId);

  const [dimensionInputs, setDimensionInputs] = useState({
    width: 0,
    height: 0,
  });
  const [positionInputs, setPositionInputs] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [rotationInputs, setRotationInputs] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [cameraRotation, setCameraRotation] = useState({
    x: 0,
    y: 0,
  });

  const [colorInput, setColorInput] = useState('');

  const updatePlaneById = (id: string, updatedPlane: any) => {
    setPlanes(
      planes.map((plane) => {
        if (plane.id !== id) {
          return plane;
        }

        return updatedPlane;
      })
    );
  };

  // Edit plane
  const onAddPlaneButtonClick = () => {
    setPlanes([...planes, createDefaultPlane()]);
  };

  const onDeletePlaneButtonClick = (id: string) => {
    if (currentlyEditingPlaneId === id) {
      setCurrentlyEditingPlaneId(undefined);
    }

    setPlanes(planes.filter((plane) => plane.id !== id));
  };

  const onSelectPlaneButtonClick = (id: string) => {
    if (currentlyEditingPlaneId === id) {
      setCurrentlyEditingPlaneId(undefined);
      return;
    }
    setCurrentlyEditingPlaneId(id);
  };

  // Edit plane properties
  // Plane color
  const onColorInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.currentTarget.value);
  };

  const onColorButtonClick = () => {
    if (!currentlyEditingPlane || !currentlyEditingPlaneId) {
      return;
    }

    updatePlaneById(currentlyEditingPlaneId, {
      ...currentlyEditingPlane,
      properties: {
        ...currentlyEditingPlane.properties,
        color: colorInput,
      },
    });
  };
  // Plane dimensions
  const onDimensionInputChange = (dimension: 'width' | 'height', value: number) => {
    setDimensionInputs({ ...dimensionInputs, [dimension]: value });
  };

  const onDimensionButtonClick = (dimension: 'width' | 'height') => {
    if (!currentlyEditingPlane || !currentlyEditingPlaneId) {
      return;
    }

    updatePlaneById(currentlyEditingPlaneId, {
      ...currentlyEditingPlane,
      properties: {
        ...currentlyEditingPlane.properties,
        dimensions: {
          ...currentlyEditingPlane.properties.dimensions,
          [dimension]: dimensionInputs[dimension],
        },
      },
    });
  };
  // Plane position
  const onPositionInputChange = (position: 'x' | 'y' | 'z', value: number) => {
    setPositionInputs({ ...positionInputs, [position]: value });
  };

  const onPositionButtonClick = (position: 'x' | 'y' | 'z') => {
    if (!currentlyEditingPlane || !currentlyEditingPlaneId) {
      return;
    }

    updatePlaneById(currentlyEditingPlaneId, {
      ...currentlyEditingPlane,
      properties: {
        ...currentlyEditingPlane.properties,
        position: {
          ...currentlyEditingPlane.properties.position,
          [position]: positionInputs[position],
        },
      },
    });
  };

  // Plane rotation
  const onRotationInputChange = (rotation: 'x' | 'y' | 'z', value: number) => {
    setRotationInputs({ ...rotationInputs, [rotation]: value });
  };

  const onRotationButtonClick = (rotation: 'x' | 'y' | 'z') => {
    if (!currentlyEditingPlane || !currentlyEditingPlaneId) {
      return;
    }

    updatePlaneById(currentlyEditingPlaneId, {
      ...currentlyEditingPlane,
      properties: {
        ...currentlyEditingPlane.properties,
        rotation: {
          ...currentlyEditingPlane.properties.rotation,
          [rotation]: rotationInputs[rotation],
        },
      },
    });
  };

  // Other
  const onShowCodeButtonClick = () => {
    setIsCodeOutputModalOpen(true);
  };

  const onShowCodeModalClose = () => {
    setIsCodeOutputModalOpen(false);
  };

  useEffect(() => {
    // Set inputs when selecting a plane to edit
    if (!currentlyEditingPlane) {
      return;
    }

    setColorInput(currentlyEditingPlane.properties.color);

    setPositionInputs({
      x: currentlyEditingPlane.properties.position.x,
      y: currentlyEditingPlane.properties.position.y,
      z: currentlyEditingPlane.properties.position.z,
    });

    setRotationInputs({
      x: currentlyEditingPlane.properties.rotation.x,
      y: currentlyEditingPlane.properties.rotation.y,
      z: currentlyEditingPlane.properties.rotation.z,
    });

    setDimensionInputs({
      width: currentlyEditingPlane.properties.dimensions.width,
      height: currentlyEditingPlane.properties.dimensions.height,
    });
  }, [currentlyEditingPlaneId]);

  return (
    <>
      <div className={classes['root']}>
        <div className={classes['panel']}>
          <Button size='sm' onClick={onAddPlaneButtonClick}>
            Add Plane
          </Button>
          <div>
            Planes:
            {planes.map((plane, idx) => (
              <div key={plane.id}>
                <span title={plane.id}>Plane</span>
                <Button size='sm' onClick={() => onSelectPlaneButtonClick(plane.id)}>
                  {currentlyEditingPlaneId !== plane.id ? 'Select' : 'Unselect'}
                </Button>
                <Button size='sm' onClick={() => onDeletePlaneButtonClick(plane.id)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
          {currentlyEditingPlane ? (
            <div className={classes['properties']}>
              <h2>Plane Properties</h2>
              <div className={classes['property']}>
                <h3>Dimensions</h3>
                width:
                <div className={classes['input-container']}>
                  <input
                    type='number'
                    step={5}
                    value={dimensionInputs.width}
                    onChange={(e) => {
                      onDimensionInputChange('width', parseInt(e.currentTarget.value));
                    }}
                  />
                  <Button size='sm' onClick={() => onDimensionButtonClick('width')}>
                    Set width
                  </Button>
                </div>
                height:
                <div className={classes['input-container']}>
                  <input
                    type='number'
                    step={5}
                    value={dimensionInputs.height}
                    onChange={(e) => {
                      onDimensionInputChange('height', parseInt(e.currentTarget.value));
                    }}
                  />
                  <Button size='sm' onClick={() => onDimensionButtonClick('height')}>
                    Set width
                  </Button>
                </div>
              </div>
              <div className={classes['property']}>
                <h3>Position</h3>
                <div>
                  x position
                  <div className={classes['input-container']}>
                    <input type='number' step={5} value={positionInputs.x} onChange={(e) => onPositionInputChange('x', parseInt(e.currentTarget.value))} />
                    <Button size='sm' onClick={() => onPositionButtonClick('x')}>
                      Set X
                    </Button>
                  </div>
                </div>
                <div>
                  y position
                  <div className={classes['input-container']}>
                    <input type='number' step={5} value={positionInputs.y} onChange={(e) => onPositionInputChange('y', parseInt(e.currentTarget.value))} />
                    <Button size='sm' onClick={() => onPositionButtonClick('y')}>
                      Set Y
                    </Button>
                  </div>
                </div>
                <div>
                  z position
                  <div className={classes['input-container']}>
                    <input type='number' step={5} value={positionInputs.z} onChange={(e) => onPositionInputChange('z', parseInt(e.currentTarget.value))} />
                    <Button size='sm' onClick={() => onPositionButtonClick('z')}>
                      Set Z
                    </Button>
                  </div>
                </div>
                <h4>Rotation</h4>
                <div>
                  x rotation
                  <div className={classes['input-container']}>
                    <input
                      type='number'
                      max={360}
                      min={-360}
                      step={5}
                      value={rotationInputs.x}
                      onChange={(e) => onRotationInputChange('x', parseInt(e.currentTarget.value))}
                    />
                    <Button size='sm' onClick={() => onRotationButtonClick('x')}>
                      Set X
                    </Button>
                  </div>
                </div>
                <div>
                  y rotation
                  <div className={classes['input-container']}>
                    <input
                      type='number'
                      max={360}
                      min={-360}
                      step={5}
                      value={rotationInputs.y}
                      onChange={(e) => onRotationInputChange('y', parseInt(e.currentTarget.value))}
                    />
                    <Button size='sm' onClick={() => onRotationButtonClick('y')}>
                      Set Y
                    </Button>
                  </div>
                </div>
                <div>
                  z rotation
                  <div className={classes['input-container']}>
                    <input
                      type='number'
                      max={360}
                      min={-360}
                      step={5}
                      value={rotationInputs.z}
                      onChange={(e) => onRotationInputChange('z', parseInt(e.currentTarget.value))}
                    />
                    <Button size='sm' onClick={() => onRotationButtonClick('z')}>
                      Set Z
                    </Button>
                  </div>
                </div>
              </div>
              <div className={clsx(classes['property'], classes['property-color'])}>
                <h3>color</h3>
                <div className={classes['input-container']}>
                  <input type='text' onChange={onColorInputChange} value={colorInput} />
                  <Button size='sm' onClick={onColorButtonClick}>
                    Set Color
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
          {planes.length !== 0 ? (
            <Button className={classes['show-code-button']} width='fit-container' onClick={onShowCodeButtonClick}>
              Show code
            </Button>
          ) : null}
        </div>
        <div className={classes['playground']}>
          <div className={classes['rotater']}>
            <Button className={clsx(classes['top-left'])}>+</Button>
            <Button className={clsx(classes['top-center'])}>+</Button>
            <Button className={clsx(classes['top-right'])}>+</Button>

            <Button className={clsx(classes['center-left'])}>+</Button>
            <Button className={clsx(classes['center-center'])}>+</Button>
            <Button className={clsx(classes['center-right'])}>+</Button>

            <Button className={clsx(classes['bottom-left'])}>+</Button>
            <Button className={clsx(classes['bottom-center'])}>+</Button>
            <Button className={clsx(classes['bottom-right'])}>+</Button>
          </div>
          {/* <div className={classes['helper']}>
            <div className={classes['x-plane']} />
            <div className={classes['y-plane']} />
            <div className={classes['z-plane']} />
          </div> */}
          <div>
            {planes.map((plane) => (
              <Plane isEditing={plane.id === currentlyEditingPlaneId} key={plane.id} id={plane.id} properties={plane.properties} />
            ))}
          </div>
        </div>
      </div>
      <CodeOutputModal isOpen={isCodeOutputModalOpen} onClose={onShowCodeModalClose} planes={planes} />
    </>
  );
};

export default EditorPage;
