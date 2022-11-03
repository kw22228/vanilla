module.exports = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: true,
    semi: true,
    singleQuote: false,

    /**
     * @template: jsxSingleQuote: <bool>
     * @description: JSX내에서 큰따옴표("") 대신 작은따옴표('')를 사용여부
     * true: 홀따옴표로 사용
     * false: 큰따옴표로 사용
     */
    jsxSingleQuote: false,

    /**
     * @template: trailingComma: "<es5|none|all>"
     * @description: 객체나 배열을 작성하여 데이터를 넣을때, 마지막에 후행쉼표를 넣을지 여부
     * es5: 후행쉼표 제외
     * none: 후행쉼표 없음
     * all: 후행쉼표 포함
     */
    trailingComma: "none",

    /**
     * @template: jsxBracketSameLine: <bool>
     * @description: ">" 다음 줄에 혼자 있는 대신 여러 줄 JSX 요소를 마지막 줄 끝에 넣습니다
     * true: 줄넘김하지 않음
     * false: 줄넘김을 수행
     */
    jsxBracketSameLine: true,

    /**
     * @template: bracketSpacing: <bool>
     * @description: 개체 리터럴에서 대괄호 사이의 공백을 넣을지 여부
     * true: 공백을 넣음 { foo: bar }
     * false: 공백을 제외 {foo: bar}
     */
    bracketSpacing: true,

    /**
     * @template: bracketSpacing: <'always'| 'avoid'>
     * 화살표 함수가 하나의 매개변수를 받을 때 괄호 사용여부
     * always : 괄호 사용
     * avoid : 괄호 제거
     */
    arrowParens: 'avoid',

    // endOfLine: 'auto', // EoF 방식, OS별로 처리 방식이 다름
    // htmlWhitespaceSensitivity: 'css', // HTML 공백 감도 설정
};
