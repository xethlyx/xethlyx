// Variable configuration

const time = new Date(Date.now()).toUTCString();

/// Generation

const output = `
### Hi there 👋
---
<sup>Automatically generated ${time}</sup>
`.trim();

await Deno.writeTextFile('README.md', output);