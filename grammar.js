// @ts-check
/// <reference path="./node_modules/tree-sitter-cli/dsl.d.ts" />

/** @type any */
const EXTERNAL = Symbol('EXTERNAL RULE');

/** @type typeof grammar */
const grammar0 = (/** @type any */ e) => {
  return grammar({
    ...e,
    rules: Object.fromEntries(Object.entries(e.rules).filter(([, v]) => v !== EXTERNAL)),
  });
};

const REP = Symbol('rep');
// https://reference.wolfram.com/language/tutorial/OperatorInputForms.html
const PREC_ORIG = [
  {
    MESSAGE_NAME_REP: REP,
  },
  {
    SHARP: prec,
    PERCENT: prec,
    UNDERSCORE: prec,
  },
  {
    GET: prec,
  },
  {
    UNDEROVERSCRIPT: prec,
  },
  {
    OVERUNDERSCRIPT: prec,
  },
  {
    OVERSCRIPT: prec.right,
  },
  {
    UNDERSCRIPT: prec.right,
  },
  //
  {
    SUBSCRIPT_POWER: prec,
  },
  {
    SUBSCRIPT: prec.right,
  },
  //
  {
    // No precedence. 3 or more operands are not allowed.
    PATTERN_TEST: prec.left,
  },
  {
    APPLY: prec,
    PART: prec,
  },
  {
    INCREMENT: prec,
    DECREMENT: prec,
  },
  {
    PRE_INCREMENT: prec,
    PRE_DECREMENT: prec,
  },
  {
    COMPOSITION_REP: REP,
  },
  {
    RIGHT_COMPOSITION_REP: REP,
  },
  {
    APPLICATION: prec.left,
  },
  {
    APPLY_AT: prec.right,
  },
  {
    TILDE: prec.left,
  },
  {
    MAP: prec.right,
    MAP_ALL: prec.right,
    APPLY_ATAT: prec.right,
    APPLY_ATATAT: prec.right,
  },
  {
    FACTORIAL: prec,
    FACTORIAL2: prec,
  },
  {
    DERIVATIVE: prec,
  },
  {
    STRING_JOIN_REP: REP,
  },
  {
    POWER: prec.right,
    POWER_SUBSCRIPT: prec.left,
  },
  {
    SQRT: prec,
    ANY_ROOT: prec,
  },
  {
    DIFFERENTIAL_D: prec,
    DEL: prec,
  },
  {
    SQUARE: prec,
    SMALL_CIRCLE_REP: REP,
  },
  {
    CIRCLE_DOT_REP: REP,
  },
  {
    NON_COMMUTATIVE_MULTIPLY_REP: REP,
  },
  {
    CROSS_REP: REP,
  },
  {
    DOT_REP: REP,
  },
  {
    NEGATIVE: prec,
    POSITIVE: prec,
    NEGATIVE_POSITIVE: prec,
  },
  {
    PER: prec.left,
    DIVIDE: prec.left,
    DIVIDE_BOX: prec.left,
  },
  {
    BACKSLASH_REP: REP,
  },
  {
    DIAMOND_REP: REP,
  },
  {
    WEDGE_REP: REP,
  },
  {
    VEE_REP: REP,
  },
  {
    CIRCLE_TIMES_REP: REP,
  },
  {
    CENTER_DOT_REP: REP,
  },
  {
    TIMES_AST_REP: REP,
    TIMES_CROSS_REP: REP,
  },
  {
    STAR_REP: REP,
  },
  {
    VERTICAL_TILDE_REP: REP,
  },
  {
    COPRODUCT_REP: REP,
  },
  {
    CAP_REP: REP,
  },
  {
    CUP_REP: REP,
  },
  {
    CIRCLE_PLUS_REP: REP,
    CIRCLE_MINUS: prec.left,
  },
  {
    INTEGRATE: prec,
  },
  {
    PLUS_REP: REP,
    MINUS_REP: REP,
    PLUS_MINUS: prec.left,
    MINUS_PLUS: prec.left,
  },
  {
    NEGATIVE: prec,
    POSITIVE: prec,
    NEGATIVE_POSITIVE: prec,
  },
  {
    INTERSECTION_REP: REP,
  },
  {
    UNION_REP: REP,
  },
  {
    SPAN_REP: REP,
  },
  {
    EQUAL_REP: REP,
    UNEQUAL_REP: REP,
    GREATER_REP: REP,
    GREATER_EQUAL_REP: REP,
    LESS_REP: REP,
    LESS_EQUAL_REP: REP,
  },
  {
    DOUBLE_VERTICAL_BAR_REP: REP,
    NON_DOUBLE_VERTICAL_BAR_REP: REP,
  },
  {
    SAME_Q_REP: REP,
    UNSAME_Q_REP: REP,
  },
  {
    ELEMENT_REP: REP,
    NOT_ELEMENT_REP: REP,
    SUBSET_REP: REP,
    SUPERSET_REP: REP,
  },
  {
    NOT: prec,
    NEGATE: prec,
  },
  {
    AND_REP: REP,
    AND_WEDGE_REP: REP,
    NAND_WEDGE_REP: REP,
  },
  {
    XOR_REP: REP,
    XNOR_REP: REP,
  },
  {
    OR_REP: REP,
    OR_VEE_REP: REP,
    NOR_VEE_REP: REP,
  },
  {
    EQUIVALENT_REP: REP,
  },
  {
    IMPLIES: prec.right,
    ROUND_IMPLIES: prec.right,
  },
  {
    RIGHT_TEE: prec.right,
    DOUBLE_RIGHT_TEE: prec.right,
    LEFT_TEE: prec.left,
    DOUBLE_LEFT_TEE: prec.left,
    UP_TEE: prec.left,
    DOWN_TEE: prec.left,
  },
  {
    SUCH_THAT: prec.right,
  },
  {
    REPEATED: prec,
    REPEATED_NULL: prec,
  },
  {
    ALTERNATIVES_REP: REP,
  },
  {
    PATTERN: prec,
    OPTIONAL_PATTERN: prec,
    OPTIONAL: prec,
  },
  {
    STRING_EXPRESSION_REP: REP,
  },
  {
    CONDITION: prec.left,
  },
  {
    TWO_WAY_RULE: prec.right,
  },
  {
    RULE_ASCII: prec.right,
    RULE: prec.right,
    RULE_DELAYED_ASCII: prec.right,
    RULE_DELAYED: prec.right,
  },
  {
    REPLACE_ALL: prec.left,
    REPLACE_REPEATED: prec.left,
  },
  {
    ADD_TO: prec.right,
    SUBTRACT_FROM: prec.right,
    TIMES_BY: prec.right,
    DIVIDE_BY: prec.right,
  },
  {
    FUNCTION_ANONYMOUS: prec,
  },
  {
    COLON_REP: REP,
  },
  {
    APPLY_TO: prec.right,
  },
  {
    BACK_APPLY: prec.left,
  },
  {
    VERTICAL_SEPARATOR_REP: REP,
  },
  {
    THEREFORE: prec.right,
    BECAUSE: prec.left,
  },
  {
    SET: prec.right,
    SET_DELAYED: prec.right,
    UP_SET: prec.right,
    UP_SET_DELAYED: prec.right,
    TAG_SET: prec.right,
    TAG_SET_DELAYED: prec.right,
    UNSET: prec.right,
    TAG_UNSET: prec.right,
    FUNCTION_ARROW: prec.right,
  },
  {
    PUT: prec,
    PUT_APPEND: prec,
  },
];
/**
 * @type Tmp2<
 *   keyof typeof PREC_ORIG[number]
 * >
 */
