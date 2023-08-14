import React, { createContext, useContext, useEffect, useState } from 'react';
import { TPlane, TPlaneColorProperty, TPlaneDimensionsProperty, TPlanePositionProperty, TPlaneRotationProperty } from '../plane/plane';
// Functions
import { v4 as uuid } from 'uuid';
import { debounce } from '../../../utils/general';
import merge from 'lodash.merge';
// Components

type TEditorProviderProps = {
  children: any;
};

type TEditorContext = {
  planes: TPlane[];
  currentlyEditingPlaneId: string | undefined;
  currentlyEditingPlane: TPlane | undefined;
  createPlane: Function;
  readPlaneById: Function;
  updatePlaneById: Function;
  deletePlaneById: Function;
  updateCurrentlyEditingPlaneId: Function;
  updateCurrentlyEditingPlaneProperties: Function;
};

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

// NOTE: the use of undefined! is to allow us to use functions in the context without checking if they are undefined (https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/) 
export const EditorContext = createContext<TEditorContext>(undefined!);

const EditorProvider = ({ children }: TEditorProviderProps) => {
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
        ...merge(currentlyEditingPlane.properties, data),
      },
    });
  };

  // Updating
  useEffect(() => {
    // TODO: saving to url 
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
