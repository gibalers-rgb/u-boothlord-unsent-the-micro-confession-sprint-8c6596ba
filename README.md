# Unsent: The Micro-Confession Sprint

[![Unsent: The Micro-Confession Sprint](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/gibalers-rgb/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/gibalers-rgb/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for the [Unsent: The Micro-Confession Sprint](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) bounty on make.fun.

## What it does

`main.ts` writes one two-part micro-confession to `/output/entry.txt`: a `To:` line naming who the message was meant for, and the unsent line itself, written exactly as it was typed — no explanation after it.

The confession:

```text
To: my best friend from high school
i've opened your profile every birthday for six years, typed happy birthday, and deleted it before i hit send
```

145 characters total (gate: 1–260), message line 109 characters (max 200). It stayed in drafts because too much time passed: every birthday the draft got harder to send, not easier.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Node 22+, standard library only, deterministic, no network, no secrets.