const PREC = (() => {
  /** @type any */
  const tmp = Object.fromEntries(
    PREC_ORIG.flatMap((e, i) =>
      Object.entries(e).flatMap(([key, grouping]) => [
        key.endsWith('_REP')
          ? [
              key,
              (/** @type any */ $, /** @type any */ sepRule) =>
                prec.left(-i * 2, seq($._expr, repeat1(prec(-i * 2 + 1, seq(sepRule, $._expr))))),
            ]
          : [key, (/** @type any */ rule) => grouping(-i * 2, rule)],
      ]),
    ),
  );
  return tmp;
})();

module.exports = grammar0({
  name: 'wolfram',
  extras: ($) => [/\s/, $.comment],
  externals: (/** @type any */ $) => [$.comment],
  conflicts: ($) => [
    [$.underscript, $.underoverscript, $.overunderscript],
    [$.overscript, $.underscript, $.underoverscript],
    [$.overscript_operator, $.overunderscript_operator_left],
    [$.underscript_operator, $.underoverscript_operator_left],
    [$.subscript_operator, $.subscript_power_operator_left],
    [$.tilde_operator_left, $.tilde_operator_right],
    [$.power, $.power_subscript],
    [$.sqrt, $.any_root],
  ],

  rules: {
    comment: EXTERNAL,

    source_file: ($) => repeat(choice(prec(-100000, $._expr), ';')),
    _expr: ($) =>
      choice(
        $._symbol,
        $.apply,
        $.list,
        $.part,
        $.association,
        $.number,
        $._function,
        $.blank,
        $.blank_sequence,
        $.blank_null_sequence,
        $.alternatives,
        $.message_name,
        $.get,
        $.overscript,
        $.underscript,
        $.underoverscript,
        $.overunderscript,
        $.subscript,
        $.subscript_power,
        $.pattern_test,
        $.increment,
        $.decrement,
        $.pre_increment,
        $.pre_decrement,
        $.composition,
        $.right_composition,
        // $.application,
        $.apply_at,
        $.tilde,
        $.map,
        $.map_all,
        $.apply_atat,
        $.apply_atatat,
        $.factorial,
        $.factorial2,
        $.derivative,
        $.string_join,
        $.power,
        $.power_subscript,
        $.sqrt,
        $.any_root,
        // $.diffrential_d,
        $.del,
        // $.square,
        $.small_circle,
        $.circle_dot,
        $.non_commutative_multiply,
        // $.cross,
        $.dot,
        $.negative,
        $.positive,
        // prec(20000, $.positive),
        // $._foo,
        $.negative_positive,
        $.per,
        $.divide,
        $.divide_box,
        $.backslash,
        $.diamond,
        $.wedge,
        $.vee,
        $.circle_times,
        $.circle_dot,
        $.times_ast,
        $.times_cross,
        $.star,
        $.vertical_tilde,
        $.coproduct,
        // $.cap,
        // $.cup,
        $.circle_plus,
        $.circle_minus,
        // $.integrate
        // prec(10000, $.plus),
        $.plus,
        $.minus,
        $.plus_minus,
        $.string,
      ),
    // _foo: ($) => choice($.plus, $.positive),
    // _foo1: ($) => prec(200000, $.plus),
    // _foo2: ($) => prec(100000, $.positive),
    _expr_repeat: ($) => seq($._expr, repeat(seq(',', $._expr))),

    apply: ($) => PREC.APPLY(seq($._expr, $.apply_bracket_begin, optional($._expr_repeat), $.apply_bracket_end)),
    apply_bracket_begin: ($) => '[',
    apply_bracket_end: ($) => ']',

    _symbol: ($) => choice($.user_symbol, $.builtin_symbol),
    user_symbol: ($) => $._lower_identifier,
    builtin_symbol: ($) => $._upper_identifier,

    subscript: ($) => PREC.SUBSCRIPT(seq($._expr, $.subscript_operator, $._expr)),
    subscript_operator: ($) => '\\_',

    subscript_power: ($) =>
      PREC.SUBSCRIPT_POWER(
        seq($._expr, $.subscript_power_operator_left, $._expr, $.subscript_power_operator_right, $._expr),
      ),
    subscript_power_operator_left: ($) => '\\_',
    subscript_power_operator_right: ($) => '\\%',

    pattern_test: ($) => PREC.PATTERN_TEST(seq($._expr, $.pattern_test_operator, $._expr)),
    pattern_test_operator: ($) => '?',

    message_name: ($) => PREC.MESSAGE_NAME_REP($, $.message_name_operator),
    message_name_operator: ($) => '::',

    apply_at: ($) => PREC.APPLY_AT(seq($._expr, $.apply_at_operator, $._expr)),
    apply_at_operator: ($) => '@',

    tilde: ($) => PREC.TILDE(seq($._expr, $.tilde_operator_left, $._expr, $.tilde_operator_right, $._expr)),
    tilde_operator_left: ($) => '~',
    tilde_operator_right: ($) => '~',

    composition: ($) => PREC.COMPOSITION_REP($, $.composition_operator),
    composition_operator: ($) => '@*',

    right_composition: ($) => PREC.RIGHT_COMPOSITION_REP($, $.right_composition_operator),
    right_composition_operator: ($) => '/*',

    get: ($) => PREC.GET(seq($.get_operator, $.string)),
    get_operator: ($) => '<<',

    increment: ($) => PREC.INCREMENT(seq($._expr, $.increment_operator)),
    increment_operator: ($) => '++',

    decrement: ($) => PREC.DECREMENT(seq($._expr, $.decrement_operator)),
    decrement_operator: ($) => '--',

    pre_increment: ($) => PREC.PRE_INCREMENT(seq($.pre_increment_operator, $._expr)),
    pre_increment_operator: ($) => '++',

    pre_decrement: ($) => PREC.PRE_DECREMENT(seq($.pre_decrement_operator, $._expr)),
    pre_decrement_operator: ($) => '--',

    overscript: ($) => PREC.OVERSCRIPT(seq($._expr, $.overscript_operator, $._expr)),
    overscript_operator: ($) => '\\&',

    underscript: ($) => PREC.UNDERSCRIPT(seq($._expr, $.underscript_operator, $._expr)),
    underscript_operator: ($) => '\\+',

    underoverscript: ($) =>
      PREC.UNDEROVERSCRIPT(
        seq($._expr, $.underoverscript_operator_left, $._expr, $.underoverscript_operator_right, $._expr),
      ),
    underoverscript_operator_left: ($) => '\\+',
    underoverscript_operator_right: ($) => '\\%',

    overunderscript: ($) =>
      PREC.OVERUNDERSCRIPT(
        seq($._expr, $.overunderscript_operator_left, $._expr, $.overunderscript_operator_right, $._expr),
      ),
    overunderscript_operator_left: ($) => '\\&',
    overunderscript_operator_right: ($) => '\\%',

    list: ($) => seq($.list_bracket_begin, optional($._expr_repeat), $.list_bracket_end),
    list_bracket_begin: ($) => '{',
    list_bracket_end: ($) => '}',

    part: ($) => PREC.PART(seq($._expr, $.part_bracket_begin, optional($._expr_repeat), $.part_bracket_end)),
    part_bracket_begin: ($) => '[[',
    part_bracket_end: ($) => ']]',

    association: ($) => seq($._expr, $.association_bracket_begin, optional($._expr_repeat), $.association_bracket_end),
    association_bracket_begin: ($) => '<|',
    association_bracket_end: ($) => '|>',

    // https://reference.wolfram.com/language/ref/Function.html
    _function: ($) => choice($.function_anonymous, $.function_arrow),
    function_anonymous: ($) => PREC.FUNCTION_ANONYMOUS(seq($._expr, $.function_operator_anonymous_end)),
    function_arrow: ($) => PREC.FUNCTION_ARROW(seq($._expr, $.function_operator_right_arrow, $._expr)),
    function_operator_anonymous_end: ($) => '&',
    function_operator_right_arrow: ($) => '|->',

    del: ($) => PREC.DEL(seq($.del_operator, $._expr)),
    del_operator: ($) => '∇',

    small_circle: ($) => PREC.SMALL_CIRCLE_REP($, $.small_circle_operator),
    small_circle_operator: ($) => '∘',

    circle_dot: ($) => PREC.CIRCLE_DOT_REP($, $.circle_dot_operator),
    circle_dot_operator: ($) => '⊙',

    non_commutative_multiply: ($) => PREC.NON_COMMUTATIVE_MULTIPLY_REP($, $.non_commutative_multiply_operator),
    non_commutative_multiply_operator: ($) => '**',

    dot: ($) => PREC.DOT_REP($, $.dot_operator),
    dot_operator: ($) => '.',

    backslash: ($) => PREC.BACKSLASH_REP($, $.backslash_operator),
    backslash_operator: ($) => '\\',

    diamond: ($) => PREC.DIAMOND_REP($, $.diamond_operator),
    diamond_operator: ($) => '⋄',

    wedge: ($) => PREC.WEDGE_REP($, $.wedge_operator),
    wedge_operator: ($) => '⋀',

    vee: ($) => PREC.WEDGE_REP($, $.vee_operator),
    vee_operator: ($) => '⋁',

    circle_times: ($) => PREC.CIRCLE_TIMES_REP($, $.circle_times_operator),
    circle_times_operator: ($) => '⊗',

    center_dot: ($) => PREC.CENTER_DOT_REP($, $.center_dot_operator),
    center_dot_operator: ($) => '·',

    times_ast: ($) => PREC.TIMES_AST_REP($, $.times_ast_operator),
    times_ast_operator: ($) => '*',

    times_cross: ($) => PREC.TIMES_AST_REP($, $.times_cross_operator),
    times_cross_operator: ($) => '×',

    star: ($) => PREC.STAR_REP($, $.star_operator),
    star_operator: ($) => '⋆',

    vertical_tilde: ($) => PREC.VERTICAL_TILDE_REP($, $.vertical_tilde_operator),
    vertical_tilde_operator: ($) => '≀',

    coproduct: ($) => PREC.COPRODUCT_REP($, $.coproduct_operator),
    coproduct_operator: ($) => '∐',

    circle_plus: ($) => PREC.CIRCLE_PLUS_REP($, $.circle_plus_operator),
    circle_plus_operator: ($) => '⊕',

    circle_minus: ($) => PREC.CIRCLE_MINUS(seq($._expr, $.circle_minus_operator, $._expr)),
    circle_minus_operator: ($) => '⊖',

    plus: ($) => PREC.PLUS_REP($, $.plus_operator),
    plus_operator: ($) => '+',

    minus: ($) => PREC.MINUS_REP($, $.minus_operator),
    minus_operator: ($) => '-',

    plus_minus: ($) => PREC.PLUS_MINUS(seq($._expr, $.plus_minus_operator, $._expr)),
    plus_minus_operator: ($) => '±',

    negative: ($) => PREC.NEGATIVE(seq($.negative_operator, $._expr)),
    negative_operator: ($) => '-',

    positive: ($) => PREC.POSITIVE(seq($.positive_operator, $._expr)),
    positive_operator: ($) => '+',

    negative_positive: ($) => PREC.NEGATIVE_POSITIVE(seq($.negative_positive_operator, $._expr)),
    negative_positive_operator: ($) => '±',

    per: ($) => PREC.PER(seq($._expr, $.per_operator, $._expr)),
    per_operator: ($) => '/',

    divide: ($) => PREC.DIVIDE(seq($._expr, $.divide_operator, $._expr)),
    divide_operator: ($) => '÷',

    divide_box: ($) => PREC.DIVIDE_BOX(seq($._expr, $.divide_box_operator, $._expr)),
    divide_box_operator: ($) => '\\/',

    // https://reference.wolfram.com/language/ref/Map.html
    map: ($) => PREC.MAP(seq($._expr, $.map_operator, $._expr)),
    map_operator: ($) => '/@',

    map_all: ($) => PREC.MAP_ALL(seq($._expr, $.map_all_operator, $._expr)),
    map_all_operator: ($) => '//@',

    factorial: ($) => PREC.FACTORIAL(seq($._expr, $.factorial_operator)),
    factorial_operator: ($) => '!',

    factorial2: ($) => PREC.FACTORIAL2(seq($._expr, $.factorial2_operator)),
    factorial2_operator: ($) => '!!',

    derivative: ($) => PREC.DERIVATIVE(seq($._expr, $.derivative_operator)),
    derivative_operator: ($) => prec.right(repeat1("'")),

    sqrt: ($) => PREC.SQRT(seq($._expr, $.sqrt_operator)),
    sqrt_operator: ($) => '\\@',

    any_root: ($) => PREC.SQRT(seq($.any_root_operator_left, $._expr, $.any_root_operator_right, $._expr)),
    any_root_operator_left: ($) => '\\@',
    any_root_operator_right: ($) => '\\%',

    power: ($) => PREC.POWER(seq($._expr, $.power_operator, $._expr)),
    power_operator: ($) => '^',

    power_subscript: ($) =>
      PREC.POWER_SUBSCRIPT(
        seq($._expr, $.power_subscript_operator_left, $._expr, $.power_subscript_operator_right, $._expr),
      ),
    power_subscript_operator_left: ($) => '\\^',
    power_subscript_operator_right: ($) => '\\%',

    // https://reference.wolfram.com/language/ref/Apply.html
    apply_atat: ($) => PREC.APPLY_ATAT(seq($._expr, $.apply_atat_operator, $._expr)),
    apply_atat_operator: ($) => '@@',

    // https://reference.wolfram.com/language/ref/Apply.html
    apply_atatat: ($) => PREC.APPLY_ATATAT(seq($._expr, $.apply_atatat_operator, $._expr)),
    apply_atatat_operator: ($) => '@@@',

    blank: ($) => /_(?:[a-zA-Z][a-zA-Z0-9]*)?/,
    blank_sequence: ($) => /__(?:[a-zA-Z][a-zA-Z0-9]*)?/,
    blank_null_sequence: ($) => /___(?:[a-zA-Z][a-zA-Z0-9]*)?/,

    alternatives: ($) => PREC.ALTERNATIVES_REP($, $.alternatives_operator),
    alternatives_operator: ($) => '|',

    string_join: ($) => PREC.STRING_JOIN_REP($, $.string_join_operator),
    string_join_operator: ($) => '<>',

    string: ($) => seq('"', repeat(choice(/[^"\\\n]/, $.string_char_escape, $.string_char_name_escape)), '"'),
    string_char_escape: ($) => choice('\\"', '\\\\', '\\n', '\\r', '\\t', '\\t', '\\v'),
    string_char_name_escape: ($) => seq('\\[', $.string_char_name, ']'),
    string_char_name: ($) => $._upper_identifier,
    // Not supporting.
    // string_embedded_expression_escape: ($) => seq('\\!\\(\\*', ..., '\\)'),

    // https://wltools.github.io/LanguageSpec/Specification/Syntax/Number-representations/
    // Special character input forms are not supported.
    number: ($) =>
      /((([2-9]|[1-2]\d|[3][0-5])\^\^(\w*\.\w+|\w+\.\w*|\w+))|(\d*\.\d+|\d+\.\d*|\d+))((``(\+|-)?(\d*\.\d+|\d+\.\d*|\d+))|(`((\+|-)?(\d*\.\d+|\d+\.\d*|\d+))?))?(\*\^(\+|-)?\d+)?/,

    _lower_identifier: ($) => /[a-z][a-zA-Z0-9]*/,
    _upper_identifier: ($) => /[A-Z][a-zA-Z0-9]*/,
  },
});
