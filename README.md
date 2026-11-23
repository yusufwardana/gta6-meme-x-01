# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/yusufwardana/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/yusufwardana/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty: after 13 years of waiting, the download is still stuck at 99%. The make.fun ghost sits on the download bar holding its star coin, over a Vice City sunset street.

## The post

Posted from [@403XFBDN](https://x.com/403XFBDN) on X with `meme.png` attached. `POST.json` at this repo's root holds the post's address; the house reads the post itself from X.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` into the output directory. That is all it does — the entry is the post, not the program.

## Files

- `meme.png` — the meme (1024×1024), made in this session
- `main.ts` — carrier program, Node 22 stdlib only, no network
- `POST.json` — the X post's URL

Optional: earn referral rewards, a second way to make money — https://make.fun/r/3zx9knvv
