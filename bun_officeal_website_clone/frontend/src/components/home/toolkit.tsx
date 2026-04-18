
export default function Toolkit() {
    return (
        <div>
            <h2>Four tools, one toolkit</h2>
            <p>Use them together as an all-in-one toolkit, or adopt them incrementally. bun test works in Node.js projects. bun install can be used as the fastest npm client. Each tool stands on its own.</p>
            <div>
                {/* card 1 */}
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <b>JavaScript Runtime</b> <span>Starts 3x faster than Node.js</span>
                    </a>
                    <p>A fast JavaScript runtime designed as a drop-in replacement for Node.js</p>
                    <button>$ bun ./index.ts</button>
                    <div>
                        <p>✓
                            Node.js API compatibility</p>
                        <p>✓
                            TypeScript, JSX & React (zero config)</p>
                        <p>✓
                            Comprehensive builtin standard library</p>
                        <p>✓
                            PostgreSQL, Redis, MySQL, SQLite</p>
                        <p>✓
                            Hot & watch mode built-in</p>
                        <p> ✓
                            Environment variables with .env</p>
                    </div>

                </div>
                {/* card 2 */}
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <b>Package Manager</b> <span>30x faster</span>
                    </a>
                    <p>Install packages up to 30x faster than npm with a global cache and workspaces</p>
                    <button>$ bun install</button>
                    <div>
                        <p>✓
                            Simple migration from npm/pnpm/yarn</p>
                        <p>✓
                            Eliminate phantom dependencies</p>
                        <p>✓
                            Workspaces, monorepos</p>
                        <p>✓
                            Lifecycle scripts & postinstall handling</p>
                        <p>✓
                            Dependency auditing with bun audit</p>
                        <p>✓
                            Block malicious packages</p>
                    </div>
                </div>

                {/* card 3 */}
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <b>Test Runner</b> <span>Replaces Jest & Vitest</span>
                    </a>
                    <p>Jest-compatible test runner with built-in code coverage and watch mode</p>
                    <button>$ bun test</button>
                    <div>
                        <p>✓
                            Jest-compatible expect() API</p>
                        <p>✓
                            Snapshot testing</p>
                        <p>✓
                            Watch mode & lifecycle hooks</p>
                        <p>✓
                            DOM APIs via happy-dom</p>
                        <p>✓
                            Concurrent test execution</p>
                        <p>✓
                            Built-in code coverage</p>
                    </div>
                </div>
                {/* card 4 */}
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <b>Bundler</b> <span>Replaces Vite and esbuild</span>
                    </a>
                    <p>Bundle TypeScript, JSX, React & CSS for both browsers and servers</p>
                    <button>$ bun build ./app.tsx</button>
                    <div>
                        <p>✓
                            TypeScript & JSX built-in (no config)</p>
                        <p>✓
                            CSS imports & bundling</p>
                        <p>✓
                            React support out of the box</p>
                        <p>✓
                            Build for the browser, Bun, and Node.js</p>
                        <p>✓
                            Single-file executables</p>
                        <p>✓
                            .html, .css, .ts, .tsx, .jsx & more</p>
                    </div>
                </div>

            </div>
        </div>
    )
}