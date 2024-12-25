window.BENCHMARK_DATA = {
    "lastUpdate": 1735115670375,
    "repoUrl": "https://github.com/slatedb/slatedb",
    "entries": {
      "src/bencher/benchmark-db.sh": [
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "9f569419abc193815a29bab4cd82e9a920aea28b",
            "message": "Add microbenchmarks pprof job (#401)\n\nThis commit adds tikv's [pprof-rs](https://github.com/tikv/pprof-rs) to\r\nour Criterion microbenchmarks. The profiler outputs [pprof protobuf\r\nfiles](https://github.com/google/pprof/blob/main/doc/README.md). You can\r\nvisualize these files using [pprof.me](https://pprof.me) or with\r\nGoogle's [pprof toolchain](https://github.com/google/pprof/tree/main).",
            "timestamp": "2024-12-13T20:35:54Z",
            "url": "https://github.com/slatedb/slatedb/commit/9f569419abc193815a29bab4cd82e9a920aea28b"
          },
          "date": 1734125091761,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 15796.8,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 17396.684,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 17194.934,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4296.317,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 18070.02,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4515.74,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 17470.779,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 11650.68,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12849.66,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8546.76,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 15916.44,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 23872.779,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 9074.84,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13593.66,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10499.22,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 42034,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5522.34,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22073.26,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "4d435093da965696b43c4239eb504ee2b796d2e6",
            "message": "Remove pprof's using `-f` in nightly (#403)",
            "timestamp": "2024-12-13T21:33:22Z",
            "url": "https://github.com/slatedb/slatedb/commit/4d435093da965696b43c4239eb504ee2b796d2e6"
          },
          "date": 1734126367259,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 16911.518,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 17094.816,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 17563.699,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4384.433,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 16941.32,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4243.42,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 17758.859,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 11815.74,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12476.48,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8341.36,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 15968.74,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 23962.9,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 8976.74,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13443.32,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10472.58,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 41866.98,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5512.76,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 21999,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Lokesh",
              "username": "kumarlokesh",
              "email": "lkumar94@gmail.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "8917c0a43251494ce125b5152efdb9cdd4fda075",
            "message": "doc: fixed minor typo in manifest rfc (#402)\n\nCo-authored-by: Chris Riccomini <criccomini@users.noreply.github.com>",
            "timestamp": "2024-12-14T01:29:06Z",
            "url": "https://github.com/slatedb/slatedb/commit/8917c0a43251494ce125b5152efdb9cdd4fda075"
          },
          "date": 1734165257226,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 15894.634,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 16149.983,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 16920.051,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4228.6,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 17630.74,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4405.46,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 18068.5,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 12046.58,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12739.54,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8487.2,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 16214.68,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 24299.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 9173.16,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13784.96,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10539.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 42171.422,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5588.44,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22345.061,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "c43753e12659216ddfeb553be204ee22ec9e4e9f",
            "message": "Add CLEAN_SLATE.md (#361)\n\nAdding a brief style guide to for SlateDB. The The guide is meant to clarify why and how we make changes to the project. This includes:\r\n\r\n- How we decide which features should be added to SlateDB and which should be left out.\r\n- How new features should be designed and implemented.\r\n- How we evaluate changes to the project governance and decision-making processes.",
            "timestamp": "2024-12-15T00:51:36Z",
            "url": "https://github.com/slatedb/slatedb/commit/c43753e12659216ddfeb553be204ee22ec9e4e9f"
          },
          "date": 1734251666060,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 16907.699,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 17562.449,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 16599.9,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4145.433,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 16302.64,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4065.7,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 16020.95,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 10663.717,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12713.18,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8495.62,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 16611.1,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 24947.141,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 9097.82,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13630.26,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10520.54,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 42106.301,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5613.92,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22469.76,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "c43753e12659216ddfeb553be204ee22ec9e4e9f",
            "message": "Add CLEAN_SLATE.md (#361)\n\nAdding a brief style guide to for SlateDB. The The guide is meant to clarify why and how we make changes to the project. This includes:\r\n\r\n- How we decide which features should be added to SlateDB and which should be left out.\r\n- How new features should be designed and implemented.\r\n- How we evaluate changes to the project governance and decision-making processes.",
            "timestamp": "2024-12-15T00:51:36Z",
            "url": "https://github.com/slatedb/slatedb/commit/c43753e12659216ddfeb553be204ee22ec9e4e9f"
          },
          "date": 1734338315820,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 16758.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 15736.15,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 16874.732,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4225.717,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 17301.76,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4340.84,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 16205.25,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 10788.533,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12684.5,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8472.28,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 16228.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 24308.66,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 9125.24,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13670.2,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10495.1,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 41970.32,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5613.92,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22432.859,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "fcb703b196215093cca29a3963b7ab7d9e58f5f3",
            "message": "Fix README",
            "timestamp": "2024-12-16T21:32:03Z",
            "url": "https://github.com/slatedb/slatedb/commit/fcb703b196215093cca29a3963b7ab7d9e58f5f3"
          },
          "date": 1734424631627,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 17255.1,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 16945.316,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 15749.283,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 3929.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 16832.52,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4219.96,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 18075.74,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 12051.08,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12923.72,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8608.36,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 16091.12,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 24160.539,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 9028.3,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13525.2,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10677.42,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 42755.281,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5587.88,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22412.08,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "fcb703b196215093cca29a3963b7ab7d9e58f5f3",
            "message": "Fix README",
            "timestamp": "2024-12-16T21:32:03Z",
            "url": "https://github.com/slatedb/slatedb/commit/fcb703b196215093cca29a3963b7ab7d9e58f5f3"
          },
          "date": 1734511007132,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 17003.967,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 17058.75,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 17127.732,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4281.483,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 16043.26,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4013.6,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 15430.467,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 10311.8,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12483.34,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8341.46,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 16406.76,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 24665.439,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 9128.08,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13712.8,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10446.66,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 41840.121,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5571.14,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22205.82,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "fcb703b196215093cca29a3963b7ab7d9e58f5f3",
            "message": "Fix README",
            "timestamp": "2024-12-16T21:32:03Z",
            "url": "https://github.com/slatedb/slatedb/commit/fcb703b196215093cca29a3963b7ab7d9e58f5f3"
          },
          "date": 1734597360535,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 16818,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 18282.539,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 17049.666,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4267.467,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 18215.439,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4554.62,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 18260.381,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 12192.66,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12594,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8392.86,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 15816.26,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 23710.58,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 9061.08,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13593.82,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10687.16,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 42776.219,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5589.12,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22336.221,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "fcb703b196215093cca29a3963b7ab7d9e58f5f3",
            "message": "Fix README",
            "timestamp": "2024-12-16T21:32:03Z",
            "url": "https://github.com/slatedb/slatedb/commit/fcb703b196215093cca29a3963b7ab7d9e58f5f3"
          },
          "date": 1734683655019,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 15790.75,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 15079.1,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 16053.934,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4014.1,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 15281.8,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 3822.95,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 15968.46,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 10614.9,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12527.38,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8351.38,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 16228.38,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 24421.66,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 9128.26,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13678.46,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10603.76,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 42315.18,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5543.44,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22135.48,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Jeffrey lean",
              "username": "jeffreylean",
              "email": "57609485+jeffreylean@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "bb1c7172275ec652b7d72a060877bffa6d8a995c",
            "message": "Add checksum to filter and index block (#412)\n\n- Add checksum to both filter and index block, and do checksum\r\nvalidation while decoding them.\r\n\r\nFixes #365",
            "timestamp": "2024-12-20T19:39:15Z",
            "url": "https://github.com/slatedb/slatedb/commit/bb1c7172275ec652b7d72a060877bffa6d8a995c"
          },
          "date": 1734769975555,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 16963.584,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 17110.084,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 17632.934,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4390.55,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 16108.62,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4017.9,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 16159.35,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 10771.134,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12383.12,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8257.1,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 15722.14,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 23558.98,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 8968.76,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13438.92,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10460.82,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 41927.32,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5611.6,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22419.08,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Jeffrey lean",
              "username": "jeffreylean",
              "email": "57609485+jeffreylean@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "bb1c7172275ec652b7d72a060877bffa6d8a995c",
            "message": "Add checksum to filter and index block (#412)\n\n- Add checksum to both filter and index block, and do checksum\r\nvalidation while decoding them.\r\n\r\nFixes #365",
            "timestamp": "2024-12-20T19:39:15Z",
            "url": "https://github.com/slatedb/slatedb/commit/bb1c7172275ec652b7d72a060877bffa6d8a995c"
          },
          "date": 1734856341886,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 15506.134,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 15650.616,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 17875.1,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4459.62,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 16684.301,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4173.92,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 17874.439,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 11932.44,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12173.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8122.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 16139.58,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 24243.26,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 8922.22,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13410.2,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10299.98,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 41231.34,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5513.8,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22065.08,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "f983e13c9071bc93e2bcf879a08fbe479fbcefc0",
            "message": "Brand SlateDB as a member of Commonhaus (#414)\n\nI'm using this strategy to handle both light and dark themes:\r\n\r\nhttps://www.stefanjudis.com/notes/how-to-define-dark-light-mode-images-in-github-markdown/\r\nhttps://github.com/stefanjudis/github-light-dark-image-example\r\n\r\nLooks to work well on Github. I'm not sure if it'll work on Crates.io,\r\nbut I'm OK with that.",
            "timestamp": "2024-12-23T00:01:21Z",
            "url": "https://github.com/slatedb/slatedb/commit/f983e13c9071bc93e2bcf879a08fbe479fbcefc0"
          },
          "date": 1734942927476,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 15668.434,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 17305.117,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 16048.017,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4015.567,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 16161.48,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4033.48,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 17212.16,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 11470.42,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12560.38,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8367.94,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 16506.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 24774.199,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 8976.14,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13433.48,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10329.7,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 41370.559,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5472.28,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 21849.82,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Chris Riccomini",
              "username": "criccomini",
              "email": "criccomini@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "f983e13c9071bc93e2bcf879a08fbe479fbcefc0",
            "message": "Brand SlateDB as a member of Commonhaus (#414)\n\nI'm using this strategy to handle both light and dark themes:\r\n\r\nhttps://www.stefanjudis.com/notes/how-to-define-dark-light-mode-images-in-github-markdown/\r\nhttps://github.com/stefanjudis/github-light-dark-image-example\r\n\r\nLooks to work well on Github. I'm not sure if it'll work on Crates.io,\r\nbut I'm OK with that.",
            "timestamp": "2024-12-23T00:01:21Z",
            "url": "https://github.com/slatedb/slatedb/commit/f983e13c9071bc93e2bcf879a08fbe479fbcefc0"
          },
          "date": 1735029274045,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 17262.166,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 15285.35,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 16985.551,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4240.483,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 17348.699,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4328.82,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 17986.66,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 11992.16,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12558.52,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8372.08,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 15980.18,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 23962.18,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 8956.7,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13407.36,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10389.56,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 41460.141,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5525.18,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 22125.119,
              "unit": "ops/sec"
            }
          ]
        },
        {
          "commit": {
            "author": {
              "name": "Jeffrey lean",
              "username": "jeffreylean",
              "email": "57609485+jeffreylean@users.noreply.github.com"
            },
            "committer": {
              "name": "GitHub",
              "username": "web-flow",
              "email": "noreply@github.com"
            },
            "id": "7ce4107db1d9b7edee31d8989d460cadf34c02e9",
            "message": "Add scan range usage to readme (#417)\n\nFixes #409",
            "timestamp": "2024-12-25T05:03:44Z",
            "url": "https://github.com/slatedb/slatedb/commit/7ce4107db1d9b7edee31d8989d460cadf34c02e9"
          },
          "date": 1735115669936,
          "tool": "customBiggerIsBetter",
          "benches": [
            {
              "name": "SlateDB 100% Puts 4 Threads - Puts/s",
              "value": 17033.65,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 4 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Puts/s",
              "value": 15863.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 100% Puts 1 Threads - Gets/s",
              "value": 0,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Puts/s",
              "value": 16461.434,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 4 Threads - Gets/s",
              "value": 4120.133,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Puts/s",
              "value": 17141.539,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 80% Puts 1 Threads - Gets/s",
              "value": 4307.36,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Puts/s",
              "value": 17709.619,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 4 Threads - Gets/s",
              "value": 11848.62,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Puts/s",
              "value": 12819.44,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 60% Puts 1 Threads - Gets/s",
              "value": 8520.52,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Puts/s",
              "value": 16742.539,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 4 Threads - Gets/s",
              "value": 25116.939,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Puts/s",
              "value": 8930.14,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 40% Puts 1 Threads - Gets/s",
              "value": 13405.56,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Puts/s",
              "value": 10324.4,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 4 Threads - Gets/s",
              "value": 41265.422,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Puts/s",
              "value": 5457.3,
              "unit": "ops/sec"
            },
            {
              "name": "SlateDB 20% Puts 1 Threads - Gets/s",
              "value": 21858.5,
              "unit": "ops/sec"
            }
          ]
        }
      ]
    }
  }