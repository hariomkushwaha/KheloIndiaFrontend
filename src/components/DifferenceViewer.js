import React from "react";
import ReactDiffViewer from "react-diff-viewer";

const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`;
const newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`;

const DifferenceViewer = ({ text1, text2 }) => {
  console.log(typeof text1);
  return text1 !== "" && text2 !== "" ? (
    <ReactDiffViewer
      oldValue={text1}
      newValue={text2}
      splitView={true}
      useDarkTheme
      showDiffOnly
    />
  ) : (
    <div>Please select some text</div>
  );
};
export default DifferenceViewer;
