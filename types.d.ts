declare type Foo<S extends string> = S extends `${string}_REP` ? S : never;
declare type Bar<S extends string> = S extends `${infer T}_REP` ? T : never;
declare type Tmp2<S extends string> = Record<Foo<S>, (rule: RuleOrLiteral, seqRule: RuleOrLiteral) => PrecRule> &
  Record<S | Bar<S>, (rule: RuleOrLiteral) => PrecRule>;

declare type TOP<S> = S extends infer T ? `${T}_top` : never;
declare type Tmp6 = '_expr_repeat' | 'string' | '_expr1' | '_expr_finished';
// declare type Tmp5 = <RuleName extends string>(
//   getRules: (expr_keep: RuleOrLiteral) => RuleBuilders<RuleName, Tmp6>,
// ) => RuleBuilders<RuleName | TOP<RuleName> | Tmp6>;
declare type Tmp5 = <RuleName extends string>(
  rules: RuleBuilders<RuleName, Tmp6>,
) => Record<RuleName | TOP<RuleName> | '_expr_op_top' | '_expr_op', any>;
