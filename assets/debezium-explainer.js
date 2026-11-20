
(function(){
  "use strict";

  /* ─────────── icons ─────────── */
  const IC = {
    db:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>',
    kafka:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="16" width="18" height="4" rx="1"/></svg>',
    plug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6z"/><path d="M12 17v5"/></svg>',
    engine:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6v6H9z"/><path d="M4 12H2M22 12h-2M12 4V2M12 22v-2"/></svg>',
    bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    branch:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
    snapshot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    diff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M18 9l-6-6-6 6M6 15l6 6 6-6"/></svg>',
    trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6"/></svg>',
    heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
    scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 7h18M6 7l-3 6a4 4 0 0 0 6 0L6 7zM18 7l-3 6a4 4 0 0 0 6 0l-3-6z"/></svg>',
    book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    github:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    play:'<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    pause:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
    step:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4" fill="currentColor" stroke="none"/><line x1="19" y1="5" x2="19" y2="19"/></svg>',
    restart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
    cursor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>',
    link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    people:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  };

  /* ─────────── pipeline node models ─────────── */
  const NODES = {
    source:{cls:'crdb',icon:'db',title:'Source CockroachDB',sub:'demodb · multi-schema',chips:['26257','rangefeed on'],
      desc:'The system of record. Every INSERT / UPDATE / DELETE is captured natively by a CockroachDB enriched changefeed — no triggers, no log scraping. Enable rangefeeds and grant CHANGEFEED to the connector user.',
      cfg:[['setting','SET CLUSTER SETTING kv.rangefeed.enabled = true'],['tables','public.orders, public.customers, inventory.warehouse_items'],['SQL','postgresql://root@localhost:26257/demodb']]},
    cfkafka:{cls:'kafka',icon:'kafka',title:'Kafka — intermediate topic',sub:'crdb.demodb.public.orders',chips:['native CDC','enriched'],
      desc:'CockroachDB pushes changefeed events directly to Kafka. Topics are named <prefix><db>.<schema>.<table>, so the crdb. prefix yields crdb.demodb.public.orders. This is CockroachDB writing to Kafka, before Debezium sees anything.',
      cfg:[['envelope',"'enriched'"],['format',"'json'"],['options','diff, updated, resolved=10s, full_table_name'],['naming','<prefix><db>.<schema>.<table>']]},
    srcconn:{cls:'conn',icon:'plug',title:'Debezium CockroachDB Source Connector',sub:'reads changefeed → Debezium envelope',chips:['CockroachDBConnector','heartbeats'],
      desc:'Runs inside Kafka Connect. Detects (or creates) the changefeed, reads the enriched events, and republishes them as standard Debezium envelope records. Handles schema evolution and signal-based incremental snapshots with no restart. Restarts resume from the persisted offset.',
      cfg:[['connector.class','CockroachDBConnector'],['topic.prefix','crdb'],['signal.data.collection','demodb.public.debezium_signal'],['…max.tables.per.changefeed','2'],['…changefeed.include.diff','true'],['heartbeat.interval.ms','10000']]},
    outkafka:{cls:'kafka',icon:'kafka',title:'Kafka — output topic',sub:'crdb.public.orders',chips:['Debezium envelope','op=c / u / d'],
      desc:'The connector\u2019s output: standard Debezium change events Debezium-compatible consumers and sinks can process. Each record carries before/after images and metadata. Deletes emit an op=d event, followed by a null-valued tombstone for Kafka compaction.',
      cfg:[['op=c','create (insert)'],['op=u','update — with before image'],['op=d','delete → tombstone'],['op=r','snapshot read']]},
    sink:{cls:'conn',icon:'plug',title:'Debezium JDBC Sink Connector',sub:'consumes topic → writes target',chips:['JdbcSinkConnector','upsert'],
      desc:'One of many possible sinks — nothing here is CockroachDB-specific. It consumes the output topic and writes to a second CockroachDB over JDBC. Auto-creates the target table, uses idempotent INSERT … ON CONFLICT … DO UPDATE, and propagates deletes.',
      cfg:[['connector.class','JdbcSinkConnector'],['topics','crdb.public.orders'],['insert.mode','upsert'],['delete.enabled','true'],['primary.key.mode','record_key'],['schema.evolution','basic']]},
    target:{cls:'crdb',icon:'db',title:'Target CockroachDB',sub:'targetdb.orders_replica',chips:['26258','auto-created'],
      desc:'The replica destination. The target table is created automatically by the JDBC sink. Row counts match the source; deletes are applied by the configured sink. The examples check row counts; the bank workload also checks SUM(balance).',
      cfg:[['SQL','postgresql://root@localhost:26258/targetdb'],['DB Console','http://localhost:8081'],['verify','row count + SUM parity']]},
    srcconnSinkless:{cls:'conn',icon:'plug',title:'Source Connector (sinkless)',sub:'changefeed over SQL connection',chips:['no intermediate Kafka'],
      desc:'In sinkless mode the changefeed streams over the connector\u2019s own SQL connection — there is no intermediate Kafka cluster and no changefeed job on the database. The connector still republishes standard Debezium envelope records to the output topic.',
      cfg:[['cockroachdb.changefeed.sink.type','sinkless'],['transport','SQL connection (rangefeed)'],['job','none — stream lives on the session']]},
    embedded:{cls:'obs',icon:'engine',title:'Debezium Embedded Engine',sub:'in-process · no Kafka, no Connect',chips:['embedded','sinkless'],
      desc:'The whole pipeline runs inside one JVM process: the connector in sinkless mode plus an in-process consumer that applies changes to the target over JDBC. No Kafka, no Kafka Connect cluster — ideal for lightweight or embedded replication.',
      cfg:[['engine','io.debezium.embedded'],['mode','sinkless'],['consumer','in-process → JDBC'],['infra','no Kafka or Connect service']]}
  };
  const EDGES = {
    cf:{label:'enriched changefeed',fl:'var(--crdb)'},
    read:{label:'reads events',fl:'var(--conn)'},
    pub:{label:'Debezium envelope',fl:'var(--conn)'},
    consume:{label:'consumes topic',fl:'var(--kafka)'},
    upsert:{label:'upsert / delete',fl:'var(--conn)'},
    sql:{label:'changefeed over SQL',fl:'var(--crdb)'},
    apply:{label:'apply in-process',fl:'var(--obs)'}
  };
  const MODES = {
    kafka:{seq:['source','cfkafka','srcconn','outkafka','sink','target'],edges:['cf','read','pub','consume','upsert'],
      tag:'RECOMMENDED', tagcls:'crdb',
      desc:'<span class="tag">kafka mode</span> The changefeed pushes to an intermediate Kafka cluster; the connector reads it and republishes standard Debezium events. Best for scale, fan-out to many consumers, and durable buffering.'},
    sinkless:{seq:['source','srcconnSinkless','outkafka','sink','target'],edges:['sql','pub','consume','upsert'],
      tag:'LIGHTWEIGHT', tagcls:'conn',
      desc:'<span class="tag">sinkless mode</span> The changefeed streams directly over the connector\u2019s SQL connection — <b>no intermediate Kafka, no changefeed job on the cluster</b>. Resuming after downtime depends on the database GC window; longer outages need a new snapshot.'},
    embedded:{seq:['source','embedded','target'],edges:['sql','apply'],
      tag:'IN PROCESS', tagcls:'obs',
      desc:'<span class="tag">embedded engine</span> Everything runs in a single JVM: sinkless capture plus an in-process consumer that writes the target over JDBC. <b>No Kafka and no Kafka Connect at all.</b>'}
  };
  const OPS = [
    {name:'INSERT · op=c',color:'#2f9e44'},
    {name:'UPDATE · op=u',color:'#1971c2'},
    {name:'DELETE · op=d',color:'#cf2132'}
  ];

  /* ─────────── use-case patterns (the "why") ─────────── */
  const USECASES = {
    lakehouse:{label:'Lakehouse & Analytics',
      flow:[{cls:'crdb',ic:'db',l:'CockroachDB'},{cls:'conn',ic:'plug',l:'Debezium'},{cls:'kafka',ic:'kafka',l:'Kafka'},{cls:'kafka',ic:'box',l:'Iceberg / Lake / DWH'}],
      desc:'Keep the operational database lean while analytics runs on fresh data. Stream every committed change into <b>Apache Iceberg</b>, a data lake, or a warehouse \u2014 no nightly batch ETL and no dual-writes.',
      points:['CDC delivers row changes for downstream processing','OLTP path stays fast; analysts query current data, not last night\u2019s','Runnable example: crdb-to-iceberg (Iceberg + MinIO + REST catalog)']},
    hubspoke:{label:'Hub-and-Spoke (Edge)',
      flow:[{cls:'crdb',ic:'db',l:'In-store CRDB'},{cls:'kafka',ic:'kafka',l:'Kafka (middleware)'},{cls:'crdb',ic:'db',l:'HQ data store'}],
      desc:'Each site keeps CockroachDB as its <b>in-store source of record</b>. A changefeed emits to Kafka topics that buffer and batch upstream. With buffering deployed at the site, Kafka can retain events during an upstream network outage; retention and recovery need to be sized for the expected downtime.',
      points:['CockroachDB is the source of record at the edge','An operational data store at HQ aggregates the spokes','Buffer placement and retention determine how long a site can operate offline']},
    agentic:{label:'Agentic AI & Event-Driven',
      flow:[{cls:'crdb',ic:'db',l:'Row change'},{cls:'conn',ic:'plug',l:'Debezium event'},{cls:'obs',ic:'engine',l:'AI agent / function'}],
      desc:'A committed row change becomes a <b>trigger</b>. Instead of polling, an agentic AI flow reacts to real-time changes \u2014 a new order, a status flip, an inventory drop \u2014 kicking off a workflow, an enrichment, or a decision the moment the data changes.',
      points:['CDC turns database writes into real-time triggers','No polling \u2014 the change itself is the event','Live context for agents, RAG refresh, and downstream automations']},
    migration:{label:'Migration, Blue-Green & Coexistence',
      flow:[{cls:'conn',ic:'db',l:'Blue (legacy)'},{cls:'conn',ic:'plug',l:'Debezium CDC'},{cls:'crdb',ic:'db',l:'Green (CockroachDB)'}],
      desc:'Move onto CockroachDB without a big-bang cutover. Keep the legacy database (<b>blue</b>) serving live while CDC continuously replicates into CockroachDB (<b>green</b>). Validate the green pipeline as long as you like, then flip traffic \u2014 and plan a separate, tested reverse-replication path if rollback is required.',
      points:['Blue-green: run both in parallel, cut over only when you\u2019re satisfied','Test reverse replication, schema compatibility, and conflict handling before cutover','Both directions are Debezium \u2014 CockroachDB as source and as sink','Runnable examples: oracle-to-crdb and crdb-to-oracle']}
  };

  /* ─────────── chapters (the 15-min script) ─────────── */
  const CH = [
    {
      key:'hook', tc:'0:00–1:00', tcMin:0,
      kicker:'Start here', title:'Your data lives in CockroachDB. Everything else wants a copy.',
      lede:'The moment a system of record is distributed SQL, something downstream always needs those changes too — a search index, a data lake, an analytics warehouse, another database.',
      stage:'hero',
      say:[
        'CockroachDB is a distributed SQL database. The moment your data lives there, something else always needs it too.',
        'Change Data Capture — <em>CDC</em> — is how you stream INSERT, UPDATE and DELETE events without polling application tables.',
        'This is the <em>Debezium connector for CockroachDB</em> — and I built it on CockroachDB\u2019s own native changefeeds.'
      ],
      key_l:'One line to remember', key_t:'Native change capture from CockroachDB into the entire Debezium ecosystem — unchanged.',
      cue:'Open on the animated flow. Let the red spark travel end-to-end once before you start talking.'
    },
    {
      key:'usecases',
      kicker:'Why it exists', title:'Your data never stays in one place',
      lede:'Change capture isn\u2019t the goal — it\u2019s the enabler. These are the patterns this connector was built to serve. Click through them.',
      stage:'usecases',
      say:[
        'We didn\u2019t build this in a vacuum — it\u2019s driven by real patterns.',
        '<em>Lakehouse and analytics</em>: stream changes into Iceberg, a lake, or a warehouse — no nightly batch ETL.',
        '<em>Hub-and-spoke</em> at the edge: stores keep CockroachDB in-store, emit a changefeed to Kafka, and batch back to HQ on reconnect — local buffering and retention need to cover the outage.',
        '<em>Agentic AI and event-driven</em>: a row change becomes the trigger — an agent reacts to real-time data instead of polling.',
        '<em>Migration, blue-green and coexistence</em>: keep legacy (blue) live while CDC feeds CockroachDB (green), validate as long as you want, then flip — plan and test reverse replication before cutover.'
      ],
      key_l:'The stage-setter', key_t:'CDC is the connective tissue — analytics, edge sync, real-time AI, and migration all ride the same change stream.',
      cue:'Click each tab. Linger on Hub-and-Spoke and Agentic AI — those are the memorable ones.'
    },
    {
      key:'what', tc:'1:00–2:30', tcMin:60,
      kicker:'What it is', title:'A first-class Debezium source for CockroachDB',
      lede:'Debezium is the de-facto open-source CDC platform. This connector makes CockroachDB a native Debezium source — so downstream consumers can use the standard event format.',
      stage:'about',
      say:[
        'Debezium is the open-source standard for CDC. This connector makes CockroachDB a <em>native</em> Debezium source.',
        'It\u2019s built on CockroachDB\u2019s native <em>changefeed</em> infrastructure — not triggers, not log scraping.',
        'It emits the <em>standard Debezium envelope</em> — before/after images, op type, metadata — for downstream integrations.',
        'It\u2019s Apache-2.0 and published to <em>Maven Central</em>. Drop it into Kafka Connect\u2019s plugin path.'
      ],
      key_l:'The payoff', key_t:'If it speaks Debezium, it now speaks CockroachDB.',
      cue:'Hover a card or two. Copy the Maven coordinates on camera to show it\u2019s a real, released artifact.'
    },
    {
      key:'arch', tc:'2:30–6:00', tcMin:150,
      kicker:'The architecture', title:'How a row change travels end-to-end',
      lede:'A two-hop pipeline. Inspect each stage and its example configuration. Simulate a row change to follow its path to the replica.',
      stage:'pipeline',
      say:[
        'Enable rangefeeds, and the connector creates an <em>enriched changefeed</em> on the source.',
        'Hop one: CockroachDB pushes changefeed events <em>natively</em> to Kafka — that\u2019s the intermediate topic.',
        'The connector reads those and republishes them as <em>standard Debezium records</em> on the output topic.',
        'Hop two is optional and generic: here the <em>JDBC sink</em> writes into a second CockroachDB.',
        'Trigger an insert, an update, a delete — and watch the same op travel the whole pipeline.'
      ],
      key_l:'Say this while clicking a node', key_t:'Two hops: CockroachDB → Kafka natively, then Debezium → anywhere.',
      cue:'Select the source and connector to show example configuration. Then click "Simulate a change" 2–3 times.'
    },
    {
      key:'modes', tc:'6:00–8:00', tcMin:360,
      kicker:'Delivery modes', title:'Same events, three topologies',
      lede:'The connector isn\u2019t tied to one deployment shape. Toggle between the three delivery modes and watch the pipeline reshape itself.',
      stage:'modes',
      say:[
        '<em>kafka mode</em> uses an intermediate Kafka cluster — best for scale and fan-out.',
        '<em>sinkless mode</em> streams the changefeed over the connector\u2019s SQL connection — no intermediate Kafka.',
        'The <em>embedded engine</em> runs the whole thing in one JVM — no Kafka, no Kafka Connect at all.',
        'Same change events, same envelope — you pick the topology that fits your infrastructure.'
      ],
      key_l:'The framing', key_t:'One connector, three footprints: from full Kafka to no separate messaging service.',
      cue:'Click through kafka → sinkless → embedded. Pause on each so the reshaped pipeline is visible.'
    },
    {
      key:'caps', tc:'8:00–10:00', tcMin:480,
      kicker:'What it handles', title:'The hard parts, handled',
      lede:'CDC is easy to demo and hard to get right. These are the correctness details the connector takes care of for you.',
      stage:'capabilities',
      say:[
        'Supported data-type mappings — including <em>DECIMAL as exact strings</em>, to preserve precision in the change event.',
        'Multi-table and <em>multi-schema</em> capture — non-public schemas flow through with their schema name in the topic.',
        '<em>Schema evolution</em> — ALTER TABLE ADD COLUMN is detected with no restart.',
        '<em>Incremental snapshots</em> — signal-based re-sync with no downtime.',
        'Delete events and tombstones, heartbeats, and clean <em>restart-resume</em> from the persisted offset.'
      ],
      key_l:'The credibility line', key_t:'DECIMAL stays exact end-to-end — with downstream mappings configured for the target.',
      cue:'Hover the DECIMAL and Schema-evolution cards. This chapter earns trust with an engineering audience.'
    },
    {
      key:'sink',
      kicker:'The round trip', title:'CockroachDB as a target, too — the JDBC sink dialect',
      lede:'CockroachDB can also receive changes. The Debezium JDBC sink has a native CockroachDB dialect in the 3.7 release line, with upserts and configurable retries.',
      stage:'sink',
      say:[
        'Everything so far was CockroachDB as a <em>source</em>. The JDBC sink closes the loop: CockroachDB as a <em>target</em>.',
        'Before 3.7, the sink didn\u2019t recognize CockroachDB and fell back to a generic dialect with <em>no upsert</em> — you had to pin the PostgreSQL dialect by hand.',
        'Now a dedicated <em>CockroachDB dialect</em> is auto-resolved from the JDBC URL. It landed in 3.7.0.Alpha1 and is <em>GA in 3.7.0.Final</em>.',
        'That gives you real <em>INSERT … ON CONFLICT … DO UPDATE</em> upserts, delete propagation, auto table creation, and in-place retries of serialization conflicts.',
        'And for throughput, the <em>UNNEST</em> batch-write path turns row-by-row inserts into set-based statements.'
      ],
      key_l:'The headline', key_t:'CockroachDB is now a native Debezium source AND a native sink target — full round-trip CDC.',
      cue:'Toggle Before 3.7 → 3.7.0.Final. Land the line: "no more PostgreSQLDialect workaround."'
    },
    {
      key:'demo', tc:'10:00–13:30', tcMin:600,
      kicker:'The demo', title:'Follow a demo run, step by step.',
      lede:'./run-demo.sh spins up source + target CockroachDB, Kafka, and Connect; deploys both connectors; drives sample changes; and checks the target. This scripted walkthrough illustrates that flow. Run the examples locally to execute it.',
      stage:'terminal',
      say:[
        'With Docker and the documented prerequisites installed, start the flagship demo with <em>./run-demo.sh</em>.',
        'It stands up source and target CockroachDB, Kafka, and Connect, then deploys both connectors.',
        'It drives inserts, updates, deletes, a schema change, and an incremental snapshot.',
        'And it\u2019s <em>self-verifying</em> — it compares row counts and a conserved SUM, to check the sample workload.',
        'Let it play, or step through it beat by beat while you narrate.'
      ],
      key_l:'The mic-drop', key_t:'It doesn\u2019t just replicate — it proves it, with an exact parity check.',
      cue:'Playback, not a live shell (sandbox has no network). Hit Play; use Step to pause on the parity check.'
    },
    {
      key:'cta', tc:'13:30–15:00', tcMin:810,
      kicker:'Get started', title:'It\u2019s released. Go build with it.',
      lede:'Everything you saw is open source and runnable today. Grab the plugin, clone the examples, read the docs, join the channel.',
      stage:'cta',
      say:[
        'The connector is on <em>Maven Central</em> — drop it into your plugin path.',
        'The <em>examples repo</em> has runnable demos with verification steps — CockroachDB to CockroachDB, Oracle, Iceberg, Neo4j, sinkless, mTLS, embedded.',
        'Full configuration reference lives in the <em>Debezium docs</em>.',
        'It\u2019s open source and community-driven — join the conversation on <em>Zulip</em>.'
      ],
      key_l:'Close on this', key_t:'CockroachDB is now a native Debezium source. Try it in the time it took to watch this.',
      cue:'Click a card or two to show the links are live. End on the sign-off line.'
    }
  ];

  const LINKS = {
    connector:'https://github.com/debezium/debezium-connector-cockroachdb',
    examples:'https://github.com/viragtripathi/debezium-cockroachdb-examples',
    demo:'https://github.com/uvshah-crl/debezium-cockroachdb-demo',
    docs:'https://debezium.io/documentation/reference/stable/connectors/cockroachdb.html',
    maven:'https://search.maven.org/search?q=g:io.debezium%20AND%20a:debezium-connector-cockroachdb',
    zulip:'https://debezium.zulipchat.com/#narrow/channel/510960-community-cockroachdb'
  };

  /* ─────────── state ─────────── */
  let cur = 0;
  const stage = document.getElementById('stage');
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const scBody = document.getElementById('scBody');
  const scTc = document.getElementById('scTc');

  /* ─────────── helpers ─────────── */
  function esc(s){return String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
  function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),1600); }
  async function copyText(txt){
    try { await navigator.clipboard.writeText(txt); toast('Copied'); }
    catch { toast('Copy unavailable. Select the code and copy it manually.'); }
  }
  function fmtClock(sec){ const m=Math.floor(sec/60), s=sec%60; return m+':'+String(s).padStart(2,'0'); }

  /* ─────────── timeline nav ─────────── */
  const timeline = document.getElementById('timeline');
  CH.forEach((c,i)=>{
    const b=document.createElement('button');
    b.className='chnav'; b.dataset.i=i; b.setAttribute('aria-label',c.title);
    b.innerHTML='<div class="cn-t">'+String(i+1).padStart(2,'0')+'</div><div class="cn-n">'+['Start here','Use cases','The connector','Architecture','Delivery modes','Capabilities','JDBC sink','Demo playback','Try it yourself'][i]+'</div>';
    b.addEventListener('click',()=>go(i));
    timeline.appendChild(b);
  });

  /* ─────────── pipeline renderer ─────────── */
  function renderPipeline(host, mode, interactive){
    const m = MODES[mode];
    const flow = document.createElement('div'); flow.className='flow';
    m.seq.forEach((nid,idx)=>{
      const n = NODES[nid];
      const node=document.createElement(interactive?'button':'div');
      node.className='fnode '+n.cls; node.dataset.node=nid; if(interactive){node.type='button';node.setAttribute('aria-label',n.title);node.setAttribute('aria-pressed','false');}
      node.style.cssText='--accent:var(--'+n.cls+');--accent-bg:var(--'+n.cls+'-bg);--accent-line:var(--'+n.cls+'-line)';
      node.innerHTML='<div class="badge-op" data-b="'+idx+'"></div>'+
        '<div class="ftop"><div class="fic">'+IC[n.icon]+'</div><div style="min-width:0"><h4>'+esc(n.title.replace('Debezium ',''))+'</h4><div class="fsub">'+esc(n.sub)+'</div></div></div>'+
        '<div class="fchips">'+n.chips.map(c=>'<span class="fchip'+(/[:/.0-9]/.test(c)?' mono':'')+'">'+esc(c)+'</span>').join('')+'</div>';
      if(interactive){
        node.addEventListener('click',()=>selectNode(nid));
      }
      flow.appendChild(node);
      if(idx < m.seq.length-1){
        const e = EDGES[m.edges[idx]];
        const ed=document.createElement('div'); ed.className='fedge flowing';
        ed.style.setProperty('--fl',e.fl);
        ed.innerHTML='<div class="ftrack"><div class="fdot"></div><div class="fdot d2"></div></div><div class="elabel">'+esc(e.label)+'</div>';
        flow.appendChild(ed);
      }
    });
    host.appendChild(flow);
    return flow;
  }

  let selectedNode=null;
  function selectNode(nid){
    selectedNode=nid;
    document.querySelectorAll('.fnode').forEach(x=>{x.classList.toggle('sel',x.dataset.node===nid);x.setAttribute('aria-pressed',String(x.dataset.node===nid));});
    const n=NODES[nid]; const box=document.getElementById('inspect'); if(!box) return;
    box.style.cssText='--accent:var(--'+n.cls+');--accent-bg:var(--'+n.cls+'-bg);--accent-line:var(--'+n.cls+'-line)';
    box.innerHTML='<div class="ih"><div class="ic">'+IC[n.icon]+'</div><div><h4>'+esc(n.title)+'</h4><p>'+esc(n.sub)+'</p></div></div>'+
      '<div class="ib"><p class="d">'+esc(n.desc)+'</p><table class="cfg">'+
      n.cfg.map(r=>'<tr><td class="k">'+esc(r[0])+'</td><td class="v">'+esc(r[1])+'</td></tr>').join('')+'</table></div>';
  }

  let dmlTimer=null;
  function triggerDML(){
    clearInterval(dmlTimer);
    const op=OPS[Math.floor(Math.random()*OPS.length)];
    const nodes=Array.from(document.querySelectorAll('.fnode'));
    const badges=Array.from(document.querySelectorAll('.badge-op'));
    badges.forEach(b=>{b.textContent=op.name;b.style.background=op.color;b.classList.remove('show');});
    if(reducedMotion.matches || motionPaused){badges.forEach(b=>b.classList.add('show'));return;}
    let step=0;
    if(nodes[0]) pulse(nodes[0]);
    if(badges[0]) badges[0].classList.add('show');
    dmlTimer=setInterval(()=>{
      if(badges[step]) badges[step].classList.remove('show');
      step++;
      if(step<nodes.length){
        if(badges[step]) badges[step].classList.add('show');
        pulse(nodes[step]);
      } else { clearInterval(dmlTimer); }
    },520);
  }
  function pulse(el){ if(!el)return; el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('pulse'); }

  /* ─────────── stage renderers ─────────── */
  const RENDER = {
    hero(){
      const chips=[
        {cls:'crdb',ic:'db',l:'CockroachDB',s:'source of truth'},
        {cls:'kafka',ic:'kafka',l:'Kafka',s:'change stream'},
        {cls:'conn',ic:'plug',l:'Debezium',s:'the connector'},
        {cls:'crdb',ic:'db',l:'Anywhere',s:'sink / consumer'}
      ];
      let flow='<div class="hero-flow">';
      chips.forEach((c,i)=>{
        flow+='<div class="hero-chip" style="--accent:var(--'+c.cls+');--accent-line:var(--'+c.cls+'-line)">'+
          '<div class="hc-ic">'+IC[c.ic]+'</div><div class="hc-l">'+c.l+'</div><div class="hc-s">'+c.s+'</div></div>';
        if(i<chips.length-1) flow+='<div class="hero-arrow"><div class="hero-spark" style="animation-delay:'+(i*0.55)+'s"></div></div>';
      });
      flow+='</div>';
      return '<div class="hero-art"><div class="grid-tex"></div>'+flow+
        '<div class="hero-tag"><b>Change Data Capture</b>, done natively. Follow a row change from CockroachDB through Debezium to a downstream consumer.</div></div>';
    },
    about(){
      const facts=[
        {cls:'conn',ic:'plug',h:'Native Debezium source',p:'Makes CockroachDB a first-class Debezium source. Standard events integrate with Debezium consumers and sinks; configure mappings for the target.'},
        {cls:'crdb',ic:'bolt',h:'Built on native changefeeds',p:'Uses CockroachDB\u2019s own changefeed infrastructure — not triggers, not log scraping.'},
        {cls:'kafka',ic:'box',h:'Standard envelope',p:'Emits the enriched Debezium envelope: before/after images, op type, and source metadata.'},
        {cls:'obs',ic:'shield',h:'Apache 2.0 · open source',p:'Community-driven, published and versioned on Maven Central.'}
      ];
      let g='<div class="facts">';
      facts.forEach(f=>{ g+='<div class="fact" style="--accent:var(--'+f.cls+');--accent-bg:var(--'+f.cls+'-bg);--accent-line:var(--'+f.cls+'-line)">'+
        '<div class="fi">'+IC[f.ic]+'</div><h4>'+f.h+'</h4><p>'+f.p+'</p></div>'; });
      g+='</div>';
      const coords='io.debezium:debezium-connector-cockroachdb';
      g+='<div class="maven"><div class="ml">Maven Central coordinates</div>'+
        '<button class="copybtn" data-copy="'+coords+'">Copy</button>'+
        '<code><span class="c-dim">// drop into Kafka Connect plugin.path</span>\n<span class="grn">io.debezium</span> : <span class="grn">debezium-connector-cockroachdb</span>\n<span class="c-dim">connector.class =</span> io.debezium.connector.cockroachdb.CockroachDBConnector</code></div>';
      return g;
    },
    usecases(){
      let tabs='<div class="modeseg" id="ucSeg" style="flex-wrap:wrap;height:auto">';
      Object.entries(USECASES).forEach(([k,u],i)=>{ tabs+='<button data-uc="'+k+'"'+(i===0?' class="on"':'')+'>'+esc(u.label)+'</button>'; });
      tabs+='</div><div id="ucDetail"></div>';
      return tabs;
    },
    pipeline(){
      return '<div class="pipe-toolbar">'+
        '<button class="pbtn primary" id="trigBtn">'+IC.bolt+' Simulate a change <span class="kbd">T</span></button>'+
        '<button class="pbtn" id="flowBtn">'+IC.pause+' <span id="flowLbl">Pause flow</span></button>'+
        '<span style="font-size:12px;color:var(--faint);margin-left:auto">Select a stage to inspect its example configuration</span></div>'+
        '<div id="pipeHost"></div>'+
        '<div class="inspect" id="inspect"><div class="empty-hint">Select a stage above to inspect its configuration and role.</div></div>';
    },
    modes(){
      let seg='<div class="modeseg" id="modeSeg">';
      ['kafka','sinkless','embedded'].forEach((k,i)=>{ seg+='<button data-mode="'+k+'"'+(i===0?' class="on"':'')+'>'+k+'</button>'; });
      seg+='</div>';
      return seg+'<div class="mode-desc" id="modeDesc"></div><div id="pipeHost"></div>';
    },
    capabilities(){
      const caps=[
        {ic:'scale',h:'DECIMAL = exact strings',p:'Financial precision preserved to the last digit — no silent JSON double rounding.'},
        {ic:'layers',h:'Multi-schema capture',p:'Non-public schemas flow through with their schema name in the topic name.'},
        {ic:'diff',h:'Schema evolution',p:'ALTER TABLE ADD COLUMN detected live — no connector restart.'},
        {ic:'snapshot',h:'Incremental snapshots',p:'Signal-based re-sync of existing data with zero downtime.'},
        {ic:'trash',h:'Deletes and tombstones',p:'Delete events remove rows downstream; separate null-valued tombstones support Kafka compaction.'},
        {ic:'heart',h:'Heartbeats',p:'Resolved timestamps advance offsets and emit heartbeat records.'},
        {ic:'refresh',h:'Restart-resume',p:'Resumes from persisted offsets. Consumers must tolerate redelivery during recovery.'},
        {ic:'branch',h:'Multi-table changefeeds',p:'Split many tables across changefeeds to avoid per-table coupling.'}
      ];
      let g='<div class="caps">';
      caps.forEach(c=>{ g+='<div class="cap"><div class="ci">'+IC[c.ic]+'</div><div><h4>'+c.h+'</h4><p>'+c.p+'</p></div></div>'; });
      g+='</div>';
      const types=['UUID','STRING','DECIMAL(28,18)','BOOLEAN','JSONB','BYTES','TIMESTAMPTZ','STRING[]','TEXT'];
      g+='<div style="margin-top:20px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--faint)">Data types carried end-to-end</div>'+
        '<div class="types">'+types.map(t=>'<span class="type">'+t+'</span>').join('')+'</div>';
      return g;
    },
    sink(){
      // reverse pipeline: any Debezium source → Kafka → JDBC sink (CockroachDialect) → CockroachDB target
      const chips=[
        {cls:'conn',ic:'plug',l:'Any Debezium source',s:'Postgres · Oracle · MySQL…'},
        {cls:'kafka',ic:'kafka',l:'Kafka',s:'Debezium envelope'},
        {cls:'obs',ic:'plug',l:'JDBC Sink',s:'CockroachDB dialect'},
        {cls:'crdb',ic:'db',l:'CockroachDB',s:'target'}
      ];
      let flow='<div class="hero-art" style="min-height:auto;padding:24px 26px"><div class="grid-tex"></div><div class="hero-flow">';
      chips.forEach((c,i)=>{
        flow+='<div class="hero-chip" style="--accent:var(--'+c.cls+');--accent-line:var(--'+c.cls+'-line)">'+
          '<div class="hc-ic">'+IC[c.ic]+'</div><div class="hc-l">'+c.l+'</div><div class="hc-s">'+c.s+'</div></div>';
        if(i<chips.length-1) flow+='<div class="hero-arrow"><div class="hero-spark" style="animation-delay:'+(i*0.5)+'s"></div></div>';
      });
      flow+='</div></div>';
      // dialect before/now toggle
      let seg='<div class="modeseg" id="dialectSeg" style="margin-top:18px">'+
        '<button data-d="before">Before 3.7</button>'+
        '<button data-d="now" class="on">3.7 \u2192 GA in 3.7.0.Final</button></div>'+
        '<div class="mode-desc" id="dialectDesc"></div>';
      // feature caps
      const caps=[
        {ic:'refresh',h:'Upsert semantics',p:'INSERT \u2026 ON CONFLICT \u2026 DO UPDATE for idempotent, replay-safe writes.'},
        {ic:'trash',h:'Delete propagation',p:'delete.enabled=true applies delete events using the record key.'},
        {ic:'diff',h:'Schema evolution',p:'schema.evolution=basic auto-creates and alters target tables.'},
        {ic:'shield',h:'Serialization retries',p:'Retries serialization conflicts according to flush.max.retries.'}
      ];
      let capg='<div class="caps" style="margin-top:16px">';
      caps.forEach(c=>{ capg+='<div class="cap"><div class="ci" style="background:var(--obs-bg);border-color:var(--obs-line)"><span style="color:var(--obs)">'+IC[c.ic]+'</span></div><div><h4>'+c.h+'</h4><p>'+c.p+'</p></div></div>'; });
      capg+='</div>';
      // sink config block
      const cfg='"connector.class": "io.debezium.connector.jdbc.JdbcSinkConnector",\n'+
        '"connection.url":   "jdbc:postgresql://host:26257/targetdb",\n'+
        '"insert.mode":      "upsert",\n'+
        '"primary.key.mode": "record_key",\n'+
        '"delete.enabled":   "true",\n'+
        '"schema.evolution": "basic"';
      const maven='<div class="maven" style="margin-top:16px"><div class="ml">JDBC sink config \u2014 no dialect pin needed on 3.7+</div>'+
        '<button class="copybtn" data-copy="'+cfg.replace(/"/g,'&quot;')+'">Copy</button>'+
        '<code><span class="c-dim">// CockroachDB dialect auto-resolved from the jdbc:postgresql:// URL</span>\n'+esc(cfg).replace(/("upsert"|"true"|"basic"|"record_key")/g,'<span class="grn">$1</span>')+'</code></div>';
      return flow+seg+maven+capg;
    },
    terminal(){
      return '<div class="termbar">'+
        '<button class="pbtn primary" id="tPlay">'+IC.play+' Play</button>'+
        '<button class="pbtn" id="tStep">'+IC.step+' Step</button>'+
        '<button class="pbtn" id="tRestart">'+IC.restart+' Restart</button>'+
        '<button class="pbtn" id="tSpeed">1\u00d7</button>'+
        '<span style="font-size:12px;color:var(--faint);margin-left:auto">crdb-to-crdb · flagship demo</span></div>'+
        '<div class="term">'+
          '<div class="term-head"><span class="tdot r"></span><span class="tdot y"></span><span class="tdot g"></span>'+
            '<span class="term-title">~/debezium-cockroachdb-examples/crdb-to-crdb — zsh</span>'+
            '<span class="term-note">scripted playback of the documented flow · not a live shell</span></div>'+
          '<div class="term-body" id="termBody"></div>'+
          '<div class="term-progress"><div class="bar" id="termBar"></div></div>'+
        '</div>';
    },
    cta(){
      const cards=[
        {ic:'box',h:'Maven Central',p:'io.debezium:debezium-connector-cockroachdb — the released connector plugin.',url:LINKS.maven},
        {ic:'github',h:'Examples repo',p:'Runnable demos with verification steps: CRDB\u2192CRDB, Oracle, Iceberg, Neo4j, sinkless, mTLS, embedded.',url:LINKS.examples},
        {ic:'book',h:'Debezium docs',p:'Full configuration reference: properties, delivery modes, data types, monitoring.',url:LINKS.docs},
        {ic:'people',h:'Community · Zulip',p:'The CockroachDB channel on Debezium Zulip — come help shape the connector.',url:LINKS.zulip}
      ];
      let g='<div class="ctagrid">';
      cards.forEach(c=>{ g+='<a class="ctacard" href="'+c.url+'"><div class="arr">'+IC.link+'</div><div class="cti">'+IC[c.ic]+'</div><h4>'+(c.ic==='github'?IC.github:'')+c.h+'</h4><p>'+c.p+'</p></a>'; });
      g+='</div>';
      g+='<div class="signoff">CockroachDB is now a <b>native Debezium source</b> — and, with the 3.7 dialect, a <b>native sink target</b> too. Clone it, run <span class="mono">./run-demo.sh</span>, and watch a row change replicate in seconds.</div>';
      return g;
    }
  };

  /* ─────────── after-render wiring per chapter ─────────── */
  function wire(key){
    // generic: any copy buttons on the stage
    stage.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',()=>copyText(b.dataset.copy)));
    if(key==='usecases'){
      const host=document.getElementById('ucDetail');
      const setUC=(k)=>{
        const u=USECASES[k];
        let flow='<div class="hero-art" style="min-height:auto;padding:22px 24px;margin-top:16px"><div class="grid-tex"></div><div class="hero-flow">';
        u.flow.forEach((c,i)=>{
          flow+='<div class="hero-chip" style="--accent:var(--'+c.cls+');--accent-line:var(--'+c.cls+'-line)"><div class="hc-ic">'+IC[c.ic]+'</div><div class="hc-l">'+esc(c.l)+'</div></div>';
          if(i<u.flow.length-1) flow+='<div class="hero-arrow"><div class="hero-spark" style="animation-delay:'+(i*0.5)+'s"></div></div>';
        });
        flow+='</div></div>';
        const pts='<ul class="uc-points">'+u.points.map(p=>'<li>'+IC.check+'<span>'+esc(p)+'</span></li>').join('')+'</ul>';
        host.innerHTML=flow+'<p class="uc-desc">'+u.desc+'</p>'+pts;
        stage.querySelectorAll('#ucSeg button').forEach(b=>{b.classList.toggle('on',b.dataset.uc===k);b.setAttribute('aria-pressed',String(b.dataset.uc===k));});
      };
      stage.querySelectorAll('#ucSeg button').forEach(b=>b.addEventListener('click',()=>setUC(b.dataset.uc)));
      setUC('lakehouse');
    }
    if(key==='sink'){
      const desc=document.getElementById('dialectDesc');
      const DIA={
        before:{cls:'red',html:'<span class="tag">Before 3.7</span> The sink didn\u2019t recognize CockroachDB and fell back to the <b>generic dialect</b> — which can\u2019t build <b>INSERT \u2026 ON CONFLICT \u2026 DO UPDATE</b>. The workaround was pinning <b>hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect</b> by hand.'},
        now:{cls:'crdb',html:'<span class="tag">3.7.0.Final</span> A dedicated <b>CockroachDB dialect</b> is auto-resolved from the <b>jdbc:postgresql://</b> URL \u2014 no pin. Full upsert support, delete propagation, and in-place retry of serialization conflicts. Landed in 3.7.0.Alpha1; <b>GA in 3.7.0.Final</b>.'}
      };
      // 'red' isn't a defined accent triple → map to red vars inline
      const setDia=(d)=>{
        const o=DIA[d];
        if(d==='before'){ desc.style.cssText='--accent:var(--red);--accent-bg:rgba(207,33,50,.10);--accent-line:rgba(207,33,50,.35)'; }
        else { desc.style.cssText='--accent:var(--crdb);--accent-bg:var(--crdb-bg);--accent-line:var(--crdb-line)'; }
        desc.innerHTML=o.html;
        stage.querySelectorAll('#dialectSeg button').forEach(b=>{b.classList.toggle('on',b.dataset.d===d);b.setAttribute('aria-pressed',String(b.dataset.d===d));});
      };
      stage.querySelectorAll('#dialectSeg button').forEach(b=>b.addEventListener('click',()=>setDia(b.dataset.d)));
      setDia('now');
    }
    if(key==='pipeline'){
      const host=document.getElementById('pipeHost');
      renderPipeline(host,'kafka',true);
      selectNode('srcconn');
      let flowing=true;
      const flowBtn=document.getElementById('flowBtn'), flowLbl=document.getElementById('flowLbl');
      flowBtn.addEventListener('click',()=>{
        flowing=!flowing;
        stage.querySelectorAll('.fedge').forEach(e=>e.classList.toggle('flowing',flowing));
        flowBtn.querySelector('svg').outerHTML = flowing?IC.pause:IC.play; flowBtn.setAttribute('aria-pressed',String(!flowing));
        flowLbl.textContent=flowing?'Pause flow':'Resume flow';
      });
      document.getElementById('trigBtn').addEventListener('click',triggerDML);
    }
    if(key==='modes'){
      const host=document.getElementById('pipeHost');
      const desc=document.getElementById('modeDesc');
      const setMode=(mode)=>{
        host.innerHTML=''; renderPipeline(host,mode,false);
        const m=MODES[mode];
        desc.style.cssText='--accent:var(--'+m.tagcls+');--accent-bg:var(--'+m.tagcls+'-bg);--accent-line:var(--'+m.tagcls+'-line)';
        desc.innerHTML=m.desc;
        stage.querySelectorAll('#modeSeg button').forEach(b=>{b.classList.toggle('on',b.dataset.mode===mode);b.setAttribute('aria-pressed',String(b.dataset.mode===mode));});
      };
      stage.querySelectorAll('#modeSeg button').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
      setMode('kafka');
    }
    if(key==='terminal'){ setupTerminal(); }

  }

  /* ─────────── terminal playback ─────────── */
  const TERM = [
    {t:'cmd',x:'./run-demo.sh'},
    {t:'info',x:'CockroachDB \u2192 CockroachDB replication via Kafka Connect (Debezium)'},
    {t:'blank'},
    {t:'step',x:'STEP 1/22  Obtain connector plugin'},
    {t:'info',x:'  Downloading io.debezium:debezium-connector-cockroachdb:3.7.0.Final from Maven Central\u2026'},
    {t:'ok',x:'  \u2714 debezium-connector-cockroachdb-3.7.0.Final-plugin.tar.gz'},
    {t:'step',x:'STEP 2/22  Extract plugin \u2192 connect-plugins/'},
    {t:'ok',x:'  \u2714 extracted'},
    {t:'step',x:'STEP 3/22  Start Docker Compose (source CRDB, target CRDB, Zookeeper, Kafka, Connect)'},
    {t:'info',x:'  Creating demo-cockroachdb          \u2026 done'},
    {t:'info',x:'  Creating demo-cockroachdb-target   \u2026 done'},
    {t:'info',x:'  Creating demo-zookeeper            \u2026 done'},
    {t:'info',x:'  Creating demo-kafka               \u2026 done'},
    {t:'info',x:'  Creating demo-connect             \u2026 done'},
    {t:'step',x:'STEP 4/22  Wait for source CockroachDB (26257)'},
    {t:'ok',x:'  \u2714 source up'},
    {t:'step',x:'STEP 5/22  Wait for target CockroachDB (26258)'},
    {t:'ok',x:'  \u2714 target up'},
    {t:'step',x:'STEP 6/22  Setup source database (multi-schema)'},
    {t:'info',x:'  SET CLUSTER SETTING kv.rangefeed.enabled = true;'},
    {t:'info',x:'  CREATE TABLE public.orders / public.customers / inventory.warehouse_items'},
    {t:'ok',x:'  \u2714 rangefeed enabled, CHANGEFEED granted'},
    {t:'step',x:'STEP 7/22  Setup target database (tables auto-created by sink)'},
    {t:'ok',x:'  \u2714 targetdb ready'},
    {t:'step',x:'STEP 8/22  Wait for Kafka Connect REST API (8083)'},
    {t:'ok',x:'  \u2714 Connect up'},
    {t:'step',x:'STEP 9/22  Verify connector plugins discovered'},
    {t:'ok',x:'  \u2714 CockroachDBConnector  \u2714 JdbcSinkConnector'},
    {t:'step',x:'STEP 10/22  Deploy Debezium CockroachDB source connector'},
    {t:'info',x:'  POST /connectors  debezium-cockroachdb-source'},
    {t:'ok',x:'  \u2714 RUNNING  (task 0: RUNNING)'},
    {t:'info',x:'  Starting CockroachDB streaming from cursor \u2019now\u2019 \u2026'},
    {t:'ok',x:'  \u2714 SHOW CHANGEFEED JOBS \u2192 2 running jobs (max.tables.per.changefeed=2)'},
    {t:'step',x:'STEP 11/22  Insert 3 rows into source.orders'},
    {t:'ok',x:'  \u2714 INSERT 3'},
    {t:'step',x:'STEP 12/22  Deploy Debezium JDBC sink connector'},
    {t:'ok',x:'  \u2714 RUNNING  \u2192 auto-created targetdb.orders_replica (schema.evolution=basic)'},
    {t:'step',x:'STEP 13/22  Run DML: 2 UPDATE, 1 DELETE, customer UPDATE + INSERT'},
    {t:'ok',x:'  \u2714 DML applied'},
    {t:'step',x:'STEP 14/22  Schema evolution: ALTER TABLE orders ADD COLUMN priority'},
    {t:'info',x:'  Schema change detected \u2192 Schema refreshed  (no restart)'},
    {t:'ok',x:'  \u2714 new column flows automatically'},
    {t:'step',x:'STEP 15/22  Incremental snapshot (signal-based, no restart)'},
    {t:'info',x:'  INSERT INTO debezium_signal (\u2019execute-snapshot\u2019, {"data-collections":["public.orders"]})'},
    {t:'ok',x:'  \u2714 op:"r" snapshot rows interleave with live changes'},
    {t:'step',x:'STEP 20/22  Display Debezium change events (output topic crdb.public.orders)'},
    {t:'ev',x:'  {"op":"c","after":{"order_number":"ORD-001","amount":"149.99","status":"pending"}}'},
    {t:'ev',x:'  {"op":"u","before":{"status":"pending"},"after":{"status":"shipped"}}'},
    {t:'ev',x:'  {"op":"d","before":{"order_number":"ORD-003"},"after":null}   \u2190 delete event (tombstone follows)'},
    {t:'step',x:'STEP 20b/22  Multi-schema regression check (dbz#1973)'},
    {t:'ok',x:'  \u2714 events present on crdb.inventory.warehouse_items'},
    {t:'step',x:'STEP 21/22  Verify target vs source row counts'},
    {t:'info',x:'  source.orders = 4    target.orders_replica = 4'},
    {t:'ok',x:'  \u2714 ROW COUNTS MATCH'},
    {t:'step',x:'STEP 22/22  Summary'},
    {t:'blank'},
    {t:'hl',x:'  \u2714\u2714\u2714  REPLICATION VERIFIED  \u2014  source and target are consistent'},
    {t:'blank'},
    {t:'info',x:'  Source UI  http://localhost:8080     Target UI  http://localhost:8081'},
    {t:'info',x:'  Connect    http://localhost:8083     Watch      kafka-console-consumer --topic crdb.public.orders'},
    {t:'dim',x:'  (tip: WORKLOAD=bank ./run-demo.sh  \u2014  proves row-count AND sum(balance) parity under concurrent traffic)'},
    {t:'blank'},
    {t:'prompt',x:'$ \u2588'}
  ];
  let termIdx=0, termPlaying=false, termTimer=null, termSpeed=1;
  const SPEEDS=[1,2,4,0.5];
  function termLineHTML(line){
    if(line.t==='blank') return '<div class="tl">&nbsp;</div>';
    if(line.t==='cmd') return '<div class="tl"><span class="c-prompt">$ </span><span class="c-cmd">'+esc(line.x)+'</span></div>';
    const cls={step:'c-step',ok:'c-ok',info:'c-info',warn:'c-warn',ev:'c-ev',dim:'c-dim',hl:'c-hl',prompt:'c-prompt'}[line.t]||'c-info';
    const pre = line.t==='step' ? '\u25b6 ' : '';
    return '<div class="tl"><span class="'+cls+'">'+pre+esc(line.x)+'</span></div>';
  }
  function termStep(){
    if(termIdx>=TERM.length){ termStop(); return false; }
    const body=document.getElementById('termBody'); if(!body) return false;
    body.insertAdjacentHTML('beforeend', termLineHTML(TERM[termIdx]));
    termIdx++;
    body.scrollTop=body.scrollHeight;
    const bar=document.getElementById('termBar'); if(bar) bar.style.width=Math.round(termIdx/TERM.length*100)+'%';
    return true;
  }
  function termPlay(){
    if(termPlaying) return;
    termPlaying=true; setPlayBtn();
    const tick=()=>{
      if(!termPlaying) return;
      const cont=termStep();
      if(!cont){ termStop(); return; }
      const line=TERM[termIdx-1];
      let d=line.t==='step'?520:(line.t==='ev'?360:220);
      if(line.t==='blank') d=90;
      termTimer=setTimeout(tick, d/termSpeed);
    };
    tick();
  }
  function termStop(){ termPlaying=false; clearTimeout(termTimer); setPlayBtn(); }
  function setPlayBtn(){ const b=document.getElementById('tPlay'); if(!b) return; b.innerHTML=(termPlaying?IC.pause+' Pause':IC.play+' Play'); }
  function termReset(){
    termStop(); termIdx=0; termSpeed=1;
    const body=document.getElementById('termBody'); if(body) body.innerHTML='';
    const bar=document.getElementById('termBar'); if(bar) bar.style.width='0';
    const sp=document.getElementById('tSpeed'); if(sp) sp.textContent='1\u00d7';
  }
  function setupTerminal(){
    termReset();
    document.getElementById('tPlay').addEventListener('click',()=>{ termPlaying?termStop():termPlay(); });
    document.getElementById('tStep').addEventListener('click',()=>{ termStop(); termStep(); });
    document.getElementById('tRestart').addEventListener('click',()=>{ termReset(); });
    document.getElementById('tSpeed').addEventListener('click',(e)=>{
      const i=(SPEEDS.indexOf(termSpeed)+1)%SPEEDS.length; termSpeed=SPEEDS[i];
      e.currentTarget.textContent=termSpeed+'\u00d7';
    });
  }

  /* ─────────── render a chapter ─────────── */
  function renderScript(c){
    scTc.textContent=String(cur+1).padStart(2,'0')+' / '+String(CH.length).padStart(2,'0');
    let h='';
    c.say.forEach(s=>{ h+='<div class="sc-line"><span class="b">\u25b8</span><span>'+s+'</span></div>'; });
    h+='<div class="sc-key"><div class="kl">'+esc(c.key_l)+'</div><div class="kt">"'+esc(c.key_t)+'"</div></div>';
    scBody.innerHTML=h; scBody.scrollTop=0;
  }
  function go(i, moveFocus=true){
    if(i<0||i>=CH.length) return;
    termStop(); clearInterval(dmlTimer);
    cur=i; const c=CH[i];
    stage.classList.remove('fade'); void stage.offsetWidth; stage.classList.add('fade');
    document.getElementById('chapterStatus').textContent='Chapter '+(i+1)+' of '+CH.length+': '+c.title;
    stage.innerHTML='<div class="kicker"><span class="dot"></span>'+esc(c.kicker)+'</div>'+
      '<h2 id="chapterHeading" tabindex="-1">'+esc(c.title)+'</h2><p class="lede">'+esc(c.lede)+'</p>'+RENDER[c.stage]();
    wire(c.stage);
    renderScript(c);
    // header state
    Array.from(timeline.children).forEach((b,bi)=>{
      b.classList.toggle('active',bi===i); b.setAttribute('aria-current',bi===i?'step':'false');
      b.classList.toggle('done',bi<i);
    });
    document.getElementById('prevBtn').disabled=(i===0);
    const nb=document.getElementById('nextBtn');
    const last=(i===CH.length-1);
    nb.disabled=last;
    nb.innerHTML= last ? ('That\u2019s a wrap '+IC.check) : ('Next '+IC2next);
    if(timeline.children[i]) timeline.children[i].scrollIntoView({block:'nearest',inline:'center',behavior:'auto'});
    window.scrollTo({top:0,behavior:'instant'});
    if(moveFocus) document.getElementById('chapterHeading').focus({preventScroll:true});
  }
  const IC2next='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';

  /* ─────────── controls ─────────── */
  document.getElementById('prevBtn').addEventListener('click',()=>go(cur-1));
  document.getElementById('nextBtn').addEventListener('click',()=>go(cur+1));
  document.addEventListener('keydown',e=>{
    if(e.target.closest('input,textarea,select,button,a,summary,[contenteditable]') || e.altKey || e.ctrlKey || e.metaKey) return;
    if(e.key==='ArrowRight') go(cur+1);
    else if(e.key==='ArrowLeft') go(cur-1);
    else if((e.key==='t'||e.key==='T') && CH[cur].stage==='pipeline'){ const b=document.getElementById('trigBtn'); if(b) triggerDML(); }
  });

  /* ─────────── theme ─────────── */
  const themeBtn=document.getElementById('themeBtn');
  function applyTheme(dark){ document.documentElement.classList.toggle('dark',dark); themeBtn.setAttribute('aria-pressed',String(dark));
    themeBtn.querySelector('svg').innerHTML = dark
      ? '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
  themeBtn.addEventListener('click',()=>applyTheme(!document.documentElement.classList.contains('dark')));
  applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);

  const motionBtn=document.getElementById('motionBtn');
  let motionPaused=reducedMotion.matches;
  function setMotion(){document.documentElement.classList.toggle('motion-paused',motionPaused);motionBtn.setAttribute('aria-pressed',String(motionPaused));motionBtn.textContent=motionPaused?'Resume motion':'Pause motion';}
  motionBtn.addEventListener('click',()=>{motionPaused=!motionPaused;setMotion();});
  reducedMotion.addEventListener('change',()=>{motionPaused=reducedMotion.matches;setMotion();});
  setMotion();
  /* ─────────── go ─────────── */
  go(0, false);
})();
