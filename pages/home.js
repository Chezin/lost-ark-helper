import React from 'react';

const App = ()=>{
    return(
        
      <button onClick={()=>{
          dialog.showOpenDialog(
              {
                title:'Open Dialogue',
                message:'First Dialog',
                //pass 'openDirectory' to strictly open directories
                properties: ['openFile']
              }
          ).then(result=>{
            shell.openPath(result.filePaths[0])
            console.log(result.filePaths[0]);
            })
        }}>
          Open Dialog to Select a file
         </button>

    )
}

export default App;