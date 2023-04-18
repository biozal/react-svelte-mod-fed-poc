import fs from 'fs/promises';
import { join } from 'path';

(async () => {
	const REMOTE_URL = 'http://localhost:3000/';
	const REMOTE_TYPES_URL = `${REMOTE_URL}types/sharedComponents.d.ts`;
	const DESTINATION = join('./', 'types/react-app.d.ts');

	const response = await fetch(REMOTE_TYPES_URL);
	const types = await response.text();

	await fs.writeFile(DESTINATION, types);
})();
