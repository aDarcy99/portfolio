import React from 'react';
// Components
import Button from '../../../components/reusable/button/button';
// Styles
import classes from './editorPanel.module.scss';

type Props = {};

const EditorPanel = (props: Props) => {
  

  return (
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
  );
};

export default EditorPanel;
