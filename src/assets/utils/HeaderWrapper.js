import Sticky from "react-stickynode";
import {forwardRef} from "react";

const HeaderWrapper = forwardRef(function HeaderWrapper({children}) {
  return (
    <Sticky
      enabled={true}
      top={0}
      bottomBoundary={document.body.scrollHeight}
      activeClass="is-sticky"
    >
      {children}
    </Sticky>
  );
});

export default HeaderWrapper;
