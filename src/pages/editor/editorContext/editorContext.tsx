import React, { createContext, useContext, useEffect, useState } from 'react';
import { TPlane, TPlaneColorProperty, TPlaneDimensionsProperty, TPlanePositionProperty, TPlaneRotationProperty } from '../plane/plane';
// Functions
import { v4 as uuid } from 'uuid';
import { debounce } from '../../../utils/general';
// Components

interface IEditorProviderProps {
  children: any;
}

const EditorContext = createContext<any>(null);

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

const EditorProvider = ({ children }: IEditorProviderProps) => {
  const [planes, setPlanes] = useState<TPlane[]>([createDefaultPlane()]);
  const [currentlyEditingPlaneId, setCurrentlyEditingPlaneId] = useState<string | undefined>(undefined);

  /* Currently editing plane derived from currentlyEditingPlaneId state */
  const currentlyEditingPlane: TPlane | undefined = planes.find((plane) => plane.id === currentlyEditingPlaneId);

  // General functions
  const updateCurrentlyEditingPlaneId = (value: string | undefined) => {
    setCurrentlyEditingPlaneId(value);
  };

  // Plane Functions
  const createPlane = () => {
    setPlanes([...planes, createDefaultPlane()]);
  };

  const readPlaneById = (id: string) => {
    return planes.find((plane) => plane.id === id);
  };

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

  const deletePlaneById = (id: string) => {
    // If deleting plane thats currently being deleted unset currently editing plane
    if (currentlyEditingPlaneId === id) {
      setCurrentlyEditingPlaneId(undefined);
    }

    setPlanes(planes.filter((plane) => plane.id !== id));
  };

  // Plane property functions
  const updateCurrentlyEditingPlaneProperties = (data: {
    color?: TPlaneColorProperty;
    dimensions?: TPlaneDimensionsProperty;
    position?: TPlanePositionProperty;
    rotation?: TPlaneRotationProperty;
  }) => {
    if (!currentlyEditingPlane || !currentlyEditingPlaneId) {
      return;
    }

    updatePlaneById(currentlyEditingPlaneId, {
      ...currentlyEditingPlane,
      properties: {
        ...currentlyEditingPlane.properties,
        ...data,
      },
    });
  };

  // Updating
  useEffect(() => {
    debounce(() => {
      console.log('saved');
    }, 5000);
  }, [planes]);

  // Context values
  const editorContextValues = {
    planes,
    currentlyEditingPlaneId,
    currentlyEditingPlane,
    createPlane,
    readPlaneById,
    updatePlaneById,
    deletePlaneById,
    updateCurrentlyEditingPlaneId,
    updateCurrentlyEditingPlaneProperties,
  };

  return <EditorContext.Provider value={editorContextValues}>{children}</EditorContext.Provider>;
};

export const useEditorContext = () => {
  return useContext(EditorContext);
};

export default EditorProvider;
