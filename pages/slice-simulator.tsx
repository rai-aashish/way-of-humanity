import { SliceSimulator } from '@prismicio/slice-simulator-react';
import { SliceZone } from '@prismicio/react';

import { components } from '../slices/index';
import state from '../.slicemachine/libraries-state.json';

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={({ slices }) =>
        //@ts-ignore
        (<SliceZone slices={slices} components={components} />) as any
      }
      state={state as any}
    />
  );
};

export default SliceSimulatorPage;
