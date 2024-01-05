import { BaseFilter, Item } from "https://deno.land/x/ddc_vim@v4.3.1/types.ts";
import { Denops } from "https://deno.land/x/ddc_vim@v4.3.1/deps.ts";

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
