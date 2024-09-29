oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-cjs-1
$ cjs1 COMMAND
running command...
$ cjs1 (--version)
@oclif/plugin-test-cjs-1/0.7.29 linux-x64 node-v18.20.4
$ cjs1 --help [COMMAND]
USAGE
  $ cjs1 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cjs1 cjs1 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#cjs1-cjs1-optionalarg-defaultarg-defaultfnarg)
* [`cjs1 help [COMMAND]`](#cjs1-help-command)
* [`cjs1 plugins`](#cjs1-plugins)
* [`cjs1 plugins:inspect PLUGIN...`](#cjs1-pluginsinspect-plugin)
* [`cjs1 plugins install PLUGIN`](#cjs1-plugins-install-plugin)
* [`cjs1 plugins link PATH`](#cjs1-plugins-link-path)
* [`cjs1 plugins reset`](#cjs1-plugins-reset)
* [`cjs1 plugins uninstall [PLUGIN]`](#cjs1-plugins-uninstall-plugin)
* [`cjs1 plugins update`](#cjs1-plugins-update)

## `cjs1 cjs1 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`

```
USAGE
  $ cjs1 cjs1 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG] [--json] [--optionalString <value>]
    [--defaultString <value>] [--defaultFnString <value>]

FLAGS
  --defaultFnString=<value>  [default: async fn default]
  --defaultString=<value>    [default: simple string default]
  --optionalString=<value>

GLOBAL FLAGS
  --json  Format output as json.
```

_See code: [src/commands/cjs1.ts](https://github.com/oclif/plugin-test-cjs-1/blob/0.7.29/src/commands/cjs1.ts)_

## `cjs1 help [COMMAND]`

Display help for cjs1.

```
USAGE
  $ cjs1 help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cjs1.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.12/src/commands/help.ts)_

## `cjs1 plugins`

List installed plugins.

```
USAGE
  $ cjs1 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cjs1 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.10/src/commands/plugins/index.ts)_

## `cjs1 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cjs1 plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cjs1 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.10/src/commands/plugins/inspect.ts)_

## `cjs1 plugins install PLUGIN`

Installs a plugin into cjs1.

```
USAGE
  $ cjs1 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into cjs1.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CJS1_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CJS1_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ cjs1 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ cjs1 plugins install myplugin

  Install a plugin from a github url.

    $ cjs1 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ cjs1 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.10/src/commands/plugins/install.ts)_

## `cjs1 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ cjs1 plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cjs1 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.10/src/commands/plugins/link.ts)_

## `cjs1 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ cjs1 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.10/src/commands/plugins/reset.ts)_

## `cjs1 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cjs1 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cjs1 plugins unlink
  $ cjs1 plugins remove

EXAMPLES
  $ cjs1 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.10/src/commands/plugins/uninstall.ts)_

## `cjs1 plugins update`

Update installed plugins.

```
USAGE
  $ cjs1 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.10/src/commands/plugins/update.ts)_
<!-- commandsstop -->
