declare type Foo<S extends string> = S extends `${string}_REP` ? S : never;
declare type Tmp2<S extends string> = Record<Foo<S>, ($: GrammarSymbols<string>, rule: RuleOrLiteral) => PrecRule> &
  Record<S, (rule: RuleOrLiteral) => PrecRule>;
