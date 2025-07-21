const lintStagedConfig = {
	"*.(ts|tsx)": () => ["npm run lint:fix", "npm run build"]
};

export default lintStagedConfig;
