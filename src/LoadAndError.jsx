/* eslint-disable react/no-children-prop */

import ModelLayout from "./layouts/ModelLayout";
import Text from "./libs/typo/Typography";

const LoadAndError = (props) => {
  const { content, status, error } = props;
  return (
    <>
      {status && <ModelLayout children={<Text text="Loading..." />} />}
      {error && <ModelLayout children={<Text text="Got error..." />} />}
      {!status && !error && content}{" "}
      {/* render the content if every thing fine */}
    </>
  );
};

export default LoadAndError;
