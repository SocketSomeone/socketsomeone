const lintStagedConfig = {
	"*.(ts|tsx)": () => ["npm run lint:fix", "npm run build"],
	"*": "prettier --write",
};

export default lintStagedConfig;
