import { Suspense } from "react";
import PreviewPage from "./preiview-component";

const Page = () => {
  return ( 
    <Suspense fallback={<div>Loading...</div>}>
      <PreviewPage />
    </Suspense>
   );
}
 
export default Page;