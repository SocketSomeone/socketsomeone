import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';

const approvedUsers = ['SocketSomeone'];
const approvedOrgs = ['necordjs', 'miko-org', 'burger-club', 'Fotrum', 'VENOM-MULTICHEAT', 'noiro-org', 'External-Wallhack'];


const PROJECTS_FILE = path.join(process.cwd(), 'assets', 'projects.json');

async function downloadAllProjects() {
	const projects = await Promise.all([
		...approvedUsers.map(user => get(`/users/${user}/repos`)),
		...approvedOrgs.map(org => get(`/orgs/${org}/repos`))
	]);

	fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects.flat(), null, 2));
}

async function get(url: string) {
	const response = await fetch(`https://api.github.com${url}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
	}

	return response.json();
}


void downloadAllProjects();
