# Coaty JS - Hello World Example

[![Powered by Coaty 2](https://img.shields.io/badge/Powered%20by-Coaty%202-FF8C00.svg)](https://coaty.io)
[![TypeScript](https://img.shields.io/badge/Source%20code-TypeScript-007ACC.svg)](http://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Check this example to see a complete application scenario of the [Coaty
JavaScript](https://github.com/coatyio/coaty-js) framework in action.

## Table of Contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Start-up](#start-up)
* [Run with Docker](#run-with-docker)
* [Project Structure](#project-structure)
* [Communication Event Flow](#communication-event-flow)
  * [Task Flow between Service and Clients](#task-flow-between-service-and-clients)
  * [Agent Lifecycle Event Flow](#agent-lifecycle-event-flow)
  * [Logging Event Flow](#logging-event-flow)

## Introduction

Our Hello World example demonstrates the best practice use of Coaty
communication events to discover, distribute, share, and persist information in
a decentralized application. The example application realizes a simplified task
scheduling and assignment scenario based on three types of Coaty agents:

* a Hello World service,
* any number of Hello World clients, and
* a Hello World monitor.

For simplicity and to focus on the essentials, the Hello World example is
completely non-interactive and provides no graphical user interface. Both
service, monitor, and client agents are running autonomously without user input
and describe their behavior by textual output to a console window.

The application scenario looks like the following:

* The Hello World service periodically generates new task requests and
  advertises them to connected Hello World clients.
* Each client can decide to make an offer to carry out such a task (if not
  currently busy).
* The service assigns tasks to offering clients on a first-come
  first-serve basis.
* After completing a task a client can compete for further incoming task
  requests.
* Task assignments and status changes of a task (request -> pending -> in
  progress -> done) are advertised to other agents.
* The Hello World monitor presents informational log events that are advertised
  by agents on initialization and in case of errors.

In addition to the basic scenario described above, the historian functionality
is integrated:

* The service is generating a `Snapshot` object whenever a new task request is
  generated or a property of an existing task is changed. This is performed by
  calling the public method `generateSnapshot` of the generic
  `HistorianController` in the Coaty framework. Note that the
  `TaskSnapshotController` used in the service is just an extension to
  `HistorianController` providing additional logging functionality.
* By setting the database key, the database collection and setting the
  `TaskSnapshotController` options `shouldPersistLocalSnapshots` to `true` in
  the `app.config` of the service, the generic `HistorianController` of the
  framework is able to retrieve the database context of the application and to
  persist all snapshot objects in the corresponding database.
* The client is performing a distributed query for snapshot objects whenever it
  completes a task. The retrieved snapshot objects from the service are given as
  log output. For this, the service makes use of the generic observe query
  functionality of the `HistorianController` enabled by the controller option
  `shouldReplyToQueries`. The results are printed to the console.

The Hello World example exposes the following framework features:

* Definition of domain object models
* Use of communication event patterns, such as `Advertise`, `Update-Complete`,
  and `Query-Retrieve`
* Distributed lifecycle management of agents
* Persistent storage and retrieval of domain objects using the Unified Storage
  API
* Shared configuration options for service and client components
* Decentralized logging of application-specific informational events
* Use of the generic Historian concept and Snapshot object implementation

## Installation

This example has its own npm package definition and a simple build environment
based on npm scripts.

You can either install all prerequisites of the example locally on your target
machine as described next or use a dockerized version of the example as
described in section [Run with Docker](#run-with-docker) below.

First, make sure that the `Node.js` JavaScript runtime (version 8 or higher) is
globally installed on your target machine. Download and installation details can
be found [here](http://nodejs.org/).

Next, install the open source PostgreSQL database on your machine. You should
install version 9.5 or higher. Download and installation details can be found
[here](https://www.postgresql.org/). When installing PostgreSQL do not forget to
set a proper password for the PostgreSQL admin user. This example expects the
admin user is named `postgres` and its password is set to `postgres` (see static
method `Db.getAdminConnectionString` in `src/shared/db.ts`). Usually, these
values correspond to the defaults when installing PostgreSQL on Windows and when
using a PostgreSQL docker container. On Linux, you might have to set the
password explicitely by running `sudo -u postgres psql postgres` and then
defining a password through the command `postgres=# \password postgres`.

Next, checkout the Hello World example sources from
[here](https://github.com/coatyio/coaty-examples/tree/master/hello-world/js).

Next, install and build the example by running these commands on the checked out
project's root folder:

* `npm install` to install the project dependencies.
* `npm run build` to build the example project.

## Start-up

Before starting the Hello World application on your local machine, you have to
launch an MQTT broker that is listening on port 1883 (MQTT) on the local host.
For convenience, the Hello World example uses the built-in broker provided with
the Coaty framework by a Coaty script. To easily trace communication events
distributed by the Hello World application, this broker can also log MQTT
subscriptions and published MQTT messages to the console. Note that you should
**not** use this broker as is for production purposes.

To start the built-in MQTT broker, type  `npm run broker` in a separate console
window. To start it with verbose logging, type `npm run broker:verbose`.

To start the Hello World service, type `npm run service` in a separate
console window.

To start the Hello World monitor, type `npm run monitor` in a separate
console window.

To start a Hello World client, type `npm run client` in a separate
console window.

You can launch as many clients in separate console windows as you like. We
recommend to first launch just one client, watch its behavior and then start
additional ones to see how they compete for incoming task requests.

## Run with Docker

The dockerized example provides a way to run the example applications isolated
in a Docker container, packaged with all its dependencies and libraries. Please
refer to [Docker website](https://docs.docker.com/) on how to install the Docker
engine on your machine.

Build the dockerized example by executing `npm run docker-build`.

Next, run the Docker container hosting the database and Coaty broker by
executing `npm run docker-run`.

Start a service, a client, or a monitor within the Docker container by executing
`npm run docker-service`, `npm run docker-client`, or `npm run docker-monitor`
in a new console window.

## Project Structure

The folder structure of the Hello World project looks like the following:

```
|-- dist/                           - executable code generated on build
|-- node_modules                    - project dependencies
|-- src/                            - source code
    |-- client/
        |-- agent.info.ts           - client agent info auto-generated by build script
        |-- agent.ts                - client agent configuration and startup
        |-- task-controller.ts      - process task requests and assigned tasks
    |-- monitor/
        |-- agent.info.ts           - monitor agent info auto-generated by build script
        |-- agent.ts                - monitor agent configuration and startup
        |-- monitor-controller.ts   - listen for and output log objects
    |-- service/
        |-- agent.info.ts           - service agent info auto-generated by build script
        |-- agent.ts                - service agent configuration and startup
        |-- agent-lifecycle-controller.ts - observes lifecycle of Hello World agents
        |-- log-controller.ts       - collect and persist log objects
        |-- task-controller.ts      - issue task requests and assign tasks
        |-- task-snapshot-controller.ts - a HistorianController that handles task snapshots
    |-- shared/
        |-- config.ts               - common agent configuration options
        |-- db.ts                   - constants/functions for database initialization
        |-- log-tags.ts             - custom log tags for db, client, monitor, and service operations
        |-- models.ts               - definitions of domain object models
|-- Dockerfile                      - contains all commands to build a Docker image
|-- .env                            - default environment variables (broker URL)
|-- gulpfile.js                     - project gulpfile with tasks for building and linting
|-- package.json                    - project package definition
|-- tsconfig.json                   - TypeScript compiler options
|-- tslint.json                     - TypeScript linter options
```

The source code of the project is divided into agent-specific definitions for
client, service, and monitor as well as common definitions shared by client,
service and/or monitor components.

For simplicity, all agents share the same package definition `package.json` in
the root folder. In a real-world application, client and service/monitor
projects should have their own package definitions and build scripts because
they depend on different npm packages and the client build process is specific
to the client UI technology stack used.

The `.env` file contains default environment variables used by all components,
such as the URL of the broker.

The `agent.info.ts` files located in the client, service, and monitor projects
are autogenerated when the Hello World project is build (see gulp commands
`agentinfo:*` in `gulpfile.js`). The generated files contain package, build and
config information of the application, extracted from the package.json and other
sources. This information can be used at runtime, e.g. for logging,
informational display, or configuration (e.g. discriminating based on production
vs. development build mode).

## Communication Event Flow

The following sequence diagrams depict the asynchronous communication event flow
between Hello World agents.

### Task Flow between Service and Clients

```
 Service                                        Client
    |                                              |
    | ADVERTISE Task request                       |
    |--------------------------------------------->|
    |                                              |
    |             UPDATE Task offer by client user |
    |<---------------------------------------------|
    `--------------------------------------------->|
    | COMPLETE Task offer accepted / rejected      |
    |                                              |
    | ADVERTISE Task assigned to client user       |
    |--------------------------------------------->|
    |                                              |
    |             ADVERTISE Task status InProgress |
    |<---------------------------------------------|
    |                                              |
    |                   ADVERTISE Task status Done |
    |<---------------------------------------------|
    |                                              |
    |                         QUERY Task Snapshots |
    |<---------------------------------------------|
    `--------------------------------------------->|
    | RETRIEVE Task Snapshots                      |
    |                                              |
```

All Advertise and Update events operate on a domain-specific `HelloWorldTask`
object model which is derived from the framework object type `Task` (see common
definitions under `shared/models.ts`).

Both service and clients provide a `TaskController` class to handle the
task-related communication event flow.

The service generates new task objects with status `Request` every 10 seconds.
The generated task request is persisted in the database task collection and
advertised to other agents (see `TaskController._generateRequests`).

A client observes incomimg task requests and - if not currently busy
accomplishing another task - makes an offer to carry out the task by publishing
an Update event for the received task request object with the property
`assigneeObjectId` set to the client's agent identity ID (see
`TaskController._observeAdvertiseRequests`).

For simplicity, client identities are not managed in the database. On
initialization each client is assigned an agent identity with a newly generated
object ID when resolving the agent's container.

The service observes Update events and checks if any such event received matches
a task request it has generated previously (see
`TaskController._observeUpdateRequests`). This is accomplished by looking up the
object ID of the Update event object in the database task collection. If a
matching task is found which is no longer in `Request` status, the task offer is
rejected by sending a Complete response event with the already assigned task
object to the requesting client. If a matching task is found which is still in
`Request` status, it is assigned to the offering client user by updating the
task's `assignedObjectId` property and setting the task status to `Pending`. The
updated task is stored in the database. Then, the updated task is sent as a
Complete response event to the requesting client. Finally, the updated task is
also advertised to any interested agents to notify that the task is now assigned
and in status `Pending`.

After receiving the task offer response the client accomplishes the task if the
task offer has not been rejected by the service. This is checked by comparing
the client's agent identity ID with the `assignedObjectId` property of the task
object received.

Before carrying out the task, the client updates the task status to `InProgress`
and notifies other components by advertising the updated task object.

Likewise, after the task has been completed, other components are notified
by advertising an updated task object with status `Done`.

The service in return observes task status changes (see
`TaskController._observeAdvertiseTasks`) and updates the task stored in the
database task collection.

In addition, after the task has been completed, the client is performing a query
for snapshot objects. The retrieved snapshot objects from the service are logged
on the client's console.

### Agent Lifecycle Event Flow

```
 Service                                Service   Client   Monitor
    |                                       |        |        |
    | DISCOVER Agent                        |        |        |
    |-------------------------------------->|------->|------->|
    |<--------------------------------------´--------´--------´
    |                         RESOLVE Agent |        |        |
    |                                       |        |        |
    |                       ADVERTISE Agent |        |        |
    |<--------------------------------------|--------|--------|
    |                                       |        |        |
    |                     DEADVERTISE Agent |        |        |
    |<--------------------------------------|--------|--------|
```

Whenever a Coaty container is started it advertises its agent identity as an
`Identity` object. Likewise, when it is stopped, it deadvertises its identity.
In case the agent is terminated abnormally, the MQTT broker takes over
deadvertisement as a last will/testament.

The service keeps track of connected agents by observing Advertise and
Deadvertise events for `Identity` objects, and by initially discovering them. To
accomplish this, the service uses the convenience controller class
`ObjectLifecycleController` provided by the Coaty framework (see class
`AgentLifecycleController`). Whenever the tracked lifecycle state of an agent
changes, the new state is advertised as a `Log` object.

> Note that the `AgentLifecycleController` in the service *also* tracks its own
> agent's identity, because communication events are intentionally dispatched
> back to an originating agent that also observes them.

### Logging Event Flow

```
 Service                                Service   Monitor
    |                                       |        |
    |                         ADVERTISE Log |        |
    |<--------------------------------------|        |
    |                                  ADVERTISE Log |
    |<-----------------------------------------------|
    |                                                |
    | ADVERTISE DatabaseChange logChanged            |
    |----------------------------------------------->|
    |                                                |
    |                              QUERY Log objects |
    |<-----------------------------------------------|
    `----------------------------------------------->|
    | RETRIEVE Log objects                           |
    |                                                |
```

The framework supports decentralized logging of application-specific
informational events, such as errors, warnings, or system messages. Any Coaty
agent can publish a log message by creating and advertising a `Log` object.

The service agent advertises log objects for errors that occur while accessing
the database. The monitor agent advertises a log object when the query for log
objects times out.

The service observes advertised log objects (see
`LogController._observeAdvertiseLog`), stores them in the database log
collection and advertises a corresponding `DatabaseChange` object.

The monitor observes Advertise events for `DatabaseChange` objects and in return
queries the list of `Log` objects containing the top 100 log entries order
descendingly by log date, then ascendingly by log level.

This query event is satifies by the service which responds with a list of
corresponding log objects retrieved from the database log collection (see
`LogController._observeQueryLog`).

Due to the asynchronous nature of communication events we need a separate object
type `DatabaseChange` to notify the monitor that the database log collection has
been updated. The monitor could just observe Advertise events on `Log` objects,
but then the subsequent query event might be answered by the service **before**
it has received the Advertise event on the `Log` object.

---
Copyright (c) 2018 Siemens AG. This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
