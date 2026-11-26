# Changelog

All notable changes to this project are documented in this file. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Fixed

- The published manifest carries real version ranges for `@entrolytics/config` and
  `@entrolytics/protocol` (6.0.0 and 6.0.1 shipped `workspace:^`, which cannot be installed).

### Changed

- Declarations regenerated for the API at 4.1.0 (persistent visitor identity in the retention
  report; pixel stats report, slug validation and consolidated REST/tRPC procedures).
- Requires `@entrolytics/config` and `@entrolytics/protocol` 4.1.0; `@trpc/server` 11.31.
