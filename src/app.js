import semver from "semver"
import { engines } from "../package.json"

const currentVersion = semver.clean(process.version)

if (!semver.satisfies(currentVersion || "", engines.node)) {
    console.error(`Error: your current node version (${currentVersion}) does not satisfy ${engines.node}`)
    process.exit(1)
}