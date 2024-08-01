import { BaseFilter, Item } from "jsr:@shougo/ddc-vim@6.0.0/types";
import { Denops } from "jsr:@denops/core@7.0.1";

function calcStore(a: Item, b: Item): number {
  const wordA = a.word.toLowerCase();
  const wordB = b.word.toLowerCase();
  let score = 0;
  if (wordA > wordB) {
    score += 1;
  } else if (wordA < wordB) {
    score -= 1;
  }
  return score;
}

export class Filter extends BaseFilter<Record<string, never>> {
  filter(args: {
    denops: Denops;
    completeStr: string;
    items: Item[];
  }): Promise<Item[]> {
    args.items.sort();
    return Promise.resolve(args.items.sort(calcStore));
  }
  params(): Record<string, never> {
    return {};
  }
}
