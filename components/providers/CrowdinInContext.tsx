import { IS_DEV } from '@/utils/config';
import Script from 'next/script';
import React from 'react';

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
