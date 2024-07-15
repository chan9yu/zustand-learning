import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createSelectors } from './selectors';
import { BearSlice, createBearSlice } from './slices/bearSlice';
import { FishSlice, createFishSlice } from './slices/fishSlice';
import { SharedSlice, createSharedSlice } from './slices/sharedSlice';

type Slice = BearSlice & FishSlice & SharedSlice;

const createStore = () =>
	create<Slice>()(
		devtools(
			immer((...a) => ({
				...createBearSlice(...a),
				...createFishSlice(...a),
				...createSharedSlice(...a)
			})),
			{ name: 'store', enabled: !!import.meta.env.DEV }
		)
	);

export const useStore = createSelectors(createStore());
