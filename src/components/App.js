import React from 'react'
import { CleanPlugin } from 'webpack';

const App = () => {
 

  return (
    <div id="main">
               {/* Do not remove the main div */}
<ol key="relativeList" id='relativeListItem'>
  <li key="relativeList1" id='relativeListItem1'> Relative 1 -</li>
  <li key="relativeList2" id='relativeListItem2'> Relative 2 -</li>
  <li key="relativeList3" id='relativeListItem3'> Relative 3 -</li>
</ol>
    </div>
  )
}

export default App
