import Script from 'next/script';
import React from 'react';

import { IS_DEV } from '@/utils/config';

type Props = {
	enable?: boolean;
}

export default function CrowdinInContext({ enable }: Props) {
	if (!IS_DEV || !enable) {
		return null;
	}

	return (
		<>
			<Script
				id="crowdin"
				type="text/javascript"
				dangerouslySetInnerHTML={{
					__html: 'var _jipt = []; _jipt.push([\'project\', \'socketsomeone\']);',
				}}
			/>
			<Script src="https://cdn.crowdin.com/jipt/jipt.js" type="text/javascript"/>
		</>
	);

}
