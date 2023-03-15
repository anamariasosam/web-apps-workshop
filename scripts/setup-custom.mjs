import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'
import fsExtra from 'fs-extra'
import {
	getApps,
	getProblemApps,
	getSolutionApps,
	getExampleApps,
} from '@kentcdodds/workshop-app/build/utils/apps.server.js'

const appPaths = new Set((await getApps()).map(a => a.fullPath))

for (const appPath of appPaths) {
	await fs.promises.copyFile(
		path.join(appPath, '.env.example'),
		path.join(appPath, '.env'),
	)
}

const problemApps = await getProblemApps()

// we just grab the last problem app and set that one up because we're setup to
// have all the exercise apps share a single database and prisma has a
// postinstall that sets up the client in each individual app anyway.
const lastProblemApp = problemApps[problemApps.length - 1]
const cp = spawn('npm', ['run', 'setup', '--silent'], {
	cwd: lastProblemApp.fullPath,
	stdio: 'inherit',
})

await new Promise(res => {
	cp.on('exit', code => {
		if (code === 0) {
		} else {
			console.error(`❌  Seeding failed`)
			process.exit(1)
		}
		res()
	})
})

// setup the example apps
const exampleApps = await getExampleApps()
for (const exampleApp of exampleApps) {
	const cp = spawn('npm', ['run', 'setup', '--if-present', '--silent'], {
		cwd: exampleApp.fullPath,
		stdio: 'inherit',
	})

	await new Promise(res => {
		cp.on('exit', code => {
			if (code === 0) {
			} else {
				console.error(`❌  setup script failed for ${exampleApp.dirName}`)
				process.exit(1)
			}
			res()
		})
	})
}