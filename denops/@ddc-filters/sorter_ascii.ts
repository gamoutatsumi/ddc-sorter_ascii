import {
  BaseFilter,
  Candidate,
} from "https://deno.land/x/ddc_vim@v0.13.0/types.ts#^";
import { Denops } from "https://deno.land/x/ddc_vim@v0.13.0/deps.ts#^";

function calcStore(a: Candidate, b: Candidate): number {
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
    candidates: Candidate[];
  }): Promise<Candidate[]> {
    args.candidates.sort();
    return Promise.resolve(args.candidates.sort(calcStore));
  }
  params(): Record<string, never> {
    return {};
  }
}
