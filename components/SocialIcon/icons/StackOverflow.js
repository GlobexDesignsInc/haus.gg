// @flow

import React, {type Element, memo} from 'react';

export const StackOverflow = (): Element<'svg'> => (
	<svg height='24' viewBox='0 0 120 120' width='24' xmlns='http://www.w3.org/2000/svg'>
		<path d='M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z' fill='currentColor' />
		<path d='M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z' fill='currentColor' />
	</svg>
);

StackOverflow.displayName = 'StackOverflow';

export default memo<{||}>(StackOverflow);