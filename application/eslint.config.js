import sharedConfig from '@codewyre/wyrekit-development-compliance/eslint.config.js';

export default sharedConfig({
	tsconfigRootDir: import.meta.dirname,
	settings: {
		'import/ignore': ['\\?.*$']
	}
});
